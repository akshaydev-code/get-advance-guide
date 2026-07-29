import React from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  Calendar,
  ChevronDown, 
  ChevronRight, 
  Bell, 
  Mail, 
  ArrowRight,
  Bookmark
} from 'lucide-react';

export default function BlogListDetailedPage() {
  const blogs = [
    {
      category: "Interview Tips",
      categoryColor: "bg-purple-100 text-purple-700",
      title: "How to Crack Your First Software Interview",
      desc: "A complete guide to prepare and ace your first technical interview with confidence.",
      readTime: "5 min read",
      author: "Neha Kapoor",
      date: "May 12, 2024",
      imageBg: "bg-slate-200"
    },
    {
      category: "Resume Tips",
      categoryColor: "bg-purple-100 text-purple-700",
      title: "Top 10 Resume Mistakes You Should Avoid",
      desc: "Avoid these common mistakes and make your resume stand out to recruiters.",
      readTime: "6 min read",
      author: "Rahul Mehta",
      date: "May 10, 2024",
      imageBg: "bg-slate-200"
    },
    {
      category: "Career Advice",
      categoryColor: "bg-purple-100 text-purple-700",
      title: "How to Switch Your Career to Tech in 2024",
      desc: "Step-by-step guide to transition into a successful tech career even if you come from a non-tech background.",
      readTime: "7 min read",
      author: "Pooja Verma",
      date: "May 8, 2024",
      imageBg: "bg-slate-200"
    },
    {
      category: "LinkedIn Tips",
      categoryColor: "bg-purple-100 text-purple-700",
      title: "LinkedIn Profile Tips to Get More Opportunities",
      desc: "Optimize your LinkedIn profile and attract recruiters with these proven tips.",
      readTime: "6 min read",
      author: "Vikram Singh",
      date: "May 5, 2024",
      imageBg: "bg-slate-200"
    }
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

      {/* 2. HERO HEADER */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/40 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mb-6">
            <a href="#" className="hover:underline">Resources</a>
            <span>&gt;</span>
            <span className="text-slate-500">Blogs</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Blogs
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Insights, tips and expert advice to help you grow in your career.
              </p>

              <div className="flex items-center gap-3 pt-4 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search blogs..." 
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
                  <Bookmark className="w-5 h-5 text-purple-600" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-xl shadow-sm">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-center font-bold text-slate-700 text-sm bg-white/60 px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
                  👨‍💻 Expert Content Creator
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN CONTENT LAYOUT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">
            All Blogs <span className="text-slate-400 text-sm font-normal">(24)</span>
          </h2>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span>Sort by:</span>
            <button className="flex items-center gap-1 font-semibold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">
              Latest <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Detailed Horizontal Blog List */}
          <div className="lg:col-span-8 space-y-6">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-center justify-between">
                
                {/* Left side: Thumbnail */}
                <div className="w-full sm:w-64 h-40 bg-slate-200 rounded-xl shrink-0 flex items-center justify-center text-slate-400 font-medium text-xs">
                  Thumbnail Image
                </div>

                {/* Center/Right side: Content & Metadata */}
                <div className="flex-1 space-y-3 w-full">
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${blog.categoryColor}`}>
                    {blog.category}
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 hover:text-purple-600 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {blog.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-slate-500 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{blog.readTime}</span>
                    </div>
                    <span className="text-slate-300">|</span>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center font-bold text-[10px] text-purple-700">👤</div>
                      <span className="font-medium text-slate-700">{blog.author}</span>
                    </div>
                    <span className="text-slate-300">|</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>

                {/* Right CTA Button */}
                <div className="w-full sm:w-auto flex justify-end shrink-0">
                  <button className="flex items-center gap-1.5 px-4 py-2 border border-purple-200 hover:bg-purple-50 text-purple-600 font-semibold text-xs rounded-xl transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <button className="w-9 h-9 rounded-xl bg-purple-600 text-white font-semibold text-sm shadow-sm flex items-center justify-center">1</button>
              <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center">2</button>
              <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center">3</button>
              <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Popular Topics Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-900">Popular Topics</h3>
              <div className="space-y-2 text-sm">
                {[
                  { topic: "Interview Tips", count: "(12)" },
                  { topic: "Resume Tips", count: "(09)" },
                  { topic: "Career Advice", count: "(08)" },
                  { topic: "Technical", count: "(10)" },
                  { topic: "Industry Insights", count: "(07)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none text-slate-600 hover:text-purple-600 cursor-pointer font-medium text-xs">
                    <span>{item.topic}</span>
                    <span className="text-slate-400">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Need One-to-One Guidance Banner */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 p-6 rounded-2xl text-white shadow-lg space-y-4 relative overflow-hidden">
              <h3 className="font-bold text-base leading-snug">Need One-to-One Guidance?</h3>
              <p className="text-purple-200 text-xs leading-relaxed">
                Connect with expert mentors and accelerate your growth.
              </p>
              <button className="bg-white text-purple-900 hover:bg-purple-50 font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all">
                Find a Mentor
              </button>
            </div>

            {/* Subscribe to Newsletter Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-sm text-slate-900">Subscribe to Newsletter</h3>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Get the latest articles and career tips in your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs py-2.5 rounded-xl shadow-md transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Trending This Week Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-500">🔥</span>
                <h3 className="font-bold text-sm text-slate-900">Trending This Week</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Top 10 Soft Skills Every Employer Looks For", time: "4 min read" },
                  { title: "How to Build a Strong Personal Brand in 2024", time: "6 min read" },
                  { title: "System Design Basics for Beginners", time: "8 min read" },
                ].map((trend, i) => (
                  <div key={i} className="flex gap-3 items-start pb-3 border-b border-slate-100 last:border-none">
                    <div className="w-12 h-10 bg-slate-200 rounded-lg shrink-0"></div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs text-slate-900 hover:text-purple-600 cursor-pointer leading-tight">
                        {trend.title}
                      </h4>
                      <p className="text-[10px] text-slate-400">{trend.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BOTTOM NEWSLETTER BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Stay Updated with Latest Insights</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Subscribe to our newsletter and never miss an update on new articles, guides and career tips.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-72 shadow-sm"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}














// import React from 'react';
// import { 
//   Search, 
//   Filter, 
//   Clock, 
//   ChevronDown, 
//   ChevronRight, 
//   Bell, 
//   Mail, 
// //   ArrowRight,
//   Bookmark
// } from 'lucide-react';

// export default function BlogsPage() {
//   const blogs = [
//     {
//       category: "Interview Tips",
//       categoryColor: "bg-purple-100 text-purple-700",
//       title: "How to Crack Your First Software Interview",
//       desc: "A complete guide to prepare and ace your first technical interview.",
//       readTime: "5 min read",
//       author: "Neha Kapoor",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "Resume Tips",
//       categoryColor: "bg-blue-100 text-blue-700",
//       title: "Top 10 Resume Mistakes You Should Avoid",
//       desc: "Avoid these common mistakes and make your resume stand out.",
//       readTime: "6 min read",
//       author: "Rahul Mehta",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "Career Advice",
//       categoryColor: "bg-purple-100 text-purple-700",
//       title: "How to Switch Your Career to Tech in 2024",
//       desc: "Step-by-step guide to transition into a successful tech career.",
//       readTime: "7 min read",
//       author: "Pooja Verma",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "LinkedIn Tips",
//       categoryColor: "bg-indigo-100 text-indigo-700",
//       title: "LinkedIn Profile Tips to Get More Opportunities",
//       desc: "Optimize your LinkedIn profile and attract recruiters.",
//       readTime: "6 min read",
//       author: "Vikram Singh",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "Productivity",
//       categoryColor: "bg-purple-100 text-purple-700",
//       title: "7 Productivity Tips for Students & Professionals",
//       desc: "Boost your productivity and achieve more in less time.",
//       readTime: "5 min read",
//       author: "Anjali Sharma",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "Industry Insights",
//       categoryColor: "bg-blue-100 text-blue-700",
//       title: "Top Tech Skills in Demand in 2024",
//       desc: "Explore the most in-demand skills and future job opportunities.",
//       readTime: "8 min read",
//       author: "Ritesh Kumar",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "Career Growth",
//       categoryColor: "bg-purple-100 text-purple-700",
//       title: "How to Build a Strong Personal Brand",
//       desc: "Build a personal brand that opens doors to new opportunities.",
//       readTime: "6 min read",
//       author: "Neha Kapoor",
//       imageBg: "bg-slate-200"
//     },
//     {
//       category: "Self Improvement",
//       categoryColor: "bg-emerald-100 text-emerald-700",
//       title: "Daily Habits of Highly Successful People",
//       desc: "Simple daily habits that can transform your life.",
//       readTime: "5 min read",
//       author: "Rahul Mehta",
//       imageBg: "bg-slate-200"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
//       {/* 1. NAVBAR */}
//       <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
//               <span>AG</span>
//             </div>
//             <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
//               GetAdvanceGuide
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
//             <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
//             <a href="#" className="hover:text-purple-600 transition-colors">Mentors</a>
//             <a href="#" className="hover:text-purple-600 transition-colors">How It Works</a>
//             <a href="#" className="text-purple-600 font-semibold flex items-center gap-1 relative after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600">
//               Resources <ChevronDown className="w-3.5 h-3.5" />
//             </a>
//             <a href="#" className="hover:text-purple-600 transition-colors">About Us</a>
//             <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
//           </nav>

//           <div className="flex items-center gap-4">
//             <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 px-4 py-2">
//               Login
//             </button>
//             <button className="text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-purple-600/20 transition-all">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* 2. HERO & SEARCH HEADER */}
//       <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/40 to-white border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mb-6">
//             <a href="#" className="hover:underline">Resources</a>
//             <span>&gt;</span>
//             <span className="text-slate-500">Blogs</span>
//           </div>

//           <div className="grid lg:grid-cols-12 gap-8 items-center">
//             <div className="lg:col-span-7 space-y-4">
//               <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//                 Blogs
//               </h1>
//               <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
//                 Insights, tips and expert advice to help you grow in your career.
//               </p>

//               {/* Search and Filter Bar */}
//               <div className="flex items-center gap-3 pt-4 max-w-xl">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <input 
//                     type="text" 
//                     placeholder="Search blogs..." 
//                     className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm"
//                   />
//                 </div>
//                 <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl shadow-sm transition-all">
//                   <Filter className="w-4 h-4 text-slate-500" /> Filter
//                 </button>
//               </div>
//             </div>

//             {/* Hero Right Illustration Graphic */}
//             <div className="lg:col-span-5 relative hidden sm:flex justify-end">
//               <div className="bg-gradient-to-tr from-purple-100/80 to-indigo-100/80 rounded-3xl p-6 w-full max-w-md h-56 relative flex items-center justify-center border border-purple-200/40 shadow-inner">
//                 <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-xl shadow-sm">
//                   <Bookmark className="w-5 h-5 text-purple-600" />
//                 </div>
//                 <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-xl shadow-sm">
//                   <Mail className="w-5 h-5 text-indigo-600" />
//                 </div>
//                 <div className="text-center font-bold text-slate-700 text-sm bg-white/60 px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
//                   👨‍💻 Expert Content Creator
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 3. MAIN CONTENT: BLOG GRID & SIDEBAR */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header bar above grid */}
//         <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
//           <h2 className="text-lg font-bold text-slate-900">
//             All Blogs <span className="text-slate-400 text-sm font-normal">(24)</span>
//           </h2>
//           <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
//             <span>Sort by:</span>
//             <button className="flex items-center gap-1 font-semibold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">
//               Latest <ChevronDown className="w-3.5 h-3.5" />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* Left Side: Blog Cards Grid (Cols 1 to 8) */}
//           <div className="lg:col-span-8 space-y-8">
//             <div className="grid sm:grid-cols-2 gap-6">
//               {blogs.map((blog, idx) => (
//                 <div key={idx} className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
//                   <div>
//                     {/* Thumbnail placeholder */}
//                     <div className={`h-40 ${blog.imageBg} relative overflow-hidden flex items-center justify-center text-slate-400 font-medium text-xs`}>
//                       <span className="z-10 bg-white/80 px-3 py-1 rounded-full shadow-sm text-slate-700">Preview Image</span>
//                     </div>

//                     <div className="p-5 space-y-3">
//                       <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${blog.categoryColor}`}>
//                         {blog.category}
//                       </span>
//                       <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
//                         {blog.title}
//                       </h3>
//                       <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
//                         {blog.desc}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                     <div className="flex items-center gap-1.5">
//                       <Clock className="w-3.5 h-3.5 text-slate-400" />
//                       <span>{blog.readTime}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center font-bold text-[10px] text-purple-700">👤</div>
//                       <span className="font-medium text-slate-700">{blog.author}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-center gap-2 pt-6">
//               <button className="w-9 h-9 rounded-xl bg-purple-600 text-white font-semibold text-sm shadow-sm flex items-center justify-center">1</button>
//               <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center">2</button>
//               <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center">3</button>
//               <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center">
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Right Side: Sidebar Widgets (Cols 9 to 12) */}
//           <div className="lg:col-span-4 space-y-6">
            
