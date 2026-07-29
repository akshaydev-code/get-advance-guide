import React from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  ChevronRight, 
  Download, 
  Play, 
  FileText, 
  Compass, 
  BookOpen, 
  Video, 
  Layers, 
  Star, 
  Mail, 
  Phone, 
//   ExternalLink,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram
} from 'lucide-react';

export default function ResourceHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
              <span>AG</span>
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
              GetAdvanceGuide
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Mentors</a>
            <a href="#" className="hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#" className="text-purple-600 font-semibold relative after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600">Resources</a>
            <a href="#" className="hover:text-purple-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 px-4 py-2">
              Login
            </button>
            <button className="text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-purple-600/20 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-6">
            ✨ Resources
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Your Ultimate Learning & Career <span className="text-purple-600">Resource Hub</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Explore high-quality articles, guides, templates, roadmaps, videos and tools to help you learn, grow and achieve your career goals.
              </p>

              {/* Search Bar */}
              <div className="flex items-center gap-3 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search resources..." 
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm"
                  />
                </div>
                <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-2xl shadow-sm transition-all">
                  <Filter className="w-4 h-4 text-slate-500" /> Filter
                </button>
              </div>

              {/* Stats Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { label: "500+ Articles", icon: BookOpen },
                  { label: "200+ Guides", icon: FileText },
                  { label: "100+ Templates", icon: Layers },
                  { label: "50+ Videos", icon: Video },
                  { label: "20+ Roadmaps", icon: Compass },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700">
                    <stat.icon className="w-4 h-4 text-purple-600" />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Visual Graphic */}
            <div className="lg:col-span-5 relative hidden lg:flex justify-center">
              <div className="w-full bg-gradient-to-tr from-purple-100/70 to-indigo-100/70 rounded-3xl p-8 border border-purple-200/50 shadow-lg text-center relative min-h-[320px] flex flex-col items-center justify-center">
                <div className="absolute top-6 left-6 bg-white px-3 py-1.5 rounded-xl shadow text-xs font-bold text-purple-700">Articles</div>
                <div className="absolute top-6 right-6 bg-white px-3 py-1.5 rounded-xl shadow text-xs font-bold text-indigo-700">Guides</div>
                <div className="absolute bottom-6 left-6 bg-white px-3 py-1.5 rounded-xl shadow text-xs font-bold text-blue-700">Templates</div>
                <div className="absolute bottom-6 right-6 bg-white px-3 py-1.5 rounded-xl shadow text-xs font-bold text-emerald-700">Roadmaps</div>
                
                <div className="w-20 h-20 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-xl mb-4 text-3xl font-bold">
                  👩‍💻
                </div>
                <div className="font-bold text-slate-800 text-sm">Empowering Your Growth Journey</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BROWSE BY CATEGORIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Browse by <span className="text-purple-600">Categories</span>
          </h2>
          <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1">
            View all categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Resume", links: ["Templates", "ATS Tips", "Portfolio"], icon: FileText },
            // { title: "Interview", links: ["HR Questions", "Technical Q&A", "Behavioral"], icon: UsersIcon = () => <Users className="w-5 h-5 text-purple-600" /> },
            { title: "Career", links: ["Career Advice", "Salary Guide", "Promotion Tips"], icon: Compass },
            { title: "Skills", links: ["Soft Skills", "Technical Skills", "Certifications"], icon: Layers },
            { title: "College", links: ["Placements", "Internships", "Higher Studies"], icon: BookOpen },
            { title: "Productivity", links: ["Time Management", "Study Tips", "Goal Setting"], icon: Star },
          ].map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-purple-300 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-bold">
                  📁
                </div>
                <h3 className="font-bold text-lg text-slate-900">{cat.title}</h3>
              </div>
              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {cat.links.map((link, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm text-slate-600 hover:text-purple-600 cursor-pointer font-medium py-1">
                    <span>{link}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="text-xs font-bold text-purple-600 cursor-pointer hover:underline">Explore &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED RESOURCES */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Featured <span className="text-purple-600">Resources</span>
            </h2>
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1">
              View all resources <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "GUIDE", title: "Resume Writing Complete Guide", desc: "Step-by-step guide to create an ATS-friendly resume that gets you noticed.", time: "8 min read", badgeBg: "bg-purple-100 text-purple-700" },
              { type: "ROADMAP", title: "Frontend Developer Roadmap 2024", desc: "Complete roadmap to become a frontend developer in 2024.", time: "12 min read", badgeBg: "bg-blue-100 text-blue-700" },
              { type: "CHECKLIST", title: "Interview Preparation Checklist", desc: "Download the ultimate checklist to crack any interview.", time: "6 min read", badgeBg: "bg-emerald-100 text-emerald-700" },
              { type: "GUIDE", title: "LinkedIn Profile Optimization", desc: "Optimize your LinkedIn profile and attract the right opportunities.", time: "7 min read", badgeBg: "bg-purple-100 text-purple-700" },
              { type: "TEMPLATE", title: "Resume Template (ATS Friendly)", desc: "Professional resume template for all job roles.", time: "PDF", badgeBg: "bg-amber-100 text-amber-700" },
              { type: "VIDEO", title: "Mock Interview Session", desc: "Watch expert-led mock interview sessions and improve your skills.", time: "18 min", badgeBg: "bg-indigo-100 text-indigo-700" },
            ].map((res, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full ${res.badgeBg}`}>
                    {res.type}
                  </span>
                  <h3 className="font-bold text-base text-slate-900">{res.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{res.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span>{res.time}</span>
                  <button className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POPULAR CAREER ROADMAPS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Popular Career <span className="text-purple-600">Roadmaps</span>
          </h2>
          <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1">
            View all roadmaps <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Full Stack Developer", duration: "12-18 Months", skills: "25+ Skills" },
            { title: "Data Scientist", duration: "10-14 Months", skills: "20+ Skills" },
            { title: "AI & ML Engineer", duration: "12-16 Months", skills: "30+ Skills" },
            { title: "DevOps Engineer", duration: "8-12 Months", skills: "20+ Skills" },
            { title: "Cyber Security Analyst", duration: "10-14 Months", skills: "25+ Skills" },
            { title: "UI/UX Designer", duration: "6-10 Months", skills: "15+ Skills" },
          ].map((roadmap, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:border-purple-300 transition-all">
              <h3 className="font-bold text-lg text-slate-900">{roadmap.title}</h3>
              <div className="space-y-1.5 text-xs text-slate-500 font-medium">
                <div>⏱ {roadmap.duration}</div>
                <div>🛠 {roadmap.skills}</div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-600 cursor-pointer">Explore roadmap</span>
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TOP DOWNLOADS & VIDEO RESOURCES */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          
          {/* Top Downloads */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-slate-900">Top Downloads & Templates</h3>
              <span className="text-xs text-purple-600 font-semibold cursor-pointer">View all downloads</span>
            </div>
            <div className="space-y-3">
              {[
                { title: "Resume Template (ATS Friendly)", desc: "Professional resume template for all job roles." },
                { title: "Interview Questions PDF", desc: "Top 100 HR & Technical interview questions." },
                { title: "Placement Preparation Planner", desc: "Plan your placement preparation effectively." },
                { title: "Goal Tracking Worksheet", desc: "Track your goals and achieve success." },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-xs text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Video Resources */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-slate-900">Video Resources</h3>
              <span className="text-xs text-purple-600 font-semibold cursor-pointer">View all videos</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Resume Review By Industry Expert", time: "24 min" },
                { title: "Mock Interview Full Session", time: "32 min" },
                { title: "LinkedIn Profile Optimization", time: "18 min" },
                { title: "Career Roadmap Explained", time: "16 min" },
              ].map((vid, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-28 bg-slate-200 rounded-xl relative flex items-center justify-center text-white">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow">
                      <Play className="w-3.5 h-3.5 fill-white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 truncate">{vid.title}</h4>
                  <p className="text-[10px] text-slate-400">{vid.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. MENTOR TIPS FOR YOU */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Mentor <span className="text-purple-600">Tips for You</span>
          </h2>
          <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1">
            View all tips <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { quote: "Build projects, not just certificates. Real skills matter more.", author: "Arjun Sharma", role: "Senior Software Engineer" },
            { quote: "Practice interviews regularly. Consistency builds confidence.", author: "Neha Kapoor", role: "Product Manager" },
            { quote: "Keep learning and stay updated with industry trends.", author: "Vikram Singh", role: "Tech Lead" },
            { quote: "A strong LinkedIn profile can open many doors for you.", author: "Pooja Verma", role: "HR Manager" },
            { quote: "Focus on solving real problems and creating impact.", author: "Rahul Mehta", role: "Founder & Mentor" },
          ].map((tip, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <p className="text-xs text-slate-600 italic leading-relaxed">{tip.quote}</p>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-700">👤</div>
                <div>
                  <h4 className="font-bold text-[11px] text-slate-900">{tip.author}</h4>
                  <p className="text-[9px] text-slate-400">{tip.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Stay Updated with Latest Resources</h2>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
              Subscribe to our newsletter and get weekly updates on new articles, guides, templates, roadmaps and more.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto z-10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-sm placeholder:text-purple-200 text-white focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-72"
            />
            <button className="bg-white text-purple-900 hover:bg-purple-50 font-bold text-sm px-6 py-3 rounded-xl shadow transition-all shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* 9. DETAILED FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/60">
          
          {/* Logo & Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-lg px-2.5 py-1 rounded-lg">
                AG
              </div>
              <span className="font-bold text-base text-slate-900">GetAdvanceGuide</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Empowering learners through mentorship, resources and guidance to achieve their goals and unlock their potential.
            </p>
            {/* <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm cursor-pointer"><Facebook className="w-3.5 h-3.5" /></div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm cursor-pointer"><Twitter className="w-3.5 h-3.5" /></div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm cursor-pointer"><Linkedin className="w-3.5 h-3.5" /></div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm cursor-pointer"><Instagram className="w-3.5 h-3.5" /></div>
            </div> */}
          </div>

          {/* Blogs */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Blogs</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#" className="hover:text-purple-600">Career Advice</a></li>
              <li><a href="#" className="hover:text-purple-600">Interview Tips</a></li>
              <li><a href="#" className="hover:text-purple-600">Resume Tips</a></li>
              <li><a href="#" className="hover:text-purple-600">Industry Insights</a></li>
              <li><a href="#" className="hover:text-purple-600">Technical Blogs</a></li>
            </ul>
          </div>

          {/* Guides */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Guides</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#" className="hover:text-purple-600">Resume Guide</a></li>
              <li><a href="#" className="hover:text-purple-600">Interview Guide</a></li>
              <li><a href="#" className="hover:text-purple-600">Career Guide</a></li>
              <li><a href="#" className="hover:text-purple-600">LinkedIn Guide</a></li>
              <li><a href="#" className="hover:text-purple-600">Salary Guide</a></li>
            </ul>
          </div>

          {/* GAQ */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">GAQ</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#" className="hover:text-purple-600">General Questions</a></li>
              <li><a href="#" className="hover:text-purple-600">Booking & Sessions</a></li>
              <li><a href="#" className="hover:text-purple-600">Payments</a></li>
              <li><a href="#" className="hover:text-purple-600">Mentorship</a></li>
              <li><a href="#" className="hover:text-purple-600">Account Help</a></li>
            </ul>
          </div>

          {/* Help Center & Need Help */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Help Center</h4>
            <ul className="space-y-2 text-xs text-slate-600 pb-2">
              <li><a href="#" className="hover:text-purple-600">Getting Started</a></li>
              <li><a href="#" className="hover:text-purple-600">Account & Profile</a></li>
              <li><a href="#" className="hover:text-purple-600">Payments & Refunds</a></li>
            </ul>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <h5 className="font-bold text-xs text-slate-900">Need Help?</h5>
              <p className="text-[10px] text-slate-500">We are here to help you out!</p>
              <div className="text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-600" /> support@getadvanceguide.com
              </div>
              <div className="text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-600" /> +91 98765 43210
              </div>
              <button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs py-2 rounded-xl shadow">
                Contact Us
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Bottom Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© 2024 GetAdvanceGuide. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Refund Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}