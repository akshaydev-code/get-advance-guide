import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Rocket, 
  User, 
  Calendar, 
  Wallet, 
  Headphones, 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageSquare,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram
} from 'lucide-react';

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      desc: "Learn how to use the platform and get started.",
      icon: Rocket,
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Account & Profile",
      desc: "Manage your account, profile and settings.",
      icon: User,
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Booking & Sessions",
      desc: "All about booking, rescheduling and sessions.",
      icon: Calendar,
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Payments",
      desc: "Payment methods, refunds and billing.",
      icon: Wallet,
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Technical Support",
      desc: "Facing technical issues? We can help.",
      icon: Headphones,
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Trust & Safety",
      desc: "Platform policies, privacy and security.",
      icon: ShieldCheck,
      iconBg: "bg-purple-100 text-purple-600",
    },
  ];

  const popularArticles = [
    {
      id: "01",
      title: "How do I find the right mentor?",
      desc: "Step-by-step guide to finding the perfect mentor.",
    },
    {
      id: "02",
      title: "How do I book a session?",
      desc: "Learn how to book and confirm your session.",
    },
    {
      id: "03",
      title: "Can I reschedule a session?",
      desc: "Reschedule or change your session easily.",
    },
    {
      id: "04",
      title: "What if I need to reschedule a session?",
      desc: "Steps to reschedule your booked session.",
    },
    {
      id: "05",
      title: "Is my payment information secure?",
      desc: "Learn about our secure payment system.",
    },
    {
      id: "06",
      title: "Can I become a mentor on this platform?",
      desc: "Find out how you can join as a mentor.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-amber-400 via-blue-600 to-purple-600 text-white font-black text-xl px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
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
            <button className="text-sm font-semibold text-purple-600 border border-purple-200 hover:bg-purple-50 px-5 py-2 rounded-xl transition-all">
              Login
            </button>
            <button className="text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl shadow-lg shadow-purple-600/20 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO HEADER SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/40 via-purple-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mb-6">
            <span className="flex items-center gap-1"><User className="w-3 h-3"/> Resources</span>
            <span>&gt;</span>
            <span className="text-purple-600">Help Center</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Help Center
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                We are here to help! Find solutions and get support.
              </p>

              <div className="relative pt-4 max-w-xl">
                <Search className="absolute left-4 top-[56%] -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search for help articles..." 
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm"
                />
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden sm:flex justify-end">
              <div className="bg-gradient-to-tr from-purple-100/80 to-indigo-100/80 rounded-3xl p-6 w-full max-w-md h-64 relative flex items-center justify-center border border-purple-200/40 shadow-inner">
                <div className="text-center font-bold text-slate-700 text-sm bg-white/70 px-6 py-3 rounded-2xl backdrop-blur-md shadow-sm border border-white">
                  👩‍💻 Dedicated Support Hub
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CATEGORIES GRID */}
      <section className="-mt-6 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-purple-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
              <div className="pt-4 text-purple-600">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. POPULAR ARTICLES & STILL NEED HELP */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Popular Articles (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Popular Articles</h2>
              <a href="#" className="text-xs font-semibold text-purple-600 hover:underline flex items-center gap-1">
                View all articles <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {popularArticles.map((art) => (
                <div key={art.id} className="flex gap-3 items-start group cursor-pointer">
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg shrink-0">
                    {art.id}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      {art.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Still Need Help Widget (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-50/80 to-indigo-50/80 p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Still Need Help?</h3>
                <p className="text-slate-500 text-xs mt-1">Our support team is here for you.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Email Us</h4>
                    <p className="text-xs text-slate-600 hover:text-purple-600 cursor-pointer">
                      support@getadvanceguide.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Call Us</h4>
                    <p className="text-xs text-slate-600 font-semibold">+91 98765 43210</p>
                    <p className="text-[10px] text-slate-400">(Mon – Sat, 10 AM – 7 PM)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Live Chat</h4>
                    <p className="text-xs text-slate-600">Chat with our support team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTACT SUPPORT BANNER */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Can nott find what you are looking for?</h3>
              <p className="text-purple-100 text-xs sm:text-sm">Send us a message and we will get back to you as soon as possible.</p>
            </div>
          </div>

          <button className="bg-white text-purple-700 hover:bg-purple-50 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-all flex items-center gap-1.5 shrink-0">
            Contact Support <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="mt-16 bg-slate-50 border-t border-slate-200/80 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-amber-400 via-blue-600 to-purple-600 text-white font-black text-lg px-2.5 py-1 rounded-lg">
                  AG
                </div>
                <span className="font-bold text-lg text-slate-900">GetAdvanceGuide</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Empowering learners through mentorship, resources and guidance to achieve their goals and unlock their potential.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {/* <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:opacity-90">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center hover:opacity-90">
                  <Instagram className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            {/* Link Columns */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Blogs</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-purple-600">Career Advice</a></li>
                <li><a href="#" className="hover:text-purple-600">Interview Tips</a></li>
                <li><a href="#" className="hover:text-purple-600">Resume Tips</a></li>
                <li><a href="#" className="hover:text-purple-600">Industry Insights</a></li>
                <li><a href="#" className="hover:text-purple-600">Technical Blogs</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Guides</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-purple-600">Resume Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">Interview Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">Career Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">LinkedIn Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">Salary Guide</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">FAQ</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-purple-600">General Questions</a></li>
                <li><a href="#" className="hover:text-purple-600">Booking & Sessions</a></li>
                <li><a href="#" className="hover:text-purple-600">Payments</a></li>
                <li><a href="#" className="hover:text-purple-600">Mentorship</a></li>
                <li><a href="#" className="hover:text-purple-600">Account Help</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Help Center</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-purple-600">Getting Started</a></li>
                <li><a href="#" className="hover:text-purple-600">Account & Profile</a></li>
                <li><a href="#" className="hover:text-purple-600">Payments & Refunds</a></li>
                <li><a href="#" className="hover:text-purple-600">Technical Support</a></li>
                <li><a href="#" className="hover:text-purple-600">Trust & Safety</a></li>
              </ul>
            </div>

          </div>

          {/* Newsletter Box inside Footer */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-slate-900">Stay Updated</h4>
              <p className="text-slate-500 text-xs">Subscribe to get the latest resources and career tips.</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-64"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs px-5 py-2 rounded-xl transition-all shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© 2024 GetAdvanceGuide. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
              <a href="#" className="hover:text-slate-600">Refund Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}