"use client";

import React, { useState } from 'react';
import { X, BookOpen, Plus, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { MentorResourceItem } from '../types';

interface CreateResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (resource: Omit<MentorResourceItem, 'id' | 'views' | 'likes' | 'downloads' | 'createdAt'>) => void;
}

export default function CreateResourceModal({
  isOpen,
  onClose,
  onPublish,
}: CreateResourceModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [type, setType] = useState<'Roadmap' | 'Guide' | 'Cheatsheet' | 'Template'>('Guide');
  const [level, setLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [readTime, setReadTime] = useState('10 min read');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(['React', 'Architecture']);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tagInput.trim() || tags.includes(tagInput.trim())) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput('');
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim() || !content.trim()) return;

    onPublish({
      title,
      category,
      type,
      level,
      readTime,
      summary,
      content,
      tags,
      isPublished: true,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setTitle('');
      setSummary('');
      setContent('');
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
            <div className="p-2.5 bg-white/15 rounded-2xl backdrop-blur-md">
              <FileText size={22} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Mentorship Knowledge Hub
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">Publish New Learning Resource</h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        {isSuccess ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Resource Published Successfully!</h4>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Your mentee community can now access this guide on their student dashboard.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 overflow-y-auto space-y-4 flex-grow">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Resource Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g. Distributed Caching Patterns with Redis"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
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
                  <option value="Career & Interviews">Career & Interviews</option>
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
                <label className="text-xs font-bold text-gray-700 block mb-1">Experience Level</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-violet-500"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Short Summary (Preview) *</label>
              <textarea
                rows={2}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
                placeholder="Give a 1-2 sentence executive overview of what students will learn..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Full Markdown Content *</label>
              <textarea
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="### Key Takeaways\n1. Concept overview...\n2. Production architecture tips..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 font-mono focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Tags</label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-bold bg-violet-50 text-violet-700 px-2.5 py-0.5 rounded-lg flex items-center gap-1 border border-violet-100"
                  >
                    #{t}
                    <button type="button" onClick={() => handleRemoveTag(t)} className="hover:text-violet-950">
                      <X size={10} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add tag (e.g. Next.js, Cache)..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold"
                >
                  Add Tag
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl shadow-md shadow-violet-200 cursor-pointer"
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
