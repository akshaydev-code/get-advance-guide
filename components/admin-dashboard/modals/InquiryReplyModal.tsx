"use client";

import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2 } from 'lucide-react';
import { AdminInquiryItem } from '../types';

interface InquiryReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiry: AdminInquiryItem | null;
  onSendReply: (inquiryId: string, replyText: string) => void;
}

export default function InquiryReplyModal({
  isOpen,
  onClose,
  inquiry,
  onSendReply,
}: InquiryReplyModalProps) {
  const [replyText, setReplyText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !inquiry) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    onSendReply(inquiry.id, replyText);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setReplyText('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-2xl">
              <Mail size={20} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Customer Support Response
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">Reply to {inquiry.name}</h3>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Email Response Sent!</h4>
            <p className="text-xs text-gray-500">Inquiry marked as resolved.</p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="p-6 space-y-4">
            <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs space-y-1">
              <p className="font-bold text-gray-900">Subject: {inquiry.subject}</p>
              <p className="text-gray-500 italic">&ldquo;{inquiry.message}&rdquo;</p>
              <p className="text-[10px] text-gray-400 font-semibold pt-1">From: {inquiry.email}</p>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Your Official Response (Email body) *</label>
              <textarea
                rows={4}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                required
                placeholder={`Hi ${inquiry.name.split(' ')[0]},\n\nThank you for reaching out to GetAdvanceGuide...`}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium leading-relaxed"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-violet-200 cursor-pointer"
              >
                <Send size={13} /> Send Email & Resolve
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
