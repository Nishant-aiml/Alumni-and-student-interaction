export interface Post {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  content: string;
  title?: string;
  image?: string;
  timestamp: number;
  likes: string[];
  comments: Comment[];
  privacy: 'public' | 'friends';
  isEditing?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  content: string;
  timestamp: number;
  isEditing?: boolean;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  university: string;
  graduationYear: string;
  skills: string[];
  interests: string[];
  photoURL?: string;
}
