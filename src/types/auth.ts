export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  bio?: string;
  avatar?: string;
  interests?: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  createdAt: number;
  updatedAt: number;
}

export interface UserProfile extends User {
  posts: number;
  followers: number;
  following: number;
  skills?: string[];
  education?: {
    school: string;
    degree: string;
    year: string;
  }[];
  experience?: {
    company: string;
    position: string;
    duration: string;
  }[];
}

export interface RegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
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
