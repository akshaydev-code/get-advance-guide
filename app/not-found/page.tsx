"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  User,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
  HelpCircle,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F9FD] text-slate-800 font-sans flex flex-col justify-between">
      {/* ---------------- NAVBAR ---------------- */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-indigo-600 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              AG
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              GetAdvance<span className="text-indigo-600">Guide</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Mentors
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              How It Works
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Resources
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-5 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-xl transition-all">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- 404 MAIN HERO SECTION ---------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>Page Not Found</span>
            </div>

            {/* Huge 404 Text */}
            <h1 className="text-8xl sm:text-9xl font-black text-indigo-600 tracking-tight leading-none">
              404
            </h1>

            {/* Heading & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                <span className="text-indigo-600">Oops!</span> Page Not Found.
              </h2>
              <p className="text-base text-slate-500 max-w-md leading-relaxed">
                The page you are looking for does not exist or has been moved.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/"
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-md shadow-indigo-100 transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Back Home</span>
              </Link>
              <Link
                href="#"
                className="px-6 py-3.5 bg-white border border-indigo-200 hover:bg-indigo-50/50 text-indigo-600 font-medium text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Resources</span>
              </Link>
            </div>
          </div>

          {/* Right 3D Illustration Graphic */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Soft Background Cloud Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/60 via-purple-100/40 to-transparent rounded-full blur-3xl -z-10"></div>
              
              {/* Illustration Image Container */}
              <div className="relative flex items-center justify-center p-4">
                <img
                  src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" 
                  alt="404 Page Not Found Illustration"
                  className="w-full h-auto object-contain max-h-[420px] drop-shadow-md rounded-3xl"
                />

                {/* Floating Question Mark Badge */}
                <div className="absolute top-6 right-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 font-bold text-xl border border-indigo-50 animate-bounce">
                  ?
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ---------------- FOOTER SECTION ---------------- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
            
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 via-indigo-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                  AG
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-900">
                  GetAdvance<span className="text-indigo-600">Guide</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Empowering learners through mentorship, resources and guidance
                to achieve their goals and unlock their potential.
              </p>
              
              {/* Social Icons */}
              {/* <div className="flex items-center space-x-2.5 pt-2">
                {[
                  { icon: <Facebook className="w-3.5 h-3.5" />, href: "#" },
                  { icon: <Twitter className="w-3.5 h-3.5" />, href: "#" },
                  { icon: <Linkedin className="w-3.5 h-3.5" />, href: "#" },
                  { icon: <Instagram className="w-3.5 h-3.5" />, href: "#" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div> */}
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
              {/* Blogs */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Blogs</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Career Advice</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Interview Tips</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Resume Tips</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Industry Insights</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors border-b-2 border-indigo-600 pb-0.5 inline-block">Technical Blogs</a></li>
                </ul>
              </div>

              {/* Guides */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Guides</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Resume Guide</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Interview Guide</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Career Guide</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn Guide</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Salary Guide</a></li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">FAQ</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">General Questions</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Booking & Sessions</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Payments</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Mentorship</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Account Help</a></li>
                </ul>
              </div>

              {/* Help Center */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Help Center</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Getting Started</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Account & Profile</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Payments & Refunds</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Technical Support</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Trust & Safety</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="lg:col-span-3 bg-[#F8F9FD] p-5 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="font-bold text-slate-900 text-xs">Stay Updated</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Subscribe to get the latest resources and career tips.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-indigo-600"
                />
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-xl transition-all shrink-0">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* Bottom copyright line */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-3">
            <p>© 2024 GetAdvanceGuide. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}