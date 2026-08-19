"use client";

import React, { useState } from 'react';
import { X, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { SessionItem } from '../types';

interface RateMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: SessionItem | null;
  onSubmitRating: (sessionId: string, rating: number, feedback: string) => void;
}

export default function RateMentorModal({
  isOpen,
  onClose,
  session,
  onSubmitRating,
}: RateMentorModalProps) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !session) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitRating(session.id, rating, feedback);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFeedback('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 relative">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3">
            <img
              src={session.mentorImage}
              alt={session.mentorName}
              className="w-12 h-12 rounded-xl object-cover border-2 border-white/40 shadow-sm"
            />
            <div>
              <h3 className="text-lg font-bold text-white">Rate Your Session</h3>
              <p className="text-xs text-violet-100">{session.mentorName} • {session.topic}</p>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-2">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Feedback Submitted!</h4>
            <p className="text-xs text-gray-500">Thank you for helping our mentor community grow.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="text-center">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Overall Experience Rating
              </label>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                  >
                    <Star
                      size={28}
                      className={
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-violet-700 mt-1 inline-block">
                {rating === 5 && 'Outstanding! 🌟'}
                {rating === 4 && 'Very Good 👍'}
                {rating === 3 && 'Average'}
                {rating === 2 && 'Needs Improvement'}
                {rating === 1 && 'Poor'}
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Your Feedback & Review
              </label>
              <textarea
                rows={3}
                required
                placeholder="What was most helpful? What actionable insights did you take away?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl shadow-md shadow-violet-200 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles size={14} /> Submit Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
