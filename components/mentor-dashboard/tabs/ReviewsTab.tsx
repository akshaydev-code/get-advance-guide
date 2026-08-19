"use client";

import React, { useState } from 'react';
import {
  Star, MessageSquare, ThumbsUp, Send, CheckCircle2,
  Sparkles, Filter, ChevronDown
} from 'lucide-react';
import { MentorReview } from '../types';

interface ReviewsTabProps {
  reviews: MentorReview[];
  onReplyReview: (reviewId: string, replyText: string) => void;
}

export default function ReviewsTab({
  reviews,
  onReplyReview,
}: ReviewsTabProps) {
  const [selectedRating, setSelectedRating] = useState<number | 'All'>('All');
  const [replyInputId, setReplyInputId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const filteredReviews = reviews.filter((r) => {
    if (selectedRating === 'All') return true;
    return Math.floor(r.rating) === selectedRating;
  });

  const avgRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  const handleSendReply = (reviewId: string) => {
    if (!replyText.trim()) return;
    onReplyReview(reviewId, replyText.trim());
    setReplyText('');
    setReplyInputId(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Rating Breakdown Banner */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Student Feedback & Reviews
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Verified testimonials from developers and students who completed 1-on-1 sessions with you.
          </p>
        </div>

        {/* Rating Score Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-3xl bg-violet-50/60 border border-violet-100">
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-violet-200/60 pb-4 md:pb-0">
            <h3 className="text-5xl font-black text-violet-950">{avgRating}</h3>
            <div className="flex items-center gap-1 text-amber-400 my-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-amber-400" />
              ))}
            </div>
            <p className="text-xs font-bold text-gray-600">Overall rating based on {reviews.length} reviews</p>
          </div>

          <div className="md:col-span-8 flex flex-col justify-center space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = reviews.filter((r) => Math.floor(r.rating) === stars).length;
              const percent = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-gray-700">{stars} Stars</span>
                  <div className="flex-grow h-2.5 bg-white rounded-full overflow-hidden border border-violet-100">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="w-8 font-bold text-gray-400 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-xs font-bold text-gray-500 mr-2">Filter:</span>
          {(['All', 5, 4, 3] as const).map((r) => (
            <button
              key={r.toString()}
              onClick={() => setSelectedRating(r)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedRating === r
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {r === 'All' ? 'All Reviews' : `★ ${r} Stars`}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 transition-all space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <img
                  src={rev.studentAvatar}
                  alt={rev.studentName}
                  className="w-12 h-12 rounded-2xl object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{rev.studentName}</h4>
                  <p className="text-xs text-gray-500">{rev.studentRole}</p>
                  <p className="text-[10px] text-violet-600 font-bold mt-0.5">Topic: {rev.sessionTopic}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold justify-end">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={13}
                      className={s <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-gray-900 font-black ml-1">{rev.rating}</span>
                </div>
                <span className="text-[10px] text-gray-400 font-semibold mt-1 block">{rev.date}</span>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed font-medium pl-2 border-l-2 border-violet-300 italic">
              &ldquo;{rev.comment}&rdquo;
            </p>

            {/* Mentor Reply Box */}
            {rev.mentorReply ? (
              <div className="p-3.5 bg-violet-50/70 rounded-2xl border border-violet-100 text-xs space-y-1">
                <p className="font-bold text-violet-900 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-violet-600" /> Your Public Reply:
                </p>
                <p className="text-violet-950/80 leading-relaxed italic">{rev.mentorReply}</p>
              </div>
            ) : (
              <div>
                {replyInputId === rev.id ? (
                  <div className="space-y-2 pt-2">
                    <textarea
                      rows={2}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a public response to your student..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setReplyInputId(null);
                          setReplyText('');
                        }}
                        className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSendReply(rev.id)}
                        className="px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-lg shadow-xs cursor-pointer"
                      >
                        Post Reply
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setReplyInputId(rev.id)}
                    className="text-xs font-bold text-violet-600 hover:text-violet-700 flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <MessageSquare size={13} /> Reply to Student
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
