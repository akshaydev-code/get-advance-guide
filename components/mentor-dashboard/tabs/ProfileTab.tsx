"use client";

import React, { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Globe, Briefcase, DollarSign,
  Save, CheckCircle2, Plus, X, Sparkles, Star, Heart, Check, Image as ImageIcon
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MentorProfile } from '../types';

interface ProfileTabProps {
  profile: MentorProfile;
  onSaveProfile: (updated: MentorProfile) => void;
}

const MENTOR_AVATAR_PRESETS = [
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_4_fau2i1.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_5_bgyc21.webp',
];

export default function ProfileTab({
  profile,
  onSaveProfile,
}: ProfileTabProps) {
  const [formData, setFormData] = useState<MentorProfile>({ ...profile });
  const [newSkill, setNewSkill] = useState('');
  const [customAvatarUrl, setCustomAvatarUrl] = useState('');
  const [showCustomAvatarInput, setShowCustomAvatarInput] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim() || formData.skills.includes(newSkill.trim())) return;
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill.trim()],
    }));
    setNewSkill('');
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
      {/* Header with Save Button */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Mentor Profile & Public Card
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            This profile appears across the Homepage, Find Mentors catalog, and About Us sections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
          >
            {isSaved ? <CheckCircle2 size={16} className="text-emerald-300" /> : <Save size={16} />}
            {isSaved ? 'Profile Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {isSaved && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold border border-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          Mentor profile updated! Changes are live across GetAdvanceGuide.
        </div>
      )}

      {/* Main Grid: Left Column Preview & Avatars (4 cols) | Right Column Fields (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Live Card Preview & Avatar Selector */}
        <div className="lg:col-span-4 space-y-6">
          {/* Live Card Preview */}
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4 text-center">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Live Public Card Preview</h4>

            <div className="relative inline-block">
              <img
                src={formData.image}
                alt={formData.name}
                className="w-24 h-24 rounded-3xl object-cover border-4 border-violet-100 shadow-md mx-auto"
              />
              {formData.available && (
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" title="Available now" />
              )}
            </div>

            <div>
              <h3 className="font-extrabold text-gray-900 text-lg">{formData.name}</h3>
              <p className="text-xs text-gray-500 font-medium">{formData.role}</p>
              <p className="text-xs text-violet-600 font-bold">@{formData.company}</p>
            </div>

            <div className="p-3 bg-violet-50/70 rounded-2xl border border-violet-100 text-center">
              <span className="text-xs font-black text-violet-900">${formData.hourlyRate} / hour</span>
              <p className="text-[10px] text-violet-600 font-semibold mt-0.5">{formData.category}</p>
            </div>

            {/* Avatar Preset Selector */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Choose Mentor Avatar:
              </p>
              <div className="flex justify-center gap-2">
                {MENTOR_AVATAR_PRESETS.map((imgUrl, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, image: imgUrl }))}
                    className={`w-9 h-9 rounded-xl overflow-hidden border-2 transition-all ${
                      formData.image === imgUrl ? 'border-violet-600 ring-2 ring-violet-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={imgUrl} alt={`Preset ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setShowCustomAvatarInput(!showCustomAvatarInput)}
                  className="text-[11px] font-bold text-violet-600 hover:underline flex items-center justify-center gap-1 mx-auto cursor-pointer"
                >
                  <ImageIcon size={12} /> Custom image URL
                </button>

                {showCustomAvatarInput && (
                  <div className="mt-2 flex gap-1.5">
                    <input
                      type="url"
                      placeholder="Paste image URL..."
                      value={customAvatarUrl}
                      onChange={(e) => setCustomAvatarUrl(e.target.value)}
                      className="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-[11px]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customAvatarUrl.trim()) {
                          setFormData((prev) => ({ ...prev, image: customAvatarUrl.trim() }));
                          setCustomAvatarUrl('');
                          setShowCustomAvatarInput(false);
                        }
                      }}
                      className="px-2.5 py-1 bg-violet-600 text-white rounded-lg text-[11px] font-bold"
                    >
                      Set
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <h4 className="font-extrabold text-gray-900 text-sm">Professional Links</h4>

            <div className="space-y-3">
              <div className="relative">
                <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" size={14} />
                <input
                  type="text"
                  name="linkedin"
                  placeholder="linkedin.com/in/anubhav-mittal"
                  value={formData.socialLinks.linkedin || ''}
                  onChange={handleSocialChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-violet-500 font-medium"
                />
              </div>

              <div className="relative">
                <FaGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={14} />
                <input
                  type="text"
                  name="github"
                  placeholder="github.com/anubhav-mittal"
                  value={formData.socialLinks.github || ''}
                  onChange={handleSocialChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-violet-500 font-medium"
                />
              </div>

              <div className="relative">
                <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500" size={14} />
                <input
                  type="text"
                  name="twitter"
                  placeholder="twitter.com/anubhav_dev"
                  value={formData.socialLinks.twitter || ''}
                  onChange={handleSocialChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-violet-500 font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Fields (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
            <h4 className="font-extrabold text-gray-900 text-base">Mentorship Identity & Rate</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Current Job Title *</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Senior Full Stack Engineer"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Company / Organization *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Google"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Category / Domain *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-violet-500"
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
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Hourly Rate ($ USD) *</label>
                <input
                  type="number"
                  name="hourlyRate"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData((prev) => ({ ...prev, hourlyRate: parseFloat(e.target.value) || 0 }))}
                  required
                  min="20"
                  max="500"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-bold"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Years of Industry Experience</label>
                <input
                  type="text"
                  name="exp"
                  value={formData.exp}
                  onChange={handleChange}
                  placeholder="e.g. 5+ years"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">Short Bio (Card summary) *</label>
              <textarea
                name="bio"
                rows={2}
                value={formData.bio}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium leading-relaxed"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">About Your Mentorship & Background</label>
              <textarea
                name="about"
                rows={4}
                value={formData.about}
                onChange={handleChange}
                placeholder="Share your coaching philosophy, types of mocks you offer, and preparation tips..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium leading-relaxed"
              />
            </div>
          </div>

          {/* Technical Skills & Specializations */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
            <label className="text-xs font-bold text-gray-900 block">Skills & Coaching Specializations</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 rounded-xl text-xs font-bold border border-violet-100"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-violet-400 hover:text-violet-700 cursor-pointer"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add skill (e.g. Distributed Systems, Leetcode, Next.js)..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
              >
                <Plus size={14} /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
