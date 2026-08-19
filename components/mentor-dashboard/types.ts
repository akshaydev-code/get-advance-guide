export type MentorDashboardTab =
  | 'overview'
  | 'profile'
  | 'requests'
  | 'sessions'
  | 'students'
  | 'earnings'
  | 'messages'
  | 'resources'
  | 'reviews'
  | 'settings';

export interface MentorProfile {
  id: string;
  name: string;
  email: string;
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
  location?: string;
  timezone?: string;
  languages?: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  totalStudentsHelped: number;
  totalHoursMentored: number;
  isPro: boolean;
}

export interface StudentItem {
  id: string;
  name: string;
  email: string;
  avatar: string;
  targetRole: string;
  university: string;
  sessionsCompleted: number;
  lastSessionDate: string;
  lastTopic: string;
  status: 'Active' | 'Completed' | 'Paused';
  bio?: string;
  skills?: string[];
}

export interface MentorRequest {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  studentRole: string;
  studentUniversity: string;
  topic: string;
  message: string;
  goals: string;
  status: 'Pending' | 'Accepted' | 'Declined';
  createdAt: string;
  preferredTime?: string;
}

export interface MentorSession {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  studentRole: string;
  date: string;
  time: string;
  durationMinutes: number;
  topic: string;
  meetLink: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  notes?: string;
  studentRating?: number;
  studentFeedback?: string;
  earnedAmount: number;
}

export interface EarningRecord {
  id: string;
  sessionId: string;
  studentName: string;
  date: string;
  amount: number;
  platformFee: number;
  netPayout: number;
  status: 'Paid' | 'Processing' | 'Pending';
  topic: string;
}

export interface MentorReview {
  id: string;
  studentName: string;
  studentAvatar: string;
  studentRole: string;
  rating: number;
  date: string;
  comment: string;
  sessionTopic: string;
  mentorReply?: string;
  helpfulCount: number;
}

export interface MentorResourceItem {
  id: string;
  title: string;
  category: string;
  type: 'Roadmap' | 'Guide' | 'Cheatsheet' | 'Template';
  readTime: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
  downloads: number;
  createdAt: string;
  isPublished: boolean;
}

export interface MentorChatMessage {
  id: string;
  sender: 'mentor' | 'student';
  text: string;
  timestamp: string;
}

export interface MentorConversation {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  studentRole: string;
  studentCompany?: string;
  isOnline: boolean;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: MentorChatMessage[];
}

export interface MentorNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: 'request' | 'session' | 'earning' | 'review' | 'message';
  targetTab?: MentorDashboardTab;
}

export interface MentorScheduleDay {
  day: string;
  isEnabled: boolean;
  slots: string[];
}
