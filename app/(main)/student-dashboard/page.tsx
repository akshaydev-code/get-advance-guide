"use client";

import React from 'react';
import { 
  LayoutDashboard, Search, MessageSquare, Users, 
  Calendar, BookOpen, UserCircle, Settings, LogOut, 
  Bell, ChevronDown, ArrowRight, Star, Heart,
  Clock, CheckCircle2, History
} from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar - Consistent with Mentor View */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col fixed h-full z-20">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#6342E8] rounded-lg flex items-center justify-center text-white font-bold italic">AG</div>
          <span className="text-lg font-bold text-[#1A1A1A]">GetAdvanceGuide</span>
        </div>

        <nav className="flex-grow px-4 space-y-1">
          <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <SidebarLink icon={<Search size={20} />} label="Find Mentors" />
          <SidebarLink icon={<MessageSquare size={20} />} label="Requests" />
          <SidebarLink icon={<Users size={20} />} label="My Mentors" />
          <SidebarLink icon={<Calendar size={20} />} label="Sessions" />
          <SidebarLink icon={<MessageSquare size={20} />} label="Messages" badge={2} />
          <SidebarLink icon={<BookOpen size={20} />} label="Resources" />
          <SidebarLink icon={<UserCircle size={20} />} label="Profile" />
          <SidebarLink icon={<Settings size={20} />} label="Settings" />
        </nav>

        {/* Upgrade Pro Card */}
        <div className="p-4 mx-4 mb-6 bg-indigo-50 rounded-2xl border border-indigo-100">
           <h4 className="text-sm font-bold text-indigo-900 flex items-center gap-2">
             Upgrade to Pro ✨
           </h4>
           <p className="text-[10px] text-indigo-700 mt-1 mb-3">Unlock exclusive features and connect with top expert mentors.</p>
           <button className="w-full bg-[#6342E8] text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#5235cc] transition-colors">
             Upgrade Now <ArrowRight size={12} />
           </button>
        </div>

        <div className="p-6 border-t border-gray-50">
          <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors font-medium text-sm">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-64">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-grow max-w-xl">
             <div className="p-2 bg-gray-50 rounded-lg"><LayoutDashboard size={18} className="text-gray-400" /></div>
             <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="text" placeholder="Search mentors, skills or topics..." className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 text-sm focus:ring-2 focus:ring-purple-500" />
             </div>
          </div>

          <div className="flex items-center gap-6">
            <MessageSquare size={20} className="text-gray-400 cursor-pointer" />
            <div className="relative cursor-pointer">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">3</span>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900 leading-none">Ankit Sharma</p>
                <p className="text-[10px] text-gray-400 font-medium">Student</p>
              </div>
              <img src="https://i.pravatar.cc/150?u=ankit" className="w-10 h-10 rounded-full border border-gray-100" />
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Welcome Banner */}
          <section className="bg-gradient-to-r from-[#F3F0FF] to-[#E9E4FF] rounded-[2.5rem] p-10 flex justify-between items-center relative overflow-hidden">
            <div className="z-10">
              <p className="text-sm font-bold text-gray-800 mb-2">Welcome <span className="text-indigo-600">back, Ankit</span> 👋</p>
              <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Keep learning, keep growing.</h1>
              <p className="text-gray-600 mb-8 max-w-sm text-sm">Connect with expert mentors and take the next step towards your personal and professional goals.</p>
              <div className="flex gap-4">
                <button className="bg-[#6342E8] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all shadow-purple-200">
                  Find a Mentor <ArrowRight size={18} />
                </button>
                <button className="bg-white text-[#6342E8] px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-purple-100">
                  View Resources <BookOpen size={18} />
                </button>
              </div>
            </div>
            <img src="https://via.placeholder.com/300x250/F3F0FF/6342E8?text=Student+Illustration" className="w-[380px] mix-blend-multiply" />
          </section>

          <div className="grid grid-cols-12 gap-8">
            {/* Middle Content */}
            <div className="col-span-8 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4">
                <StatBox label="Requests Sent" value="12" icon={<Users className="text-purple-600" />} />
                <StatBox label="Accepted" value="5" icon={<CheckCircle2 className="text-indigo-600" />} />
                <StatBox label="Sessions Completed" value="7" icon={<Calendar className="text-purple-600" />} />
                <StatBox label="Average Rating" value="4.9" icon={<Star className="text-purple-600" />} />
              </div>

              {/* Recommended Mentors */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Recommended Mentors for You</h3>
                  <button className="text-[10px] font-bold text-[#6342E8] flex items-center gap-1">View All Mentors <ArrowRight size={12}/></button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <MentorCard name="Arjun Sharma" role="Full Stack Developer" tags={['React', 'Node.js', 'MongoDB']} />
                  <MentorCard name="Priya Verma" role="Data Scientist" tags={['Python', 'ML', 'AI']} />
                  <MentorCard name="Rahul Mehta" role="Product Designer" tags={['UI/UX', 'Figma']} />
                  <MentorCard name="Neha Kapoor" role="Career Coach" tags={['Resume', 'Interview']} />
                </div>
              </section>

              {/* Recent Activity */}
              <section className="bg-white p-6 rounded-[2rem] border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-gray-900">Recent Activity</h3>
                   <button className="text-[10px] font-bold text-[#6342E8]">View All Activity →</button>
                </div>
                <div className="space-y-6">
                   <ActivityItem icon={<Clock className="text-purple-600" />} text="You sent a mentorship request to Arjun Sharma" time="2 hours ago" />
                   <ActivityItem icon={<CheckCircle2 className="text-green-600" />} text="Rahul Mehta accepted your mentorship request" time="1 day ago" />
                   <ActivityItem icon={<History className="text-indigo-600" />} text="Session completed with Priya Verma" time="2 days ago" />
                </div>
              </section>
            </div>

            {/* Right Content */}
            <div className="col-span-4 space-y-8">
              {/* Upcoming Sessions */}
              <section className="bg-white p-6 rounded-[2rem] border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Upcoming Sessions</h3>
                  <button className="text-[10px] font-bold text-[#6342E8]">View Calendar →</button>
                </div>
                <div className="space-y-4">
                  <UpcomingItem name="Priya Verma" date="25 May" time="10:00 AM" />
                  <UpcomingItem name="Rahul Mehta" date="26 May" time="03:00 PM" />
                </div>
                <button className="w-full text-center text-[10px] font-bold text-gray-400 mt-6 hover:text-indigo-600">View All Sessions →</button>
              </section>

              {/* Mentorship Requests */}
              <section className="bg-white p-6 rounded-[2rem] border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Mentorship Requests</h3>
                  <button className="text-[10px] font-bold text-[#6342E8]">View All →</button>
                </div>
                <div className="space-y-5">
                  <RequestItem name="Amit Sharma" status="Pending" color="amber" />
                  <RequestItem name="Karan Patel" status="Accepted" color="green" />
                  <RequestItem name="Sneha Iyer" status="Rejected" color="red" />
                </div>
              </section>

              {/* Progress Tracking */}
              <section className="bg-white p-6 rounded-[2rem] border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-gray-900">Your Progress</h3>
                   <select className="text-[10px] font-bold text-gray-400 bg-gray-50 border-none rounded-lg p-1 outline-none">
                     <option>This Month</option>
                   </select>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16">
                     <svg className="w-full h-full transform -rotate-90">
                       <circle cx="32" cy="32" r="28" stroke="#F1F5F9" strokeWidth="6" fill="transparent" />
                       <circle cx="32" cy="32" r="28" stroke="#6342E8" strokeWidth="6" fill="transparent" strokeDasharray="175.9" strokeDashoffset={175.9 * (1 - 0.75)} strokeLinecap="round" />
                     </svg>
                     <span className="absolute inset-0 flex items-center justify-center font-black text-sm">75%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-900 text-sm">Great Progress!</h4>
                    <p className="text-[10px] text-gray-400">You have completed 75% of your mentorship goals this month.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <ProgressBar label="Sessions Completed" current={15} total={20} />
                  <ProgressBar label="Goals Achieved" current={3} total={4} />
                  <ProgressBar label="Resources Learned" current={8} total={10} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-components
function SidebarLink({ icon, label, active = false, badge = 0 }: { icon: React.ReactNode, label: string, active?: boolean, badge?: number }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-50 text-[#6342E8]' : 'text-gray-400 hover:bg-gray-50'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className={`text-sm font-bold ${active ? 'text-[#6342E8]' : 'text-gray-500'}`}>{label}</span>
      </div>
      {badge > 0 && <span className="bg-[#6342E8] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">{badge}</span>}
    </div>
  );
}

function StatBox({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 group hover:border-purple-200 transition-all cursor-pointer">
      <div className="p-2 bg-gray-50 rounded-lg w-fit mb-4 group-hover:bg-purple-50 transition-colors">{icon}</div>
      <h2 className="text-2xl font-black text-gray-900">{value}</h2>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{label}</p>
      <button className="text-[10px] font-bold text-[#6342E8] mt-3 flex items-center gap-1">View all <ArrowRight size={10}/></button>
    </div>
  );
}

function MentorCard({ name, role, tags }: { name: string, role: string, tags: string[] }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 relative group">
      <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"><Heart size={16} /></button>
      <img src={`https://i.pravatar.cc/150?u=${name}`} className="w-16 h-16 rounded-full mx-auto mb-3" />
      <h4 className="text-sm font-bold text-gray-900 text-center">{name}</h4>
      <p className="text-[10px] text-gray-400 text-center mb-3">{role}</p>
      <div className="flex flex-wrap gap-1 justify-center mb-4">
        {tags.map((t: string) => (
          <span key={t} className="text-[8px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full font-medium border border-gray-100">{t}</span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 text-[10px] font-bold mb-4">
        <Star size={12} className="text-amber-400 fill-amber-400" />
        <span>4.9 <span className="text-gray-300 font-normal">(120)</span></span>
      </div>
      <button className="w-full py-2 bg-white border border-[#6342E8] text-[#6342E8] text-xs font-bold rounded-lg hover:bg-[#6342E8] hover:text-white transition-all">View Profile</button>
    </div>
  );
}

function UpcomingItem({ name, date, time }: { name: string, date: string, time: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={`https://i.pravatar.cc/150?u=${name}`} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-xs font-bold text-gray-900">{name}</p>
          <p className="text-[10px] text-gray-400">Data Scientist</p>
          <span className="text-[8px] text-[#6342E8] font-bold bg-purple-50 px-2 py-0.5 rounded mt-1 inline-block">Upcoming</span>
        </div>
      </div>
      <div className="text-right p-2 bg-purple-50 rounded-xl min-w-[50px]">
        <p className="text-xs font-black text-[#6342E8] leading-none">{date.split(' ')[0]}</p>
        <p className="text-[8px] font-bold text-[#6342E8] uppercase">{date.split(' ')[1]}</p>
        <p className="text-[8px] text-gray-400 mt-1 font-bold">{time}</p>
      </div>
    </div>
  );
}

function RequestItem({ name, status, color }: { name: string, status: string, color: string }) {
  const colors: { [key: string]: string } = {
    amber: 'bg-amber-50 text-amber-600',
    green: 'bg-green-50 text-green-600',
    red: 'bg-red-50 text-red-600'
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={`https://i.pravatar.cc/150?u=${name}`} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-xs font-bold text-gray-900">{name}</p>
          <p className="text-[10px] text-gray-400">Web Developer</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
         <span className={`text-[8px] font-bold px-2 py-0.5 rounded ${colors[color]}`}>{status}</span>
         <button className="text-gray-300"><Settings size={12} /></button>
      </div>
    </div>
  );
}

function ProgressBar({ label, current, total }: { label: string, current: number, total: number }) {
  const percentage = (current / total) * 100;
  return (
    <div>
      <div className="flex justify-between text-[10px] font-bold mb-1.5">
        <span className="text-gray-500 uppercase tracking-tighter">{label}</span>
        <span className="text-gray-400">{current} / {total}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
        <div className="h-full bg-[#6342E8] rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function ActivityItem({ icon, text, time }: { icon: React.ReactNode, text: string, time: string }) {
  return (
    <div className="flex items-start gap-4">
       <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
       <div>
         <p className="text-xs font-medium text-gray-700 leading-snug">{text}</p>
         <p className="text-[10px] text-gray-400 mt-1">{time}</p>
       </div>
    </div>
  );
}