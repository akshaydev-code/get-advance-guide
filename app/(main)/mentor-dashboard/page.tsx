"use client";

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, UserCircle, MessageSquare, Users,
  Calendar, Wallet, FileText, Star, Settings, LogOut,
  Search, Bell, MessageCircle, ChevronDown, Share2,
  ArrowRight, Menu, X, Sparkles, Shield
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Types & Initial Data
import {
  MentorDashboardTab, MentorProfile, StudentItem, MentorRequest,
  MentorSession, EarningRecord, MentorReview, MentorResourceItem,
  MentorConversation, MentorNotification, MentorScheduleDay
} from '@/components/mentor-dashboard/types';

import {
  initialMentorProfile, initialStudents, initialRequests,
  initialSessions, initialEarnings, initialReviews,
  initialResources, initialConversations, initialNotifications,
  initialScheduleDays, monthlyEarningsChartData
} from '@/components/mentor-dashboard/data/mockMentorData';

// Tab Components
import OverviewTab from '@/components/mentor-dashboard/tabs/OverviewTab';
import ProfileTab from '@/components/mentor-dashboard/tabs/ProfileTab';
import RequestsTab from '@/components/mentor-dashboard/tabs/RequestsTab';
import SessionsTab from '@/components/mentor-dashboard/tabs/SessionsTab';
import StudentsTab from '@/components/mentor-dashboard/tabs/StudentsTab';
import EarningsTab from '@/components/mentor-dashboard/tabs/EarningsTab';
import MessagesTab from '@/components/mentor-dashboard/tabs/MessagesTab';
import ResourcesTab from '@/components/mentor-dashboard/tabs/ResourcesTab';
import ReviewsTab from '@/components/mentor-dashboard/tabs/ReviewsTab';
import SettingsTab from '@/components/mentor-dashboard/tabs/SettingsTab';

// Modals & Drawers
import LiveMeetModal from '@/components/mentor-dashboard/modals/LiveMeetModal';
import CreateResourceModal from '@/components/mentor-dashboard/modals/CreateResourceModal';
import WithdrawEarningsModal from '@/components/mentor-dashboard/modals/WithdrawEarningsModal';
import StudentDetailModal from '@/components/mentor-dashboard/modals/StudentDetailModal';
import NotificationDrawer from '@/components/mentor-dashboard/modals/NotificationDrawer';

