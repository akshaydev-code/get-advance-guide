"use client";

import React, { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap,
  Save, CheckCircle2, Plus, X, Sparkles, Image as ImageIcon
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StudentProfile } from '../types';

interface ProfileTabProps {
  profile: StudentProfile;
  onSaveProfile: (updated: StudentProfile) => void;
}

const AVATAR_OPTIONS = [
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1784985126/HomeBannerTestimonialPerson_2_vw8rwa.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1784985126/HomeBannerTestimonialPerson_3_ps7s1s.webp',
  'https://res.cloudinary.com/dkbelrldw/image/upload/v1784985124/HomeBannerTestimonialPerson_4_xiafuw.webp',
];

export default function ProfileTab({
  profile,
  onSaveProfile,
}: ProfileTabProps) {
  const [formData, setFormData] = useState<StudentProfile>({ ...profile });
  const [newSkill, setNewSkill] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [customAvatarUrl, setCustomAvatarUrl] = useState('');
  const [showCustomAvatarInput, setShowCustomAvatarInput] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleAddCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.trim() || formData.dreamCompanies.includes(newCompany.trim())) return;
    setFormData((prev) => ({
      ...prev,
      dreamCompanies: [...prev.dreamCompanies, newCompany.trim()],
    }));
    setNewCompany('');
  };

  const handleRemoveCompany = (company: string) => {
    setFormData((prev) => ({
      ...prev,
      dreamCompanies: prev.dreamCompanies.filter((c) => c !== company),
    }));
  };

  const handleSetCustomAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAvatarUrl.trim()) return;
    setFormData((prev) => ({ ...prev, avatar: customAvatarUrl.trim() }));
    setCustomAvatarUrl('');
    setShowCustomAvatarInput(false);
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
            Student Profile
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Keep your profile up to date so mentors can tailor advice to your background and career goals.
          </p>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          {isSaved ? <CheckCircle2 size={16} className="text-emerald-300" /> : <Save size={16} />}
          {isSaved ? 'Profile Saved!' : 'Save Changes'}
        </button>
      </div>

      {isSaved && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold border border-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          Your profile has been saved successfully! Mentors will see your updated information.
        </div>
      )}

      {/* Main Form Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Avatar & Basic Identity (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm text-center space-y-4">
            <div className="relative inline-block">
              <img
                src={formData.avatar}
                alt={formData.name}
                className="w-28 h-28 rounded-3xl object-cover border-4 border-violet-100 shadow-md mx-auto"
              />
              {formData.isPro && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles size={10} /> PRO
                </span>
              )}
            </div>

            <div>
              <h3 className="font-extrabold text-gray-900 text-lg">{formData.name}</h3>
              <p className="text-xs text-violet-600 font-bold">{formData.targetRole}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{formData.university}</p>
            </div>

            {/* Avatar Selector */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Choose Profile Avatar:
              </p>
              <div className="flex justify-center gap-2">
                {AVATAR_OPTIONS.map((imgUrl, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, avatar: imgUrl }))}
                    className={`w-10 h-10 rounded-xl overflow-hidden border-2 transition-all ${
                      formData.avatar === imgUrl ? 'border-violet-600 ring-2 ring-violet-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={imgUrl} alt={`Avatar ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setShowCustomAvatarInput(!showCustomAvatarInput)}
                  className="text-[11px] font-bold text-violet-600 hover:underline flex items-center justify-center gap-1 mx-auto"
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
                      onClick={handleSetCustomAvatar}
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
                <FaGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  name="github"
                  placeholder="github.com/username"
                  value={formData.socialLinks.github || ''}
                  onChange={handleSocialChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-violet-500 font-medium"
                />
              </div>

              <div className="relative">
                <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" size={14} />
                <input
                  type="text"
                  name="linkedin"
                  placeholder="linkedin.com/in/username"
                  value={formData.socialLinks.linkedin || ''}
                  onChange={handleSocialChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-violet-500 font-medium"
                />
              </div>

              <div className="relative">
                <FaTwitter className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500" size={14} />
                <input
                  type="text"
                  name="twitter"
                  placeholder="twitter.com/username"
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
            <h4 className="font-extrabold text-gray-900 text-base">Personal & Academic Details</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Full Name</label>
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
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Target Career Role</label>
                <input
                  type="text"
                  name="targetRole"
                  value={formData.targetRole}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Engineer, ML Researcher"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">University / Institute</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="e.g. Stanford University"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Graduation Year</label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="e.g. 2026"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Location / Timezone</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. San Francisco, CA (PST)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">About Me / Bio</label>
              <textarea
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                placeholder="Share your background, current focus, and what kind of mentorship you are looking for..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium leading-relaxed"
              />
            </div>
          </div>

          {/* Skills & Dream Companies */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
            {/* Technical Skills Editor */}
            <div>
              <label className="text-xs font-bold text-gray-900 block mb-2">Technical Skills & Interests</label>
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
                  placeholder="Add skill (e.g. Docker, TypeScript)..."
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

            {/* Dream Companies Editor */}
            <div className="pt-4 border-t border-gray-100">
              <label className="text-xs font-bold text-gray-900 block mb-2">Dream Companies / Targets</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.dreamCompanies.map((comp) => (
                  <span
                    key={comp}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold border border-indigo-100"
                  >
                    {comp}
                    <button
                      type="button"
                      onClick={() => handleRemoveCompany(comp)}
                      className="text-indigo-400 hover:text-indigo-700 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add target company (e.g. Google, Stripe)..."
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="button"
                  onClick={handleAddCompany}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
