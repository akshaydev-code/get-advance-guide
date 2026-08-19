"use client";

import React from 'react';
import { X, GraduationCap, Calendar, MessageSquare, BookOpen, CheckCircle2, UserCheck } from 'lucide-react';
import { StudentItem, MentorSession } from '../types';

interface StudentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentItem | null;
  sessions: MentorSession[];
  onStartMessage: (studentId: string) => void;
}

export default function StudentDetailModal({
  isOpen,
  onClose,
  student,
  sessions,
  onStartMessage,
}: StudentDetailModalProps) {
  if (!isOpen || !student) return null;

  const studentSessions = sessions.filter((s) => s.studentId === student.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-4">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white/40 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                  Mentee Profile
                </span>
                <span className="text-[10px] font-bold bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded-full">
                  {student.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-1 text-white">{student.name}</h3>
              <p className="text-xs text-violet-100 font-medium">
                {student.targetRole} • <span className="text-white font-semibold">{student.university}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-grow">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 bg-violet-50/70 p-4 rounded-2xl border border-violet-100 text-center">
            <div>
              <p className="text-xs font-black text-violet-950">{student.sessionsCompleted} Sessions</p>
              <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Completed with You</p>
            </div>
            <div className="border-l border-violet-200">
              <p className="text-xs font-black text-violet-950">{student.lastSessionDate}</p>
              <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Last Call Date</p>
            </div>
          </div>

          {/* Target Skills */}
          {student.skills && student.skills.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Focus Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {student.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-lg border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Mentorship History */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Mentorship Sessions History</h4>
            {studentSessions.length === 0 ? (
              <p className="text-xs text-gray-400 italic">No past sessions recorded yet.</p>
            ) : (
              <div className="space-y-2.5">
                {studentSessions.map((sess) => (
                  <div key={sess.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900">{sess.topic}</span>
                      <span className="text-[10px] text-gray-400 font-medium">{sess.date}</span>
                    </div>
                    {sess.notes && (
                      <p className="text-gray-500 italic mt-0.5">&ldquo;{sess.notes}&rdquo;</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onStartMessage(student.id);
              }}
              className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageSquare size={14} /> Send Direct Message to {student.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
