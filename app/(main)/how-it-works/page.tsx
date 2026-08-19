"use client";

import React, { useState } from 'react';
import {
  User, Search, Calendar, Rocket, ShieldCheck, Zap,
  TrendingUp, FileText, Video, MessageSquare, Flag,
  ArrowRight, CheckCircle2, Star, Sparkles, ChevronRight,
  HelpCircle, Compass, Layers
} from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper/MaxWidthWrapper';

// Types & Data
import { UserPersona } from '@/components/how-it-works/types';
import {
  studentJourneySteps, mentorJourneySteps,
  processHighlights, howItWorksFaqs
} from '@/components/how-it-works/data/howItWorksData';

// Modular Components
import StepSimulator from '@/components/how-it-works/components/StepSimulator';
import EarningsCalculator from '@/components/how-it-works/components/EarningsCalculator';
import FaqAccordion from '@/components/how-it-works/components/FaqAccordion';

// Modals
import InteractiveBookingDemoModal from '@/components/how-it-works/modals/InteractiveBookingDemoModal';

const FEATURED_COACHES = [
  {
    name: 'Anubhav Mittal',
    role: 'Senior Full Stack Engineer',
    company: 'Google',
    image: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
    rate: '$65/hr',
    rating: 4.9,
    reviews: 111,
    category: 'Web Dev & System Design',
  },
  {
    name: 'Gitakshi Sharma',
    role: 'Staff Product Designer',
    company: 'Nvidia',
    image: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp',
    rate: '$70/hr',
    rating: 4.9,
    reviews: 143,
    category: 'UI/UX & Design Systems',
  },
  {
    name: 'Chitrakshi Verma',
    role: 'Data Scientist & ML Lead',
    company: 'Flipkart',
    image: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp',
    rate: '$55/hr',
    rating: 4.8,
    reviews: 96,
    category: 'Data Science & PyTorch',
  },
  {
    name: 'Tanvi Agarwal',
    role: 'AI Researcher & Engineer',
    company: 'Meta',
    image: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_5_bgyc21.webp',
    rate: '$85/hr',
    rating: 5.0,
    reviews: 62,
    category: 'LLMs & AI Architecture',
  },
];

