"use client";

import React from 'react';
import {
  LayoutDashboard, UserCircle, MessageSquare, Users,
  Calendar, Wallet, FileText, Star, Settings, LogOut,
  Search, Bell, MessageCircle, ChevronDown, Share2,
  ArrowRight, MoreHorizontal, TrendingUp
} from 'lucide-react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper/MaxWidthWrapper';

const data = [
  { name: '1 May', value: 10000 },
  { name: '8 May', value: 15000 },
  { name: '15 May', value: 25000 },
  { name: '22 May', value: 20000 },
  { name: '29 May', value: 28000 },
];

export default function MentorDashboard() {
  return (
    <MaxWidthWrapper>
      <div className="flex min-h-screen bg-[#F8FAFC]">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-100 flex flex-col fixed h-full z-20">
          <div className="p-6 pl-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6342E8] rounded-lg flex items-center justify-center text-white font-bold italic">AG</div>
            <span className="text-lg font-bold text-[#1A1A1A]">GetAdvanceGuide</span>
          </div>

          <nav className="flex-grow pr-4 space-y-1">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
            <NavItem icon={<UserCircle size={20} />} label="My Profile" />
            <NavItem icon={<MessageSquare size={20} />} label="Requests" badge={6} />
            <NavItem icon={<Calendar size={20} />} label="My Sessions" />
            <NavItem icon={<Users size={20} />} label="My Students" />
            <NavItem icon={<Wallet size={20} />} label="Earnings" />
            <NavItem icon={<MessageCircle size={20} />} label="Messages" badge={3} />
            <NavItem icon={<FileText size={20} />} label="Resources" />
            <NavItem icon={<Star size={20} />} label="Reviews" />
            <NavItem icon={<Settings size={20} />} label="Settings" />
          </nav>

          <div className="p-4 mx-4 mb-6 bg-indigo-50 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-sm font-bold text-indigo-900 flex items-center gap-2">
                Upgrade to Pro ✨
              </h4>
              <p className="text-[10px] text-indigo-700 mt-1 mb-3">Unlock advanced features to grow your mentorship.</p>
              <button className="w-full bg-[#6342E8] text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center gap-2">
                Upgrade Now <ArrowRight size={12} />
              </button>
            </div>
          </div>

          <div className="p-6 border-t border-gray-50">
            <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors font-medium">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow ml-64">
          {/* Header */}
          <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-grow">
              <div className="p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"><MoreHorizontal size={20} /></div>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Search students, topics, or sessions..." className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 text-sm focus:ring-2 focus:ring-purple-500" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative cursor-pointer"><MessageCircle size={22} className="text-gray-600" /></div>
              <div className="relative cursor-pointer">
                <Bell size={22} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">5</span>
              </div>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-100 cursor-pointer">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 leading-none">Rahul Mehta</p>
                  <p className="text-[10px] text-gray-400 font-medium">Mentor</p>
                </div>
                <img src="https://i.pravatar.cc/150?u=rahul" className="w-10 h-10 rounded-full border-2 border-purple-100" />
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </header>

          <div className="p-8 space-y-8">
            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-[#F3F0FF] to-[#E9E4FF] rounded-[2rem] p-10 flex justify-between items-center relative overflow-hidden">
              <div className="z-10">
                <p className="text-sm font-bold text-gray-800 mb-2">Welcome back, Rahul! 👋</p>
                <h1 className="text-4xl font-black text-gray-900 mb-4">Inspire. Guide. Empower.</h1>
                <p className="text-gray-600 mb-8 max-w-sm">You are making a difference in students lives. Here is an overview of your mentorship journey.</p>
                <div className="flex gap-4">
                  <button className="bg-[#6342E8] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all shadow-purple-200">
                    View My Profile <ArrowRight size={18} />
                  </button>
                  <button className="bg-white text-[#6342E8] px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-purple-100 hover:bg-gray-50 transition-all">
                    Share Your Profile <Share2 size={18} />
                  </button>
                </div>
              </div>
              {/* Replace with your illustration image */}
              <img src="https://via.placeholder.com/300x250/F3F0FF/6342E8?text=Mentor+Graphic" className="w-[350px] mix-blend-multiply" />
            </section>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-12 gap-8">

              {/* Left/Middle Column (Stats & Lists) */}
              <div className="col-span-8 space-y-8">
                {/* Stats Row */}
                <div className="grid grid-cols-5 gap-4">
                  <StatCard icon={<Users size={18} />} color="bg-purple-100" textColor="text-purple-600" label="Total Students" value="15" />
                  <StatCard icon={<Calendar size={18} />} color="bg-blue-100" textColor="text-blue-600" label="Sessions Done" value="20" />
                  <StatCard icon={<ArrowRight size={18} />} color="bg-indigo-100" textColor="text-indigo-600" label="Upcoming" value="7" />
                  <StatCard icon={<Star size={18} />} color="bg-amber-100" textColor="text-amber-600" label="Avg Rating" value="4.8" />
                  {/* <StatCard label="Total Earnings" value="₹18,450" isMoney /> */}
                </div>

                {/* Lists Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <UpcomingSessions />
                  <RecentReviews />
                </div>

                {/* Impact Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 relative overflow-hidden">
                  <h3 className="text-lg font-bold mb-1">Your Impact</h3>
                  <p className="text-xs text-gray-400 mb-8">You are changing lives and helping students achieve their goals.</p>
                  <div className="grid grid-cols-4 gap-4">
                    <ImpactMetric label="Hours Mentored" value="48" sub="This Month" />
                    <ImpactMetric label="Students Helped" value="15" sub="This Month" />
                    <ImpactMetric label="Topics Covered" value="12" sub="This Month" />
                    <ImpactMetric label="Resources Shared" value="8" sub="This Month" />
                  </div>
                  <div className="absolute right-8 bottom-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -z-10" />
                </div>
              </div>

              {/* Right Column (Requests & Chart) */}
              <div className="col-span-4 space-y-8">
                <StudentRequests />
                <EarningsOverview />
                <ProfileCompletion />
              </div>

            </div>
          </div>
        </main>
      </div>
    </MaxWidthWrapper>
  );
}

// Sub-components
function NavItem({ icon, label, active = false, badge = 0 }: { icon: React.ReactNode, label: string, active?: boolean, badge?: number }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-50 text-[#6342E8]' : 'text-gray-500 hover:bg-gray-50'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className={`text-sm font-bold ${active ? 'text-[#6342E8]' : 'text-gray-500'}`}>{label}</span>
      </div>
      {badge > 0 && <span className="bg-[#6342E8] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{badge}</span>}
    </div>
  );
}

function StatCard({ icon, label, value, color, textColor, isMoney = false }: { icon: React.ReactNode, label: string, value: string, color: string, textColor: string, isMoney?: boolean }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      {!isMoney && <div className={`${color} ${textColor} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>{icon}</div>}
      {isMoney && <div className="text-lg font-bold text-gray-800 mb-4">💰</div>}
      <h2 className="text-2xl font-black text-gray-900">{value}</h2>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">{label}</p>
      <button className="text-[10px] font-bold text-[#6342E8] mt-3 flex items-center gap-1">View all <ArrowRight size={10} /></button>
    </div>
  );
}

function UpcomingSessions() {
  const sessions = [
    { name: 'Priya Verma', role: 'Data Science Guidance', time: '10:00 AM', date: '25 May, 2024' },
    { name: 'Amit Sharma', role: 'Web Development', time: '03:00 PM', date: '26 May, 2024' },
    { name: 'Sneha Iyer', role: 'Career Guidance', time: '11:00 AM', date: '27 May, 2024' },
  ];
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Upcoming Sessions</h3>
        <button className="text-[10px] font-bold text-[#6342E8]">View Calendar →</button>
      </div>
      <div className="space-y-4">
        {sessions.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-bold text-gray-900">{s.name}</p>
                <p className="text-[10px] text-gray-500 font-medium">{s.role}</p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <p className="text-[10px] text-gray-400 font-bold">{s.date} | {s.time}</p>
              <button className="px-3 py-1 bg-[#6342E8]/10 text-[#6342E8] text-[10px] font-bold rounded-lg border border-purple-100">Start Session</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentRequests() {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Student Requests</h3>
        <button className="text-[10px] font-bold text-[#6342E8]">View All →</button>
      </div>
      <div className="space-y-5">
        {['Karan Patel', 'Riya Singh', 'Vikram Joshi'].map((name, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/100?u=${name}`} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-xs font-bold text-gray-900">{name}</p>
                  <p className="text-[10px] text-gray-400">ML Engineering</p>
                </div>
              </div>
              <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded font-bold">Pending</span>
            </div>
            <div className="flex gap-2 pl-12">
              <button className="flex-grow py-1.5 bg-[#6342E8] text-white text-[10px] font-bold rounded-lg">Accept</button>
              <button className="flex-grow py-1.5 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold rounded-lg hover:bg-gray-50">Decline</button>
            </div>
          </div>
        ))}
        <button className="w-full text-[10px] font-bold text-indigo-600 pt-4">View All Requests →</button>
      </div>
    </div>
  );
}

