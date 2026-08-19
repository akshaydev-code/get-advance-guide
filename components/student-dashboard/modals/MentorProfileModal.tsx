"use client";

import React from 'react';
import { X, Star, Briefcase, Clock, Calendar, MessageSquare, Heart, CheckCircle2, Globe } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MentorItem } from '../types';

interface MentorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: MentorItem | null;
  onSendRequest: (mentor: MentorItem) => void;
  onBookSession: (mentor: MentorItem) => void;
  onToggleBookmark?: (mentorId: string) => void;
}

export default function MentorProfileModal({
  isOpen,
  onClose,
  mentor,
  onSendRequest,
  onBookSession,
  onToggleBookmark,
}: MentorProfileModalProps) {
  if (!isOpen || !mentor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Banner Top */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-20 h-20 rounded-2xl object-cover border-4 border-white/30 shadow-xl"
            />
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                  {mentor.category}
                </span>
                {mentor.available ? (
                  <span className="text-[10px] font-bold bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-900 animate-pulse" /> Available for 1-on-1
                  </span>
                ) : (
                  <span className="text-[10px] font-bold bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
                    Busy this week
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-black text-white">{mentor.name}</h2>
              <p className="text-sm text-violet-100 font-medium">
                {mentor.role} @ <span className="text-white font-bold">{mentor.company}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 bg-violet-50/60 p-3.5 rounded-2xl border border-violet-100">
            <div className="text-center border-r border-violet-200/60">
              <div className="flex items-center justify-center gap-1 text-amber-500 font-black text-sm">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span>{mentor.rating.toFixed(1)}</span>
              </div>
              <p className="text-[10px] text-gray-500 font-semibold mt-0.5">({mentor.reviews} reviews)</p>
            </div>

            <div className="text-center border-r border-violet-200/60">
              <p className="text-sm font-black text-gray-900">{mentor.exp}</p>
              <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Industry Exp</p>
            </div>

            <div className="text-center">
              <p className="text-sm font-black text-violet-700">${mentor.hourlyRate}/hr</p>
              <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Session Rate</p>
            </div>
          </div>

          {/* About & Bio */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">About Mentorship</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              {mentor.about || mentor.bio}
            </p>
          </div>

          {/* Skills & Expertise */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Core Skills & Expertise</h4>
            <div className="flex flex-wrap gap-1.5">
              {mentor.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-800 rounded-xl border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Socials & Profiles */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Connect & Verify</h4>
            <div className="flex gap-2">
              {mentor.socialLinks?.linkedin && (
                <a
                  href={mentor.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl text-xs font-bold transition-colors"
                >
                  <FaLinkedin size={14} /> LinkedIn
                </a>
              )}
              {mentor.socialLinks?.github && (
                <a
                  href={mentor.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-xl text-xs font-bold transition-colors"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              )}
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold">
                <CheckCircle2 size={14} /> Verified AdvanceGuide Mentor
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => onToggleBookmark && onToggleBookmark(mentor.id)}
            className={`p-2.5 rounded-xl border transition-colors flex items-center gap-1 text-xs font-bold ${
              mentor.isBookmarked
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart size={16} className={mentor.isBookmarked ? 'fill-rose-500 text-rose-500' : ''} />
            {mentor.isBookmarked ? 'Bookmarked' : 'Save'}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSendRequest(mentor);
              }}
              className="px-4 py-2.5 bg-white border border-violet-600 text-violet-600 hover:bg-violet-50 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare size={14} /> Send Request
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSession(mentor);
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-violet-200 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar size={14} /> Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
