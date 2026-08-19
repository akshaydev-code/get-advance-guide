"use client";

import React, { useState } from 'react';
import {
  Star, Search, Trash2, CheckCircle2, AlertCircle,
  Sparkles, Eye, ShieldCheck
} from 'lucide-react';
import { AdminReviewItem } from '../types';

interface ReviewsTabProps {
  reviews: AdminReviewItem[];
  onToggleFeatured: (reviewId: string) => void;
  onDeleteReview: (reviewId: string) => void;
}

export default function ReviewsTab({
  reviews,
  onToggleFeatured,
  onDeleteReview,
}: ReviewsTabProps) {
  const [filterRating, setFilterRating] = useState<number | 'All'>('All');

  const filtered = reviews.filter((r) => {
    if (filterRating === 'All') return true;
    return r.rating === filterRating;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Testimonials & Review Moderation
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {reviews.length} Total Reviews
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Moderate student reviews, toggle homepage testimonials showcase, and prevent spam.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
          {(['All', 5, 4, 3] as const).map((r) => (
            <button
              key={r.toString()}
              onClick={() => setFilterRating(r)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterRating === r
                  ? 'bg-white text-violet-700 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {r === 'All' ? 'All' : `★ ${r}`}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filtered.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 transition-all space-y-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img src={rev.studentAvatar} alt={rev.studentName} className="w-10 h-10 rounded-xl object-cover border border-violet-100" />
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm">{rev.studentName}</h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Reviewed: <strong className="text-violet-700">{rev.mentorName}</strong> ({rev.mentorCompany})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className={s <= rev.rating ? 'fill-amber-400' : 'text-gray-300'} />
                  ))}
                  <span className="text-gray-900 font-black ml-1">{rev.rating}.0</span>
                </div>

                <button
                  onClick={() => onToggleFeatured(rev.id)}
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full cursor-pointer transition-colors ${
                    rev.isFeatured
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {rev.isFeatured ? '★ Featured on Home' : 'Standard'}
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed font-medium pl-3 border-l-2 border-violet-300 italic">
              &ldquo;{rev.comment}&rdquo;
            </p>

            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[11px] text-gray-400">
              <span>Date: {rev.date}</span>
              <button
                onClick={() => {
                  if (confirm('Delete this review permanently?')) {
                    onDeleteReview(rev.id);
                  }
                }}
                className="text-rose-600 font-bold hover:underline cursor-pointer flex items-center gap-1"
              >
                <Trash2 size={12} /> Remove Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