function EarningsOverview() {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Earnings Overview</h3>
        <button className="text-[10px] font-bold text-gray-400 border border-gray-100 px-2 py-1 rounded-lg">This Month <ChevronDown size={10} className="inline" /></button>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900">₹18,450</h2>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-[10px] text-gray-400">Total Earnings</p>
          <span className="text-[10px] text-green-500 font-bold flex items-center"><TrendingUp size={10} /> 12% vs last month</span>
        </div>
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6342E8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6342E8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#6342E8" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ProfileCompletion() {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
      <h3 className="font-bold text-gray-900 mb-6">Profile Completion</h3>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
            <circle cx="48" cy="48" r="40" stroke="#6342E8" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.85)} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-black text-xl">85%</div>
        </div>
        <div>
          <h4 className="font-bold text-indigo-900 text-sm">Great Job!</h4>
          <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">Complete your profile to get more students and grow your impact.</p>
        </div>
      </div>
      <button className="w-full mt-6 bg-[#6342E8] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2">Complete Profile <ArrowRight size={14} /></button>
    </div>
  );
}

function RecentReviews() {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Recent Reviews</h3>
        <button className="text-[10px] font-bold text-[#6342E8]">View All Reviews →</button>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="border-b border-gray-50 pb-4 last:border-0">
            <div className="flex justify-between mb-1">
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold">Priya Verma</p>
                <div className="flex text-amber-400"><Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /></div>
              </div>
              <span className="text-[8px] text-gray-400 font-bold">20 May, 2024</span>
            </div>
            <p className="text-[10px] text-gray-500 italic leading-relaxed">Rahul sir is an amazing mentor. His guidance helped me understand complex topics easily.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ImpactMetric({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
      <p className="text-[8px] text-gray-400 font-bold uppercase mb-1">{label}</p>
      <h4 className="text-xl font-black text-indigo-950">{value}</h4>
      <p className="text-[8px] text-indigo-500 font-bold mt-1">{sub}</p>
    </div>
  )
}