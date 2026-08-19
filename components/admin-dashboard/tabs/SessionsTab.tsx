"use client";

import React, { useState } from 'react';
import {
  Calendar, Clock, Video, Search, CheckCircle2,
  XCircle, ExternalLink, ArrowRight, DollarSign
} from 'lucide-react';
import { AdminSessionItem } from '../types';

interface SessionsTabProps {
  sessions: AdminSessionItem[];
  onCancelSession: (sessionId: string) => void;
}

export default function SessionsTab({
  sessions,
  onCancelSession,
}: SessionsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('All');

  const filteredSessions = sessions.filter((s) => {
    const matchesSearch =
      s.mentorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.topic.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus === 'All' || s.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Platform Sessions & Bookings Ledger
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {sessions.length} Recorded Calls
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Real-time audit log of all 1-on-1 coaching calls, video meeting rooms, and platform commission splits.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search by mentor, student, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {['All', 'Upcoming', 'Completed', 'Cancelled'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterStatus === st
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Sessions Table */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-400 font-bold uppercase tracking-wider">
                <th className="py-3.5 pl-6">Topic / Focus</th>
                <th className="py-3.5">Mentor</th>
                <th className="py-3.5">Student</th>
                <th className="py-3.5">Date & Time</th>
                <th className="py-3.5">Gross GMV</th>
                <th className="py-3.5">10% Comm.</th>
                <th className="py-3.5">Status</th>
                <th className="py-3.5 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 font-medium text-gray-700">
              {filteredSessions.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-4 pl-6 font-extrabold text-gray-900 max-w-xs truncate">
                    {s.topic}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <img src={s.mentorAvatar} alt={s.mentorName} className="w-6 h-6 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-gray-900">{s.mentorName}</p>
                        <p className="text-[10px] text-violet-600 font-semibold">@{s.mentorCompany}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <img src={s.studentAvatar} alt={s.studentName} className="w-6 h-6 rounded-full object-cover" />
                      <p className="font-bold text-gray-800">{s.studentName}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="font-bold text-gray-900">{s.date}</p>
                    <p className="text-[10px] text-gray-400 font-semibold">{s.time} ({s.durationMinutes}m)</p>
                  </td>
                  <td className="py-4 font-black text-gray-900">${s.amount.toFixed(2)}</td>
                  <td className="py-4 font-bold text-violet-700">${s.platformFee.toFixed(2)}</td>
                  <td className="py-4">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        s.status === 'Upcoming'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : s.status === 'Completed'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="py-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {s.status === 'Upcoming' && (
                        <button
                          onClick={() => {
                            if (confirm(`Cancel session on behalf of users?`)) {
                              onCancelSession(s.id);
                            }
                          }}
                          className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                        >
                          Cancel / Refund
                        </button>
                      )}
                      <a
                        href={s.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-violet-600 hover:underline flex items-center gap-1"
                      >
                        Room <ExternalLink size={11} />
                      </a>
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
