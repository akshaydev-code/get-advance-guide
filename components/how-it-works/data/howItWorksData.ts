import { StepItem, FaqItem, ProcessHighlight } from '../types';

export const studentJourneySteps: StepItem[] = [
  {
    number: '01',
    title: 'Create Your Mentee Profile',
    subtitle: 'Define Your Target Engineering Career Goals',
    description: 'Sign up in under 60 seconds. Specify your target companies (FAANG, Unicorns), graduation timeline, current tech stack, and specific preparation areas (System Design, DSA, Frontend, AI/ML).',
    icon: '👤',
    checklist: [
      'Set target job role & dream companies',
      'Select technical focus areas & skills',
      'Upload resume for 1-click mentor review',
      '100% Free registration with no credit card required',
    ],
    mockupType: 'profile',
  },
  {
    number: '02',
    title: 'Discover & Match Verified Mentors',
    subtitle: 'Filter By Domain, Company, Experience & Ratings',
    description: 'Browse hundreds of vetted engineers actively working at Google, Meta, Microsoft, Nvidia, and Amazon. Compare verified reviews, past student testimonials, and hourly session rates.',
    icon: '🔍',
    checklist: [
      'Filter by company, domain, and experience',
      'Read verified student feedback & star ratings',
      'Check real-time slot availability',
      'Direct 1-on-1 chat inquiry with coaches',
    ],
    mockupType: 'filter',
  },
  {
    number: '03',
    title: 'Book a 1-on-1 Live Session',
    subtitle: 'Pick Your Preferred Date & Convenient Time Slot',
    description: 'Select from available 45-minute or 60-minute slots in your local timezone. Securely confirm booking and automatically receive a Google Meet link added to your calendar.',
    icon: '📅',
    checklist: [
      'Instant calendar slot booking with timezone auto-sync',
      'Add custom prep notes & architectural questions',
      'Automated Google Calendar & email reminders',
      'Flexible 24-hour free reschedule policy',
    ],
    mockupType: 'calendar',
  },
  {
    number: '04',
    title: 'Attend Live Call & Accelerate Growth',
    subtitle: 'Receive Actionable Feedback, Roadmaps & Mocks',
    description: 'Join the HD live video room. Conduct realistic mock technical interviews, code architecture reviews, get ATS resume feedback, and receive follow-up notes from your mentor.',
    icon: '🚀',
    checklist: [
      'Live code collaboration & diagram sharing',
      'Detailed post-session scorecards & improvement areas',
      'Curated study roadmaps & cheatsheets',
      'Direct ongoing chat messaging support',
    ],
    mockupType: 'video',
  },
];

export const mentorJourneySteps: StepItem[] = [
  {
    number: '01',
    title: 'Apply as a Verified Coach',
    subtitle: 'Submit Your Experience & Domain Expertise',
    description: 'Join our elite network of engineers from top global companies. Submit your work profile, verify your corporate email or LinkedIn, and set your mentorship bio.',
    icon: '🛡️',
    checklist: [
      'Quick 3-minute application form',
      'Auto-verification for leading tech corporate emails',
      'Highlight your technical background & coaching philosophy',
      'Join top 5% vetted mentor community',
    ],
    mockupType: 'apply',
  },
  {
    number: '02',
    title: 'Set Your Schedule & Hourly Rate',
    subtitle: 'Complete Freedom Over Your Availability & Pricing',
    description: 'Configure your weekly availability matrix. Set your hourly rate ($50 to $200+/hr), decide session durations (45 or 60 mins), and control your booking buffer days.',
    icon: '⚙️',
    checklist: [
      'Set custom hourly rates with 90% payout share',
      'Define recurring weekly slots (e.g. weekends/evenings)',
      'Accept or decline student requests with 1 click',
      'Sync availability with Google Calendar automatically',
    ],
    mockupType: 'schedule',
  },
  {
    number: '03',
    title: 'Host 1-on-1 Video Coaching',
    subtitle: 'Inspire & Empower Next-Gen Tech Talent',
    description: 'Conduct high-impact mock interviews, architecture deep dives, and career strategy calls using our integrated live meeting suite or your preferred tool.',
    icon: '💻',
    checklist: [
      'Integrated HD live video rooms with code editor',
      'In-call chat and screen sharing capability',
      'Provide structured scorecards and mentee feedback',
      'Build long-term mentee relationships',
    ],
    mockupType: 'video',
  },
  {
    number: '04',
    title: 'Receive Guaranteed Payouts',
    subtitle: 'Weekly 90% Revenue Share Direct to Bank / UPI',
    description: 'Track your teaching revenue on the financial dashboard. Request 1-click payouts directly to your local bank account, UPI, or Stripe Express with zero hassle.',
    icon: '💰',
    checklist: [
      'Industry-leading 90% mentor revenue share',
      'Instant payout requests to Bank, UPI, or Stripe',
      'Automated invoicing and tax summaries',
      'Earn $1,000+ / month doing 4 hours a week',
    ],
    mockupType: 'payout',
  },
];

