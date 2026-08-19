export type UserPersona = 'student' | 'mentor';

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  checklist: string[];
  mockupType: 'profile' | 'filter' | 'calendar' | 'video' | 'apply' | 'schedule' | 'payout';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Booking' | 'Mentors' | 'Pricing & Payouts';
}

export interface ProcessHighlight {
  title: string;
  desc: string;
  icon: string;
  metric: string;
}
