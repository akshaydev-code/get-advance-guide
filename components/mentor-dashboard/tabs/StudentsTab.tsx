"use client";

import React, { useState } from 'react';
import {
  Users, Search, MessageSquare, Calendar, Star, Eye,
  GraduationCap, CheckCircle2, ArrowRight
} from 'lucide-react';
import { StudentItem, MentorSession } from '../types';

interface StudentsTabProps {
  students: StudentItem[];
  sessions: MentorSession[];
  onStartMessage: (studentId: string) => void;
  onViewStudentDetails: (student: StudentItem) => void;
}

export default function StudentsTab({
  students,
  sessions,
  onStartMessage,
  onViewStudentDetails,
}: StudentsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Completed'>('All');

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.targetRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.university.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus === 'All' || s.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Controls */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                My Students & Mentees
              </h2>
              <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
                {students.length} Total
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Track student learning outcomes, past completed mock interviews, and career progress.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl w-full md:w-auto">
            {(['All', 'Active', 'Completed'] as const).map((status) => {
              const isSelected = filterStatus === status;
              const count = status === 'All' ? students.length : students.filter((s) => s.status === status).length;
              return (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-violet-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search student by name or university..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-1.5 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>
      </div>

      {/* Students Grid */}
      {filteredStudents.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <Users size={36} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No students found</h3>
          <p className="text-xs text-gray-500">Try adjusting your search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudents.map((student) => {
            const studentSessions = sessions.filter((s) => s.studentId === student.id);
            return (
              <div
                key={student.id}
                className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-violet-100 shadow-xs"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-gray-900 text-base">{student.name}</h3>
                          <span
                            className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                              student.status === 'Active'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {student.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">{student.targetRole}</p>
                        <p className="text-[11px] text-violet-600 font-bold">@{student.university}</p>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-2xl border border-gray-100 mt-4 text-center">
                    <div>
                      <p className="text-xs font-black text-gray-900">{student.sessionsCompleted}</p>
                      <p className="text-[10px] text-gray-400 font-semibold">Sessions Completed</p>
                    </div>
                    <div className="border-l border-gray-200">
                      <p className="text-xs font-black text-violet-700">{student.lastSessionDate}</p>
                      <p className="text-[10px] text-gray-400 font-semibold">Last Session</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-violet-50/50 rounded-xl border border-violet-100 text-xs">
                    <span className="font-bold text-violet-900">Latest Topic:</span>{' '}
                    <span className="text-gray-600 font-medium">{student.lastTopic}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => onViewStudentDetails(student)}
                    className="py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
                  >
                    <Eye size={13} /> View Details
                  </button>
                  <button
                    onClick={() => onStartMessage(student.id)}
                    className="py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageSquare size={13} /> Message
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