export default function MentorDashboardPage() {
  const router = useRouter();

  // Active Tab & Navigation States
  const [activeTab, setActiveTab] = useState<MentorDashboardTab>('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Global Dashboard Data States (Loaded from localStorage on client)
  const [profile, setProfile] = useState<MentorProfile>(initialMentorProfile);
  const [students, setStudents] = useState<StudentItem[]>(initialStudents);
  const [requests, setRequests] = useState<MentorRequest[]>(initialRequests);
  const [sessions, setSessions] = useState<MentorSession[]>(initialSessions);
  const [earnings, setEarnings] = useState<EarningRecord[]>(initialEarnings);
  const [reviews, setReviews] = useState<MentorReview[]>(initialReviews);
  const [resources, setResources] = useState<MentorResourceItem[]>(initialResources);
  const [conversations, setConversations] = useState<MentorConversation[]>(initialConversations);
  const [notifications, setNotifications] = useState<MentorNotification[]>(initialNotifications);
  const [schedule, setSchedule] = useState<MentorScheduleDay[]>(initialScheduleDays);
  const [chartData, setChartData] = useState(monthlyEarningsChartData);

  // Active Direct Selection for Messages / Details
  const [activeChatStudentId, setActiveChatStudentId] = useState<string | null>(null);
  const [detailStudent, setDetailStudent] = useState<StudentItem | null>(null);

  // Active Modals State
  const [liveMeetSession, setLiveMeetSession] = useState<MentorSession | null>(null);
  const [isCreateResourceOpen, setIsCreateResourceOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);

  // Global Search in Header
  const [headerSearch, setHeaderSearch] = useState('');

  // Load persistent client state & sync logged-in auth user
  useEffect(() => {
    async function syncAuthUserAndData() {
      try {
        const savedProfile = localStorage.getItem('gag_mentor_profile');
        if (savedProfile) setProfile(JSON.parse(savedProfile));

        const savedRequests = localStorage.getItem('gag_mentor_requests');
        if (savedRequests) setRequests(JSON.parse(savedRequests));

        const savedSessions = localStorage.getItem('gag_mentor_sessions');
        if (savedSessions) setSessions(JSON.parse(savedSessions));

        const savedStudents = localStorage.getItem('gag_mentor_students');
        if (savedStudents) setStudents(JSON.parse(savedStudents));

        const savedEarnings = localStorage.getItem('gag_mentor_earnings');
        if (savedEarnings) setEarnings(JSON.parse(savedEarnings));

        const savedReviews = localStorage.getItem('gag_mentor_reviews');
        if (savedReviews) setReviews(JSON.parse(savedReviews));

        const savedResources = localStorage.getItem('gag_mentor_resources');
        if (savedResources) setResources(JSON.parse(savedResources));

        const savedConversations = localStorage.getItem('gag_mentor_conversations');
        if (savedConversations) setConversations(JSON.parse(savedConversations));

        const savedSchedule = localStorage.getItem('gag_mentor_schedule');
        if (savedSchedule) setSchedule(JSON.parse(savedSchedule));

        // Check active session from /api/auth/me
        const authRes = await fetch('/api/auth/me');
        if (authRes.ok) {
          const authData = await authRes.json();
          if (authData.success && authData.user) {
            setProfile((prev) => {
              const updated = {
                ...prev,
                name: authData.user.name || prev.name,
                email: authData.user.email || prev.email,
              };
              try {
                localStorage.setItem('gag_mentor_profile', JSON.stringify(updated));
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

  // Save Helpers
  const saveProfileData = (updated: MentorProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('gag_mentor_profile', JSON.stringify(updated));
    } catch {}
  };

  const saveRequestsData = (updated: MentorRequest[]) => {
    setRequests(updated);
    try {
      localStorage.setItem('gag_mentor_requests', JSON.stringify(updated));
    } catch {}
  };

  const saveSessionsData = (updated: MentorSession[]) => {
    setSessions(updated);
    try {
      localStorage.setItem('gag_mentor_sessions', JSON.stringify(updated));
    } catch {}
  };

  const saveEarningsData = (updated: EarningRecord[]) => {
    setEarnings(updated);
    try {
      localStorage.setItem('gag_mentor_earnings', JSON.stringify(updated));
    } catch {}
  };

  const saveReviewsData = (updated: MentorReview[]) => {
    setReviews(updated);
    try {
      localStorage.setItem('gag_mentor_reviews', JSON.stringify(updated));
    } catch {}
  };

  const saveResourcesData = (updated: MentorResourceItem[]) => {
    setResources(updated);
    try {
      localStorage.setItem('gag_mentor_resources', JSON.stringify(updated));
    } catch {}
  };

  const saveConversationsData = (updated: MentorConversation[]) => {
    setConversations(updated);
    try {
      localStorage.setItem('gag_mentor_conversations', JSON.stringify(updated));
    } catch {}
  };

  const saveScheduleData = (updated: MentorScheduleDay[]) => {
    setSchedule(updated);
    try {
      localStorage.setItem('gag_mentor_schedule', JSON.stringify(updated));
    } catch {}
  };

  // Handlers for Requests
  const handleAcceptRequest = (requestId: string) => {
    const targetReq = requests.find((r) => r.id === requestId);
    if (!targetReq) return;

    // Update request status
    const updatedReqs = requests.map((r) =>
      r.id === requestId ? { ...r, status: 'Accepted' as const } : r
    );
    saveRequestsData(updatedReqs);

    // Auto-create upcoming session
    const newSession: MentorSession = {
      id: `sess_m_${Date.now()}`,
      studentId: targetReq.studentId,
      studentName: targetReq.studentName,
      studentAvatar: targetReq.studentAvatar,
      studentRole: targetReq.studentRole,
      date: '2026-08-26',
      time: '06:00 PM',
      durationMinutes: 45,
      topic: targetReq.topic,
      meetLink: `https://meet.google.com/gag-mentor-${Date.now().toString().slice(-4)}`,
      status: 'Upcoming',
      notes: targetReq.message,
      earnedAmount: profile.hourlyRate,
    };
    saveSessionsData([newSession, ...sessions]);

    // Notification
    setNotifications((prev) => [
      {
        id: `notif_m_${Date.now()}`,
        title: 'Request Accepted & Session Created',
        message: `Session with ${targetReq.studentName} for ${targetReq.topic} has been added to your calendar.`,
        time: 'Just now',
        isRead: false,
        type: 'session',
        targetTab: 'sessions',
      },
      ...prev,
    ]);
  };

  const handleDeclineRequest = (requestId: string) => {
    const updatedReqs = requests.map((r) =>
      r.id === requestId ? { ...r, status: 'Declined' as const } : r
    );
    saveRequestsData(updatedReqs);
  };

  // Handlers for Sessions
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

  const handleCompleteSession = (sessionId: string) => {
    const target = sessions.find((s) => s.id === sessionId);
    const updatedSessions = sessions.map((s) =>
      s.id === sessionId ? { ...s, status: 'Completed' as const } : s
    );
    saveSessionsData(updatedSessions);

    if (target) {
      // Add Earning record
      const fee = target.earnedAmount * 0.1;
      const net = target.earnedAmount - fee;
      const newEarn: EarningRecord = {
        id: `earn_${Date.now()}`,
        sessionId: target.id,
        studentName: target.studentName,
        date: new Date().toISOString().split('T')[0],
        amount: target.earnedAmount,
        platformFee: fee,
        netPayout: net,
        status: 'Paid',
        topic: target.topic,
      };
      saveEarningsData([newEarn, ...earnings]);

      // Update mentor stats
      saveProfileData({
        ...profile,
        totalHoursMentored: profile.totalHoursMentored + 1,
        totalStudentsHelped: profile.totalStudentsHelped + 1,
      });
    }
  };

  // Handlers for Messages
  const handleSendMessage = (conversationId: string, text: string) => {
    const newMsg = {
      id: `m_msg_${Date.now()}`,
      sender: 'mentor' as const,
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

    // Simulate mentee response
    setTimeout(() => {
      const activeConv = updated.find((c) => c.id === conversationId);
      if (!activeConv) return;

      const menteeReply = `Thank you for the guidance Anubhav sir! I will prepare the code review before our call.`;
      const menteeReplyMsg = {
        id: `s_rep_${Date.now()}`,
        sender: 'student' as const,
        text: menteeReply,
        timestamp: 'Just now',
      };

      const finalConvs = updated.map((c) => {
        if (c.id === conversationId) {
          return {
            ...c,
            lastMessage: menteeReply,
            lastMessageTime: 'Just now',
            messages: [...c.messages, menteeReplyMsg],
          };
        }
        return c;
      });

      saveConversationsData(finalConvs);

      setNotifications((prev) => [
        {
          id: `notif_${Date.now()}`,
          title: `Reply from ${activeConv.studentName}`,
          message: `"${menteeReply}"`,
          time: 'Just now',
          isRead: false,
          type: 'message',
          targetTab: 'messages',
        },
        ...prev,
      ]);
    }, 2500);
  };

  const handleStartMessageWithStudent = (studentId: string) => {
    const existing = conversations.find((c) => c.studentId === studentId);
    if (!existing) {
      const studentObj = students.find((s) => s.id === studentId);
      if (studentObj) {
        const newConv: MentorConversation = {
          id: `conv_m_${Date.now()}`,
          studentId: studentObj.id,
          studentName: studentObj.name,
          studentAvatar: studentObj.avatar,
          studentRole: studentObj.targetRole,
          studentCompany: studentObj.university,
          isOnline: true,
          lastMessage: 'Conversation started.',
          lastMessageTime: 'Just now',
          unreadCount: 0,
          messages: [
            {
              id: `init_msg_${Date.now()}`,
              sender: 'mentor',
              text: `Hello ${studentObj.name}! How can I help you accelerate your prep today?`,
              timestamp: 'Just now',
            },
          ],
        };
        saveConversationsData([newConv, ...conversations]);
      }
    }
    setActiveChatStudentId(studentId);
    setActiveTab('messages');
  };

  // Handlers for Resources
  const handlePublishResource = (
    newRes: Omit<MentorResourceItem, 'id' | 'views' | 'likes' | 'downloads' | 'createdAt'>
  ) => {
    const created: MentorResourceItem = {
      ...newRes,
      id: `res_m_${Date.now()}`,
      views: 1,
      likes: 0,
      downloads: 0,
      createdAt: 'Just now',
    };
    saveResourcesData([created, ...resources]);
  };

  const handleDeleteResource = (resourceId: string) => {
    const updated = resources.filter((r) => r.id !== resourceId);
    saveResourcesData(updated);
  };

  // Handlers for Reviews
  const handleReplyReview = (reviewId: string, replyText: string) => {
    const updated = reviews.map((r) =>
      r.id === reviewId ? { ...r, mentorReply: replyText } : r
    );
    saveReviewsData(updated);
  };

  // Handlers for Withdraw
  const handleWithdrawPayout = (amount: number, method: string) => {
    // Add debit transaction
    const debit: EarningRecord = {
      id: `payout_${Date.now()}`,
      sessionId: `payout_tx_${Date.now()}`,
      studentName: `${method.toUpperCase()} Withdrawal`,
      date: new Date().toISOString().split('T')[0],
      amount: -amount,
      platformFee: 0,
      netPayout: -amount,
      status: 'Paid',
      topic: `Direct Payout Transfer (${method.toUpperCase()})`,
    };
    saveEarningsData([debit, ...earnings]);

    setNotifications((prev) => [
      {
        id: `notif_w_${Date.now()}`,
        title: 'Payout Withdrawal Initiated! 💸',
        message: `$${amount.toFixed(2)} transfer initiated to your ${method.toUpperCase()} account.`,
        time: 'Just now',
        isRead: false,
        type: 'earning',
        targetTab: 'earnings',
      },
      ...prev,
    ]);
  };

  // Reset Demo Data
  const handleResetData = () => {
    try {
      localStorage.removeItem('gag_mentor_profile');
      localStorage.removeItem('gag_mentor_requests');
      localStorage.removeItem('gag_mentor_sessions');
      localStorage.removeItem('gag_mentor_students');
      localStorage.removeItem('gag_mentor_earnings');
      localStorage.removeItem('gag_mentor_reviews');
      localStorage.removeItem('gag_mentor_resources');
      localStorage.removeItem('gag_mentor_conversations');
      localStorage.removeItem('gag_mentor_schedule');
    } catch {}

    setProfile(initialMentorProfile);
    setStudents(initialStudents);
    setRequests(initialRequests);
    setSessions(initialSessions);
    setEarnings(initialEarnings);
    setReviews(initialReviews);
    setResources(initialResources);
    setConversations(initialConversations);
    setSchedule(initialScheduleDays);
    alert('Mentor dashboard reset to initial seed data!');
  };

  // Logout Handler
  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out of mentor dashboard?')) {
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
      } catch {}
      localStorage.removeItem('gag_user');
      window.dispatchEvent(new Event('storage'));
      router.push('/login');
    }
  };

  // Unread badge counts
  const pendingRequestsCount = requests.filter((r) => r.status === 'Pending').length;
  const upcomingSessionsCount = sessions.filter((s) => s.status === 'Upcoming').length;
  const unreadMessagesCount = conversations.reduce((acc, c) => acc + c.unreadCount, 0);
  const unreadNotifsCount = notifications.filter((n) => !n.isRead).length;

  const availableBalance = earnings
    .filter((e) => e.status === 'Paid')
    .reduce((acc, curr) => acc + curr.netPayout, 0);

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
                    <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">
                      Mentor Portal ⭐
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
                <MentorSidebarNavLink
                  icon={<LayoutDashboard size={18} />}
                  label="Dashboard"
                  active={activeTab === 'overview'}
                  onClick={() => {
                    setActiveTab('overview');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<UserCircle size={18} />}
                  label="My Profile"
                  active={activeTab === 'profile'}
                  onClick={() => {
                    setActiveTab('profile');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<MessageSquare size={18} />}
                  label="Requests"
                  active={activeTab === 'requests'}
                  badge={pendingRequestsCount}
                  onClick={() => {
                    setActiveTab('requests');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<Calendar size={18} />}
                  label="My Sessions"
                  active={activeTab === 'sessions'}
                  badge={upcomingSessionsCount}
                  onClick={() => {
                    setActiveTab('sessions');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<Users size={18} />}
                  label="My Students"
                  active={activeTab === 'students'}
                  onClick={() => {
                    setActiveTab('students');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<Wallet size={18} />}
                  label="Earnings"
                  active={activeTab === 'earnings'}
                  onClick={() => {
                    setActiveTab('earnings');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<MessageCircle size={18} />}
                  label="Messages"
                  active={activeTab === 'messages'}
                  badge={unreadMessagesCount}
                  onClick={() => {
                    setActiveTab('messages');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<FileText size={18} />}
                  label="Resources"
                  active={activeTab === 'resources'}
                  onClick={() => {
                    setActiveTab('resources');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
                  icon={<Star size={18} />}
                  label="Reviews"
                  active={activeTab === 'reviews'}
                  onClick={() => {
                    setActiveTab('reviews');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <MentorSidebarNavLink
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
              <div className="p-3.5 bg-gradient-to-br from-violet-50 to-indigo-50/80 rounded-2xl border border-violet-100">
                <div className="flex items-center gap-1.5 text-xs font-black text-violet-900">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>Verified Mentor ⭐</span>
                </div>
                <p className="text-[10px] text-violet-700/80 mt-1 mb-2.5 leading-snug">
                  Rate: <strong>${profile.hourlyRate}/hr</strong> • {profile.category}
                </p>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white text-[11px] py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-200 transition-all cursor-pointer"
                >
                  Edit Profile <ArrowRight size={12} />
                </button>
              </div>

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
          {/* Sticky Header Bar */}
          <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-8 flex items-center justify-between sticky top-0 z-20">
            {/* Left: Mobile Toggle & Search */}
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
                  placeholder="Quick search students, session topics, or reviews..."
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && headerSearch.trim()) {
                      setActiveTab('students');
                    }
                  }}
                  className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl py-2 pl-10 pr-4 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                />
              </div>
            </div>

            {/* Right: Shortcuts, Notifications, User Dropdown */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Messages Shortcut */}
              <button
                onClick={() => setActiveTab('messages')}
                className="relative p-2.5 rounded-2xl text-gray-500 hover:bg-violet-50 hover:text-violet-700 transition-colors cursor-pointer"
                title="Messages"
              >
                <MessageCircle size={18} />
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
                    <p className="text-[10px] text-violet-600 font-bold uppercase tracking-wider">
                      {profile.company} Mentor
                    </p>
                  </div>
                  <img
                    src={profile.image}
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
                      <Settings size={14} /> Availability & Settings
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
            {activeTab === 'overview' && (
              <OverviewTab
                profile={profile}
                students={students}
                requests={requests}
                sessions={sessions}
                earnings={earnings}
                reviews={reviews}
                earningsChartData={chartData}
                onNavigateTab={(t) => setActiveTab(t)}
                onJoinSession={(s) => setLiveMeetSession(s)}
                onAcceptRequest={handleAcceptRequest}
                onDeclineRequest={handleDeclineRequest}
                onStartMessage={handleStartMessageWithStudent}
              />
            )}

            {activeTab === 'profile' && (
              <ProfileTab
                profile={profile}
                onSaveProfile={saveProfileData}
              />
            )}

            {activeTab === 'requests' && (
              <RequestsTab
                requests={requests}
                onAcceptRequest={handleAcceptRequest}
                onDeclineRequest={handleDeclineRequest}
                onStartMessage={handleStartMessageWithStudent}
                onNavigateTab={(t) => setActiveTab(t)}
              />
            )}

            {activeTab === 'sessions' && (
              <SessionsTab
                sessions={sessions}
                onNavigateTab={(t) => setActiveTab(t)}
                onJoinSession={(s) => setLiveMeetSession(s)}
                onCancelSession={handleCancelSession}
                onRescheduleSession={handleRescheduleSession}
                onStartMessage={handleStartMessageWithStudent}
              />
            )}

            {activeTab === 'students' && (
              <StudentsTab
                students={students}
                sessions={sessions}
                onStartMessage={handleStartMessageWithStudent}
                onViewStudentDetails={(s) => setDetailStudent(s)}
              />
            )}

            {activeTab === 'earnings' && (
              <EarningsTab
                earnings={earnings}
                earningsChartData={chartData}
                onOpenWithdrawModal={() => setIsWithdrawModalOpen(true)}
              />
            )}

            {activeTab === 'messages' && (
              <MessagesTab
                conversations={conversations}
                activeStudentId={activeChatStudentId}
                onSendMessage={handleSendMessage}
                onStartVideoCall={(studentName) => {
                  const matchSess = sessions.find((s) => s.studentName === studentName) || sessions[0];
                  if (matchSess) setLiveMeetSession(matchSess);
                }}
              />
            )}

            {activeTab === 'resources' && (
              <ResourcesTab
                resources={resources}
                onOpenCreateModal={() => setIsCreateResourceOpen(true)}
                onDeleteResource={handleDeleteResource}
              />
            )}

            {activeTab === 'reviews' && (
              <ReviewsTab
                reviews={reviews}
                onReplyReview={handleReplyReview}
              />
            )}

            {activeTab === 'settings' && (
              <SettingsTab
                profile={profile}
                schedule={schedule}
                onSaveSchedule={saveScheduleData}
                onSaveProfile={saveProfileData}
                onResetData={handleResetData}
              />
            )}
          </div>
        </main>
      </div>

      {/* ===================== GLOBAL MODALS & DRAWERS ===================== */}
      <LiveMeetModal
        isOpen={!!liveMeetSession}
        session={liveMeetSession}
        onClose={() => setLiveMeetSession(null)}
        onCompleteSession={handleCompleteSession}
      />

      <CreateResourceModal
        isOpen={isCreateResourceOpen}
        onClose={() => setIsCreateResourceOpen(false)}
        onPublish={handlePublishResource}
      />

      <WithdrawEarningsModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        availableBalance={Math.max(0, availableBalance)}
        onWithdraw={handleWithdrawPayout}
      />

      <StudentDetailModal
        isOpen={!!detailStudent}
        student={detailStudent}
        sessions={sessions}
        onClose={() => setDetailStudent(null)}
        onStartMessage={handleStartMessageWithStudent}
      />

      <NotificationDrawer
        isOpen={isNotificationDrawerOpen}
        notifications={notifications}
        onClose={() => setIsNotificationDrawerOpen(false)}
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
function MentorSidebarNavLink({
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