export const processHighlights: ProcessHighlight[] = [
  {
    title: 'Personalized AI Matching',
    desc: 'Our intelligent algorithms pair you with mentors based on your exact target company, tech stack, and career goals.',
    icon: '⚡',
    metric: '98% Match Rate',
  },
  {
    title: '1-Click Instant Booking',
    desc: 'Real-time calendar synchronization eliminates email ping-pong. Pick a slot, confirm, and receive instant meet links.',
    icon: '📅',
    metric: '< 60 Seconds',
  },
  {
    title: '100% Verified Top Mentors',
    desc: 'Every single mentor is manually verified for current employment at leading companies like Google, Microsoft, Meta, and Nvidia.',
    icon: '🛡️',
    metric: 'FAANG / Unicorns',
  },
  {
    title: 'Proven Placement Impact',
    desc: '94% of mentees report clearing their target technical interview rounds within 90 days of structured 1-on-1 coaching.',
    icon: '📈',
    metric: '94% Placement',
  },
];

export const howItWorksFaqs: FaqItem[] = [
  {
    id: 'faq_1',
    category: 'Booking',
    question: 'How do I book a 1-on-1 session with a mentor?',
    answer: 'Simply browse our Find Mentors page, filter by domain (e.g. Web Dev, System Design, AI/ML), review their profile and verified ratings, click "Book Session", select a convenient date and time slot, and confirm!',
  },
  {
    id: 'faq_2',
    category: 'Booking',
    question: 'How do online mentorship video calls work?',
    answer: 'Once booked, a session is automatically added to both your and your mentor’s dashboard with a direct meeting room link and Google Calendar invite. At the scheduled time, click "Launch Meeting" from your dashboard.',
  },
  {
    id: 'faq_3',
    category: 'Pricing & Payouts',
    question: 'How much does mentorship cost?',
    answer: 'Mentors set their own hourly rates based on seniority, typically ranging from $40 to $90/hour. All resources, roadmaps, and cheatsheets on the platform are 100% free.',
  },
  {
    id: 'faq_4',
    category: 'Booking',
    question: 'What if I need to reschedule or cancel a session?',
    answer: 'You can reschedule or cancel any session free of charge up to 24 hours before the scheduled time directly from your Student Dashboard.',
  },
  {
    id: 'faq_5',
    category: 'Mentors',
    question: 'How can I become a mentor on GetAdvanceGuide?',
    answer: 'If you have 2+ years of experience in software engineering, data science, product design, or cloud architecture at a reputed company, visit our "Become a Mentor" page to apply. Verified coaches earn a 90% revenue share.',
  },
  {
    id: 'faq_6',
    category: 'General',
    question: 'Can I get a mock interview with specific company questions?',
    answer: 'Yes! When booking, you can specify your target company (e.g. Google L4 Frontend, Amazon SDE-2 System Design, Meta E5 ML) in the prep notes, and your mentor will tailor the mock interview accordingly.',
  },
];
