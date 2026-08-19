"use client";

import React, { useState } from 'react';
import {
  Users, CheckCircle2, Calendar, Star, ArrowRight, BookOpen, Clock, History,
  Plus, Check, Sparkles, MessageSquare, Video, ShieldCheck, Heart, Trash2
} from 'lucide-react';
import {
  StudentProfile, MentorItem, MentorshipRequest, SessionItem,
  ActivityItem, GoalItem, DashboardTab
} from '../types';

interface OverviewTabProps {
  profile: StudentProfile;
  mentors: MentorItem[];
  requests: MentorshipRequest[];
  sessions: SessionItem[];
  activities: ActivityItem[];
  goals: GoalItem[];
  onNavigateTab: (tab: DashboardTab) => void;
  onSendRequest: (mentor: MentorItem) => void;
  onBookSession: (mentor: MentorItem) => void;
  onViewMentorProfile: (mentor: MentorItem) => void;
  onToggleGoal: (goalId: string) => void;
  onAddGoal: (title: string, category: string) => void;
  onDeleteGoal?: (goalId: string) => void;
  onJoinSession: (session: SessionItem) => void;
}

export default function OverviewTab({
  profile,
  mentors,
  requests,
  sessions,
  activities,
  goals,
  onNavigateTab,
  onSendRequest,
  onBookSession,
  onViewMentorProfile,
  onToggleGoal,
  onAddGoal,
  onDeleteGoal,
  onJoinSession,
}: OverviewTabProps) {
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [showAddGoal, setShowAddGoal] = useState(false);

  // Derived statistics
  const acceptedRequestsCount = requests.filter((r) => r.status === 'Accepted').length;
  const completedSessionsCount = sessions.filter((s) => s.status === 'Completed').length;
  const upcomingSessions = sessions.filter((s) => s.status === 'Upcoming');
  const completedGoalsCount = goals.filter((g) => g.isCompleted).length;
  const progressPercent = goals.length > 0 ? Math.round((completedGoalsCount / goals.length) * 100) : 0;

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalTitle.trim()) return;
    onAddGoal(newGoalTitle.trim(), 'General');
    setNewGoalTitle('');
    setShowAddGoal(false);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-violet-200">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-40 -top-10 w-60 h-60 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-violet-100 text-xs font-semibold mb-3 border border-white/20">
            <Sparkles size={13} className="text-amber-300" />
            <span>{getGreeting()}, {profile.name.split(' ')[0]} 👋</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
            Keep learning, keep growing with top tech mentors.
          </h1>

          <p className="text-violet-100 text-sm max-w-lg mb-8 leading-relaxed font-medium">
            Connect directly with engineering leaders at Google, Microsoft, and Nvidia to review your code, prep for mock interviews, and accelerate your career.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('find-mentors')}
              className="bg-white text-violet-700 hover:bg-violet-50 px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-violet-950/20 transition-all hover:scale-105 cursor-pointer"
            >
              Find a Mentor <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigateTab('resources')}
              className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 border border-white/25 transition-all cursor-pointer"
            >
              Explore Guides <BookOpen size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Requests Sent"
          value={requests.length.toString()}
          badge="+2 this week"
          icon={<Users className="text-violet-600" size={20} />}
          onClick={() => onNavigateTab('requests')}
        />
        <StatCard
          label="Requests Accepted"
          value={acceptedRequestsCount.toString()}
          badge="High match rate"
          icon={<CheckCircle2 className="text-emerald-600" size={20} />}
          onClick={() => onNavigateTab('requests')}
        />
        <StatCard
          label="Sessions Completed"
          value={completedSessionsCount.toString()}
          badge={`${completedSessionsCount * 45} mins total`}
          icon={<Calendar className="text-indigo-600" size={20} />}
          onClick={() => onNavigateTab('sessions')}
        />
        <StatCard
          label="Average Rating"
          value="4.9"
          badge="From verified mentors"
          icon={<Star className="text-amber-500 fill-amber-400" size={20} />}
          onClick={() => onNavigateTab('my-mentors')}
        />
      </div>

      {/* Main 2-Column Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left / Center 8 Columns */}
        <div className="lg:col-span-8 space-y-8">
          {/* Recommended Mentors */}
          <section className="bg-white p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Top Recommended Mentors</h3>
                <p className="text-xs text-gray-500 font-medium">Handpicked matching your target role: <strong className="text-violet-700">{profile.targetRole}</strong></p>
              </div>
              <button
                onClick={() => onNavigateTab('find-mentors')}
                className="text-xs font-bold text-violet-600 hover:text-violet-700 flex items-center gap-1 hover:underline cursor-pointer"
              >
                View All Mentors <ArrowRight size={13} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mentors.slice(0, 3).map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-gray-50/60 hover:bg-white p-5 rounded-2xl border border-gray-100 hover:border-violet-200 transition-all hover:shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-14 h-14 rounded-2xl object-cover border border-gray-200"
                      />
                      <span className="text-[10px] font-bold text-violet-700 bg-violet-100/80 px-2 py-0.5 rounded-full">
                        ${mentor.hourlyRate}/hr
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-900 text-sm">{mentor.name}</h4>
                    <p className="text-[11px] text-gray-500 font-medium">{mentor.role}</p>
                    <p className="text-[10px] text-violet-600 font-bold mb-3">@{mentor.company}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[9px] bg-white text-gray-600 px-2 py-0.5 rounded-md font-semibold border border-gray-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <button
                      onClick={() => onViewMentorProfile(mentor)}
                      className="w-full py-2 bg-white hover:bg-violet-50 text-violet-700 border border-violet-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => onBookSession(mentor)}
                      className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      Book 1-on-1
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity Timeline */}
          <section className="bg-white p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Recent Activity & Timeline</h3>
                <p className="text-xs text-gray-500 font-medium">Your live interactions across sessions, requests, and notes</p>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                Live Feed
              </span>
            </div>

            <div className="space-y-4">
              {activities.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-gray-50/80 transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className="p-2.5 bg-violet-50 text-violet-600 rounded-xl flex-shrink-0 mt-0.5">
                    {item.type === 'session' && <Calendar size={18} />}
                    {item.type === 'request' && <CheckCircle2 size={18} />}
                    {item.type === 'message' && <MessageSquare size={18} />}
                    {item.type === 'resource' && <BookOpen size={18} />}
                    {item.type === 'profile' && <History size={18} />}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-xs font-bold text-gray-900">{item.title}</h5>
                      <span className="text-[10px] text-gray-400 font-medium flex-shrink-0 flex items-center gap-1">
                        <Clock size={11} /> {item.time}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 4 Columns */}
        <div className="lg:col-span-4 space-y-8">
          {/* Upcoming Sessions Widget */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-extrabold text-gray-900 text-base">Upcoming Sessions</h3>
              <button
                onClick={() => onNavigateTab('sessions')}
                className="text-[11px] font-bold text-violet-600 hover:underline cursor-pointer"
              >
                Schedule →
              </button>
            </div>

            {upcomingSessions.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <Calendar size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-xs font-medium">No upcoming sessions</p>
                <button
                  onClick={() => onNavigateTab('find-mentors')}
                  className="mt-3 text-xs text-violet-600 font-bold hover:underline cursor-pointer"
                >
                  Book a session now
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingSessions.slice(0, 2).map((s) => (
                  <div
                    key={s.id}
                    className="p-4 rounded-2xl bg-gradient-to-r from-violet-50/70 to-indigo-50/50 border border-violet-100 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={s.mentorImage}
                          alt={s.mentorName}
                          className="w-10 h-10 rounded-xl object-cover border border-violet-200"
                        />
                        <div>
                          <h5 className="text-xs font-bold text-gray-900 leading-none">{s.mentorName}</h5>
                          <p className="text-[10px] text-gray-500 mt-1">{s.mentorCompany}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-violet-600 text-white px-2 py-0.5 rounded-md">
                        {s.time}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-violet-950/80 line-clamp-1">
                      {s.topic}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-violet-200/50">
                      <span className="text-[10px] font-bold text-gray-500">{s.date}</span>
                      <button
                        onClick={() => onJoinSession(s)}
                        className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-[11px] font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <Video size={12} /> Join Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Mentorship Requests Widget */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-extrabold text-gray-900 text-base">Mentorship Requests</h3>
              <button
                onClick={() => onNavigateTab('requests')}
                className="text-[11px] font-bold text-violet-600 hover:underline cursor-pointer"
              >
                View all ({requests.length}) →
              </button>
            </div>

            <div className="space-y-3">
              {requests.slice(0, 3).map((req) => (
                <div
                  key={req.id}
                  className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={req.mentorImage}
                      alt={req.mentorName}
                      className="w-9 h-9 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-900">{req.mentorName}</p>
                      <p className="text-[10px] text-gray-500 truncate max-w-[130px]">{req.topic}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${
                      req.status === 'Accepted'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : req.status === 'Pending'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Progress & Goal Tracker */}
          <section className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-extrabold text-gray-900 text-base">Monthly Goals & Progress</h3>
              <button
                onClick={() => setShowAddGoal(!showAddGoal)}
                className="p-1 rounded-lg text-violet-600 hover:bg-violet-50 transition-colors cursor-pointer"
                title="Add new goal"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Circular Progress Ring */}
            <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-violet-50/50 border border-violet-100">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#E2E8F0"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#7C3AED"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray="163.3"
                    strokeDashoffset={163.3 * (1 - progressPercent / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-black text-xs text-violet-950">
                  {progressPercent}%
                </span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">
                  {progressPercent >= 75 ? 'Outstanding Pace! 🚀' : 'Keep Pushing Forward! 💪'}
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  {completedGoalsCount} of {goals.length} milestones achieved this month.
                </p>
              </div>
            </div>

            {/* Add Goal Input */}
            {showAddGoal && (
              <form onSubmit={handleCreateGoal} className="mb-4 flex gap-2">
                <input
                  type="text"
                  placeholder="New milestone..."
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                  className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-violet-600 text-white rounded-xl text-xs font-bold hover:bg-violet-700 cursor-pointer"
                >
                  Add
                </button>
              </form>
            )}

            {/* Goals Checklist */}
            <div className="space-y-2">
              {goals.map((g) => (
                <div
                  key={g.id}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                    g.isCompleted
                      ? 'bg-emerald-50/50 border-emerald-100 text-gray-400'
                      : 'bg-gray-50 border-gray-100 hover:border-violet-200 text-gray-800'
                  }`}
                >
                  <div
                    onClick={() => onToggleGoal(g.id)}
                    className="flex items-center gap-3 flex-grow cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center border flex-shrink-0 transition-colors ${
                        g.isCompleted
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {g.isCompleted && <Check size={10} strokeWidth={3} />}
                    </div>
                    <span className={`text-xs font-medium leading-snug ${g.isCompleted ? 'line-through' : ''}`}>
                      {g.title}
                    </span>
                  </div>

                  {onDeleteGoal && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteGoal(g.id);
                      }}
                      className="text-gray-300 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                      title="Delete goal"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
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
