import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile as updateFirebaseProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

type UserType = 'student' | 'mentor' | 'alumni';

interface UserData {
  uid: string;
  email: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userType: UserType;
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
  bio?: string;
  location?: string;
  company?: string;
  position?: string;
  website?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userData: UserData | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    userType: UserType;
  }) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (data: Partial<UserData>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserData(userDoc.data() as UserData);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUserData(null);
      }
      
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async ({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    userType
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    userType: UserType;
  }) => {
    try {
      // Validate input
      if (!email || !password || !firstName || !lastName || !phoneNumber || !userType) {
        throw new Error('All fields are required');
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Create user
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile
      await updateFirebaseProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      // Create user document in Firestore
      const userData: UserData = {
        uid: user.uid,
        email: user.email,
        firstName,
        lastName,
        phoneNumber,
        userType,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await setDoc(doc(db, 'users', user.uid), {
        ...userData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      setUserData(userData);
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please try logging in instead.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      } else if (error.code === 'auth/operation-not-allowed') {
        throw new Error('Email/password registration is not enabled. Please contact support.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('Please choose a stronger password (at least 6 characters).');
      } else {
        throw new Error(error.message || 'Failed to register. Please try again.');
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      // Check if user document exists
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Create new user document if it doesn't exist
        const names = user.displayName?.split(' ') || ['', ''];
        const userData: UserData = {
          uid: user.uid,
          email: user.email,
          firstName: names[0],
          lastName: names.slice(1).join(' '),
          phoneNumber: user.phoneNumber || '',
          userType: 'student', // Default for Google sign-in
          createdAt: new Date(),
          updatedAt: new Date()
        };

        await setDoc(userDocRef, {
          ...userData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });

        setUserData(userData);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const updateUserProfile = async (data: Partial<UserData>) => {
    if (!currentUser) throw new Error('No user logged in');

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      
      // Update Firestore
      await updateDoc(userDocRef, {
        ...data,
        updatedAt: serverTimestamp()
      });

      // Update display name if provided
      if (data.firstName || data.lastName) {
        const newDisplayName = `${data.firstName || userData?.firstName} ${data.lastName || userData?.lastName}`;
        await updateFirebaseProfile(currentUser, {
          displayName: newDisplayName
        });
      }

      // Update local state
      if (userData) {
        setUserData({
          ...userData,
          ...data,
          updatedAt: new Date()
        });
      }
    } catch (error: any) {
      console.error('Error updating profile:', error);
      throw new Error(error.message || 'Failed to update profile');
    }
  };

  const value = {
    currentUser,
    userData,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout,
    resetPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
