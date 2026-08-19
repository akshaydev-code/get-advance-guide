"use client";

import React, { useState } from 'react';
import {
  User, Search, Calendar, Rocket, CheckCircle2,
  Sparkles, Star, ArrowRight, ShieldCheck, Video, Clock
} from 'lucide-react';
import { StepItem } from '../types';

interface StepSimulatorProps {
  steps: StepItem[];
  onOpenBookingDemo: () => void;
}

export default function StepSimulator({
  steps,
  onOpenBookingDemo,
}: StepSimulatorProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 p-6 md:p-10 shadow-sm space-y-8">
      {/* 4 Step Clickable Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {steps.map((step, idx) => {
          const isCurrent = activeStepIndex === idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                isCurrent
                  ? 'bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-200'
                  : 'bg-gray-50/70 border-gray-100 hover:bg-white hover:border-violet-200 text-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                  isCurrent ? 'bg-white/20 text-white' : 'bg-violet-100 text-violet-700'
                }`}>
                  Step {step.number}
                </span>
                <span className="text-base">{step.icon}</span>
              </div>
              <h4 className={`text-xs md:text-sm font-extrabold leading-snug ${isCurrent ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Main Step Detail 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50/50 p-6 md:p-8 rounded-3xl border border-gray-100">
        {/* Left Col (6 cols): Explanations & Checklist */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold">
            <span>Step {activeStep.number} of 04</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            {activeStep.subtitle}
          </h3>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
            {activeStep.description}
          </p>

          <div className="space-y-2 pt-2">
            {activeStep.checklist.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-gray-700">
                <CheckCircle2 size={16} className="text-violet-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            {activeStepIndex === 2 ? (
              <button
                onClick={onOpenBookingDemo}
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer"
              >
                Launch Booking Demo Simulator <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => setActiveStepIndex((activeStepIndex + 1) % steps.length)}
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer"
              >
                Next Step ({steps[(activeStepIndex + 1) % steps.length].number}) <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right Col (6 cols): Live Dynamic Mockup UI */}
        <div className="lg:col-span-6">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-4">
            {activeStep.mockupType === 'profile' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp"
                      alt="Student"
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-gray-900">Ankit Sharma</h5>
                      <p className="text-[10px] text-gray-400 font-medium">Stanford University • CS Major</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                    95% Profile Completed
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-gray-50 rounded-xl">
                    <p className="text-[10px] text-gray-400 font-semibold">Target Goal:</p>
                    <p className="font-bold text-gray-900">Google L4 SDE</p>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-xl">
                    <p className="text-[10px] text-gray-400 font-semibold">Graduation:</p>
                    <p className="font-bold text-gray-900">2026 Batch</p>
                  </div>
                </div>
              </div>
            )}

            {activeStep.mockupType === 'filter' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900">Top Mentors Matching Your Stack</span>
                  <span className="text-[10px] font-bold text-violet-600">Filters: Google, System Design</span>
                </div>
                <div className="p-3 bg-violet-50/70 rounded-2xl border border-violet-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp"
                      alt="Mentor"
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-gray-900">Anubhav Mittal</h5>
                      <p className="text-[10px] text-gray-500 font-medium">Senior Engineer @ Google</p>
                      <p className="text-[9px] text-amber-600 font-bold">★ 4.9 (111 reviews)</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-violet-900">$65/hr</span>
                </div>
              </div>
            )}

            {activeStep.mockupType === 'calendar' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900">Select Date & Time</span>
                  <span className="text-[10px] text-gray-400 font-medium">Auto-synced: Asia/Kolkata</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-violet-600 text-white rounded-xl text-xs font-bold text-center shadow-xs">
                    Tomorrow, 06:00 PM (Selected)
                  </div>
                  <div className="p-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-xs font-bold text-center">
                    Saturday, 10:00 AM
                  </div>
                </div>
              </div>
            )}

            {activeStep.mockupType === 'video' && (
              <div className="space-y-3">
                <div className="p-3 bg-gray-900 rounded-2xl text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold">Live Mock Call In Session</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">00:32:15</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                  <span className="font-bold text-gray-900">Live Feedback:</span> &ldquo;Great job on tree traversal! Focus on edge cases for empty subtrees.&rdquo;
                </div>
              </div>
            )}

            {activeStep.mockupType === 'apply' && (
              <div className="p-3 bg-violet-50 rounded-xl border border-violet-100 text-xs space-y-1">
                <span className="font-bold text-violet-950">Corporate Verification Verified:</span>
                <p className="text-gray-600">@google.com corporate credentials authenticated.</p>
              </div>
            )}

            {activeStep.mockupType === 'schedule' && (
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs space-y-1">
                <span className="font-bold text-gray-900">Custom Rate Configured:</span>
                <p className="text-gray-600">$75/hr • Weekends & Evenings enabled</p>
              </div>
            )}

            {activeStep.mockupType === 'payout' && (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs space-y-1">
                <span className="font-bold text-emerald-900">Direct Bank Settlement:</span>
                <p className="text-emerald-700">90% revenue ($675.00) transferred to HDFC Bank.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
