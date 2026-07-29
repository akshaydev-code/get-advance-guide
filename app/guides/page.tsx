import React from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Bookmark, 
  Download, 
  BookOpen, 
  Users, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Zap, 
  Mail 
} from 'lucide-react';

export default function GuidesPage() {
  const guides = [
    {
      category: "Resume",
      categoryColor: "bg-purple-100 text-purple-700",
      title: "Complete Resume Writing Guide (Step-by-Step)",
      desc: "Create an ATS-friendly resume that gets you noticed.",
      readTime: "8 min read",
      imageBg: "bg-slate-200"
    },
    {
      category: "Interview",
      categoryColor: "bg-blue-100 text-blue-700",
      title: "Interview Preparation Guide 2024",
      desc: "A complete guide to crack your next interview with confidence.",
      readTime: "10 min read",
      imageBg: "bg-slate-200"
    },
    {
      category: "Career",
      categoryColor: "bg-indigo-100 text-indigo-700",
      title: "Career Change Guide: Switch to a New Domain",
      desc: "Step-by-step process to transition into a new career.",
      readTime: "9 min read",
      imageBg: "bg-slate-200"
    },
    {
      category: "Skills",
      categoryColor: "bg-emerald-100 text-emerald-700",
      title: "Guide to Learn Coding from Scratch",
      desc: "Start your coding journey with this beginner-friendly guide.",
      readTime: "12 min read",
      imageBg: "bg-slate-200"
    }
  ];

  const collections = [
    { title: "Complete Interview Preparation", count: "18 Guides", desc: "Everything you need to ace your interviews." },
    { title: "Resume Mastery Collection", count: "12 Guides", desc: "Create a perfect resume and stand out." },
    { title: "Career Growth Paths", count: "15 Guides", desc: "Step-by-step guides to grow in your career." },
    { title: "Technical Skills Guides", count: "20 Guides", desc: "Learn in-demand technical skills with ease." }
  ];

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
            <a href="#" className="text-purple-600 font-semibold flex items-center gap-1 relative after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600">
              Resources <ChevronDown className="w-3.5 h-3.5" />
            </a>
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
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/40 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mb-6">
            <a href="#" className="hover:underline">Resources</a>
            <span>&gt;</span>
            <span className="text-slate-500">Guides</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Guides to Accelerate Your <span className="text-purple-600">Career Growth</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Step-by-step guides to help you learn, prepare and grow in your career.
              </p>

              <div className="flex items-center gap-3 pt-4 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search guides..." 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm"
                  />
                </div>
                <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl shadow-sm transition-all">
                  <Filter className="w-4 h-4 text-slate-500" /> Filter
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden sm:flex justify-end">
              <div className="bg-gradient-to-tr from-purple-100/80 to-indigo-100/80 rounded-3xl p-6 w-full max-w-md h-56 relative flex items-center justify-center border border-purple-200/40 shadow-inner">
                <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-xl shadow-sm">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-xl shadow-sm">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-center font-bold text-slate-700 text-sm bg-white/60 px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
                  📚 Expert Learning Guides
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BROWSE BY GUIDE CATEGORIES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-900 mb-8">
          Browse by <span className="text-purple-600">Guide Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            // { title: "Resume", count: "12 Guides", icon: FileTextIcon = () => <BookOpen className="w-5 h-5 text-purple-600" /> },
            { title: "Interview", count: "18 Guides", icon: Users },
            { title: "Career", count: "15 Guides", icon: Briefcase },
            { title: "Skills", count: "20 Guides", icon: Code },
            { title: "College", count: "10 Guides", icon: GraduationCap },
            { title: "Productivity", count: "8 Guides", icon: Zap },
          ].map((cat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-purple-300 transition-all text-center space-y-3 cursor-pointer group">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl mx-auto flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <cat.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">{cat.title}</h3>
                <p className="text-[11px] text-slate-400">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN CONTENT: POPULAR GUIDES & SIDEBAR */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Popular Guides & Featured Collections */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Popular Guides Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Popular <span className="text-purple-600">Guides</span>
                </h2>
                <span className="text-xs font-semibold text-purple-600 cursor-pointer hover:underline">View all guides &rarr;</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {guides.map((guide, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className={`h-36 ${guide.imageBg} relative flex items-center justify-center text-slate-400 font-medium text-xs`}>
                        Guide Preview Thumbnail
                      </div>
                      <div className="p-5 space-y-2">
                        <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full ${guide.categoryColor}`}>
                          {guide.category}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                          {guide.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                          {guide.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{guide.readTime}</span>
                      </div>
                      <button className="text-slate-400 hover:text-purple-600">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Guide Collections */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Featured Guide <span className="text-purple-600">Collections</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {collections.map((col, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-purple-300 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-bold">
                        📁
                      </div>
                      <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">{col.count}</span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">{col.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{col.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Learning Pathways Banner */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 p-6 rounded-2xl text-white shadow-lg space-y-4 relative overflow-hidden">
              <h3 className="font-bold text-base leading-snug">Learning Pathways</h3>
              <p className="text-purple-200 text-xs leading-relaxed">
                Follow structured learning paths curated by experts.
              </p>
              <button className="bg-white text-purple-900 hover:bg-purple-50 font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all flex items-center gap-1.5">
                Explore Roadmaps <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Top Guide Topics */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900">Top Guide Topics</h3>
                <span className="text-xs text-purple-600 font-semibold cursor-pointer">View all topics</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { topic: "Resume Writing", count: "(12)" },
                  { topic: "Interview Preparation", count: "(18)" },
                  { topic: "Career Planning", count: "(15)" },
                  { topic: "Technical Skills", count: "(20)" },
                  { topic: "Soft Skills", count: "(10)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none text-slate-600 hover:text-purple-600 cursor-pointer font-medium text-xs">
                    <span>{item.topic}</span>
                    <span className="text-slate-400">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900">Downloadable Resources</h3>
                <span className="text-xs text-purple-600 font-semibold cursor-pointer">View all downloads</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Resume Template", desc: "ATS Friendly Resume Template" },
                  { title: "Interview Checklist", desc: "Complete Interview Preparation List" },
                  { title: "Goal Setting Worksheet", desc: "Plan and Achieve Your Goals" },
                ].map((res, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-xs text-slate-900">{res.title}</h4>
                      <p className="text-[10px] text-slate-400">{res.desc}</p>
                    </div>
                    <button className="px-3 py-1.5 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-600 font-semibold text-[11px] rounded-lg transition-all">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BOTTOM NEWSLETTER BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Stay Updated with New Guides</h2>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
              Subscribe to our newsletter and get the latest guides, tips and career insights delivered to your inbox.
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

    </div>
  );
}