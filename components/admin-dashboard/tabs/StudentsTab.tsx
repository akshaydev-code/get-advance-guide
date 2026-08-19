"use client";

import React, { useState } from 'react';
import {
  Users, Search, Sparkles, Shield, CheckCircle2,
  XCircle, ArrowRight, DollarSign
} from 'lucide-react';
import { AdminStudentItem } from '../types';

interface StudentsTabProps {
  students: AdminStudentItem[];
  onTogglePro: (studentId: string) => void;
  onToggleStatus: (studentId: string) => void;
  onDeleteStudent: (studentId: string) => void;
}

export default function StudentsTab({
  students,
  onTogglePro,
  onToggleStatus,
  onDeleteStudent,
}: StudentsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPlan, setFilterPlan] = useState<'All' | 'Pro' | 'Free'>('All');

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.university.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPlan =
      filterPlan === 'All' ||
      (filterPlan === 'Pro' && s.isPro) ||
      (filterPlan === 'Free' && !s.isPro);

    return matchesSearch && matchesPlan;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Registered Mentees & Students
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {students.length} Total Users
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Track student learning engagements, Pro tier subscriptions, and completed mock sessions.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search by student name, email, university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {['All', 'Pro', 'Free'].map((plan) => (
            <button
              key={plan}
              onClick={() => setFilterPlan(plan as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterPlan === plan
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {plan === 'All' ? 'All Plans' : `${plan} Plan`}
            </button>
          ))}
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-400 font-bold uppercase tracking-wider">
                <th className="py-3.5 pl-6">Student</th>
                <th className="py-3.5">University</th>
                <th className="py-3.5">Target Role</th>
                <th className="py-3.5">Sessions</th>
                <th className="py-3.5">Total Spent</th>
                <th className="py-3.5">Plan Level</th>
                <th className="py-3.5">Status</th>
                <th className="py-3.5 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 font-medium text-gray-700">
              {filteredStudents.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-4 pl-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={s.avatar}
                        alt={s.name}
                        className="w-10 h-10 rounded-xl object-cover border border-violet-100"
                      />
                      <div>
                        <h4 className="font-extrabold text-gray-900">{s.name}</h4>
                        <p className="text-[11px] text-gray-400">{s.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 font-bold text-gray-800">{s.university}</td>
                  <td className="py-4 text-violet-700 font-semibold">{s.targetRole}</td>
                  <td className="py-4 font-black text-gray-900">{s.sessionsCompleted} calls</td>
                  <td className="py-4 font-black text-emerald-700">${s.totalSpent}</td>
                  <td className="py-4">
                    <button
                      onClick={() => onTogglePro(s.id)}
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full cursor-pointer transition-colors ${
                        s.isPro
                          ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {s.isPro ? '★ Pro Student' : 'Free Tier'}
                    </button>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => onToggleStatus(s.id)}
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full cursor-pointer transition-colors ${
                        s.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {s.status}
                    </button>
                  </td>
                  <td className="py-4 pr-6 text-right">
                    <button
                      onClick={() => {
                        if (confirm(`Remove student account for ${s.name}?`)) {
                          onDeleteStudent(s.id);
                        }
                      }}
                      className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                    >
                      Delete
                    </button>
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
