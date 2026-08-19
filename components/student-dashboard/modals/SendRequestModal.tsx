"use client";

import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { MentorItem, MentorshipRequest } from '../types';

interface SendRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: MentorItem | null;
  onSubmit: (request: Omit<MentorshipRequest, 'id' | 'createdAt'>) => void;
}

export default function SendRequestModal({
  isOpen,
  onClose,
  mentor,
  onSubmit,
}: SendRequestModalProps) {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [goals, setGoals] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !mentor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || !message.trim()) return;

    onSubmit({
      mentorId: mentor.id,
      mentorName: mentor.name,
      mentorRole: mentor.role,
      mentorCompany: mentor.company,
      mentorImage: mentor.image,
      topic,
      message,
      goals: goals || 'Accelerate tech career and gain industry feedback',
      status: 'Pending',
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setTopic('');
      setMessage('');
      setGoals('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white relative">
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
              <span className="text-[11px] font-semibold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Mentorship Request
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">{mentor.name}</h3>
              <p className="text-xs text-violet-100 font-medium">
                {mentor.role} • <span className="text-white font-semibold">{mentor.company}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Request Sent Successfully!</h4>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              {mentor.name} will be notified and usually responds within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Mentorship Topic / Focus Area *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Next.js Code Review, System Design Mock, Resume Advice"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Your Primary Goal
              </label>
              <input
                type="text"
                placeholder="e.g. Crack SDE interview at Google / Build production portfolio"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Message to Mentor *
              </label>
              <textarea
                required
                rows={3}
                placeholder={`Hi ${mentor.name.split(' ')[0]}, I would appreciate your guidance on...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent font-medium resize-none"
              />
            </div>

            {/* AI Quick Prompts */}
            <div className="bg-violet-50/70 p-3 rounded-xl border border-violet-100">
              <div className="flex items-center gap-1.5 text-violet-700 font-bold text-xs mb-1.5">
                <Sparkles size={13} /> Quick Suggestions:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Code Architecture Review',
                  'Mock Technical Interview',
                  'Resume & LinkedIn Polish',
                ].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => {
                      setTopic(s);
                      setMessage(`Hi ${mentor.name.split(' ')[0]}, I would like to request guidance regarding ${s} and get industry feedback.`);
                    }}
                    className="text-[11px] bg-white text-violet-700 hover:bg-violet-600 hover:text-white px-2.5 py-1 rounded-lg font-semibold border border-violet-200 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Send size={15} /> Send Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
