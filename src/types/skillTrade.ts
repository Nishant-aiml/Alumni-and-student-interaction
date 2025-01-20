export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type TradeStatus = 'pending' | 'active' | 'completed' | 'cancelled';
export type BadgeType = 'achievement' | 'skill' | 'contribution' | 'milestone';

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  level: SkillLevel;
  tags: string[];
  popularity: number;
  endorsements: number;
  verified: boolean;
}

export interface SkillTrade {
  id: string;
  offeredSkill: {
    skillId: string;
    userId: string;
    description: string;
    availability: {
      timeSlots: string[];
      duration: number;
    };
  };
  requestedSkill: {
    skillId: string;
    description: string;
    preferredLevel: SkillLevel;
  };
  status: TradeStatus;
  createdAt: string;
  updatedAt: string;
  participants: {
    offerer: {
      userId: string;
      rating: number;
      completedTrades: number;
    };
    requester?: {
      userId: string;
      rating: number;
      completedTrades: number;
    };
  };
}

export interface TradeReview {
  id: string;
  tradeId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  skills: {
    skillId: string;
    rating: number;
    feedback: string;
  }[];
  createdAt: string;
  helpful: number;
}

export interface Badge {
  id: string;
  type: BadgeType;
  name: string;
  description: string;
  icon: string;
  criteria: {
    type: string;
    value: number;
  };
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedBy: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: {
    skillId: string;
    order: number;
    requiredLevel: SkillLevel;
    estimatedHours: number;
  }[];
  prerequisites: string[];
  resources: {
    type: 'video' | 'article' | 'course' | 'project';
    title: string;
    url: string;
    duration?: number;
  }[];
  completions: number;
  rating: number;
  reviews: number;
  creator: {
    userId: string;
    expertise: string[];
  };
}

export interface SkillTradeFilters {
  search: string;
  categories: string[];
  skillLevels: SkillLevel[];
  availability: {
    days: string[];
    timeRanges: string[];
  };
  location?: {
    type: 'remote' | 'local';
    radius?: number;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  rating?: number;
  verified: boolean;
}

export interface TradeProgress {
  id: string;
  tradeId: string;
  sessions: {
    date: string;
    duration: number;
    topics: string[];
    completed: boolean;
    feedback?: {
      rating: number;
      comment: string;
    };
  }[];
  milestones: {
    title: string;
    description: string;
    completed: boolean;
    completedAt?: string;
  }[];
  resources: {
    title: string;
    type: string;
    url: string;
    shared: string;
  }[];
  notes: {
    author: string;
    content: string;
    timestamp: string;
  }[];
}

export interface SuccessStory {
  id: string;
  title: string;
  content: string;
  author: {
    userId: string;
    name: string;
    avatar: string;
  };
  trade: {
    skills: string[];
    duration: string;
    outcome: string;
  };
  metrics: {
    skillGrowth: number;
    projectsCompleted: number;
    timeInvested: number;
  };
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
  likes: number;
  comments: number;
  featured: boolean;
}
