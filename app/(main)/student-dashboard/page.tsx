"use client";

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, Search, MessageSquare, Users,
  Calendar, BookOpen, UserCircle, Settings, LogOut,
  Bell, ChevronDown, ArrowRight, Star, Heart,
  Clock, CheckCircle2, History, Menu, X, Sparkles, Shield
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  DashboardTab, StudentProfile, MentorItem, MentorshipRequest,
  SessionItem, Conversation, ResourceItem, NotificationItem,
  ActivityItem, GoalItem
} from '@/components/student-dashboard/types';

import {
  initialStudentProfile, initialMentorsList, initialRequests,
  initialSessions, initialConversations, initialResources,
  initialNotifications, initialActivities, initialGoals
} from '@/components/student-dashboard/data/mockStudentData';

// Tab Components
import OverviewTab from '@/components/student-dashboard/tabs/OverviewTab';
import FindMentorsTab from '@/components/student-dashboard/tabs/FindMentorsTab';
import RequestsTab from '@/components/student-dashboard/tabs/RequestsTab';
import MyMentorsTab from '@/components/student-dashboard/tabs/MyMentorsTab';
import SessionsTab from '@/components/student-dashboard/tabs/SessionsTab';
import MessagesTab from '@/components/student-dashboard/tabs/MessagesTab';
import ResourcesTab from '@/components/student-dashboard/tabs/ResourcesTab';
import ProfileTab from '@/components/student-dashboard/tabs/ProfileTab';
import SettingsTab from '@/components/student-dashboard/tabs/SettingsTab';

// Modals & Drawers
import SendRequestModal from '@/components/student-dashboard/modals/SendRequestModal';
import BookSessionModal from '@/components/student-dashboard/modals/BookSessionModal';
import MentorProfileModal from '@/components/student-dashboard/modals/MentorProfileModal';
import RateMentorModal from '@/components/student-dashboard/modals/RateMentorModal';
import ReadResourceModal from '@/components/student-dashboard/modals/ReadResourceModal';
import LiveMeetModal from '@/components/student-dashboard/modals/LiveMeetModal';
import UpgradeProModal from '@/components/student-dashboard/modals/UpgradeProModal';
import NotificationDrawer from '@/components/student-dashboard/modals/NotificationDrawer';

