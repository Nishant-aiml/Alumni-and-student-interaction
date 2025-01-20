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

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // For now, automatically authenticate any login attempt
    const tempUser = {
      id: '1',
      email,
      firstName: 'Demo',
      lastName: 'User',
      role: 'student' as UserRole,
    };
    
    setUser(tempUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(tempUser));
  };

  const register = async (userData: any) => {
    // For now, automatically register and authenticate any registration attempt
    const tempUser = {
      id: '1',
      email: userData.email,
      firstName: userData.firstName || 'Demo',
      lastName: userData.lastName || 'User',
      role: userData.role || 'student' as UserRole,
    };
    
    setUser(tempUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(tempUser));
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const resetPassword = async (email: string) => {
    // For now, just console log the reset password attempt
    console.log('Password reset requested for:', email);
  };

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
