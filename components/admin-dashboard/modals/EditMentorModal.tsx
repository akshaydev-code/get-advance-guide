"use client";

import React, { useState, useEffect } from 'react';
import { X, Edit3, Save, CheckCircle2 } from 'lucide-react';
import { AdminMentorItem } from '../types';

interface EditMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: AdminMentorItem | null;
  onSave: (updated: AdminMentorItem) => void;
}

export default function EditMentorModal({
  isOpen,
  onClose,
  mentor,
  onSave,
}: EditMentorModalProps) {
  const [formData, setFormData] = useState<AdminMentorItem | null>(null);
  const [skillsInput, setSkillsInput] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (mentor) {
      setFormData(mentor);
      setSkillsInput(mentor.skills.join(', '));
    }
  }, [mentor]);

  if (!isOpen || !formData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const skills = skillsInput.split(',').map((s) => s.trim()).filter(Boolean);
    const updated: AdminMentorItem = {
      ...formData,
      skills,
    };
    onSave(updated);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <img
              src={formData.image}
              alt={formData.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-white/40 shadow-sm"
            />
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Edit Mentor
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">{formData.name}</h3>
            </div>
          </div>
        </div>

        {isSaved ? (
          <div className="p-8 text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} />
            </div>
            <h4 className="text-base font-bold text-gray-900">Mentor Updated Successfully!</h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Role / Title</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Hourly Rate ($ USD)</label>
                <input
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({ ...formData, hourlyRate: parseFloat(e.target.value) || 0 })}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Account Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold"
                >
                  <option value="Active">Active</option>
                  <option value="Pending Review">Pending Review</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Skills (comma separated)</label>
              <input
                type="text"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="editIsPopular"
                checked={formData.isPopular}
                onChange={(e) => setFormData({ ...formData, isPopular: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600"
              />
              <label htmlFor="editIsPopular" className="text-xs font-bold text-gray-800">
                Featured / Popular Mentor Badge ⭐
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
                className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