export default function StudentDashboardPage() {
  const router = useRouter();

  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState<DashboardTab>('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Global Dashboard Data States (Loaded from localStorage on client)
  const [profile, setProfile] = useState<StudentProfile>(initialStudentProfile);
  const [mentors, setMentors] = useState<MentorItem[]>(initialMentorsList);
  const [requests, setRequests] = useState<MentorshipRequest[]>(initialRequests);
  const [sessions, setSessions] = useState<SessionItem[]>(initialSessions);
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [resources, setResources] = useState<ResourceItem[]>(initialResources);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [activities, setActivities] = useState<ActivityItem[]>(initialActivities);
  const [goals, setGoals] = useState<GoalItem[]>(initialGoals);

  // Active Chat Selection for Direct Jumps
  const [activeChatMentorId, setActiveChatMentorId] = useState<string | null>(null);

  // Active Modals State
  const [sendRequestModalMentor, setSendRequestModalMentor] = useState<MentorItem | null>(null);
  const [bookSessionModalMentor, setBookSessionModalMentor] = useState<MentorItem | null>(null);
  const [profileModalMentor, setProfileModalMentor] = useState<MentorItem | null>(null);
  const [rateSessionItem, setRateSessionItem] = useState<SessionItem | null>(null);
  const [readResourceItem, setReadResourceItem] = useState<ResourceItem | null>(null);
  const [liveMeetSession, setLiveMeetSession] = useState<SessionItem | null>(null);
  const [isUpgradeProOpen, setIsUpgradeProOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);

  // Global Search in Header
  const [headerSearch, setHeaderSearch] = useState('');

  // Fetch real mentors from API if available to complement seed data
  useEffect(() => {
    async function fetchLiveMentors() {
      try {
        const res = await fetch('/api/mentors');
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.data) && data.data.length > 0) {
            // Map live DB mentors into MentorItem shape
            const liveMapped: MentorItem[] = data.data.map((m: any, idx: number) => ({
              id: m._id || `db_m_${idx}`,
              name: m.name,
              role: m.role,
              company: m.company || 'Tech Leader',
              image: m.image,
              category: m.category || 'Web Development',
              skills: m.skills || ['React', 'Next.js'],
              rating: m.rating || 4.9,
              reviews: m.reviews || 50,
              exp: m.exp || '4+ years',
              experienceYears: m.experienceYears || 4,
              hourlyRate: m.hourlyRate || 50,
              available: m.available !== false,
              bio: m.bio || m.about || 'Experienced mentor',
              about: m.about || m.bio || 'Passionate about engineering excellence.',
              socialLinks: m.socialLinks || {},
              isBookmarked: false,
            }));
            
            // Merge unique mentors
            setMentors((prev) => {
              const existingNames = new Set(prev.map(p => p.name.toLowerCase()));
              const filteredNew = liveMapped.filter(m => !existingNames.has(m.name.toLowerCase()));
              return [...prev, ...filteredNew];
            });
          }
        }
      } catch (err) {
        console.log('Mentors loaded from local seed:', err);
      }
    }

    fetchLiveMentors();
  }, []);

  // Load / Save persistent client state & sync logged-in auth user
  useEffect(() => {
    async function syncAuthUserAndData() {
      try {
        const savedProfile = localStorage.getItem('gag_student_profile');
        if (savedProfile) setProfile(JSON.parse(savedProfile));

        const savedRequests = localStorage.getItem('gag_student_requests');
        if (savedRequests) setRequests(JSON.parse(savedRequests));

        const savedSessions = localStorage.getItem('gag_student_sessions');
        if (savedSessions) setSessions(JSON.parse(savedSessions));

        const savedConversations = localStorage.getItem('gag_student_conversations');
        if (savedConversations) setConversations(JSON.parse(savedConversations));

        const savedGoals = localStorage.getItem('gag_student_goals');
        if (savedGoals) setGoals(JSON.parse(savedGoals));

        // Check active session from /api/auth/me
        const authRes = await fetch('/api/auth/me');
        if (authRes.ok) {
          const authData = await authRes.json();
          if (authData.success && authData.user) {
            setProfile((prev) => {
              const updated = {
                ...prev,
                id: authData.user.id || prev.id,
                name: authData.user.name || prev.name,
                email: authData.user.email || prev.email,
                role: authData.user.role || prev.role,
              };
              try {
                localStorage.setItem('gag_student_profile', JSON.stringify(updated));
                localStorage.setItem('gag_user', JSON.stringify(authData.user));
              } catch {}
              return updated;
            });
          }
        }
      } catch (e) {
        console.warn('Storage/Auth sync initialized');
      }
    }

    syncAuthUserAndData();
  }, []);

  // Sync back to localStorage helpers
  const saveProfileData = (updated: StudentProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('gag_student_profile', JSON.stringify(updated));
    } catch {}
  };

  const saveRequestsData = (updated: MentorshipRequest[]) => {
    setRequests(updated);
    try {
      localStorage.setItem('gag_student_requests', JSON.stringify(updated));
    } catch {}
  };

  const saveSessionsData = (updated: SessionItem[]) => {
    setSessions(updated);
    try {
      localStorage.setItem('gag_student_sessions', JSON.stringify(updated));
    } catch {}
  };

  const saveConversationsData = (updated: Conversation[]) => {
    setConversations(updated);
    try {
      localStorage.setItem('gag_student_conversations', JSON.stringify(updated));
    } catch {}
  };

  const saveGoalsData = (updated: GoalItem[]) => {
    setGoals(updated);
    try {
      localStorage.setItem('gag_student_goals', JSON.stringify(updated));
    } catch {}
  };

  // Handlers for Request Creation
  const handleCreateRequest = (newReq: Omit<MentorshipRequest, 'id' | 'createdAt'>) => {
    const created: MentorshipRequest = {
      ...newReq,
      id: `req_${Date.now()}`,
      createdAt: 'Just now',
    };
    const updated = [created, ...requests];
    saveRequestsData(updated);

    // Add activity
    setActivities((prev) => [
      {
        id: `act_${Date.now()}`,
        type: 'request',
        title: 'Mentorship Request Sent',
        subtitle: `Sent request to ${created.mentorName} for ${created.topic}`,
        time: 'Just now',
      },
      ...prev,
    ]);

    // Add notification
    setNotifications((prev) => [
      {
        id: `notif_${Date.now()}`,
        title: 'Request Sent',
        message: `Your mentorship request to ${created.mentorName} is pending review.`,
        time: 'Just now',
        isRead: false,
        type: 'request',
        targetTab: 'requests',
      },
      ...prev,
    ]);
  };

  const handleCancelRequest = (requestId: string) => {
    const updated = requests.filter((r) => r.id !== requestId);
    saveRequestsData(updated);
  };

  const handleResendRequest = (requestId: string) => {
    const updated = requests.map((r) =>
      r.id === requestId ? { ...r, status: 'Pending' as const, createdAt: 'Just now' } : r
    );
    saveRequestsData(updated);
  };

  // Handlers for Session Booking
  const handleBookSession = (newSess: Omit<SessionItem, 'id' | 'status'>) => {
    const created: SessionItem = {
      ...newSess,
      id: `sess_${Date.now()}`,
      status: 'Upcoming',
    };
    const updated = [created, ...sessions];
    saveSessionsData(updated);

    // Add activity
    setActivities((prev) => [
      {
        id: `act_${Date.now()}`,
        type: 'session',
        title: '1-on-1 Session Scheduled',
        subtitle: `${created.topic} with ${created.mentorName} on ${created.date} at ${created.time}`,
        time: 'Just now',
      },
      ...prev,
    ]);

    // Add notification
    setNotifications((prev) => [
      {
        id: `notif_${Date.now()}`,
        title: 'Session Confirmed! 📅',
        message: `Your call with ${created.mentorName} is confirmed for ${created.date}, ${created.time}.`,
        time: 'Just now',
        isRead: false,
        type: 'session',
        targetTab: 'sessions',
      },
      ...prev,
    ]);
  };

  const handleCancelSession = (sessionId: string) => {
    const updated = sessions.map((s) =>
      s.id === sessionId ? { ...s, status: 'Cancelled' as const } : s
    );
    saveSessionsData(updated);
  };

  const handleRescheduleSession = (sessionId: string, newDate: string, newTime: string) => {
    const updated = sessions.map((s) =>
      s.id === sessionId ? { ...s, date: newDate, time: newTime, status: 'Upcoming' as const } : s
    );
    saveSessionsData(updated);
  };

  const handleRateSession = (sessionId: string, rating: number, feedback: string) => {
    const updated = sessions.map((s) =>
      s.id === sessionId
        ? { ...s, ratingGiven: rating, feedbackGiven: feedback }
        : s
    );
    saveSessionsData(updated);
  };

  // Handlers for Messaging
  const handleSendMessage = (conversationId: string, text: string) => {
    const newMsg = {
      id: `msg_${Date.now()}`,
      sender: 'student' as const,
      text,
      timestamp: 'Just now',
    };

    const updated = conversations.map((conv) => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          lastMessage: text,
          lastMessageTime: 'Just now',
          messages: [...conv.messages, newMsg],
        };
      }
      return conv;
    });

    saveConversationsData(updated);

    // Mentor auto-reply simulation
    setTimeout(() => {
      const activeConv = updated.find((c) => c.id === conversationId);
      if (!activeConv) return;

      const mentorReplyText = `Thanks for your message Ankit! I have noted down your points and will review them shortly.`;
      const mentorReplyMsg = {
        id: `msg_rep_${Date.now()}`,
        sender: 'mentor' as const,
        text: mentorReplyText,
        timestamp: 'Just now',
      };

      const finalConvs = updated.map((c) => {
        if (c.id === conversationId) {
          return {
            ...c,
            lastMessage: mentorReplyText,
            lastMessageTime: 'Just now',
            messages: [...c.messages, mentorReplyMsg],
          };
        }
        return c;
      });

      saveConversationsData(finalConvs);

      // Notification
      setNotifications((prev) => [
        {
          id: `notif_${Date.now()}`,
          title: `New reply from ${activeConv.mentorName}`,
          message: `"${mentorReplyText}"`,
          time: 'Just now',
          isRead: false,
          type: 'message',
          targetTab: 'messages',
        },
        ...prev,
      ]);
    }, 2500);
  };

  const handleStartMessageWithMentor = (mentorId: string) => {
    // Check if conversation exists
    const existing = conversations.find((c) => c.mentorId === mentorId);
    if (!existing) {
      const mentorObj = mentors.find((m) => m.id === mentorId);
      if (mentorObj) {
        const newConv: Conversation = {
          id: `conv_${Date.now()}`,
          mentorId: mentorObj.id,
          mentorName: mentorObj.name,
          mentorRole: mentorObj.role,
          mentorCompany: mentorObj.company,
          mentorAvatar: mentorObj.image,
          isOnline: mentorObj.available,
          lastMessage: 'Conversation started.',
          lastMessageTime: 'Just now',
          unreadCount: 0,
          messages: [
            {
              id: `msg_init_${Date.now()}`,
              sender: 'mentor',
              text: `Hello Ankit! How can I help you today?`,
              timestamp: 'Just now',
            },
          ],
        };
        saveConversationsData([newConv, ...conversations]);
      }
    }
    setActiveChatMentorId(mentorId);
    setActiveTab('messages');
  };

  // Handlers for Bookmarking
  const handleToggleMentorBookmark = (mentorId: string) => {
    setMentors((prev) =>
      prev.map((m) => (m.id === mentorId ? { ...m, isBookmarked: !m.isBookmarked } : m))
    );
  };

  const handleToggleResourceBookmark = (resourceId: string) => {
    setResources((prev) =>
      prev.map((r) =>
        r.id === resourceId ? { ...r, isBookmarked: !r.isBookmarked } : r
      )
    );
  };

  // Handlers for Goals
  const handleToggleGoal = (goalId: string) => {
    const updated = goals.map((g) =>
      g.id === goalId ? { ...g, isCompleted: !g.isCompleted } : g
    );
    saveGoalsData(updated);
  };

  const handleAddGoal = (title: string, category: string) => {
    const newGoal: GoalItem = {
      id: `goal_${Date.now()}`,
      title,
      category,
      isCompleted: false,
    };
    const updated = [...goals, newGoal];
    saveGoalsData(updated);
  };

  const handleDeleteGoal = (goalId: string) => {
    const updated = goals.filter((g) => g.id !== goalId);
    saveGoalsData(updated);
  };

  // Reset Demo Data
  const handleResetData = () => {
    try {
      localStorage.removeItem('gag_student_profile');
      localStorage.removeItem('gag_student_requests');
      localStorage.removeItem('gag_student_sessions');
      localStorage.removeItem('gag_student_conversations');
      localStorage.removeItem('gag_student_goals');
    } catch {}

    setProfile(initialStudentProfile);
    setMentors(initialMentorsList);
    setRequests(initialRequests);
    setSessions(initialSessions);
    setConversations(initialConversations);
    setResources(initialResources);
    setNotifications(initialNotifications);
    setActivities(initialActivities);
    setGoals(initialGoals);
    alert('Dashboard reset to initial demo data!');
  };

  // Logout Handler
  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out?')) {
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
      } catch {}
      localStorage.removeItem('gag_user');
      window.dispatchEvent(new Event('storage'));
      router.push('/login');
    }
  };

  // Unread counts for badges
  const unreadMessagesCount = conversations.reduce((acc, c) => acc + c.unreadCount, 0);
  const unreadNotifsCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col text-gray-800 font-sans antialiased">
      {/* App Container */}
      <div className="flex flex-grow w-full max-w-[1700px] mx-auto relative">
        {/* ===================== SIDEBAR (Desktop & Mobile Drawer) ===================== */}
        <aside
          className={`fixed lg:sticky top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col justify-between z-40 transition-transform duration-300 ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="flex flex-col h-full justify-between">
            {/* Top Logo & Brand */}
            <div>
              <div className="p-6 flex items-center justify-between border-b border-gray-50">
                <Link href="/" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md shadow-violet-200">
                    AG
                  </div>
                  <div>
                    <span className="text-base font-extrabold text-gray-900 tracking-tight block leading-none">
                      GetAdvance<span className="text-violet-600">Guide</span>
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Student Workspace
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="lg:hidden p-1 text-gray-400 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Navigation Items */}
              <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-280px)]">
                <SidebarNavLink
                  icon={<LayoutDashboard size={18} />}
                  label="Dashboard"
                  active={activeTab === 'dashboard'}
                  onClick={() => {
                    setActiveTab('dashboard');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<Search size={18} />}
                  label="Find Mentors"
                  active={activeTab === 'find-mentors'}
                  onClick={() => {
                    setActiveTab('find-mentors');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<MessageSquare size={18} />}
                  label="Requests"
                  active={activeTab === 'requests'}
                  badge={requests.filter((r) => r.status === 'Pending').length}
                  onClick={() => {
                    setActiveTab('requests');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<Users size={18} />}
                  label="My Mentors"
                  active={activeTab === 'my-mentors'}
                  onClick={() => {
                    setActiveTab('my-mentors');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<Calendar size={18} />}
                  label="Sessions"
                  active={activeTab === 'sessions'}
                  badge={sessions.filter((s) => s.status === 'Upcoming').length}
                  onClick={() => {
                    setActiveTab('sessions');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<MessageSquare size={18} />}
                  label="Messages"
                  active={activeTab === 'messages'}
                  badge={unreadMessagesCount}
                  onClick={() => {
                    setActiveTab('messages');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<BookOpen size={18} />}
                  label="Resources"
                  active={activeTab === 'resources'}
                  onClick={() => {
                    setActiveTab('resources');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<UserCircle size={18} />}
                  label="Profile"
                  active={activeTab === 'profile'}
                  onClick={() => {
                    setActiveTab('profile');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <SidebarNavLink
                  icon={<Settings size={18} />}
                  label="Settings"
                  active={activeTab === 'settings'}
                  onClick={() => {
                    setActiveTab('settings');
                    setIsMobileSidebarOpen(false);
                  }}
                />
              </nav>
            </div>

            {/* Bottom: Pro Card & Logout */}
            <div className="p-4 space-y-3 border-t border-gray-100">
              {/* Upgrade to Pro Card */}
              {!profile.isPro && (
                <div className="p-3.5 bg-gradient-to-br from-violet-50 to-indigo-50/80 rounded-2xl border border-violet-100">
                  <div className="flex items-center gap-1.5 text-xs font-black text-violet-900">
                    <Sparkles size={14} className="text-amber-500" />
                    <span>Upgrade to Pro ✨</span>
                  </div>
                  <p className="text-[10px] text-violet-700/80 mt-1 mb-2.5 leading-snug">
                    Get unlimited 1-on-1 calls & instant MAANG mentor matching.
                  </p>
                  <button
                    onClick={() => setIsUpgradeProOpen(true)}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white text-[11px] py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-200 transition-all cursor-pointer"
                  >
                    Upgrade Now <ArrowRight size={12} />
                  </button>
                </div>
              )}

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors font-bold text-xs cursor-pointer"
              >
                <LogOut size={16} /> Log Out
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <div
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden"
          />
        )}

        {/* ===================== MAIN CONTENT AREA ===================== */}
        <main className="flex-grow flex flex-col min-w-0">
          {/* Top Sticky Header Bar */}
          <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-8 flex items-center justify-between sticky top-0 z-20">
            {/* Left: Mobile Toggle & Global Search Bar */}
            <div className="flex items-center gap-3 flex-grow max-w-xl">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <Menu size={20} />
              </button>

              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                <input
                  type="text"
                  placeholder="Quick search across mentors, topics, or resources..."
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && headerSearch.trim()) {
                      setActiveTab('find-mentors');
                    }
                  }}
                  className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl py-2 pl-10 pr-4 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                />
              </div>
            </div>

            {/* Right: Actions, Notifications, & User Profile */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Messages Shortcut */}
              <button
                onClick={() => setActiveTab('messages')}
                className="relative p-2.5 rounded-2xl text-gray-500 hover:bg-violet-50 hover:text-violet-700 transition-colors cursor-pointer"
                title="Messages"
              >
                <MessageSquare size={18} />
                {unreadMessagesCount > 0 && (
                  <span className="absolute top-1 right-1 bg-violet-600 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-xs">
                    {unreadMessagesCount}
                  </span>
                )}
              </button>

              {/* Notifications Bell */}
              <button
                onClick={() => setIsNotificationDrawerOpen(true)}
                className="relative p-2.5 rounded-2xl text-gray-500 hover:bg-violet-50 hover:text-violet-700 transition-colors cursor-pointer"
                title="Notifications"
              >
                <Bell size={18} />
                {unreadNotifsCount > 0 && (
                  <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-xs animate-pulse">
                    {unreadNotifsCount}
                  </span>
                )}
              </button>

              {/* User Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-3 pl-3 border-l border-gray-100 cursor-pointer group"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-extrabold text-gray-900 leading-tight group-hover:text-violet-600 transition-colors">
                      {profile.name}
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {profile.isPro ? 'Pro Student ⭐' : 'Student'}
                    </p>
                  </div>
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-10 h-10 rounded-2xl object-cover border border-violet-100 shadow-xs group-hover:ring-2 group-hover:ring-violet-400 transition-all"
                  />
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-30 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="p-2 border-b border-gray-50 mb-1">
                      <p className="text-xs font-bold text-gray-900">{profile.name}</p>
                      <p className="text-[10px] text-gray-400 truncate">{profile.email}</p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors flex items-center gap-2"
                    >
                      <UserCircle size={14} /> My Profile
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab('settings');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors flex items-center gap-2"
                    >
                      <Settings size={14} /> Account Settings
                    </button>

                    <div className="border-t border-gray-50 my-1" />

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Dynamic Content Views */}
          <div className="p-6 md:p-8 flex-grow">
            {activeTab === 'dashboard' && (
              <OverviewTab
                profile={profile}
                mentors={mentors}
                requests={requests}
                sessions={sessions}
                activities={activities}
                goals={goals}
                onNavigateTab={(t) => setActiveTab(t)}
                onSendRequest={(m) => setSendRequestModalMentor(m)}
                onBookSession={(m) => setBookSessionModalMentor(m)}
                onViewMentorProfile={(m) => setProfileModalMentor(m)}
                onToggleGoal={handleToggleGoal}
                onAddGoal={handleAddGoal}
                onDeleteGoal={handleDeleteGoal}
                onJoinSession={(s) => setLiveMeetSession(s)}
              />
            )}

            {activeTab === 'find-mentors' && (
              <FindMentorsTab
                mentors={mentors}
                onSendRequest={(m) => setSendRequestModalMentor(m)}
                onBookSession={(m) => setBookSessionModalMentor(m)}
                onViewMentorProfile={(m) => setProfileModalMentor(m)}
                onToggleBookmark={handleToggleMentorBookmark}
              />
            )}

            {activeTab === 'requests' && (
              <RequestsTab
                requests={requests}
                onCancelRequest={handleCancelRequest}
                onResendRequest={handleResendRequest}
                onNavigateTab={(t) => setActiveTab(t)}
                onStartMessage={handleStartMessageWithMentor}
              />
            )}

            {activeTab === 'my-mentors' && (
              <MyMentorsTab
                mentors={mentors}
                requests={requests}
                sessions={sessions}
                onNavigateTab={(t) => setActiveTab(t)}
                onBookSession={(m) => setBookSessionModalMentor(m)}
                onStartMessage={handleStartMessageWithMentor}
                onViewMentorProfile={(m) => setProfileModalMentor(m)}
                onRateMentorSession={(s) => setRateSessionItem(s)}
              />
            )}

            {activeTab === 'sessions' && (
              <SessionsTab
                sessions={sessions}
                onNavigateTab={(t) => setActiveTab(t)}
                onJoinSession={(s) => setLiveMeetSession(s)}
                onCancelSession={handleCancelSession}
                onRescheduleSession={handleRescheduleSession}
                onRateSession={(s) => setRateSessionItem(s)}
                onStartMessage={handleStartMessageWithMentor}
              />
            )}

            {activeTab === 'messages' && (
              <MessagesTab
                conversations={conversations}
                activeMentorId={activeChatMentorId}
                onSendMessage={handleSendMessage}
                onStartVideoCall={(mentorName) => {
                  const matchSess = sessions.find((s) => s.mentorName === mentorName) || sessions[0];
                  if (matchSess) setLiveMeetSession(matchSess);
                }}
              />
            )}

            {activeTab === 'resources' && (
              <ResourcesTab
                resources={resources}
                onOpenResource={(r) => setReadResourceItem(r)}
                onToggleBookmark={handleToggleResourceBookmark}
              />
            )}

            {activeTab === 'profile' && (
              <ProfileTab
                profile={profile}
                onSaveProfile={saveProfileData}
              />
            )}

            {activeTab === 'settings' && (
              <SettingsTab
                profile={profile}
                onResetData={handleResetData}
              />
            )}
          </div>
        </main>
      </div>

      {/* ===================== GLOBAL MODALS & DRAWERS ===================== */}
      <SendRequestModal
        isOpen={!!sendRequestModalMentor}
        mentor={sendRequestModalMentor}
        onClose={() => setSendRequestModalMentor(null)}
        onSubmit={handleCreateRequest}
      />

      <BookSessionModal
        isOpen={!!bookSessionModalMentor}
        mentor={bookSessionModalMentor}
        onClose={() => setBookSessionModalMentor(null)}
        onBook={handleBookSession}
      />

      <MentorProfileModal
        isOpen={!!profileModalMentor}
        mentor={profileModalMentor}
        onClose={() => setProfileModalMentor(null)}
        onSendRequest={(m) => setSendRequestModalMentor(m)}
        onBookSession={(m) => setBookSessionModalMentor(m)}
        onToggleBookmark={handleToggleMentorBookmark}
      />

      <RateMentorModal
        isOpen={!!rateSessionItem}
        session={rateSessionItem}
        onClose={() => setRateSessionItem(null)}
        onSubmitRating={handleRateSession}
      />

      <ReadResourceModal
        isOpen={!!readResourceItem}
        resource={readResourceItem}
        onClose={() => setReadResourceItem(null)}
        onToggleBookmark={handleToggleResourceBookmark}
      />

      <LiveMeetModal
        isOpen={!!liveMeetSession}
        session={liveMeetSession}
        onClose={() => setLiveMeetSession(null)}
        onCompleteSession={(sessionId) => {
          const updated = sessions.map((s) =>
            s.id === sessionId ? { ...s, status: 'Completed' as const } : s
          );
          saveSessionsData(updated);
        }}
      />

      <UpgradeProModal
        isOpen={isUpgradeProOpen}
        onClose={() => setIsUpgradeProOpen(false)}
        onUpgradeSuccess={() => {
          saveProfileData({ ...profile, isPro: true });
        }}
      />

      <NotificationDrawer
        isOpen={isNotificationDrawerOpen}
        onClose={() => setIsNotificationDrawerOpen(false)}
        notifications={notifications}
        onMarkAllRead={() => {
          setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
        }}
        onClearAll={() => setNotifications([])}
        onNotificationClick={(n) => {
          setNotifications((prev) =>
            prev.map((item) => (item.id === n.id ? { ...item, isRead: true } : item))
          );
          if (n.targetTab) {
            setActiveTab(n.targetTab);
          }
          setIsNotificationDrawerOpen(false);
        }}
      />
    </div>
  );
}

// Sidebar Navigation Link Component
function SidebarNavLink({
  icon,
  label,
  active = false,
  badge = 0,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all cursor-pointer font-bold text-xs ${
        active
          ? 'bg-violet-50 text-violet-700 shadow-xs'
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={active ? 'text-violet-600' : 'text-gray-400'}>{icon}</span>
        <span className={active ? 'text-violet-700' : 'text-gray-600'}>{label}</span>
      </div>
      {badge > 0 && (
        <span
          className={`text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full ${
            active ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}