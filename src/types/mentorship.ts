export type MentorshipArea = 'career_guidance' | 'technical_skills' | 'leadership' | 'entrepreneurship' | 'industry_specific';
export type MentorshipStatus = 'active' | 'pending' | 'completed' | 'paused';
export type SessionStatus = 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
export type AvailabilitySlot = 'morning' | 'afternoon' | 'evening' | 'flexible';
export type ExpertiseLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface MentorProfile {
  id: string;
  userId: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  bio: string;
  expertise: string[];
  industries: string[];
  skills: {
    name: string;
    level: ExpertiseLevel;
  }[];
  experience: number;
  menteeCount: number;
  rating: number;
  reviewCount: number;
  availability: {
    slots: AvailabilitySlot[];
    timezone: string;
    customHours?: {
      day: string;
      hours: string[];
    }[];
  };
  preferences: {
    menteeLevel: ExpertiseLevel[];
    groupSessions: boolean;
    sessionDuration: number[];
    communicationMode: ('video' | 'chat' | 'email')[];
  };
  achievements: {
    title: string;
    date: string;
    icon: string;
  }[];
}

export interface MenteeProfile {
  id: string;
  userId: string;
  name: string;
  avatarUrl: string;
  currentRole: string;
  company?: string;
  goals: string[];
  interests: string[];
  skills: {
    name: string;
    level: ExpertiseLevel;
  }[];
  preferences: {
    mentorExpertise: string[];
    industries: string[];
    communicationMode: ('video' | 'chat' | 'email')[];
    availability: AvailabilitySlot[];
  };
  previousMentors?: string[];
}

export interface MentorshipMatch {
  id: string;
  mentorId: string;
  menteeId: string;
  status: MentorshipStatus;
  startDate: string;
  endDate?: string;
  goals: string[];
  matchScore: number;
  matchReasons: string[];
  focusAreas: string[];
  milestones: {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'completed';
    dueDate: string;
  }[];
}

export interface MentorshipSession {
  id: string;
  matchId: string;
  status: SessionStatus;
  type: 'one_on_one' | 'group';
  mode: 'video' | 'chat' | 'email';
  scheduledAt: string;
  duration: number;
  agenda: string;
  resources?: {
    title: string;
    type: 'document' | 'link' | 'video';
    url: string;
  }[];
  notes?: {
    content: string;
    createdAt: string;
    createdBy: string;
  }[];
  feedback?: {
    rating: number;
    strengths: string[];
    improvements: string[];
    comments: string;
    givenBy: string;
    givenAt: string;
  };
}

export interface MentorshipMetrics {
  totalSessions: number;
  totalHours: number;
  completedMilestones: number;
  skillsImproved: string[];
  satisfactionScore: number;
  successStories: {
    title: string;
    description: string;
    date: string;
    impact: string;
  }[];
}

export interface MentorshipFilters {
  expertise: string[];
  industries: string[];
  experience: number[];
  availability: AvailabilitySlot[];
  rating: number;
  communicationMode: ('video' | 'chat' | 'email')[];
  search: string;
}
