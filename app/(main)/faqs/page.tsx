"use client";


import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Plus, 
  Minus, 
  HelpCircle, 
  Mail, 
  Headphones, 
  ArrowRight, 
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram,
  Bell,
  Grid,
  Rocket,
  Users,
  CreditCard,
  User,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Questions', count: '24', icon: Grid, active: true },
    { id: 'getting-started', label: 'Getting Started', count: '04', icon: Rocket },
    { id: 'mentorship', label: 'Mentorship & Sessions', count: '06', icon: Users },
    { id: 'payments', label: 'Payments & Pricing', count: '04', icon: CreditCard },
    { id: 'account', label: 'Account & Profile', count: '03', icon: User },
    { id: 'support', label: 'Technical Support', count: '03', icon: Headphones },
    { id: 'safety', label: 'Safety & Privacy', count: '02', icon: ShieldCheck },
    { id: 'becoming-mentor', label: 'Becoming a Mentor', count: '02', icon: Award },
  ];

  const faqs = [
    {
      question: "How do I find the right mentor?",
      answer: "You can browse mentors based on their expertise, experience, skills, and reviews. Use filters to find a mentor that matches your goals and career interests."
    },
    {
      question: "How much does mentorship cost?",
      answer: "Pricing varies by mentor based on their domain expertise and experience. You can view session rates directly on each mentor's profile page before booking."
    },
    {
      question: "Can I book a free trial session?",
      answer: "Many mentors offer an initial 15-minute introductory session for free or at a discounted rate to ensure a good mutual fit."
    },
    {
      question: "How do I schedule a session?",
      answer: "Select your desired mentor, view their available calendar time slots, choose a time that suits you, and proceed to checkout to confirm."
    },
    {
      question: "What if I need to reschedule a session?",
      answer: "You can easily reschedule a session from your dashboard up to 24 hours prior to the scheduled start time without any penalty."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, all payments are processed through bank-grade encrypted payment gateways. We never store your full card credentials."
    },
    {
      question: "Can I become a mentor on this platform?",
      answer: "Yes! If you have relevant industry experience and passion for guiding others, you can submit an application via the 'Become a Mentor' section."
    },
    {
      question: "How do online sessions work?",
      answer: "Sessions are conducted via built-in video conferencing links provided automatically in your session details and email reminders."
    },
    {
      question: "Can I cancel or refund a session?",
      answer: "Cancellations made at least 24 hours in advance are eligible for a full refund or session credit to your account balance."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
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
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/40 via-purple-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mb-6">
            <span className="flex items-center gap-1"><HelpCircle className="w-3 h-3"/> Resources</span>
            <span>&gt;</span>
            <span className="text-slate-500">FAQ</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Frequently Asked <span className="text-purple-600">Questions</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Find answers to the most common questions about GetAdvanceGuide and how it works.
              </p>

              {/* Search Box */}
              <div className="relative pt-4 max-w-xl">
                <Search className="absolute left-4 top-[58%] -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search questions..." 
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Illustration Placeholder Right */}
            <div className="lg:col-span-5 relative hidden sm:flex justify-end">
              <div className="bg-gradient-to-tr from-purple-100/70 to-indigo-100/70 rounded-3xl p-6 w-full max-w-md h-64 relative flex items-center justify-center border border-purple-200/40 shadow-inner">
                <div className="text-center font-bold text-purple-900 text-base bg-white/80 px-8 py-4 rounded-2xl backdrop-blur-md shadow-sm border border-white flex flex-col items-center gap-2">
                  <span className="text-2xl">❓</span>
                  <span>FAQ & Knowledge Hub</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN FAQ LAYOUT */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Categories & Contact Box (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Category Navigation List */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-2 shadow-sm space-y-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                      <span>{cat.label}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Support Widget Box inside Sidebar */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50/50 rounded-2xl p-5 border border-purple-100 shadow-sm relative overflow-hidden flex items-center justify-between">
              <div className="space-y-3 z-10 pr-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Still have questions?</h4>
                  <p className="text-slate-500 text-xs mt-0.5">We are here to help you.</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow transition-all">
                  Contact Support
                </button>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: Accordion Questions (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-base font-bold text-slate-900">
                All Questions <span className="text-purple-600 font-medium">(24)</span>
              </h2>
              <button 
                onClick={() => setOpenIndex(openIndex === null ? 0 : null)} 
                className="text-xs font-semibold text-purple-600 hover:underline"
              >
                {openIndex === null ? 'Expand All' : 'Collapse All'}
              </button>
            </div>

            {/* Accordion Items */}
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-purple-200 shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-purple-50 text-purple-600' : 'text-slate-400'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDEBAR: Help & Community Widgets (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Widget 1: Need More Help */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-900">Need More Help?</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Can not find the answer you are looking for?
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-2 pt-1">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all">
                  Contact Support
                </button>
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Widget 2: Popular Articles */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-900">Popular Articles</h3>
              <ul className="space-y-2 text-xs">
                {[
                  "How to book a session?",
                  "Payment and Refund Policy",
                  "How to train as a mentor",
                  "Mentor Guidelines"
                ].map((article, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 hover:text-purple-600 cursor-pointer py-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    <span>{article}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-100">
                <a href="#" className="text-xs font-semibold text-purple-600 hover:underline flex items-center gap-1">
                  View all articles <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Widget 3: Join Our Community */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-900">Join Our Community</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Connect with learners and mentors, share insights and grow together.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {/* <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a> */}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BOTTOM NEWSLETTER BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-lg shrink-0">
              <Bell className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Stay Updated with Latest Questions & Answers</h3>
              <p className="text-purple-100 text-xs sm:text-sm mt-1 max-w-md">
                Subscribe to get helpful tips, updates and expert answers straight to your inbox.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white text-slate-800 placeholder:text-slate-400 border border-transparent rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-64 shadow-sm"
            />
            <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}