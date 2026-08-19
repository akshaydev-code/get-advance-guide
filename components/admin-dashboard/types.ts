export type AdminDashboardTab =
  | 'overview'
  | 'mentors'
  | 'students'
  | 'sessions'
  | 'applications'
  | 'financials'
  | 'resources'
  | 'reviews'
  | 'inquiries'
  | 'settings';

export interface AdminMentorItem {
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
  isPopular: boolean;
  status: 'Active' | 'Pending Review' | 'Suspended';
  totalMentees: number;
  totalEarnings: number;
  joinedDate: string;
  bio?: string;
  about?: string;
}

export interface AdminStudentItem {
  id: string;
  name: string;
  email: string;
  avatar: string;
  university: string;
  targetRole: string;
  sessionsCompleted: number;
  isPro: boolean;
  status: 'Active' | 'Suspended';
  joinedDate: string;
  totalSpent: number;
}

export interface AdminSessionItem {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorAvatar: string;
  mentorCompany: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  topic: string;
  date: string;
  time: string;
  durationMinutes: number;
  status: 'Upcoming' | 'Completed' | 'Cancelled' | 'Disputed';
  amount: number;
  platformFee: number;
  meetLink: string;
}

export interface AdminApplicationItem {
  id: string;
  name: string;
  email: string;
  role: string;
  company: string;
  experienceYears: number;
  category: string;
  linkedinUrl: string;
  portfolioUrl?: string;
  coachingStatement: string;
  status: 'Pending' | 'Approved' | 'Declined';
  appliedDate: string;
  proposedRate: number;
}

export interface AdminPayoutRequest {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorAvatar: string;
  mentorCompany: string;
  amount: number;
  payoutMethod: 'Bank Transfer' | 'UPI' | 'Stripe';
  accountDetails: string;
  requestDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface AdminReviewItem {
  id: string;
  mentorName: string;
  mentorCompany: string;
  studentName: string;
  studentAvatar: string;
  rating: number;
  comment: string;
  date: string;
  isFeatured: boolean;
  status: 'Published' | 'Flagged' | 'Hidden';
}

export interface AdminInquiryItem {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  date: string;
  status: 'New' | 'In Progress' | 'Resolved';
  adminReply?: string;
}

export interface AdminResourceItem {
  id: string;
  title: string;
  category: string;
  type: 'Roadmap' | 'Guide' | 'Cheatsheet' | 'Template';
  readTime: string;
  author: string;
  summary: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
  isFeatured: boolean;
  publishedDate: string;
}

export interface AdminActivityItem {
  id: string;
  type: 'signup' | 'booking' | 'payout' | 'application' | 'review' | 'inquiry';
  title: string;
  subtitle: string;
  time: string;
}
