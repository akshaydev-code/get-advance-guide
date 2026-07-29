'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Calendar, 
  Headphones, 
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram,
  FileText,
  CheckCircle2,
  Shield,
  PenTool
} from 'lucide-react';

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState<number>(1);

  const tocList = [
    { id: 1, title: "1. Introduction" },
    { id: 2, title: "2. Definitions" },
    { id: 3, title: "3. User Accounts" },
    { id: 4, title: "4. Use of the Platform" },
    { id: 5, title: "5. Mentor & Mentee Responsibilities" },
    { id: 6, title: "6. Payments & Refunds" },
    { id: 7, title: "7. Intellectual Property" },
    { id: 8, title: "8. Prohibited Activities" },
    { id: 9, title: "9. Disclaimer of Warranties" },
    { id: 10, title: "10. Limitation of Liability" },
    { id: 11, title: "11. Indemnification" },
    { id: 12, title: "12. Termination" },
    { id: 13, title: "13. Governing Law" },
    { id: 14, title: "14. Changes to Terms" },
    { id: 15, title: "15. Contact Us" },
  ];

  const termsContent = [
    {
      id: 1,
      title: "Introduction",
      text: 'Welcome to GetAdvanceGuide ("we," "our," or "us"). These Terms of Service govern your access to and use of our mentorship platform and related services (the "Platform"). By using our Platform, you agree to these terms.'
    },
    {
      id: 2,
      title: "Definitions",
      text: '"Mentor" means a professional who offers guidance. "Mentee" means a learner seeking guidance. "User" means any person who accesses or uses the Platform.'
    },
    {
      id: 3,
      title: "User Accounts",
      text: "You must create an account to access certain features. You are responsible for maintaining the confidentiality of your account and for all activities under your account."
    },
    {
      id: 4,
      title: "Use of the Platform",
      text: "You agree to use the Platform only for lawful purposes and in accordance with these Terms. You must not misuse the Platform or interfere with its proper functioning."
    },
    {
      id: 5,
      title: "Mentor & Mentee Responsibilities",
      text: "Mentors agree to provide accurate guidance and professional conduct. Mentees agree to respect mentors' time and communicate professionally."
    },
    {
      id: 6,
      title: "Payments & Refunds",
      text: "Some services may require payment. All payments are secure and non-refundable unless stated otherwise in our Refund Policy."
    },
    {
      id: 7,
      title: "Intellectual Property",
      text: "All content on the Platform, including text, graphics, logos, and designs, is our property and protected by intellectual property laws."
    },
    {
      id: 8,
      title: "Prohibited Activities",
      text: "You agree not to engage in harassment, spam, fraud, or any activity that may harm other users or the Platform."
    },
    {
      id: 9,
      title: "Disclaimer of Warranties",
      text: 'The Platform is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free services.'
    },
    {
      id: 10,
      title: "Limitation of Liability",
      text: "We are not liable for any indirect, incidental, or consequential damages arising from your use of the Platform."
    },
    {
      id: 11,
      title: "Indemnification",
      text: "You agree to indemnify and hold GetAdvanceGuide harmless from any claims arising from your use of the Platform."
    },
    {
      id: 12,
      title: "Termination",
      text: "We reserve the right to suspend or terminate your account if you violate these Terms."
    },
    {
      id: 13,
      title: "Governing Law",
      text: "These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of Indore, Madhya Pradesh."
    },
    {
      id: 14,
      title: "Changes to Terms",
      text: "We may update these Terms from time to time. We will notify you of any significant changes."
    },
    {
      id: 15,
      title: "Contact Us",
      text: "If you have any questions about these Terms, please contact us at support@getadvanceguide.com."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-tr from-amber-400 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md">
              AG
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              GetAdvance<span className="text-purple-600">Guide</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <Link href="/mentors" className="hover:text-purple-600 transition-colors">Mentors</Link>
            <Link href="/how-it-works" className="hover:text-purple-600 transition-colors">How It Works</Link>
            <Link href="/resources" className="text-purple-600 font-bold flex items-center gap-1">
              Resources <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-bold text-purple-600 border border-purple-200 hover:bg-purple-50 px-5 py-2.5 rounded-xl transition-all">
              Login
            </button>
            <button className="text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl shadow-md shadow-purple-600/20 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO HEADER SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 bg-gradient-to-b from-purple-50/50 via-purple-50/20 to-[#FAF9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/60 text-purple-700 text-xs font-semibold mb-6">
            <FileText className="w-3.5 h-3.5 text-purple-600" />
            <span>Legal</span>
            <span>&gt;</span>
            <span className="text-purple-900 font-bold">Terms of Service</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Title & Desc */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Terms of Service
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Please read these terms carefully before using GetAdvanceGuide. By accessing or using our platform, you agree to be bound by these terms.
              </p>

              {/* Date Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100/70 border border-purple-200/60 text-purple-900 text-xs font-bold">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span>Last Updated: <span className="text-slate-700 font-medium">May 20, 2024</span></span>
                </div>
              </div>
            </div>

            {/* 3D Illustration Graphic (Pure CSS/SVG Replica) */}
            <div className="lg:col-span-5 hidden sm:flex justify-end">
              <div className="relative w-full max-w-md h-64 bg-gradient-to-tr from-purple-200/50 via-purple-100/60 to-indigo-100/50 rounded-3xl p-6 border border-purple-200/40 shadow-inner flex items-center justify-center">
                
                {/* 3D Clipboard Card Mockup */}
                <div className="relative w-64 bg-white rounded-2xl shadow-2xl border border-purple-100 p-5 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-3 bg-purple-200 rounded-full mx-auto mb-4 border border-purple-300"></div>
                  <h3 className="text-center font-black text-xs tracking-wider text-purple-900 mb-4 uppercase">TERMS OF SERVICE</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <div className="h-2 bg-purple-100 rounded-full w-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <div className="h-2 bg-purple-100 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <div className="h-2 bg-purple-100 rounded-full w-5/6"></div>
                    </div>
                  </div>

                  {/* Floating Shield Icon */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-2 border-white">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>

                {/* Decorative Plant/Pen */}
                <div className="absolute left-6 bottom-6 w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                  🌱
                </div>
                <div className="absolute right-12 top-6 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shadow-sm rotate-12">
                  <PenTool className="w-4 h-4" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN CONTENT SECTION */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Table of Contents Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/70 shadow-sm space-y-4">
              <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">On this page</h3>
              <ul className="space-y-1 text-xs font-semibold">
                {tocList.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all ${
                          isActive 
                            ? 'bg-purple-50 text-purple-700 font-bold' 
                            : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Have Questions? Support Box */}
            <div className="bg-purple-50/70 p-6 rounded-3xl border border-purple-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-slate-900">Have Questions?</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  If you have any questions about these Terms, please feel free to contact us.
                </p>
              </div>
              <button className="w-full text-xs font-bold text-purple-600 border border-purple-200 bg-white hover:bg-purple-600 hover:text-white px-4 py-2.5 rounded-xl transition-all shadow-sm">
                Contact Support
              </button>
            </div>

          </div>

          {/* RIGHT CONTENT COLUMN (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/70 p-6 sm:p-8 shadow-sm divide-y divide-slate-100">
            {termsContent.map((term) => (
              <div 
                key={term.id} 
                className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-5 group"
              >
                {/* Number Box */}
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 font-extrabold text-xs flex items-center justify-center shrink-0 border border-purple-100/80 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                  {term.id}
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                    {term.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {term.text}
                  </p>
                </div>
              </div>
            ))}
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
                <span className="font-extrabold text-lg text-slate-900">GetAdvanceGuide</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Empowering learners through mentorship, resources and guidance to achieve their goals and unlock their potential.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {/* <a href="#" className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
                  <Instagram className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            {/* Link Columns */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Blogs</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-purple-600">Career Advice</a></li>
                <li><a href="#" className="hover:text-purple-600">Interview Tips</a></li>
                <li><a href="#" className="hover:text-purple-600">Resume Tips</a></li>
                <li><a href="#" className="hover:text-purple-600">Industry Insights</a></li>
                <li><a href="#" className="hover:text-purple-600">Technical Blogs</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Guides</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-purple-600">Resume Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">Interview Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">Career Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">LinkedIn Guide</a></li>
                <li><a href="#" className="hover:text-purple-600">Salary Guide</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">FAQ</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-purple-600">General Questions</a></li>
                <li><a href="#" className="hover:text-purple-600">Booking & Sessions</a></li>
                <li><a href="#" className="hover:text-purple-600">Payments</a></li>
                <li><a href="#" className="hover:text-purple-600">Mentorship</a></li>
                <li><a href="#" className="hover:text-purple-600">Account Help</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Help Center</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-purple-600">Getting Started</a></li>
                <li><a href="#" className="hover:text-purple-600">Account & Profile</a></li>
                <li><a href="#" className="hover:text-purple-600">Payments & Refunds</a></li>
                <li><a href="#" className="hover:text-purple-600">Technical Support</a></li>
                <li><a href="#" className="hover:text-purple-600">Trust & Safety</a></li>
              </ul>
            </div>

          </div>

          {/* Newsletter Box */}
          <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Stay Updated</h4>
              <p className="text-slate-500 text-xs">Subscribe to get the latest resources and career tips.</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-64"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© 2024 GetAdvanceGuide. All rights reserved.</p>
            <div className="flex items-center gap-6 font-medium">
              <Link href="/privacy-policy" className="hover:text-slate-600">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-purple-600 font-bold hover:underline">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-slate-600">Refund Policy</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}