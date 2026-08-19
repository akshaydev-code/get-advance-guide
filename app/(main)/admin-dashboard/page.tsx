"use client";

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, UserCheck, Users, Calendar, FileText,
  Wallet, Star, MessageSquare, Settings, LogOut,
  Search, Bell, Plus, ShieldCheck, Sparkles, Menu, X,
  ChevronDown, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Types & Initial Data
import {
  AdminDashboardTab, AdminMentorItem, AdminStudentItem,
  AdminSessionItem, AdminApplicationItem, AdminPayoutRequest,
  AdminReviewItem, AdminInquiryItem, AdminResourceItem,
  AdminActivityItem
} from '@/components/admin-dashboard/types';

import {
  initialAdminMentors, initialAdminStudents, initialAdminSessions,
  initialAdminApplications, initialAdminPayouts, initialAdminReviews,
  initialAdminInquiries, initialAdminResources, initialAdminActivities,
  platformRevenueChartData
} from '@/components/admin-dashboard/data/mockAdminData';

// Tabs
import OverviewTab from '@/components/admin-dashboard/tabs/OverviewTab';
import MentorsTab from '@/components/admin-dashboard/tabs/MentorsTab';
import StudentsTab from '@/components/admin-dashboard/tabs/StudentsTab';
import SessionsTab from '@/components/admin-dashboard/tabs/SessionsTab';
import ApplicationsTab from '@/components/admin-dashboard/tabs/ApplicationsTab';
import FinancialsTab from '@/components/admin-dashboard/tabs/FinancialsTab';
import ResourcesTab from '@/components/admin-dashboard/tabs/ResourcesTab';
import ReviewsTab from '@/components/admin-dashboard/tabs/ReviewsTab';
import InquiriesTab from '@/components/admin-dashboard/tabs/InquiriesTab';
import SettingsTab from '@/components/admin-dashboard/tabs/SettingsTab';

// Modals
import AddMentorModal from '@/components/admin-dashboard/modals/AddMentorModal';
import EditMentorModal from '@/components/admin-dashboard/modals/EditMentorModal';
import ApplicationReviewModal from '@/components/admin-dashboard/modals/ApplicationReviewModal';
import CreateAdminResourceModal from '@/components/admin-dashboard/modals/CreateAdminResourceModal';
import InquiryReplyModal from '@/components/admin-dashboard/modals/InquiryReplyModal';
import BroadcastModal from '@/components/admin-dashboard/modals/BroadcastModal';

