'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  ChevronDown, 
  Calendar, 
  Clock, 
  CreditCard, 
  DollarSign, 
  FileText, 
  Headphones, 
  ShieldCheck, 
  CheckCircle2, 
  Mail, 
  Phone,
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram,
  RefreshCw
} from 'lucide-react';

export default function RefundPolicyPage() {
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
            <Link href="/resources" className="text-purple-600 font-bold flex items-center gap-1 border-b-2 border-purple-600 pb-1">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-700 text-xs font-semibold mb-6">
            <Home className="w-3.5 h-3.5 text-purple-600" />
            <span>Resources</span>
            <span>&gt;</span>
            <span className="text-purple-900 font-bold">Refund Policy</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Title & Description */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Refund Policy
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                At GetAdvanceGuide, we are committed to providing high-quality mentorship and learning experiences. Please read our refund policy carefully.
              </p>
            </div>

            {/* 3D Illustration Graphic Replica */}
            <div className="lg:col-span-5 hidden sm:flex justify-end">
              <div className="relative w-full max-w-md h-64 bg-gradient-to-tr from-purple-200/50 via-purple-100/60 to-indigo-100/50 rounded-3xl p-6 border border-purple-200/40 shadow-inner flex items-center justify-center">
                
                {/* 3D Clipboard Card */}
                <div className="relative w-64 bg-white rounded-2xl shadow-2xl border border-purple-100 p-5 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-3 bg-purple-200 rounded-full mx-auto mb-4 border border-purple-300"></div>
                  <h3 className="text-center font-black text-xs tracking-wider text-purple-900 mb-4 uppercase">REFUND POLICY</h3>
                  
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

                  {/* Floating Refresh/Refund Icon Badge */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-2 border-white">
                    <RefreshCw className="w-6 h-6 animate-spin-slow" />
                  </div>
                </div>

                {/* Plant Graphic Mockup */}
                <div className="absolute left-6 bottom-6 w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                  🌱
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. POLICY CARDS GRID */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* ROW 1: 4 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Eligibility for Refund */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                1. Eligibility for Refund
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Refunds are applicable under the following conditions:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>The session is cancelled by the mentor or GetAdvanceGuide.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Technical issues prevent the session from happening and could not be resolved.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Refund Time Window */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                2. Refund Time Window
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                You may request a refund under these time conditions:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Full refund:</strong> If cancelled 24 hours before the scheduled session.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">No refund:</strong> If cancelled less than 24 hours before the session.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Non-Refundable Cases */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                3. Non-Refundable Cases
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Refunds will not be provided in the following cases:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>No-show by the student/mentee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Session already completed or partially attended.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: How Refunds Are Processed */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                4. How Refunds Are Processed
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Once your refund is approved:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Refunds will be processed within 5–7 business days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>The amount will be credited to the original payment method.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ROW 2: 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 5: Subscription & Plans */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                5. Subscription & Plans
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Subscription fees are non-refundable once the plan is activated.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Unused credits are non-refundable but may be valid for future bookings (if applicable).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 6: Need Help? */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                6. Need Help?
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If you have any questions or need assistance with a refund, our support team is here to help you.
              </p>
            </div>
            {/* Contact Box inside Card */}
            <div className="bg-purple-50/70 border border-purple-100/80 rounded-2xl p-3.5 space-y-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-600" />
                <a href="mailto:support@getadvanceguide.com" className="hover:text-purple-600">
                  support@getadvanceguide.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-600" />
                <a href="tel:+919876543210" className="hover:text-purple-600">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Card 7: Policy Updates */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                7. Policy Updates
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We may update this Refund Policy from time to time. Any changes will be reflected on this page with an updated effective date.
              </p>
            </div>
            {/* Last Updated Pill Box */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                <Calendar className="w-3.5 h-3.5 text-purple-600" />
                <span>Last Updated: May 14, 2024</span>
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
              <Link href="/terms-of-service" className="hover:text-slate-600">Terms of Service</Link>
              <Link href="/refund-policy" className="text-purple-600 font-bold hover:underline">Refund Policy</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}