"use client";

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, ArrowRight, Sparkles } from 'lucide-react';

interface InteractiveBookingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveBookingDemoModal({
  isOpen,
  onClose,
}: InteractiveBookingDemoModalProps) {
  const [selectedTopic, setSelectedTopic] = useState('FAANG System Design Mock Interview');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 06:00 PM');
  const [prepNotes, setPrepNotes] = useState('Review distributed caching patterns & LeetCode Hard Tree questions.');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 relative max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-800 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              Live Interactive Simulator 🚀
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">Experience Session Booking</h3>
          <p className="text-xs text-violet-100 mt-1">
            Test how seamless it is to schedule a 1-on-1 coaching call with Anubhav Mittal (Google).
          </p>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Session Booked Successfully!</h4>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              Google Meet link generated and session added to your calendar for {selectedSlot}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="p-6 space-y-4 overflow-y-auto flex-grow">
            {/* Mentor Snapshot */}
            <div className="p-3.5 bg-violet-50/70 rounded-2xl border border-violet-100 flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp"
                alt="Anubhav Mittal"
                className="w-12 h-12 rounded-xl object-cover border border-violet-200"
              />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Anubhav Mittal</h4>
                <p className="text-[11px] text-gray-500 font-medium">Senior Full Stack Engineer @ Google</p>
                <p className="text-[10px] text-violet-700 font-bold mt-0.5">Rate: $65/hr • ★ 4.9 (111 reviews)</p>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Session Topic *</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-800 focus:ring-2 focus:ring-violet-500"
              >
                <option value="FAANG System Design Mock Interview">FAANG System Design Mock Interview</option>
                <option value="Frontend Architecture & React 19">Frontend Architecture & React 19</option>
                <option value="ATS Resume & Portfolio Deep Dive">ATS Resume & Portfolio Deep Dive</option>
                <option value="Career Strategy & Promotion Guidance">Career Strategy & Promotion Guidance</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Select Available Time Slot *</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Tomorrow, 06:00 PM',
                  'Tomorrow, 07:30 PM',
                  'Saturday, 10:00 AM',
                  'Saturday, 04:00 PM',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      selectedSlot === slot
                        ? 'bg-violet-50 text-violet-700 border-violet-400 ring-2 ring-violet-200'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Preparation Questions / Goals</label>
              <textarea
                rows={2}
                value={prepNotes}
                onChange={(e) => setPrepNotes(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Confirm Mock Booking <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
