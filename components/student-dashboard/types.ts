export type DashboardTab =
  | 'dashboard'
  | 'find-mentors'
  | 'requests'
  | 'my-mentors'
  | 'sessions'
  | 'messages'
  | 'resources'
  | 'profile'
  | 'settings';

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  role: 'student';
  avatar: string;
  title: string;
  bio: string;
  phone: string;
  location: string;
  timezone: string;
  university: string;
  graduationYear: string;
  targetRole: string;
  skills: string[];
  dreamCompanies: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    portfolio: string;
    twitter: string;
  };
  isPro: boolean;
  joinedDate: string;
}

export interface MentorItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  category: string;
  skills: string[];
  rating: number;
  reviews: number;
  exp: string;
  experienceYears: number;
  hourlyRate: number;
  available: boolean;
  bio: string;
  about: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  isBookmarked?: boolean;
}

export interface MentorshipRequest {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorRole: string;
  mentorCompany: string;
  mentorImage: string;
  topic: string;
  message: string;
  goals: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
  createdAt: string;
  responseNote?: string;
}

export interface SessionItem {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorRole: string;
  mentorCompany: string;
  mentorImage: string;
  date: string; // e.g. "2026-08-25"
  time: string; // e.g. "10:00 AM"
  durationMinutes: number;
  topic: string;
  meetLink: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  notes?: string;
  ratingGiven?: number;
  feedbackGiven?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'mentor';
  text: string;
  timestamp: string;
  attachmentUrl?: string;
  attachmentName?: string;
}

export interface Conversation {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorRole: string;
  mentorCompany: string;
  mentorAvatar: string;
  isOnline: boolean;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: ChatMessage[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  type: 'Roadmap' | 'Guide' | 'Cheatsheet' | 'Video Course' | 'Template';
  readTime: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  author: string;
  summary: string;
  content: string;
  tags: string[];
  isBookmarked: boolean;
  views: number;
  likes: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: 'session' | 'request' | 'message' | 'system';
  targetTab?: DashboardTab;
}

export interface ActivityItem {
  id: string;
  type: 'request' | 'session' | 'message' | 'resource' | 'profile';
  title: string;
  subtitle: string;
  time: string;
}

export interface GoalItem {
  id: string;
  title: string;
  category: string;
  isCompleted: boolean;
}
