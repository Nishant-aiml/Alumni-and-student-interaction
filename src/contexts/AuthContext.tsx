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
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
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
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile
      await updateProfile(user, {
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
      throw new Error(error.message);
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

  const value = {
    currentUser,
    userData,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
