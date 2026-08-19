"use client";

import React, { useState } from 'react';
import {
  X, Compass, CheckCircle2, Circle, Clock, Download,
  Sparkles, ArrowRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { ResourceItem } from '../types';

interface RoadmapDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceItem | null;
}

export default function RoadmapDetailModal({
  isOpen,
  onClose,
  resource,
}: RoadmapDetailModalProps) {
  const [completedMilestones, setCompletedMilestones] = useState<number[]>([]);

  if (!isOpen || !resource || !resource.milestones) return null;

  const toggleMilestone = (index: number) => {
    if (completedMilestones.includes(index)) {
      setCompletedMilestones(completedMilestones.filter((i) => i !== index));
    } else {
      setCompletedMilestones([...completedMilestones, index]);
    }
  };

  const progressPercent = Math.round(
    (completedMilestones.length / (resource.milestones.length || 1)) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-800 p-6 md:p-8 text-white relative flex-shrink-0">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                Interactive Career Roadmap 🗺️
              </span>
              <span className="text-[10px] font-bold bg-amber-400 text-amber-950 px-2.5 py-1 rounded-full">
                {resource.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
            {resource.title}
          </h2>
          <p className="text-xs md:text-sm text-violet-100 mt-2 max-w-2xl leading-relaxed">
            {resource.summary}
          </p>

          {/* Interactive Progress Bar */}
          <div className="mt-5 p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span>Your Roadmap Completion:</span>
              <span className="text-amber-300 font-mono">{progressPercent}% Completed</span>
            </div>
            <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Milestones Flow Timeline */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
          <div className="space-y-4">
            {resource.milestones.map((m, idx) => {
              const isDone = completedMilestones.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleMilestone(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isDone
                      ? 'bg-emerald-50/70 border-emerald-200 shadow-xs'
                      : 'bg-white border-gray-100 hover:border-violet-200 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      className={`p-1 mt-0.5 rounded-full transition-colors ${
                        isDone ? 'text-emerald-600' : 'text-gray-300 hover:text-violet-600'
                      }`}
                    >
                      {isDone ? <CheckCircle2 size={22} className="fill-emerald-100" /> : <Circle size={22} />}
                    </button>

                    <div className="flex-grow space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className={`text-sm md:text-base font-extrabold ${isDone ? 'text-emerald-950 line-through' : 'text-gray-900'}`}>
                          {m.title}
                        </h4>
                        <span className="text-xs font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100 w-fit">
                          ⏱ {m.duration}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed font-medium">
                        {m.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-lg border border-gray-200/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Mentorship Guidance */}
          <div className="p-5 rounded-2xl bg-violet-50/80 border border-violet-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-violet-950">Want 1-on-1 personalized mentoring on this roadmap?</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Book dedicated weekly sessions with senior engineers to review code and interview mocks.</p>
            </div>
            <Link
              href="/mentors"
              onClick={onClose}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
            >
              Explore Mentors <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
