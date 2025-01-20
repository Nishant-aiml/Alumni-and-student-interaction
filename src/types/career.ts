export type JobType = 'full_time' | 'part_time' | 'contract' | 'internship' | 'remote';
export type ExperienceLevel = 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
export type ApplicationStatus = 'draft' | 'submitted' | 'in_review' | 'interview' | 'offer' | 'rejected';
export type InternshipDuration = '3_months' | '6_months' | '1_year';

export interface Job {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    logo: string;
    location: string;
    industry: string;
    size: string;
    website: string;
  };
  type: JobType;
  location: string;
  remote: boolean;
  description: string;
  requirements: string[];
  responsibilities: string[];
  experienceLevel: ExperienceLevel;
  skills: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
    period: 'yearly' | 'monthly';
  };
  benefits: string[];
  postedDate: string;
  deadline: string;
  applicants: number;
  matchScore?: number;
  matchReasons?: string[];
}

export interface Internship extends Omit<Job, 'type'> {
  duration: InternshipDuration;
  stipend: {
    amount: number;
    currency: string;
    period: 'monthly';
  };
  mentorship: boolean;
  convertible: boolean;
  projects: string[];
  learningOutcomes: string[];
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  status: ApplicationStatus;
  resume: {
    url: string;
    version: number;
  };
  coverLetter?: {
    url: string;
    version: number;
  };
  submissionDate: string;
  lastUpdated: string;
  interviews?: {
    round: number;
    type: string;
    scheduledAt: string;
    feedback?: string;
    status: 'scheduled' | 'completed' | 'cancelled';
  }[];
  notes?: string;
  timeline: {
    status: ApplicationStatus;
    date: string;
    notes?: string;
  }[];
}

export interface Resume {
  id: string;
  userId: string;
  version: number;
  title: string;
  content: {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
      location: string;
      linkedin?: string;
      github?: string;
      portfolio?: string;
    };
    summary: string;
    experience: {
      company: string;
      title: string;
      location: string;
      startDate: string;
      endDate?: string;
      current: boolean;
      highlights: string[];
    }[];
    education: {
      institution: string;
      degree: string;
      field: string;
      location: string;
      startDate: string;
      endDate: string;
      gpa?: number;
      highlights?: string[];
    }[];
    skills: {
      category: string;
      items: string[];
    }[];
    projects: {
      name: string;
      description: string;
      url?: string;
      technologies: string[];
      highlights: string[];
    }[];
    certifications?: {
      name: string;
      issuer: string;
      date: string;
      url?: string;
    }[];
    awards?: {
      title: string;
      issuer: string;
      date: string;
      description: string;
    }[];
  };
  lastUpdated: string;
  aiSuggestions?: {
    type: 'improvement' | 'addition' | 'removal';
    section: string;
    suggestion: string;
    reason: string;
  }[];
}

export interface CareerProfile {
  id: string;
  userId: string;
  preferences: {
    jobTypes: JobType[];
    locations: string[];
    industries: string[];
    roles: string[];
    salary: {
      min: number;
      currency: string;
    };
    remote: boolean;
    relocation: boolean;
  };
  skills: {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    endorsed: number;
  }[];
  interests: string[];
  availability: {
    immediate: boolean;
    noticePeriod?: number;
  };
  visibility: {
    profile: 'public' | 'private' | 'alumni_only';
    salary: boolean;
    currentEmployer: boolean;
  };
}

export interface InterviewPrep {
  id: string;
  userId: string;
  jobId: string;
  company: string;
  role: string;
  resources: {
    type: 'question' | 'article' | 'video' | 'exercise';
    title: string;
    content: string;
    url?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    category: string;
  }[];
  practiceQuestions: {
    question: string;
    idealAnswer: string;
    tips: string[];
    userAnswer?: string;
    feedback?: string;
  }[];
  mockInterviews: {
    date: string;
    duration: number;
    interviewer: string;
    type: string;
    feedback: string;
    rating: number;
    recording?: string;
  }[];
  notes: string;
}

export interface CareerFilters {
  search: string;
  types: JobType[];
  locations: string[];
  remote: boolean;
  experience: ExperienceLevel[];
  skills: string[];
  salary: {
    min?: number;
    max?: number;
  };
  companies: string[];
  postedWithin: number; // days
}
