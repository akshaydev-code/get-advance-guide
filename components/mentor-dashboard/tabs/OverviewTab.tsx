"use client";

import React from 'react';
import {
  Users, Calendar, Star, ArrowRight, Wallet, Clock, CheckCircle2,
  Sparkles, Video, MessageSquare, TrendingUp, Share2, Plus, ExternalLink
} from 'lucide-react';
import {
  AreaChart, Area, ResponsiveContainer, Tooltip, XAxis
} from 'recharts';
import {
  MentorProfile, StudentItem, MentorRequest, MentorSession,
  EarningRecord, MentorReview, MentorDashboardTab
} from '../types';

interface OverviewTabProps {
  profile: MentorProfile;
  students: StudentItem[];
  requests: MentorRequest[];
  sessions: MentorSession[];
  earnings: EarningRecord[];
  reviews: MentorReview[];
  earningsChartData: { name: string; earnings: number; students: number }[];
  onNavigateTab: (tab: MentorDashboardTab) => void;
  onJoinSession: (session: MentorSession) => void;
  onAcceptRequest: (requestId: string) => void;
  onDeclineRequest: (requestId: string) => void;
  onStartMessage: (studentId: string) => void;
}

export default function OverviewTab({
  profile,
  students,
  requests,
  sessions,
  earnings,
  reviews,
  earningsChartData,
  onNavigateTab,
  onJoinSession,
  onAcceptRequest,
  onDeclineRequest,
  onStartMessage,
}: OverviewTabProps) {
  const pendingRequests = requests.filter((r) => r.status === 'Pending');
  const upcomingSessions = sessions.filter((s) => s.status === 'Upcoming');
  const completedSessions = sessions.filter((s) => s.status === 'Completed');

  const totalEarningsAmount = earnings.reduce((acc, curr) => acc + curr.netPayout, 0);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Welcome Banner */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-violet-200">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-40 -top-10 w-60 h-60 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-violet-100 text-xs font-semibold mb-3 border border-white/20">
            <Sparkles size={13} className="text-amber-300" />
            <span>{getGreeting()}, {profile.name.split(' ')[0]} 👋</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
            Inspire. Guide. Empower Next-Gen Developers.
          </h1>

          <p className="text-violet-100 text-sm max-w-lg mb-8 leading-relaxed font-medium">
            You are actively mentoring {students.length} students across Stanford, Berkeley, and IITs. Review incoming requests, launch live video sessions, and manage your teaching roadmap.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('sessions')}
              className="bg-white text-violet-700 hover:bg-violet-50 px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-violet-950/20 transition-all hover:scale-105 cursor-pointer"
            >
              Manage Sessions <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigateTab('profile')}
              className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 border border-white/25 transition-all cursor-pointer"
            >
              Public Profile Preview <Share2 size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Key Metric Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          label="Total Students"
          value={students.length.toString()}
          badge="Active Mentees"
          icon={<Users className="text-violet-600" size={18} />}
          onClick={() => onNavigateTab('students')}
        />
        <StatCard
          label="Completed"
          value={completedSessions.length.toString()}
          badge="Sessions Done"
          icon={<CheckCircle2 className="text-emerald-600" size={18} />}
          onClick={() => onNavigateTab('sessions')}
        />
        <StatCard
          label="Upcoming"
          value={upcomingSessions.length.toString()}
          badge="This Week"
          icon={<Calendar className="text-blue-600" size={18} />}
          onClick={() => onNavigateTab('sessions')}
        />
        <StatCard
          label="Average Rating"
          value={profile.rating.toFixed(1)}
          badge={`★ ${profile.reviews} reviews`}
          icon={<Star className="text-amber-500 fill-amber-400" size={18} />}
          onClick={() => onNavigateTab('reviews')}
        />
        <StatCard
          label="Total Net Payout"
          value={`$${totalEarningsAmount.toFixed(0)}`}
          badge="+$117 this month"
          icon={<Wallet className="text-indigo-600" size={18} />}
          onClick={() => onNavigateTab('earnings')}
        />
      </div>

      {/* Main 2-Column Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): Upcoming Sessions & Earnings Chart */}
        <div className="lg:col-span-8 space-y-8">
          {/* Upcoming Sessions Spotlight */}
          <section className="bg-white p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Upcoming 1-on-1 Sessions</h3>
                <p className="text-xs text-gray-500 font-medium">Live video rooms ready to launch with your students</p>
              </div>
              <button
                onClick={() => onNavigateTab('sessions')}
                className="text-xs font-bold text-violet-600 hover:text-violet-700 flex items-center gap-1 hover:underline cursor-pointer"
              >
                View Full Calendar <ArrowRight size={13} />
              </button>
            </div>

            {upcomingSessions.length === 0 ? (
              <div className="text-center py-10 text-gray-400 bg-gray-50/50 rounded-2xl border border-gray-100">
                <Calendar size={32} className="mx-auto mb-2 opacity-40" />
                <p className="text-xs font-medium">No upcoming sessions scheduled today.</p>
              </div>
            ) : (
              <div className="space-y-3.5">
                {upcomingSessions.slice(0, 3).map((sess) => (
                  <div
                    key={sess.id}
                    className="p-4 rounded-2xl bg-gray-50/70 hover:bg-white border border-gray-100 hover:border-violet-200 transition-all hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={sess.studentAvatar}
                        alt={sess.studentName}
                        className="w-12 h-12 rounded-2xl object-cover border border-gray-200"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-gray-900">{sess.studentName}</h4>
                          <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full">
                            {sess.time}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">{sess.topic}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1 font-semibold">
                          <Calendar size={11} /> {sess.date} ({sess.durationMinutes} mins)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => onStartMessage(sess.studentId)}
                        className="px-3 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-xl text-xs font-bold border border-gray-200 transition-colors cursor-pointer"
                      >
                        <MessageSquare size={13} />
                      </button>
                      <button
                        onClick={() => onJoinSession(sess)}
                        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-violet-200 transition-all cursor-pointer"
                      >
                        <Video size={13} /> Start Session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Revenue Analytics Chart */}
          <section className="bg-white p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Mentorship Earnings Trend</h3>
                <p className="text-xs text-gray-500 font-medium">Gross earnings per 5-day cycle with mentee growth</p>
              </div>
              <button
                onClick={() => onNavigateTab('earnings')}
                className="text-xs font-bold text-violet-600 hover:underline cursor-pointer"
              >
                Full Financials →
              </button>
            </div>

            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="mentorEarningsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <Tooltip
                    formatter={(value: any) => [`$${value}`, 'Earnings']}
                    contentStyle={{ borderRadius: '1rem', border: '1px solid #E2E8F0', fontSize: '12px' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="#7C3AED"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#mentorEarningsGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Impact Metric Tiles */}
          <section className="bg-white p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-sm">
            <h3 className="font-extrabold text-gray-900 text-lg mb-1">Your Mentorship Impact</h3>
            <p className="text-xs text-gray-500 font-medium mb-6">Quantifiable results achieved through your engineering coaching</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <ImpactTile label="Hours Mentored" value={`${profile.totalHoursMentored}+`} sub="Recorded Calls" />
              <ImpactTile label="Mentees Guided" value={`${profile.totalStudentsHelped}+`} sub="Across 12 Countries" />
              <ImpactTile label="Placement Rate" value="94%" sub="FAANG / Unicorns" />
              <ImpactTile label="Avg Hourly Rate" value={`$${profile.hourlyRate}`} sub="Verified Payout" />
            </div>
          </section>
        </div>

        {/* Right Column (4 cols): Pending Student Requests & Recent Reviews */}
        <div className="lg:col-span-4 space-y-8">
          {/* Pending Student Requests Widget */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-gray-900 text-base">Student Requests</h3>
                <span className="text-[10px] font-black bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                  {pendingRequests.length} Pending
                </span>
              </div>
              <button
                onClick={() => onNavigateTab('requests')}
                className="text-[11px] font-bold text-violet-600 hover:underline cursor-pointer"
              >
                View all →
              </button>
            </div>

            {pendingRequests.length === 0 ? (
              <div className="text-center py-6 text-gray-400">
                <p className="text-xs">No pending requests right now.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={req.studentAvatar}
                          alt={req.studentName}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-gray-900">{req.studentName}</h4>
                          <p className="text-[10px] text-gray-400">{req.studentUniversity}</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-gray-400">{req.createdAt}</span>
                    </div>

                    <p className="text-[11px] text-gray-700 font-medium line-clamp-2 leading-relaxed">
                      &ldquo;{req.message}&rdquo;
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onAcceptRequest(req.id)}
                        className="py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => onDeclineRequest(req.id)}
                        className="py-1.5 bg-white hover:bg-rose-50 text-gray-500 hover:text-rose-600 rounded-lg text-xs font-bold border border-gray-200 cursor-pointer"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Recent Reviews Widget */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-extrabold text-gray-900 text-base">Recent Reviews</h3>
              <button
                onClick={() => onNavigateTab('reviews')}
                className="text-[11px] font-bold text-violet-600 hover:underline cursor-pointer"
              >
                View all ({reviews.length}) →
              </button>
            </div>

            <div className="space-y-3.5">
              {reviews.slice(0, 3).map((rev) => (
                <div key={rev.id} className="p-3.5 bg-gray-50/70 rounded-2xl border border-gray-100 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={rev.studentAvatar} alt={rev.studentName} className="w-6 h-6 rounded-full object-cover" />
                      <p className="text-xs font-bold text-gray-900">{rev.studentName}</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star size={12} className="fill-amber-400" />
                      <span>{rev.rating}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-600 italic line-clamp-2 leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  badge,
  icon,
  onClick,
}: {
  label: string;
  value: string;
  badge: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm hover:border-violet-200 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="p-2.5 bg-gray-50 group-hover:bg-violet-50 rounded-xl transition-colors">
          {icon}
        </div>
        <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-violet-600 transition-colors">
          {value}
        </h2>
        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1">{label}</p>
      </div>
    </div>
  );
}

function ImpactTile({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100 text-center">
      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">{label}</p>
      <h4 className="text-lg font-black text-violet-950">{value}</h4>
      <p className="text-[10px] text-violet-600 font-semibold">{sub}</p>
    </div>
  );
}
