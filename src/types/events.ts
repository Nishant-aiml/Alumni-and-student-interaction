export type EventType = 'workshop' | 'meetup' | 'seminar' | 'career_fair' | 'networking';
export type EventFormat = 'in_person' | 'virtual' | 'hybrid';
export type EventStatus = 'upcoming' | 'ongoing' | 'past' | 'cancelled';
export type RSVPStatus = 'attending' | 'maybe' | 'not_attending' | 'waitlist';

export interface EventSpeaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string;
}

export interface EventVenue {
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates?: [number, number];
  virtualLink?: string;
  joinInstructions?: string;
}

export interface EventSession {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  speakers: EventSpeaker[];
  roomName?: string;
  virtualLink?: string;
}

export interface EventRegistration {
  id: string;
  userId: string;
  eventId: string;
  status: RSVPStatus;
  registrationDate: string;
  ticketType: string;
  checkedIn: boolean;
  checkinTime?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  format: EventFormat;
  status: EventStatus;
  startDate: string;
  endDate: string;
  timezone: string;
  venue: EventVenue;
  coverImage: string;
  capacity: number;
  registeredCount: number;
  waitlistCount: number;
  speakers: EventSpeaker[];
  sessions: EventSession[];
  organizers: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  sponsors?: {
    id: string;
    name: string;
    logoUrl: string;
    website: string;
    tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  }[];
  tags: string[];
  requiredInfo: {
    resume?: boolean;
    portfolio?: boolean;
    linkedin?: boolean;
    dietaryPreferences?: boolean;
    specialAccommodations?: boolean;
  };
}

export interface EventFilters {
  search: string;
  types: EventType[];
  formats: EventFormat[];
  dateRange: {
    start: string;
    end: string;
  };
  location?: string;
  tags: string[];
}

export interface EventRecommendation {
  event: Event;
  reasons: string[];
  matchScore: number;
  similarEvents: string[];
}
