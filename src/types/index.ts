export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'alumni' | 'student';
  graduationYear?: number;
  industry?: string;
  location?: string;
  bio?: string;
  skills: string[];
  connections: string[];
  tokens: number;
  achievements: Achievement[];
  profileCompletion: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'online' | 'offline' | 'hybrid';
  location?: string;
  category: string;
  attendees: string[];
  image?: string;
}

export interface Story {
  id: string;
  userId: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  date: string;
  likes: number;
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  description: string;
  requirements: string[];
  postedBy: string;
  postedDate: string;
  deadline?: string;
}