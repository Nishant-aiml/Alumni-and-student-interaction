import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('user');
      const savedToken = localStorage.getItem('token');
      
      if (savedUser && savedToken) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // For now, automatically authenticate any login attempt
      const tempUser = {
        id: '1',
        email,
        firstName: 'Demo',
        lastName: 'User',
        role: 'student' as UserRole,
      };
      
      const token = 'demo-token-' + Date.now(); // Generate a temporary token
      
      setUser(tempUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(tempUser));
      localStorage.setItem('token', token);
      
      // Set session cookie with longer expiration
      document.cookie = `auth_session=${token}; path=/; max-age=86400`; // 24 hours
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData: any) => {
    try {
      // For now, automatically register and authenticate any registration attempt
      const tempUser = {
        id: '1',
        email: userData.email,
        firstName: userData.firstName || 'Demo',
        lastName: userData.lastName || 'User',
        role: userData.role || 'student' as UserRole,
      };
      
      const token = 'demo-token-' + Date.now(); // Generate a temporary token
      
      setUser(tempUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(tempUser));
      localStorage.setItem('token', token);
      
      // Set session cookie with longer expiration
      document.cookie = `auth_session=${token}; path=/; max-age=86400`; // 24 hours
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      document.cookie = 'auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    // For now, just console log the reset password attempt
    console.log('Password reset requested for:', email);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
