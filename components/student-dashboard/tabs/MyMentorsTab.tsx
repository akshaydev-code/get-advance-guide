"use client";

import React, { useState } from 'react';
import {
  Users, MessageSquare, Calendar, Star, BookOpen, Clock, Heart,
  ShieldCheck, ArrowRight, Sparkles, Video, Eye
} from 'lucide-react';
import { MentorItem, SessionItem, MentorshipRequest, DashboardTab } from '../types';

interface MyMentorsTabProps {
  mentors: MentorItem[];
  requests: MentorshipRequest[];
  sessions: SessionItem[];
  onNavigateTab: (tab: DashboardTab) => void;
  onBookSession: (mentor: MentorItem) => void;
  onStartMessage: (mentorId: string) => void;
  onViewMentorProfile: (mentor: MentorItem) => void;
  onRateMentorSession: (session: SessionItem) => void;
}

export default function MyMentorsTab({
  mentors,
  requests,
  sessions,
  onNavigateTab,
  onBookSession,
  onStartMessage,
  onViewMentorProfile,
  onRateMentorSession,
}: MyMentorsTabProps) {
  // Connected mentors: Mentors who accepted requests or have sessions with student
  const connectedMentorIds = new Set<string>();

  requests.forEach((r) => {
    if (r.status === 'Accepted') connectedMentorIds.add(r.mentorId);
  });

  sessions.forEach((s) => {
    connectedMentorIds.add(s.mentorId);
  });

  // Fallback to top 2 if none
  const connectedMentors = mentors.filter((m) => connectedMentorIds.has(m.id));
  const suggestedMentors = mentors.slice(0, 3);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              My Mentors
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {connectedMentors.length} Connected
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Your active mentor connections, past session learnings, and fast-track booking.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('find-mentors')}
          className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          <Users size={14} /> Connect With More
        </button>
      </div>

      {/* Connected Mentors List */}
      {connectedMentors.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-10 text-center border border-gray-100 shadow-sm space-y-5">
          <Users size={40} className="mx-auto text-gray-300" />
          <div>
            <h3 className="text-base font-bold text-gray-900">No active mentors yet</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1">
              Once a mentor accepts your request or you book a session, they will appear here for easy messaging and repeat bookings.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 text-left">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
              Suggested Mentors To Start With:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestedMentors.map((m) => (
                <div
                  key={m.id}
                  className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src={m.image} alt={m.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h5 className="text-xs font-bold text-gray-900">{m.name}</h5>
                      <p className="text-[10px] text-gray-500">{m.role}</p>
                      <p className="text-[10px] text-violet-600 font-bold">@{m.company}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <button
                      onClick={() => onViewMentorProfile(m)}
                      className="py-1.5 bg-white border border-gray-200 text-gray-700 text-[11px] font-bold rounded-lg hover:bg-violet-50 hover:text-violet-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => onBookSession(m)}
                      className="py-1.5 bg-violet-600 text-white text-[11px] font-bold rounded-lg hover:bg-violet-700"
                    >
                      Book Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connectedMentors.map((mentor) => {
            const mentorSessions = sessions.filter((s) => s.mentorId === mentor.id);
            const completedCount = mentorSessions.filter((s) => s.status === 'Completed').length;
            const latestSession = mentorSessions[0];

            return (
              <div
                key={mentor.id}
                className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-violet-100 shadow-xs"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-extrabold text-gray-900 text-base">{mentor.name}</h3>
                          <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">{mentor.role}</p>
                        <p className="text-xs text-violet-600 font-bold">@{mentor.company}</p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-violet-700 bg-violet-50 px-2.5 py-1 rounded-xl">
                      ${mentor.hourlyRate}/hr
                    </span>
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 bg-gray-50 p-3 rounded-2xl border border-gray-100 mt-4 text-center">
                    <div>
                      <p className="text-xs font-black text-gray-900">{completedCount}</p>
                      <p className="text-[10px] text-gray-400 font-semibold">Completed</p>
                    </div>
                    <div className="border-x border-gray-200">
                      <p className="text-xs font-black text-amber-500 flex items-center justify-center gap-0.5">
                        <Star size={11} className="fill-amber-400" /> {mentor.rating.toFixed(1)}
                      </p>
                      <p className="text-[10px] text-gray-400 font-semibold">Rating</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-violet-700">{mentor.exp}</p>
                      <p className="text-[10px] text-gray-400 font-semibold">Exp Level</p>
                    </div>
                  </div>

                  {/* Latest Interaction / Notes */}
                  {latestSession && (
                    <div className="mt-4 p-3 bg-violet-50/50 rounded-xl border border-violet-100 text-xs">
                      <span className="font-bold text-violet-900">Latest Session:</span>{' '}
                      <span className="text-gray-600 font-medium">{latestSession.topic} ({latestSession.date})</span>
                      {latestSession.notes && (
                        <p className="text-[11px] text-violet-950/70 mt-1 italic">&ldquo;{latestSession.notes}&rdquo;</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => onViewMentorProfile(mentor)}
                      className="py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-gray-200"
                    >
                      <Eye size={13} /> Profile
                    </button>
                    <button
                      onClick={() => onStartMessage(mentor.id)}
                      className="py-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-violet-100"
                    >
                      <MessageSquare size={13} /> Chat
                    </button>
                    <button
                      onClick={() => onBookSession(mentor)}
                      className="py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all cursor-pointer"
                    >
                      <Calendar size={13} /> Book Call
                    </button>
                  </div>

                  {latestSession && latestSession.status === 'Completed' && (
                    <button
                      onClick={() => onRateMentorSession(latestSession)}
                      className="w-full py-2 text-[11px] font-bold text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      {latestSession.ratingGiven ? 'Update Feedback / Review' : 'Leave Feedback & Rating'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