export default function AdminDashboardPage() {
  const router = useRouter();

  // Navigation State
  const [activeTab, setActiveTab] = useState<AdminDashboardTab>('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Dynamic Data States
  const [mentors, setMentors] = useState<AdminMentorItem[]>(initialAdminMentors);
  const [students, setStudents] = useState<AdminStudentItem[]>(initialAdminStudents);
  const [sessions, setSessions] = useState<AdminSessionItem[]>(initialAdminSessions);
  const [applications, setApplications] = useState<AdminApplicationItem[]>(initialAdminApplications);
  const [payouts, setPayouts] = useState<AdminPayoutRequest[]>(initialAdminPayouts);
  const [reviews, setReviews] = useState<AdminReviewItem[]>(initialAdminReviews);
  const [inquiries, setInquiries] = useState<AdminInquiryItem[]>(initialAdminInquiries);
  const [resources, setResources] = useState<AdminResourceItem[]>(initialAdminResources);
  const [activities, setActivities] = useState<AdminActivityItem[]>(initialAdminActivities);
  const [chartData, setChartData] = useState(platformRevenueChartData);

  // Modals States
  const [isAddMentorOpen, setIsAddMentorOpen] = useState(false);
  const [editingMentor, setEditingMentor] = useState<AdminMentorItem | null>(null);
  const [reviewingApp, setReviewingApp] = useState<AdminApplicationItem | null>(null);
  const [isCreateResourceOpen, setIsCreateResourceOpen] = useState(false);
  const [replyingInquiry, setReplyingInquiry] = useState<AdminInquiryItem | null>(null);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);

  // Header Quick Search
  const [headerSearch, setHeaderSearch] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const sMentors = localStorage.getItem('gag_admin_mentors');
      if (sMentors) setMentors(JSON.parse(sMentors));

      const sStudents = localStorage.getItem('gag_admin_students');
      if (sStudents) setStudents(JSON.parse(sStudents));

      const sSessions = localStorage.getItem('gag_admin_sessions');
      if (sSessions) setSessions(JSON.parse(sSessions));

      const sApps = localStorage.getItem('gag_admin_applications');
      if (sApps) setApplications(JSON.parse(sApps));

      const sPayouts = localStorage.getItem('gag_admin_payouts');
      if (sPayouts) setPayouts(JSON.parse(sPayouts));

      const sReviews = localStorage.getItem('gag_admin_reviews');
      if (sReviews) setReviews(JSON.parse(sReviews));

      const sInqs = localStorage.getItem('gag_admin_inquiries');
      if (sInqs) setInquiries(JSON.parse(sInqs));

      const sRes = localStorage.getItem('gag_admin_resources');
      if (sRes) setResources(JSON.parse(sRes));

      const sActs = localStorage.getItem('gag_admin_activities');
      if (sActs) setActivities(JSON.parse(sActs));
    } catch {}
  }, []);

  // Save Helpers
  const saveMentors = (data: AdminMentorItem[]) => {
    setMentors(data);
    try {
      localStorage.setItem('gag_admin_mentors', JSON.stringify(data));
    } catch {}
  };

  const saveStudents = (data: AdminStudentItem[]) => {
    setStudents(data);
    try {
      localStorage.setItem('gag_admin_students', JSON.stringify(data));
    } catch {}
  };

  const saveSessions = (data: AdminSessionItem[]) => {
    setSessions(data);
    try {
      localStorage.setItem('gag_admin_sessions', JSON.stringify(data));
    } catch {}
  };

  const saveApplications = (data: AdminApplicationItem[]) => {
    setApplications(data);
    try {
      localStorage.setItem('gag_admin_applications', JSON.stringify(data));
    } catch {}
  };

  const savePayouts = (data: AdminPayoutRequest[]) => {
    setPayouts(data);
    try {
      localStorage.setItem('gag_admin_payouts', JSON.stringify(data));
    } catch {}
  };

  const saveReviews = (data: AdminReviewItem[]) => {
    setReviews(data);
    try {
      localStorage.setItem('gag_admin_reviews', JSON.stringify(data));
    } catch {}
  };

  const saveInquiries = (data: AdminInquiryItem[]) => {
    setInquiries(data);
    try {
      localStorage.setItem('gag_admin_inquiries', JSON.stringify(data));
    } catch {}
  };

  const saveResources = (data: AdminResourceItem[]) => {
    setResources(data);
    try {
      localStorage.setItem('gag_admin_resources', JSON.stringify(data));
    } catch {}
  };

  const addActivity = (type: AdminActivityItem['type'], title: string, subtitle: string) => {
    const newAct: AdminActivityItem = {
      id: `act_${Date.now()}`,
      type,
      title,
      subtitle,
      time: 'Just now',
    };
    const updated = [newAct, ...activities];
    setActivities(updated);
    try {
      localStorage.setItem('gag_admin_activities', JSON.stringify(updated));
    } catch {}
  };

  // Mentors Handlers
  const handleAddMentor = (mentorData: any) => {
    const newMentor: AdminMentorItem = {
      ...mentorData,
      id: `m_${Date.now()}`,
      rating: 5.0,
      reviews: 1,
      totalMentees: 0,
      totalEarnings: 0,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    saveMentors([newMentor, ...mentors]);
    addActivity('signup', 'Mentor Verified & Onboarded', `${newMentor.name} (${newMentor.company}) added.`);
  };

  const handleEditMentor = (updatedMentor: AdminMentorItem) => {
    const updated = mentors.map((m) => (m.id === updatedMentor.id ? updatedMentor : m));
    saveMentors(updated);
  };

  const handleTogglePopular = (mentorId: string) => {
    const updated = mentors.map((m) =>
      m.id === mentorId ? { ...m, isPopular: !m.isPopular } : m
    );
    saveMentors(updated);
  };

  const handleToggleMentorStatus = (mentorId: string) => {
    const updated = mentors.map((m) =>
      m.id === mentorId ? { ...m, status: m.status === 'Active' ? 'Suspended' as const : 'Active' as const } : m
    );
    saveMentors(updated);
  };

  const handleDeleteMentor = (mentorId: string) => {
    saveMentors(mentors.filter((m) => m.id !== mentorId));
  };

  // Students Handlers
  const handleToggleStudentPro = (studentId: string) => {
    const updated = students.map((s) =>
      s.id === studentId ? { ...s, isPro: !s.isPro } : s
    );
    saveStudents(updated);
  };

  const handleToggleStudentStatus = (studentId: string) => {
    const updated = students.map((s) =>
      s.id === studentId ? { ...s, status: s.status === 'Active' ? 'Suspended' as const : 'Active' as const } : s
    );
    saveStudents(updated);
  };

  const handleDeleteStudent = (studentId: string) => {
    saveStudents(students.filter((s) => s.id !== studentId));
  };

  // Sessions Handlers
  const handleCancelSession = (sessionId: string) => {
    const updated = sessions.map((s) =>
      s.id === sessionId ? { ...s, status: 'Cancelled' as const } : s
    );
    saveSessions(updated);
  };

  // Applications Handlers
  const handleApproveApplication = (appId: string) => {
    const app = applications.find((a) => a.id === appId);
    if (!app) return;

    // Update app status
    const updatedApps = applications.map((a) =>
      a.id === appId ? { ...a, status: 'Approved' as const } : a
    );
    saveApplications(updatedApps);

    // Auto-create mentor profile
    const newMentor: AdminMentorItem = {
      id: `m_app_${Date.now()}`,
      name: app.name,
      email: app.email,
      role: app.role,
      company: app.company,
      image: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
      category: app.category,
      skills: ['System Design', 'Architecture', 'Mentorship'],
      rating: 5.0,
      reviews: 1,
      exp: `${app.experienceYears}+ years`,
      experienceYears: app.experienceYears,
      hourlyRate: app.proposedRate || 70,
      available: true,
      isPopular: true,
      status: 'Active',
      totalMentees: 0,
      totalEarnings: 0,
      joinedDate: new Date().toISOString().split('T')[0],
      bio: app.coachingStatement,
    };
    saveMentors([newMentor, ...mentors]);
    addActivity('application', 'Mentor Approved', `${app.name} (${app.company}) approved as mentor.`);
  };

  const handleDeclineApplication = (appId: string) => {
    const updated = applications.map((a) =>
      a.id === appId ? { ...a, status: 'Declined' as const } : a
    );
    saveApplications(updated);
  };

  // Payout Handlers
  const handleApprovePayout = (payoutId: string) => {
    const updated = payouts.map((p) =>
      p.id === payoutId ? { ...p, status: 'Approved' as const } : p
    );
    savePayouts(updated);
    const target = payouts.find((p) => p.id === payoutId);
    if (target) {
      addActivity('payout', 'Payout Disbursed', `$${target.amount.toFixed(2)} transferred to ${target.mentorName}.`);
    }
  };

  const handleRejectPayout = (payoutId: string) => {
    const updated = payouts.map((p) =>
      p.id === payoutId ? { ...p, status: 'Rejected' as const } : p
    );
    savePayouts(updated);
  };

  // Resources Handlers
  const handlePublishResource = (resData: any) => {
    const created: AdminResourceItem = {
      ...resData,
      id: `adm_res_${Date.now()}`,
      views: 12,
      likes: 3,
      publishedDate: new Date().toISOString().split('T')[0],
    };
    saveResources([created, ...resources]);
  };

  const handleToggleResourceFeatured = (resourceId: string) => {
    const updated = resources.map((r) =>
      r.id === resourceId ? { ...r, isFeatured: !r.isFeatured } : r
    );
    saveResources(updated);
  };

  const handleDeleteResource = (resourceId: string) => {
    saveResources(resources.filter((r) => r.id !== resourceId));
  };

  // Reviews Handlers
  const handleToggleReviewFeatured = (reviewId: string) => {
    const updated = reviews.map((r) =>
      r.id === reviewId ? { ...r, isFeatured: !r.isFeatured } : r
    );
    saveReviews(updated);
  };

  const handleDeleteReview = (reviewId: string) => {
    saveReviews(reviews.filter((r) => r.id !== reviewId));
  };

  // Inquiries Handlers
  const handleSendInquiryReply = (inquiryId: string, replyText: string) => {
    const updated = inquiries.map((i) =>
      i.id === inquiryId ? { ...i, status: 'Resolved' as const, adminReply: replyText } : i
    );
    saveInquiries(updated);
  };

  const handleMarkInquiryResolved = (inquiryId: string) => {
    const updated = inquiries.map((i) =>
      i.id === inquiryId ? { ...i, status: 'Resolved' as const } : i
    );
    saveInquiries(updated);
  };

  const handleDeleteInquiry = (inquiryId: string) => {
    saveInquiries(inquiries.filter((i) => i.id !== inquiryId));
  };

  // Broadcast Handler
  const handleBroadcast = (title: string, message: string, audience: string) => {
    addActivity('inquiry', `Broadcast Sent (${audience})`, title);
  };

  // Reset Platform Demo Data
  const handleResetAllData = () => {
    try {
      localStorage.removeItem('gag_admin_mentors');
      localStorage.removeItem('gag_admin_students');
      localStorage.removeItem('gag_admin_sessions');
      localStorage.removeItem('gag_admin_applications');
      localStorage.removeItem('gag_admin_payouts');
      localStorage.removeItem('gag_admin_reviews');
      localStorage.removeItem('gag_admin_resources');
      localStorage.removeItem('gag_admin_inquiries');
      localStorage.removeItem('gag_admin_activities');
    } catch {}

    setMentors(initialAdminMentors);
    setStudents(initialAdminStudents);
    setSessions(initialAdminSessions);
    setApplications(initialAdminApplications);
    setPayouts(initialAdminPayouts);
    setReviews(initialAdminReviews);
    setInquiries(initialAdminInquiries);
    setResources(initialAdminResources);
    setActivities(initialAdminActivities);
    alert('Admin dashboard reset to initial seed data!');
  };

  // Logout Handler
  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out of admin console?')) {
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
      } catch {}
      localStorage.removeItem('gag_user');
      window.dispatchEvent(new Event('storage'));
      router.push('/login');
    }
  };

  // Badges counts
  const pendingAppsCount = applications.filter((a) => a.status === 'Pending').length;
  const pendingPayoutsCount = payouts.filter((p) => p.status === 'Pending').length;
  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col text-gray-800 font-sans antialiased">
      <div className="flex flex-grow w-full max-w-[1700px] mx-auto relative">
        {/* ===================== SIDEBAR ===================== */}
        <aside
          className={`fixed lg:sticky top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col justify-between z-40 transition-transform duration-300 ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Brand Header */}
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
                      Superadmin Console 🛡️
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

              {/* Navigation Items */}
              <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-280px)]">
                <AdminSidebarNavLink
                  icon={<LayoutDashboard size={18} />}
                  label="Executive KPI"
                  active={activeTab === 'overview'}
                  onClick={() => {
                    setActiveTab('overview');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<UserCheck size={18} />}
                  label="Mentors"
                  active={activeTab === 'mentors'}
                  onClick={() => {
                    setActiveTab('mentors');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<Users size={18} />}
                  label="Students"
                  active={activeTab === 'students'}
                  onClick={() => {
                    setActiveTab('students');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<Calendar size={18} />}
                  label="Sessions Ledger"
                  active={activeTab === 'sessions'}
                  onClick={() => {
                    setActiveTab('sessions');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<FileText size={18} />}
                  label="Applications"
                  active={activeTab === 'applications'}
                  badge={pendingAppsCount}
                  onClick={() => {
                    setActiveTab('applications');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<Wallet size={18} />}
                  label="Financials & Payouts"
                  active={activeTab === 'financials'}
                  badge={pendingPayoutsCount}
                  onClick={() => {
                    setActiveTab('financials');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<Sparkles size={18} />}
                  label="Resources Hub"
                  active={activeTab === 'resources'}
                  onClick={() => {
                    setActiveTab('resources');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<Star size={18} />}
                  label="Reviews Moderation"
                  active={activeTab === 'reviews'}
                  onClick={() => {
                    setActiveTab('reviews');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<MessageSquare size={18} />}
                  label="Contact Inquiries"
                  active={activeTab === 'inquiries'}
                  badge={newInquiriesCount}
                  onClick={() => {
                    setActiveTab('inquiries');
                    setIsMobileSidebarOpen(false);
                  }}
                />
                <AdminSidebarNavLink
                  icon={<Settings size={18} />}
                  label="Platform Settings"
                  active={activeTab === 'settings'}
                  onClick={() => {
                    setActiveTab('settings');
                    setIsMobileSidebarOpen(false);
                  }}
                />
              </nav>
            </div>

            {/* Bottom Card & Logout */}
            <div className="p-4 space-y-3 border-t border-gray-100">
              <div className="p-3.5 bg-gradient-to-br from-violet-50 to-indigo-50/80 rounded-2xl border border-violet-100">
                <div className="flex items-center gap-1.5 text-xs font-black text-violet-900">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Master Administrator</span>
                </div>
                <p className="text-[10px] text-violet-700/80 mt-1 mb-2.5">
                  10% Commission Rate Active
                </p>
                <button
                  onClick={() => setIsAddMentorOpen(true)}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white text-[11px] py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-200 transition-all cursor-pointer"
                >
                  <Plus size={13} /> Quick Add Mentor
                </button>
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors font-bold text-xs cursor-pointer"
              >
                <LogOut size={16} /> Exit Admin Console
              </button>
            </div>
          </div>
        </aside>

        {isMobileSidebarOpen && (
          <div
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden"
          />
        )}

        {/* ===================== MAIN CONTENT ===================== */}
        <main className="flex-grow flex flex-col min-w-0">
          {/* Header */}
          <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-8 flex items-center justify-between sticky top-0 z-20">
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
                  placeholder="Search mentors, students, sessions, or applications..."
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && headerSearch.trim()) {
                      setActiveTab('mentors');
                    }
                  }}
                  className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl py-2 pl-10 pr-4 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-5">
              {/* Broadcast Action */}
              <button
                onClick={() => setIsBroadcastOpen(true)}
                className="p-2.5 rounded-2xl text-gray-500 hover:bg-violet-50 hover:text-violet-700 transition-colors cursor-pointer"
                title="Send Broadcast Alert"
              >
                <Bell size={18} />
              </button>

              {/* Admin Profile */}
              <div className="relative">
                <div
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-3 pl-3 border-l border-gray-100 cursor-pointer group"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-extrabold text-gray-900 leading-tight group-hover:text-violet-600 transition-colors">
                      Admin Control
                    </p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                      Root Access
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-violet-200">
                    SA
                  </div>
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-30 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="p-2 border-b border-gray-50 mb-1">
                      <p className="text-xs font-bold text-gray-900">Platform Superadmin</p>
                      <p className="text-[10px] text-gray-400">admin@getadvanceguide.com</p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('settings');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors flex items-center gap-2"
                    >
                      <Settings size={14} /> System Settings
                    </button>

                    <div className="border-t border-gray-50 my-1" />

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut size={14} /> Exit Admin
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Dynamic Views */}
          <div className="p-6 md:p-8 flex-grow">
            {activeTab === 'overview' && (
              <OverviewTab
                mentors={mentors}
                students={students}
                sessions={sessions}
                applications={applications}
                payouts={payouts}
                activities={activities}
                revenueChartData={chartData}
                onNavigateTab={(t) => setActiveTab(t)}
                onOpenAddMentor={() => setIsAddMentorOpen(true)}
                onOpenBroadcast={() => setIsBroadcastOpen(true)}
                onApprovePayout={handleApprovePayout}
                onApproveApplication={handleApproveApplication}
              />
            )}

            {activeTab === 'mentors' && (
              <MentorsTab
                mentors={mentors}
                onOpenAddModal={() => setIsAddMentorOpen(true)}
                onEditMentor={(m) => setEditingMentor(m)}
                onTogglePopular={handleTogglePopular}
                onToggleStatus={handleToggleMentorStatus}
                onDeleteMentor={handleDeleteMentor}
              />
            )}

            {activeTab === 'students' && (
              <StudentsTab
                students={students}
                onTogglePro={handleToggleStudentPro}
                onToggleStatus={handleToggleStudentStatus}
                onDeleteStudent={handleDeleteStudent}
              />
            )}

            {activeTab === 'sessions' && (
              <SessionsTab
                sessions={sessions}
                onCancelSession={handleCancelSession}
              />
            )}

            {activeTab === 'applications' && (
              <ApplicationsTab
                applications={applications}
                onOpenReviewModal={(app) => setReviewingApp(app)}
                onApprove={handleApproveApplication}
                onDecline={handleDeclineApplication}
              />
            )}

            {activeTab === 'financials' && (
              <FinancialsTab
                payouts={payouts}
                sessions={sessions}
                revenueChartData={chartData}
                onApprovePayout={handleApprovePayout}
                onRejectPayout={handleRejectPayout}
              />
            )}

            {activeTab === 'resources' && (
              <ResourcesTab
                resources={resources}
                onOpenCreateModal={() => setIsCreateResourceOpen(true)}
                onToggleFeatured={handleToggleResourceFeatured}
                onDeleteResource={handleDeleteResource}
              />
            )}

            {activeTab === 'reviews' && (
              <ReviewsTab
                reviews={reviews}
                onToggleFeatured={handleToggleReviewFeatured}
                onDeleteReview={handleDeleteReview}
              />
            )}

            {activeTab === 'inquiries' && (
              <InquiriesTab
                inquiries={inquiries}
                onOpenReplyModal={(inq) => setReplyingInquiry(inq)}
                onMarkResolved={handleMarkInquiryResolved}
                onDeleteInquiry={handleDeleteInquiry}
              />
            )}

            {activeTab === 'settings' && (
              <SettingsTab
                onResetAllData={handleResetAllData}
              />
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      <AddMentorModal
        isOpen={isAddMentorOpen}
        onClose={() => setIsAddMentorOpen(false)}
        onAddMentor={handleAddMentor}
      />

      <EditMentorModal
        isOpen={!!editingMentor}
        mentor={editingMentor}
        onClose={() => setEditingMentor(null)}
        onSave={handleEditMentor}
      />

      <ApplicationReviewModal
        isOpen={!!reviewingApp}
        application={reviewingApp}
        onClose={() => setReviewingApp(null)}
        onApprove={handleApproveApplication}
        onDecline={handleDeclineApplication}
      />

      <CreateAdminResourceModal
        isOpen={isCreateResourceOpen}
        onClose={() => setIsCreateResourceOpen(false)}
        onPublish={handlePublishResource}
      />

      <InquiryReplyModal
        isOpen={!!replyingInquiry}
        inquiry={replyingInquiry}
        onClose={() => setReplyingInquiry(null)}
        onSendReply={handleSendInquiryReply}
      />

      <BroadcastModal
        isOpen={isBroadcastOpen}
        onClose={() => setIsBroadcastOpen(false)}
        onBroadcast={handleBroadcast}
      />
    </div>
  );
}

function AdminSidebarNavLink({
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
            active ? 'bg-violet-600 text-white' : 'bg-amber-100 text-amber-800'
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}
