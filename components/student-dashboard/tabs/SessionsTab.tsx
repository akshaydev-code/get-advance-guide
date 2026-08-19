"use client";

import React, { useState } from 'react';
import {
  Calendar, Clock, Video, CheckCircle2, XCircle, Star, Plus,
  Share2, Edit3, Trash2, ShieldCheck, ChevronRight, MessageSquare, ExternalLink
} from 'lucide-react';
import { SessionItem, MentorItem, DashboardTab } from '../types';

interface SessionsTabProps {
  sessions: SessionItem[];
  onNavigateTab: (tab: DashboardTab) => void;
  onJoinSession: (session: SessionItem) => void;
  onCancelSession: (sessionId: string) => void;
  onRescheduleSession: (sessionId: string, newDate: string, newTime: string) => void;
  onRateSession: (session: SessionItem) => void;
  onStartMessage: (mentorId: string) => void;
}

export default function SessionsTab({
  sessions,
  onNavigateTab,
  onJoinSession,
  onCancelSession,
  onRescheduleSession,
  onRateSession,
  onStartMessage,
}: SessionsTabProps) {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');
  const [reschedulingSessionId, setReschedulingSessionId] = useState<string | null>(null);
  const [rescheduleDate, setRescheduleDate] = useState('2026-08-27');
  const [rescheduleTime, setRescheduleTime] = useState('06:00 PM');

  const filteredSessions = sessions.filter((s) => {
    if (filter === 'All') return true;
    return s.status === filter;
  });

  const handleSaveReschedule = (sessionId: string) => {
    onRescheduleSession(sessionId, rescheduleDate, rescheduleTime);
    setReschedulingSessionId(null);
  };

  const createGoogleCalendarUrl = (session: SessionItem) => {
    const title = encodeURIComponent(`Mentorship Session: ${session.topic} with ${session.mentorName}`);
    const details = encodeURIComponent(`1-on-1 Mentorship session on GetAdvanceGuide with ${session.mentorName} (${session.mentorCompany}). Topic: ${session.topic}`);
    const location = encodeURIComponent('GetAdvanceGuide Live Video Room');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Controls */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              1-on-1 Mentorship Sessions
            </h2>
            <span className="text-xs font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
              {sessions.filter(s => s.status === 'Upcoming').length} Upcoming
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Manage your scheduled video calls, join live meeting rooms, or view past session notes.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('find-mentors')}
          className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          <Plus size={15} /> Schedule New Session
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-2xl w-fit">
        {(['Upcoming', 'Completed', 'Cancelled', 'All'] as const).map((status) => {
          const isSelected = filter === status;
          const count = status === 'All' ? sessions.length : sessions.filter((s) => s.status === status).length;
          return (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {status} ({count})
            </button>
          );
        })}
      </div>

      {/* Sessions Grid / List */}
      {filteredSessions.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <Calendar size={40} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No {filter.toLowerCase()} sessions</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Book a 1-on-1 session with any verified mentor to conduct code reviews, mock interviews, or career planning.
          </p>
          <button
            onClick={() => onNavigateTab('find-mentors')}
            className="px-5 py-2.5 bg-violet-600 text-white rounded-xl text-xs font-bold hover:bg-violet-700 transition-colors cursor-pointer"
          >
            Find a Mentor
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 transition-all space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Mentor Details */}
                <div className="flex items-start sm:items-center gap-4">
                  <img
                    src={session.mentorImage}
                    alt={session.mentorName}
                    className="w-14 h-14 rounded-2xl object-cover border border-gray-200 shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-extrabold text-gray-900">{session.mentorName}</h3>
                      <span className="text-xs text-violet-600 font-bold">@{session.mentorCompany}</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{session.mentorRole}</p>
                    <p className="text-xs font-bold text-gray-900 mt-1">
                      Focus: <span className="text-violet-700">{session.topic}</span>
                    </p>
                  </div>
                </div>

                {/* Date & Status Badge */}
                <div className="flex items-center gap-3">
                  <div className="text-left md:text-right bg-violet-50/80 px-4 py-2 rounded-2xl border border-violet-100">
                    <p className="text-xs font-black text-violet-900 flex items-center gap-1.5">
                      <Calendar size={13} className="text-violet-600" /> {session.date}
                    </p>
                    <p className="text-[11px] font-bold text-violet-700 flex items-center gap-1 mt-0.5">
                      <Clock size={12} /> {session.time} ({session.durationMinutes} mins)
                    </p>
                  </div>

                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl ${
                      session.status === 'Upcoming'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : session.status === 'Completed'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {session.status}
                  </span>
                </div>
              </div>

              {/* Notes / Feedback */}
              {session.notes && (
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-600">
                  <strong className="text-gray-700">Prep / Session Notes:</strong> {session.notes}
                </div>
              )}

              {session.feedbackGiven && (
                <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                  <div>
                    <strong>Your Rating:</strong> ★ {session.ratingGiven}/5 — <em>&ldquo;{session.feedbackGiven}&rdquo;</em>
                  </div>
                  <button
                    onClick={() => onRateSession(session)}
                    className="text-[10px] font-bold text-amber-700 underline hover:text-amber-900 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              )}

              {/* Reschedule Inline Box */}
              {reschedulingSessionId === session.id && (
                <div className="p-4 bg-violet-50/70 rounded-2xl border border-violet-200 space-y-3 animate-in fade-in">
                  <h4 className="text-xs font-bold text-violet-950 uppercase tracking-wider">
                    Select New Date & Time Slot
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="date"
                      value={rescheduleDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setRescheduleDate(e.target.value)}
                      className="bg-white border border-violet-200 rounded-xl px-3 py-2 text-xs font-bold"
                    />
                    <select
                      value={rescheduleTime}
                      onChange={(e) => setRescheduleTime(e.target.value)}
                      className="bg-white border border-violet-200 rounded-xl px-3 py-2 text-xs font-bold"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="07:30 PM">07:30 PM</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setReschedulingSessionId(null)}
                      className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSaveReschedule(session.id)}
                      className="px-4 py-1.5 bg-violet-600 text-white rounded-lg text-xs font-bold hover:bg-violet-700 cursor-pointer"
                    >
                      Confirm Reschedule
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onStartMessage(session.mentorId)}
                    className="text-xs font-bold text-gray-500 hover:text-violet-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare size={13} /> Chat with {session.mentorName.split(' ')[0]}
                  </button>

                  {session.status === 'Upcoming' && (
                    <a
                      href={createGoogleCalendarUrl(session)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-gray-400 hover:text-gray-700 flex items-center gap-1 transition-colors"
                      title="Add to Google Calendar"
                    >
                      <ExternalLink size={12} /> Add to Calendar
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {session.status === 'Upcoming' && (
                    <>
                      <button
                        onClick={() => setReschedulingSessionId(session.id)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 size={13} /> Reschedule
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to cancel your session with ${session.mentorName}?`)) {
                            onCancelSession(session.id);
                          }
                        }}
                        className="px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 size={13} /> Cancel
                      </button>
                      <button
                        onClick={() => onJoinSession(session)}
                        className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Video size={14} /> Join Live Meeting
                      </button>
                    </>
                  )}

                  {session.status === 'Completed' && (
                    <button
                      onClick={() => onRateSession(session)}
                      className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Star size={13} className="fill-amber-400" />
                      {session.ratingGiven ? 'Update Review' : 'Rate Session'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
