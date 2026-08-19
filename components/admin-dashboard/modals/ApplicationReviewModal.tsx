"use client";

import React from 'react';
import { X, Check, XCircle, ExternalLink, Briefcase, Mail, Award, CheckCircle2 } from 'lucide-react';
import { AdminApplicationItem } from '../types';

interface ApplicationReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: AdminApplicationItem | null;
  onApprove: (id: string) => void;
  onDecline: (id: string) => void;
}

export default function ApplicationReviewModal({
  isOpen,
  onClose,
  application,
  onApprove,
  onDecline,
}: ApplicationReviewModalProps) {
  if (!isOpen || !application) return null;

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
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
              Mentor Application Pipeline
            </span>
            <h3 className="text-xl font-bold mt-1 text-white">{application.name}</h3>
            <p className="text-xs text-violet-100 mt-0.5">
              {application.role} @ <strong className="text-white">{application.company}</strong> ({application.experienceYears}+ years exp)
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-grow">
          <div className="grid grid-cols-2 gap-3 bg-violet-50/70 p-4 rounded-2xl border border-violet-100 text-xs">
            <div>
              <p className="text-gray-400 font-semibold">Email:</p>
              <p className="font-bold text-gray-900">{application.email}</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Domain Category:</p>
              <p className="font-bold text-violet-700">{application.category}</p>
            </div>
            <div className="pt-2 border-t border-violet-200/50">
              <p className="text-gray-400 font-semibold">Proposed Hourly Rate:</p>
              <p className="font-bold text-gray-900">${application.proposedRate}/hr</p>
            </div>
            <div className="pt-2 border-t border-violet-200/50">
              <p className="text-gray-400 font-semibold">Applied Date:</p>
              <p className="font-bold text-gray-900">{application.appliedDate}</p>
            </div>
          </div>

          {/* Coaching Statement */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">Coaching Philosophy & Statement</h4>
            <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-700 leading-relaxed italic">
              &ldquo;{application.coachingStatement}&rdquo;
            </div>
          </div>

          {/* LinkedIn Profile */}
          {application.linkedinUrl && (
            <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs">
              <span className="font-bold text-blue-900">LinkedIn Profile Verified</span>
              <a
                href={application.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline flex items-center gap-1"
              >
                Open LinkedIn <ExternalLink size={12} />
              </a>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
            <button
              onClick={() => {
                onDecline(application.id);
                onClose();
              }}
              className="py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 border border-rose-100"
            >
              <XCircle size={14} /> Decline Application
            </button>
            <button
              onClick={() => {
                onApprove(application.id);
                onClose();
              }}
              className="py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-violet-200 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Check size={14} /> Approve & Onboard Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
