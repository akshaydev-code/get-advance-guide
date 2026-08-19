"use client";

import React, { useState } from 'react';
import { X, BookOpen, Plus, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { AdminResourceItem } from '../types';

interface CreateAdminResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (resource: Omit<AdminResourceItem, 'id' | 'views' | 'likes' | 'publishedDate'>) => void;
}

export default function CreateAdminResourceModal({
  isOpen,
  onClose,
  onPublish,
}: CreateAdminResourceModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [type, setType] = useState<'Roadmap' | 'Guide' | 'Cheatsheet' | 'Template'>('Guide');
  const [readTime, setReadTime] = useState('15 min read');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('React, Next.js, Architecture');
  const [isFeatured, setIsFeatured] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim()) return;

    const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);

    onPublish({
      title,
      category,
      type,
      readTime,
      author: 'GetAdvanceGuide Editorial Team',
      summary,
      content: content || 'Full platform guide content...',
      tags,
      isFeatured,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-2xl">
              <FileText size={22} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Platform Curations
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">Publish Official Study Resource</h3>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Resource Published to Platform!</h4>
            <p className="text-xs text-gray-500">Live across the resources hub and student dashboards.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 overflow-y-auto space-y-4 flex-grow">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Guide / Roadmap Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g. Distributed Caching & Sharding Guide"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-violet-500"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="System Design">System Design</option>
                  <option value="Data Science">Data Science</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Career Guidance">Career Guidance</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Resource Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-violet-500"
                >
                  <option value="Guide">Guide</option>
                  <option value="Roadmap">Roadmap</option>
                  <option value="Cheatsheet">Cheatsheet</option>
                  <option value="Template">Template</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Estimated Read Time</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Summary (Short Preview) *</label>
              <textarea
                rows={2}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Tags (comma separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="resFeaturedCheck"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-4 h-4 rounded text-violet-600"
              />
              <label htmlFor="resFeaturedCheck" className="text-xs font-bold text-gray-800 cursor-pointer">
                Feature on Homepage Top Resources Grid ⭐
              </label>
            </div>

            <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 transition-all cursor-pointer"
              >
                Publish Resource
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