//             {/* Popular Topics Widget */}
//             <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-4">
//               <h3 className="font-bold text-sm text-slate-900">Popular Topics</h3>
//               <div className="space-y-2 text-sm">
//                 {[
//                   { topic: "Interview Tips", count: "(12)" },
//                   { topic: "Resume Tips", count: "(09)" },
//                   { topic: "Career Advice", count: "(08)" },
//                   { topic: "Technical", count: "(10)" },
//                   { topic: "Industry Insights", count: "(07)" },
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none text-slate-600 hover:text-purple-600 cursor-pointer font-medium text-xs">
//                     <span>{item.topic}</span>
//                     <span className="text-slate-400">{item.count}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Want Personalized Guidance Banner */}
//             <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 p-6 rounded-2xl text-white shadow-lg space-y-4 relative overflow-hidden">
//               <h3 className="font-bold text-base leading-snug">Want Personalized Guidance?</h3>
//               <p className="text-purple-200 text-xs leading-relaxed">
//                 Book a 1:1 session with industry experts.
//               </p>
//               <button className="bg-white text-purple-900 hover:bg-purple-50 font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all">
//                 Find Mentors
//               </button>
//             </div>

//             {/* Subscribe to Newsletter Widget */}
//             <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-4">
//               <div className="flex items-center gap-2">
//                 <Mail className="w-5 h-5 text-purple-600" />
//                 <h3 className="font-bold text-sm text-slate-900">Subscribe to Newsletter</h3>
//               </div>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Get the latest articles and resources in your inbox.
//               </p>
//               <div className="space-y-3">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//                 <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs py-2.5 rounded-xl shadow-md transition-all">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* 4. BOTTOM BANNER: STAY UPDATED */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4 text-center md:text-left">
//             <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
//               <Bell className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-slate-900">Stay Updated with Latest Insights</h3>
//               <p className="text-slate-500 text-xs sm:text-sm">Subscribe to our newsletter and never miss an update.</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-72 shadow-sm"
//             />
//             <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }