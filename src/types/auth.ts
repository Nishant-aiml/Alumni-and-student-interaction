export type UserRole = 'student' | 'alumni' | 'admin';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isEmailVerified: boolean;
  profileCompletion: number;
  graduationYear?: number;
  department?: string;
  studentId?: string;
  company?: string;
  position?: string;
  linkedInProfile?: string;
  verifiedDocuments: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  graduationYear?: number;
  department?: string;
  studentId?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
