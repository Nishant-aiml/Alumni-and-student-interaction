export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  createdBy: {
    id: string;
    name: string;
    avatar: string;
  };
  team: TeamMember[];
  votes: number;
  status: 'ideation' | 'inProgress' | 'completed';
  timeline: {
    startDate: Date;
    milestones: Milestone[];
    endDate?: Date;
  };
  resources: Resource[];
  feedback: Feedback[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  joinedAt: Date;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'inProgress' | 'completed';
  assignedTo: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'link' | 'video' | 'code';
  url: string;
  description: string;
  addedBy: string;
  addedAt: Date;
}

export interface Feedback {
  id: string;
  content: string;
  rating: number;
  givenBy: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: Date;
  category: 'general' | 'technical' | 'design' | 'business';
}

export interface ResourceLibraryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'template' | 'tool' | 'case-study';
  content: string;
  attachments: string[];
  author: {
    id: string;
    name: string;
    expertise: string[];
  };
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  views: number;
  downloads: number;
  rating: number;
}
