"use client";

import React, { useState } from 'react';
import { X, UserPlus, Sparkles, CheckCircle2, DollarSign, Image as ImageIcon } from 'lucide-react';
import { AdminMentorItem } from '../types';

interface AddMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMentor: (mentor: Omit<AdminMentorItem, 'id' | 'rating' | 'reviews' | 'totalMentees' | 'totalEarnings' | 'joinedDate'>) => void;
}

const MENTOR_AVATAR_PRESETS = [
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_4_fau2i1.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_5_bgyc21.webp',
];

export default function AddMentorModal({
  isOpen,
  onClose,
  onAddMentor,
}: AddMentorModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [hourlyRate, setHourlyRate] = useState(65);
  const [exp, setExp] = useState('5+ years');
  const [image, setImage] = useState(MENTOR_AVATAR_PRESETS[0]);
  const [skillsInput, setSkillsInput] = useState('React, Next.js, Node.js, System Design');
  const [bio, setBio] = useState('');
  const [isPopular, setIsPopular] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !role.trim() || !company.trim()) return;

    const skills = skillsInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    onAddMentor({
      name,
      email,
      role,
      company,
      image,
      category,
      skills,
      exp,
      experienceYears: parseInt(exp) || 5,
      hourlyRate,
      available: true,
      isPopular,
      status: 'Active',
      bio: bio || `Expert ${role} at ${company} coaching next-gen engineers.`,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setName('');
      setEmail('');
      setRole('');
      setCompany('');
      setBio('');
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
              <UserPlus size={22} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Admin Console
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">Register & Verify New Mentor</h3>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Mentor Added Successfully!</h4>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              {name} is now published and visible across the Homepage and Find Mentors catalog.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 overflow-y-auto space-y-4 flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="e.g. rahul@google.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Job Title *</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  placeholder="e.g. Senior Backend Engineer"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Company / Organization *</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  placeholder="e.g. Microsoft / Google"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Category Domain</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-violet-500"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="System Design">System Design</option>
                  <option value="Data Science">Data Science</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Career Guidance">Career Guidance</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Hourly Rate ($ USD)</label>
                <input
                  type="number"
                  min="20"
                  max="500"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 font-bold focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>

            {/* Avatar Preset Picker */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-2">Mentor Avatar Photo</label>
              <div className="flex items-center gap-2">
                {MENTOR_AVATAR_PRESETS.map((imgUrl, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setImage(imgUrl)}
                    className={`w-10 h-10 rounded-xl overflow-hidden border-2 transition-all ${
                      image === imgUrl ? 'border-violet-600 ring-2 ring-violet-200' : 'border-gray-200'
                    }`}
                  >
                    <img src={imgUrl} alt={`Preset ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Skills (comma separated)</label>
              <input
                type="text"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                placeholder="e.g. React, Next.js, Node.js, GraphQL"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Short Biography</label>
              <textarea
                rows={2}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Brief summary of experience..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium leading-relaxed"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="isPopularCheck"
                checked={isPopular}
                onChange={(e) => setIsPopular(e.target.checked)}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500 cursor-pointer"
              />
              <label htmlFor="isPopularCheck" className="text-xs font-bold text-gray-800 cursor-pointer">
                Feature on Homepage (Popular Mentor Badge) ⭐
              </label>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl shadow-md shadow-violet-200 transition-all cursor-pointer"
              >
                Verify & Add Mentor
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
