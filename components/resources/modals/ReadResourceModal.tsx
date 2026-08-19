"use client";

import React, { useState } from 'react';
import {
  X, BookOpen, Heart, Bookmark, Download, Share2,
  Clock, CheckCircle2, User, Sparkles, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { ResourceItem } from '../types';

interface ReadResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceItem | null;
  isLiked?: boolean;
  isBookmarked?: boolean;
  onToggleLike: (resourceId: string) => void;
  onToggleBookmark: (resourceId: string) => void;
}

export default function ReadResourceModal({
  isOpen,
  onClose,
  resource,
  isLiked = false,
  isBookmarked = false,
  onToggleLike,
  onToggleBookmark,
}: ReadResourceModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !resource) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      alert(`Downloaded ${resource.downloadFileName || resource.title + '.pdf'} (${resource.downloadFileSize || '2.4 MB'})`);
    }, 800);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[92vh] flex flex-col">
        {/* Top Gradient Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-800 p-6 md:p-8 text-white relative flex-shrink-0">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                {resource.type}
              </span>
              <span className="text-[10px] font-bold bg-amber-400 text-amber-950 px-2.5 py-1 rounded-full">
                {resource.category}
              </span>
              <span className="text-[10px] font-bold bg-white/10 text-white px-2.5 py-1 rounded-full">
                {resource.level}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Share link"
              >
                <Share2 size={16} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {resource.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/15 text-xs text-violet-100 font-medium">
            <div className="flex items-center gap-2">
              <img
                src={resource.author.avatar}
                alt={resource.author.name}
                className="w-8 h-8 rounded-full object-cover border border-white/40"
              />
              <span>
                By <strong className="text-white">{resource.author.name}</strong> ({resource.author.role} @ {resource.author.company})
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={13} /> {resource.readTime}
            </div>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
          {copiedLink && (
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 size={15} className="text-emerald-600" />
              Resource link copied to clipboard!
            </div>
          )}

          {/* Executive Summary Callout */}
          <div className="p-4 md:p-5 bg-violet-50/70 rounded-2xl border border-violet-100 text-xs md:text-sm text-violet-950 font-medium leading-relaxed">
            <strong className="text-violet-900 block font-bold mb-1">Executive Overview:</strong>
            {resource.summary}
          </div>

          {/* Full Markdown-styled Content */}
          <div className="prose prose-violet max-w-none text-xs md:text-sm text-gray-700 leading-relaxed space-y-4">
            {resource.content.split('\n\n').map((para, i) => {
              if (para.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-base md:text-lg font-black text-gray-900 pt-2 border-b border-gray-100 pb-1">
                    {para.replace('### ', '')}
                  </h3>
                );
              }
              if (para.startsWith('- ') || para.startsWith('1. ')) {
                return (
                  <div key={i} className="pl-4 py-1 space-y-1.5 font-medium text-gray-700">
                    {para.split('\n').map((li, idx) => (
                      <p key={idx} className="leading-snug">
                        {li}
                      </p>
                    ))}
                  </div>
                );
              }
              return (
                <p key={i} className="font-normal text-gray-600 leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Topics & Tags</h4>
            <div className="flex flex-wrap gap-1.5">
              {resource.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-xl"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Author Mentorship Promo */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={resource.author.avatar}
                alt={resource.author.name}
                className="w-12 h-12 rounded-2xl object-cover border-2 border-violet-200"
              />
              <div>
                <p className="text-[10px] font-bold text-violet-700 uppercase tracking-wider">Author & Mentor</p>
                <h4 className="text-sm font-extrabold text-gray-900">{resource.author.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{resource.author.role} @ {resource.author.company}</p>
              </div>
            </div>

            <Link
              href="/mentors"
              onClick={onClose}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-200 transition-all cursor-pointer whitespace-nowrap"
            >
              Book 1-on-1 with {resource.author.name.split(' ')[0]} <ExternalLink size={12} />
            </Link>
          </div>
        </div>

        {/* Bottom Interactive Bar */}
        <div className="bg-gray-50 p-4 px-6 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleLike(resource.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isLiked
                  ? 'bg-rose-50 text-rose-600 border border-rose-200'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart size={14} className={isLiked ? 'fill-rose-600' : ''} />
              <span>{resource.likes + (isLiked ? 1 : 0)} Likes</span>
            </button>

            <button
              onClick={() => onToggleBookmark(resource.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-violet-50 text-violet-700 border border-violet-200'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Bookmark size={14} className={isBookmarked ? 'fill-violet-700' : ''} />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          <button
            onClick={handleDownload}
            className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-violet-200 transition-all cursor-pointer"
          >
            <Download size={14} />
            <span>{downloadSuccess ? 'Downloaded!' : `Download PDF (${resource.downloadFileSize || '2.4 MB'})`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
