"use client";

import React from 'react';
import {
  Users, UserCheck, Calendar, Wallet, FileText, Star,
  TrendingUp, Sparkles, ArrowRight, CheckCircle2, AlertCircle,
  Plus, Send, ShieldCheck, Download
} from 'lucide-react';
import {
  AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import {
  AdminDashboardTab, AdminMentorItem, AdminStudentItem,
  AdminSessionItem, AdminApplicationItem, AdminPayoutRequest,
  AdminActivityItem
} from '../types';

interface OverviewTabProps {
  mentors: AdminMentorItem[];
  students: AdminStudentItem[];
  sessions: AdminSessionItem[];
  applications: AdminApplicationItem[];
  payouts: AdminPayoutRequest[];
  activities: AdminActivityItem[];
  revenueChartData: { name: string; gmv: number; commission: number }[];
  onNavigateTab: (tab: AdminDashboardTab) => void;
  onOpenAddMentor: () => void;
  onOpenBroadcast: () => void;
  onApprovePayout: (payoutId: string) => void;
  onApproveApplication: (appId: string) => void;
}

export default function OverviewTab({
  mentors,
  students,
  sessions,
  applications,
  payouts,
  activities,
  revenueChartData,
  onNavigateTab,
  onOpenAddMentor,
  onOpenBroadcast,
  onApprovePayout,
  onApproveApplication,
}: OverviewTabProps) {
  const pendingApps = applications.filter((a) => a.status === 'Pending');
  const pendingPayouts = payouts.filter((p) => p.status === 'Pending');
  const upcomingSessions = sessions.filter((s) => s.status === 'Upcoming');

  const totalGMV = sessions.reduce((acc, curr) => acc + curr.amount, 0) + 116000;
  const totalCommission = totalGMV * 0.1;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Executive Hero Banner */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-violet-200">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-40 -top-10 w-60 h-60 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-violet-100 text-xs font-semibold mb-3 border border-white/20">
            <ShieldCheck size={14} className="text-emerald-300" />
            <span>Executive Platform Console • GetAdvanceGuide</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
            Scale Global Mentorship Operations
          </h1>

          <p className="text-violet-100 text-sm max-w-lg mb-8 leading-relaxed font-medium">
            Monitor real-time coaching metrics across {mentors.length} verified mentors, {students.length} mentees, approve coach onboardings, and manage payout disbursements.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAddMentor}
              className="bg-white text-violet-700 hover:bg-violet-50 px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-violet-950/20 transition-all hover:scale-105 cursor-pointer"
            >
              <Plus size={15} /> Add Verified Mentor
            </button>
            <button
              onClick={onOpenBroadcast}
              className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 border border-white/25 transition-all cursor-pointer"
            >
              <Send size={14} /> Send Broadcast Alert
            </button>
          </div>
        </div>
      </section>

      {/* 6 Executive Metric Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <MetricCard
          label="Total Revenue"
          value={`$${(totalCommission / 1000).toFixed(1)}k`}
          sub="10% Net Comm."
          icon={<Wallet className="text-emerald-600" size={17} />}
          onClick={() => onNavigateTab('financials')}
        />
        <MetricCard
          label="Total Mentors"
          value={mentors.length.toString()}
          sub="Top Tier FAANG"
          icon={<UserCheck className="text-violet-600" size={17} />}
          onClick={() => onNavigateTab('mentors')}
        />
        <MetricCard
          label="Total Students"
          value={students.length.toString()}
          sub="Active Mentees"
          icon={<Users className="text-blue-600" size={17} />}
          onClick={() => onNavigateTab('students')}
        />
        <MetricCard
          label="Booked Sessions"
          value={sessions.length.toString()}
          sub={`${upcomingSessions.length} Upcoming`}
          icon={<Calendar className="text-purple-600" size={17} />}
          onClick={() => onNavigateTab('sessions')}
        />
        <MetricCard
          label="Pending Apps"
          value={pendingApps.length.toString()}
          sub="Review Queue"
          icon={<AlertCircle className="text-amber-500" size={17} />}
          onClick={() => onNavigateTab('applications')}
        />
        <MetricCard
          label="Payout Queue"
          value={pendingPayouts.length.toString()}
          sub="To Disburse"
          icon={<TrendingUp className="text-rose-600" size={17} />}
          onClick={() => onNavigateTab('financials')}
        />
      </div>

      {/* 2-Column Analytics & Live Stream Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): Revenue Chart & Pending Applications */}
        <div className="lg:col-span-8 space-y-8">
          {/* Revenue Graph */}
          <section className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Platform Gross Merchandise Value (GMV)</h3>
                <p className="text-xs text-gray-500 font-medium">Monthly booking volume and platform commission</p>
              </div>
              <button
                onClick={() => onNavigateTab('financials')}
                className="text-xs font-bold text-violet-600 hover:underline cursor-pointer"
              >
                Financials View →
              </button>
            </div>

            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="adminGmvGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <Tooltip
                    formatter={(val: any) => [`$${val}`, 'Volume']}
                    contentStyle={{ borderRadius: '1rem', border: '1px solid #E2E8F0', fontSize: '12px' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="gmv"
                    stroke="#7C3AED"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#adminGmvGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Pending Mentor Applications Queue */}
          <section className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-gray-900 text-lg">Pending Mentor Applications</h3>
                <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                  {pendingApps.length} In Queue
                </span>
              </div>
              <button
                onClick={() => onNavigateTab('applications')}
                className="text-xs font-bold text-violet-600 hover:underline cursor-pointer"
              >
                View all →
              </button>
            </div>

            {pendingApps.length === 0 ? (
              <p className="text-xs text-gray-400 italic text-center py-6">No pending applications at this time.</p>
            ) : (
              <div className="space-y-3">
                {pendingApps.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{app.name}</h4>
                      <p className="text-[11px] text-gray-500 font-medium">
                        {app.role} @ <strong className="text-violet-700">{app.company}</strong> ({app.experienceYears}+ yrs)
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5 font-medium">{app.coachingStatement}</p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => onApproveApplication(app.id)}
                        className="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Right Column (4 cols): Payout Requests & Live Activity Feed */}
        <div className="lg:col-span-4 space-y-8">
          {/* Payout Approval Widget */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-gray-900 text-base">Pending Payouts</h3>
              <button
                onClick={() => onNavigateTab('financials')}
                className="text-[11px] font-bold text-violet-600 hover:underline cursor-pointer"
              >
                Disburse all →
              </button>
            </div>

            {pendingPayouts.length === 0 ? (
              <p className="text-xs text-gray-400 italic text-center py-4">No pending withdrawal requests.</p>
            ) : (
              <div className="space-y-3">
                {pendingPayouts.map((pay) => (
                  <div
                    key={pay.id}
                    className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between gap-2"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{pay.mentorName}</h4>
                      <p className="text-[10px] text-violet-700 font-bold">{pay.payoutMethod}</p>
                      <p className="text-xs font-black text-gray-900 mt-0.5">${pay.amount.toFixed(2)}</p>
                    </div>

                    <button
                      onClick={() => onApprovePayout(pay.id)}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                    >
                      Disburse
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Real-time Activity Feed */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <h3 className="font-extrabold text-gray-900 text-base">Live Activity Stream</h3>

            <div className="space-y-3.5">
              {activities.map((act) => (
                <div key={act.id} className="flex items-start gap-3 text-xs">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-1.5 flex-shrink-0" />
                  <div className="flex-grow min-w-0">
                    <p className="font-bold text-gray-900 leading-tight">{act.title}</p>
                    <p className="text-[11px] text-gray-500 leading-snug">{act.subtitle}</p>
                    <span className="text-[10px] text-gray-400 font-medium">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  sub,
  icon,
  onClick,
}: {
  label: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-violet-200 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="p-2 bg-gray-50 group-hover:bg-violet-50 rounded-xl transition-colors">
          {icon}
        </div>
        <span className="text-[9px] font-bold text-gray-400 uppercase">{sub}</span>
      </div>
      <div>
        <h3 className="text-xl font-black text-gray-900 group-hover:text-violet-600 transition-colors">
          {value}
        </h3>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">{label}</p>
      </div>
    </div>
  );
}
