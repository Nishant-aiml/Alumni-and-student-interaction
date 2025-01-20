export interface AlumniFilters {
  search: string;
  batch: number[];
  industries: string[];
  skills: string[];
  locations: string[];
  roles: string[];
  availability: {
    forMentoring: boolean;
    forJobs: boolean;
    forProjects: boolean;
  };
  sortBy: 'relevance' | 'name' | 'batch' | 'connections' | 'activity';
}

export interface AlumniStats {
  totalAlumni: number;
  totalCompanies: number;
  totalCountries: number;
  topIndustries: { name: string; count: number }[];
  topSkills: { name: string; count: number }[];
  batchDistribution: { year: number; count: number }[];
}

export interface AlumniMapData {
  location: string;
  coordinates: [number, number];
  alumniCount: number;
  companies: string[];
}

export interface CompanyInsight {
  name: string;
  logo: string;
  industry: string;
  alumniCount: number;
  roles: string[];
  locations: string[];
  recentHires: {
    name: string;
    avatarUrl: string;
    role: string;
    year: number;
  }[];
}

export interface AlumniGroup {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl: string;
  category: 'industry' | 'interest' | 'batch' | 'location';
  recentActivities: {
    type: 'post' | 'event' | 'discussion';
    content: string;
    timestamp: string;
  }[];
}

export interface AlumniRecommendation {
  id: string;
  name: string;
  avatarUrl: string;
  headline: string;
  connectionDegree: number;
  mutualConnections: number;
  reasonForRecommendation: string[];
  skills: string[];
  currentRole: string;
  company: string;
}
