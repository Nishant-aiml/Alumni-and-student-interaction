export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  current: boolean;
  achievements: string[];
  gpa?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  skills: string[];
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrls: string[];
  liveUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  collaborators: string[];
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'language' | 'tool';
  level: 1 | 2 | 3 | 4 | 5;
  endorsements: {
    userId: string;
    name: string;
    timestamp: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'professional' | 'certification' | 'award';
  imageUrl?: string;
  verificationUrl?: string;
  issuer: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'engagement' | 'skill' | 'achievement' | 'mentor';
  earnedDate: string;
  criteria: string;
}

export interface Connection {
  id: string;
  userId: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  connectionDate: string;
  mutualConnections: number;
}

export interface ActivityUpdate {
  id: string;
  type: 'post' | 'achievement' | 'project' | 'certification' | 'experience' | 'education';
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  imageUrl?: string;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  headline: string;
  bio: string;
  avatarUrl: string;
  coverImageUrl: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    portfolio?: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  badges: Badge[];
  connections: Connection[];
  activityUpdates: ActivityUpdate[];
  profileCompletion: number;
  profileViews: number;
  availability: {
    forMentoring: boolean;
    forJobs: boolean;
    forProjects: boolean;
  };
  preferences: {
    emailNotifications: boolean;
    profileVisibility: 'public' | 'connections' | 'private';
    showEmail: boolean;
    showPhone: boolean;
  };
}
