export type EventType = 'workshop' | 'seminar' | 'networking' | 'hackathon' | 'conference' | 'other';
export type EventFormat = 'in-person' | 'virtual' | 'hybrid';
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
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  format: EventFormat;
  type: EventType;
  maxAttendees?: number;
  registrationLink?: string;
  imageUrl?: string;
  tags: string[];
  hostId: string;
  hostName: string;
  createdAt: Date;
  status: EventStatus;
  attendees: string[];
}

export interface EventFilters {
  search: string;
  types: EventType[];
  formats: EventFormat[];
  dateRange: {
    start: string;
    end: string;
  };
  tags: string[];
}

export interface EventRecommendation {
  event: Event;
  reasons: string[];
  matchScore: number;
  similarEvents: string[];
}