export default function HowItWorksPage() {
  const [persona, setPersona] = useState<UserPersona>('student');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const activeSteps = persona === 'student' ? studentJourneySteps : mentorJourneySteps;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      {/* ===================== HERO BANNER ===================== */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/70 via-white to-[#F8FAFC]">
        <MaxWidthWrapper>
          <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-violet-200">
            <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-40 -top-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-violet-100 text-xs font-semibold mb-4 border border-white/20">
                <Sparkles size={14} className="text-amber-300" />
                <span>The GetAdvanceGuide Mentorship Framework</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                How Mentorship Works on GetAdvanceGuide
              </h1>

              <p className="text-violet-100 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium">
                Connect 1-on-1 with verified engineers from Google, Meta, Microsoft, and Nvidia. Follow a simple, structured 4-step framework to land your dream tech role.
              </p>

              {/* Persona Switcher Tabs in Hero */}
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md p-1.5 rounded-2xl w-fit border border-white/20">
                <button
                  onClick={() => setPersona('student')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    persona === 'student'
                      ? 'bg-white text-violet-900 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <User size={14} /> For Students & Job Seekers
                </button>
                <button
                  onClick={() => setPersona('mentor')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    persona === 'mentor'
                      ? 'bg-white text-violet-900 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <ShieldCheck size={14} /> For Mentors & Coaches
                </button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== INTERACTIVE 4-STEP SIMULATOR ===================== */}
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Your {persona === 'student' ? 'Mentee' : 'Mentor'} Journey in <span className="text-violet-600">4 Simple Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Click on each step below to inspect live interactive simulators and sample dashboards.
            </p>
          </div>

          <StepSimulator
            steps={activeSteps}
            onOpenBookingDemo={() => setIsDemoModalOpen(true)}
          />
        </MaxWidthWrapper>
      </section>

      {/* ===================== WHY OUR PROCESS WORKS (HIGHLIGHTS) ===================== */}
      <section className="py-16 bg-white border-y border-gray-100">
        <MaxWidthWrapper>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-100">
              Why It Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Engineered for Real Career Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Built by engineers who have been on both sides of the hiring table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processHighlights.map((hl, i) => (
              <div
                key={i}
                className="bg-gray-50/70 p-6 md:p-7 rounded-3xl border border-gray-100 hover:border-violet-200 hover:bg-white hover:shadow-lg transition-all space-y-4 text-center group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-xs mx-auto border border-gray-100 group-hover:scale-110 transition-transform">
                  {hl.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
                    {hl.metric}
                  </span>
                  <h3 className="font-extrabold text-base text-gray-900 mt-2 mb-1">
                    {hl.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {hl.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== LINEAR TIMELINE PROCESS ===================== */}
      <section className="py-16 bg-[#F8FAFC]">
        <MaxWidthWrapper>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xl font-extrabold text-gray-900">The End-to-End Coaching Cycle</h3>
            <p className="text-xs text-gray-500 mt-1">From initial profile creation to clearing your dream offer</p>
          </div>

          <div className="flex items-center justify-between overflow-x-auto gap-3 py-4 px-2 scrollbar-none">
            {[
              { label: 'Create Account', icon: User, num: '1' },
              { label: 'Match Mentor', icon: Search, num: '2' },
              { label: 'Book 1-on-1', icon: Calendar, num: '3' },
              { label: 'Live Video Call', icon: Video, num: '4' },
              { label: 'Get Feedback', icon: MessageSquare, num: '5' },
              { label: 'Follow Roadmap', icon: Compass, num: '6' },
              { label: 'Crack Offer 🎯', icon: Flag, num: '7' },
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center space-y-2 flex-shrink-0 min-w-[90px]">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-violet-600 flex items-center justify-center font-bold shadow-xs hover:border-violet-400 transition-colors">
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">{step.label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex-grow h-[2px] bg-violet-200 border-dashed border-t border-violet-300 min-w-[20px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== DYNAMIC EARNINGS CALCULATOR / MENTOR SPOTLIGHT ===================== */}
      <section className="py-16 bg-white border-y border-gray-100">
        <MaxWidthWrapper>
          {persona === 'mentor' ? (
            <EarningsCalculator />
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Learn from Industry Leaders
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    Verified engineers ready to conduct mock interviews and resume reviews with you.
                  </p>
                </div>
                <Link
                  href="/mentors"
                  className="text-xs font-bold text-violet-600 hover:underline flex items-center gap-1"
                >
                  View all 50+ Mentors <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURED_COACHES.map((coach, i) => (
                  <div
                    key={i}
                    className="bg-gray-50/70 p-6 rounded-3xl border border-gray-100 hover:border-violet-200 hover:bg-white hover:shadow-xl transition-all space-y-4 text-center group flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-violet-200 mx-auto shadow-xs group-hover:scale-105 transition-transform"
                      />
                      <h4 className="font-extrabold text-gray-900 text-sm mt-3">{coach.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{coach.role}</p>
                      <p className="text-xs text-violet-700 font-bold">@{coach.company}</p>

                      <div className="flex items-center justify-center gap-1 text-xs text-amber-500 font-bold mt-2">
                        <Star size={12} className="fill-amber-400" />
                        <span>{coach.rating}</span>
                        <span className="text-gray-400 font-normal">({coach.reviews})</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                      <span className="text-xs font-black text-gray-900">{coach.rate}</span>
                      <button
                        onClick={() => setIsDemoModalOpen(true)}
                        className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                      >
                        Book Mock
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </MaxWidthWrapper>
      </section>

      {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
      <section className="py-20 bg-[#F8FAFC]">
        <MaxWidthWrapper>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-violet-100 text-violet-700 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Everything you need to know about booking, video calls, rescheduling, and payouts.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={howItWorksFaqs} />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== READY TO START CTA ===================== */}
      <section className="py-16 bg-white border-t border-gray-100">
        <MaxWidthWrapper>
          <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl shadow-violet-200">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full">
                Get Started Today
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Ready to Take Your Engineering Career to the Next Level?
              </h2>
              <p className="text-violet-100 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
                Join thousands of software engineers from Stanford, Berkeley, and IITs who prepare and land offers with GetAdvanceGuide.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/mentors"
                  className="px-6 py-3 bg-white text-violet-700 hover:bg-violet-50 rounded-2xl font-bold text-xs shadow-lg shadow-violet-950/20 transition-all hover:scale-105"
                >
                  Find a Mentor Now
                </Link>
                <Link
                  href="/become-a-mentor"
                  className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-bold text-xs border border-white/20 transition-all"
                >
                  Become a Mentor
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== DEMO BOOKING SIMULATOR MODAL ===================== */}
      <InteractiveBookingDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}