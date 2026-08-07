import React from 'react';
import { 
  ChevronDown, 
  User, 
  Settings, 
  Share2, 
  ShieldCheck, 
  Eye, 
  Cookie, 
  FileText, 
  Mail, 
  Clock, 
  Lock,
  Headphones,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "1",
      icon: User,
      title: "1. Information We Collect",
      content: "We collect personal information that you provide to us, such as your name, email address, phone number, profile information, and payment details. We also collect non-personal information such as browser type, device information and usage data."
    },
    {
      id: "2",
      icon: Settings,
      title: "2. How We Use Your Information",
      content: "We use your information to provide and improve our services, match you with suitable mentors, communicate with you, process payments, and ensure the security of our platform."
    },
    {
      id: "3",
      icon: Share2,
      title: "3. Information Sharing and Disclosure",
      content: "We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our platform and providing our services."
    },
    {
      id: "4",
      icon: ShieldCheck,
      title: "4. Data Security",
      content: "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure."
    },
    {
      id: "5",
      icon: Eye,
      title: "5. Your Rights and Choices",
      content: "You have the right to access, update, or delete your personal information. You can also opt-out of marketing communications at any time."
    },
    {
      id: "6",
      icon: Cookie,
      title: "6. Cookies and Tracking Technologies",
      content: "We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content."
    },
    {
      id: "7",
      icon: FileText,
      title: "7. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page."
    },
    {
      id: "8",
      icon: Mail,
      title: "8. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at support@getadvanceguide.com."
    }
  ];

  const tocList = [
    "1. Information We Collect",
    "2. How We Use Your Information",
    "3. Information Sharing and Disclosure",
    "4. Data Security",
    "5. Your Rights and Choices",
    "6. Cookies and Tracking Technologies",
    "7. Changes to This Policy",
    "8. Contact Us"
  ];

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
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
            <a href="#" className="hover:text-purple-600 transition-colors flex items-center gap-1">
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
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/40 via-purple-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mb-6">
            <span className="flex items-center gap-1"><User className="w-3 h-3"/> Home</span>
            <span>&gt;</span>
            <span className="text-purple-600">Privacy Policy</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Privacy <span className="text-purple-600">Policy</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
                Your privacy is important to us. This Privacy Policy explains how GetAdvanceGuide collects, uses, shares and protects your personal information.
              </p>

              {/* Date Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-600" />
                  Effective Date: <strong className="text-slate-700">May 21, 2024</strong>
                </span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-600" />
                  Last Updated: <strong className="text-slate-700">May 21, 2024</strong>
                </span>
              </div>
            </div>

            {/* Illustration Placeholder Right */}
            <div className="lg:col-span-5 relative hidden sm:flex justify-end">
              <div className="bg-gradient-to-tr from-purple-100/70 via-indigo-100/50 to-purple-50 rounded-3xl p-6 w-full max-w-md h-64 relative flex items-center justify-center border border-purple-200/40 shadow-inner">
                <div className="bg-white/80 border border-white px-8 py-5 rounded-2xl backdrop-blur-md shadow-sm flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Data Protection & Privacy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN CONTENT LAYOUT */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Main Policy Articles (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-8">
            {sections.map((sec) => {
              const IconComp = sec.icon;
              return (
                <div key={sec.id} className="flex gap-4 sm:gap-6 items-start group">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <h2 className="font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                      {sec.title}
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sec.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Sidebar Widgets (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: On this page (TOC) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-900">On this page</h3>
              <ul className="space-y-2.5 text-xs font-medium">
                {tocList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-slate-600 hover:text-purple-600 cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 2: Have Questions? Support Banner */}
            <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 p-6 rounded-3xl text-white shadow-md relative overflow-hidden space-y-4">
              <div className="space-y-2 relative z-10">
                <h3 className="font-bold text-base">Have Questions?</h3>
                <p className="text-purple-100 text-xs leading-relaxed max-w-xs">
                  We are here to help you with any privacy related concerns.
                </p>
              </div>

              <div className="pt-2 relative z-10">
                <button className="bg-white hover:bg-purple-50 text-purple-700 font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-all">
                  Contact Support
                </button>
              </div>

              {/* Decorative Icon */}
              <Headphones className="absolute right-3 bottom-3 w-20 h-20 text-white/10 pointer-events-none" />
            </div>

            {/* Widget 3: Your Privacy Matters Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">Your Privacy Matters</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
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
                {/* <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
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
              <a href="#" className="text-purple-600 font-medium hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
              <a href="#" className="hover:text-slate-600">Refund Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}