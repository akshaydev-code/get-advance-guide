"use client";

import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MentorItem, SessionItem } from '../types';

interface BookSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: MentorItem | null;
  onBook: (session: Omit<SessionItem, 'id' | 'status'>) => void;
}

export default function BookSessionModal({
  isOpen,
  onClose,
  mentor,
  onBook,
}: BookSessionModalProps) {
  const [selectedDate, setSelectedDate] = useState('2026-08-23');
  const [selectedTime, setSelectedTime] = useState('06:00 PM');
  const [duration, setDuration] = useState<number>(45);
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !mentor) return null;

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '04:00 PM',
    '06:00 PM',
    '07:30 PM',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    onBook({
      mentorId: mentor.id,
      mentorName: mentor.name,
      mentorRole: mentor.role,
      mentorCompany: mentor.company,
      mentorImage: mentor.image,
      date: selectedDate,
      time: selectedTime,
      durationMinutes: duration,
      topic,
      meetLink: `https://meet.google.com/gag-${mentor.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now().toString().slice(-4)}`,
      notes,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setTopic('');
      setNotes('');
      onClose();
    }, 1300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-4">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-white/40 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                  1-on-1 Mentorship Session
                </span>
                <span className="text-[11px] font-bold bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full">
                  ${mentor.hourlyRate}/hr
                </span>
              </div>
              <h3 className="text-xl font-bold mt-1 text-white">{mentor.name}</h3>
              <p className="text-xs text-violet-100 font-medium">
                {mentor.role} • <span className="text-white font-semibold">{mentor.company}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-10 text-center space-y-3 flex-grow flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Session Scheduled Successfully!</h4>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              Added to your <strong>Sessions tab</strong>. Google Meet link and calendar invitation generated.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-4 overflow-y-auto flex-grow">
            {/* Topic */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Session Focus / Agenda *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Next.js Code Review & Architectural Strategy"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>

            {/* Date & Duration Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar size={13} className="text-violet-600" /> Select Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Clock size={13} className="text-violet-600" /> Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                >
                  <option value={30}>30 Minutes</option>
                  <option value={45}>45 Minutes (Recommended)</option>
                  <option value={60}>60 Minutes</option>
                </select>
              </div>
            </div>

            {/* Time Slot Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Available Time Slots ({Intl.DateTimeFormat().resolvedOptions().timeZone || 'IST'})
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        isSelected
                          ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-violet-50 hover:text-violet-700'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Preparation Notes or Links for Mentor (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Share your GitHub repo, Figma link, or specific questions in advance..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium resize-none"
              />
            </div>

            <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 text-xs font-medium">
              <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
              <span>Includes HD video call link, live screen sharing, and post-session notes.</span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="text-xs text-gray-500">
                Total: <span className="text-base font-black text-gray-900">${Math.round((mentor.hourlyRate * duration) / 60)}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Video size={14} /> Confirm & Book Session
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
