"use client";

import React, { useState } from 'react';
import { X, Bell, Send, CheckCircle2, Sparkles, Users } from 'lucide-react';

interface BroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBroadcast: (title: string, message: string, audience: string) => void;
}

export default function BroadcastModal({
  isOpen,
  onClose,
  onBroadcast,
}: BroadcastModalProps) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [audience, setAudience] = useState<'All Users' | 'Mentors Only' | 'Students Only'>('All Users');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;

    onBroadcast(title, message, audience);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setTitle('');
      setMessage('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-2xl">
              <Bell size={22} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Platform Broadcast
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">Send System Announcement</h3>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Broadcast Sent to {audience}!</h4>
            <p className="text-xs text-gray-500">Delivered to live notification drawers across the platform.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Target Audience</label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value as any)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-violet-500"
              >
                <option value="All Users">All Users (Mentors & Students)</option>
                <option value="Mentors Only">Mentors Only</option>
                <option value="Students Only">Students Only</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Notification Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g. 🚀 New Workshop Series & System Updates"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Message Body *</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Details of the announcement..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 leading-relaxed font-medium"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-violet-200 cursor-pointer"
              >
                <Send size={13} /> Broadcast Alert
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
