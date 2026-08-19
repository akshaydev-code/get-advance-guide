"use client";

import React, { useState } from 'react';
import {
  UserCheck, Search, Plus, Edit3, Trash2, Star, ShieldCheck,
  CheckCircle2, XCircle, ExternalLink, Sparkles
} from 'lucide-react';
import { AdminMentorItem } from '../types';

interface MentorsTabProps {
  mentors: AdminMentorItem[];
  onOpenAddModal: () => void;
  onEditMentor: (mentor: AdminMentorItem) => void;
  onTogglePopular: (mentorId: string) => void;
  onToggleStatus: (mentorId: string) => void;
  onDeleteMentor: (mentorId: string) => void;
}

export default function MentorsTab({
  mentors,
  onOpenAddModal,
  onEditMentor,
  onTogglePopular,
  onToggleStatus,
  onDeleteMentor,
}: MentorsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Suspended'>('All');

  const filteredMentors = mentors.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = filterCategory === 'All' || m.category === filterCategory;
    const matchesStatus = filterStatus === 'All' || m.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header with Add Button */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Verified Mentors Directory
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {mentors.length} Verified
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Manage mentor profiles, hourly rates, verified badges, and homepage feature toggles.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          <Plus size={15} /> Add New Mentor
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search by mentor name, company, role, email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-xl py-1.5 px-3 text-xs font-bold text-gray-700"
          >
            <option value="All">All Domains</option>
            <option value="Web Development">Web Development</option>
            <option value="System Design">System Design</option>
            <option value="Data Science">Data Science</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="bg-gray-50 border border-gray-200 rounded-xl py-1.5 px-3 text-xs font-bold text-gray-700"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Mentors Table */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-400 font-bold uppercase tracking-wider">
                <th className="py-3.5 pl-6">Mentor Profile</th>
                <th className="py-3.5">Category</th>
                <th className="py-3.5">Rate / hr</th>
                <th className="py-3.5">Rating & Reviews</th>
                <th className="py-3.5">Mentees Guided</th>
                <th className="py-3.5">Featured</th>
                <th className="py-3.5">Status</th>
                <th className="py-3.5 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 font-medium text-gray-700">
              {filteredMentors.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-4 pl-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-10 h-10 rounded-xl object-cover border border-violet-100"
                      />
                      <div>
                        <h4 className="font-extrabold text-gray-900 flex items-center gap-1.5">
                          {m.name}
                          {m.isPopular && (
                            <span className="text-[9px] bg-amber-100 text-amber-800 font-black px-1.5 py-0.2 rounded-sm">
                              PRO
                            </span>
                          )}
                        </h4>
                        <p className="text-[11px] text-gray-400 font-semibold">{m.role} • @{m.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-violet-700 font-bold">{m.category}</td>
                  <td className="py-4 font-black text-gray-900">${m.hourlyRate}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-1 font-bold text-gray-900">
                      <Star size={12} className="text-amber-500 fill-amber-400" />
                      <span>{m.rating.toFixed(1)}</span>
                      <span className="text-gray-400 font-normal">({m.reviews})</span>
                    </div>
                  </td>
                  <td className="py-4 font-bold text-gray-900">{m.totalMentees}</td>
                  <td className="py-4">
                    <button
                      onClick={() => onTogglePopular(m.id)}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full cursor-pointer transition-colors ${
                        m.isPopular
                          ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {m.isPopular ? '★ Featured' : 'Standard'}
                    </button>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => onToggleStatus(m.id)}
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full cursor-pointer transition-colors ${
                        m.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {m.status}
                    </button>
                  </td>
                  <td className="py-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onEditMentor(m)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-violet-600 hover:bg-violet-50 transition-colors cursor-pointer"
                        title="Edit Mentor"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Remove mentor ${m.name}?`)) {
                            onDeleteMentor(m.id);
                          }
                        }}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Delete Mentor"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
