"use client";

import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

interface UpgradeProModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgradeSuccess?: () => void;
}

export default function UpgradeProModal({
  isOpen,
  onClose,
  onUpgradeSuccess,
}: UpgradeProModalProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
      if (onUpgradeSuccess) onUpgradeSuccess();
      setTimeout(() => {
        setIsDone(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 relative">
        {/* Top Gradient Header */}
        <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 p-8 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 shadow-inner">
            <Sparkles size={28} className="text-amber-300" />
          </div>

          <span className="text-[10px] font-black uppercase tracking-widest bg-amber-400 text-amber-950 px-3 py-1 rounded-full shadow-sm">
            AdvanceGuide PRO ✨
          </span>
          <h2 className="text-2xl font-black mt-2">Supercharge Your Tech Career</h2>
          <p className="text-xs text-violet-100 mt-1 max-w-xs mx-auto">
            Get unlimited 1-on-1 sessions, priority mentor booking, resume AI analysis, and exclusive roadmaps.
          </p>

          {/* Billing Switch */}
          <div className="flex items-center justify-center gap-2 mt-5 bg-black/20 p-1 rounded-xl w-fit mx-auto border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-violet-900 shadow' : 'text-violet-200 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-white text-violet-900 shadow' : 'text-violet-200 hover:text-white'
              }`}
            >
              Annual <span className="text-[9px] bg-emerald-500 text-white px-1.5 py-0.2 rounded-full">Save 30%</span>
            </button>
          </div>
        </div>

        {/* Pricing & Features */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-gray-900">
                {billingCycle === 'annual' ? '$19' : '$29'}
              </span>
              <span className="text-xs text-gray-500 font-bold">/ month</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {billingCycle === 'annual' ? 'Billed annually at $228/yr' : 'Billed monthly, cancel anytime'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Unlimited 1-on-1 Mentorship Session Bookings',
              'Priority Fast-Track Request response within 6 hours',
              'Exclusive Access to 100+ MAANG Interview Guides',
              '1-on-1 Resume & LinkedIn Master Polish review',
              'Direct VIP Slack & WhatsApp Mentor Community',
              'Personalized AI Career Skill Gap Analysis',
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-medium text-gray-700">
                <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {isDone ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-center text-xs font-bold border border-emerald-200 animate-bounce">
              🎉 Congratulations! You are now an AdvanceGuide PRO member!
            </div>
          ) : (
            <button
              onClick={handleUpgrade}
              disabled={isProcessing}
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-2xl text-sm shadow-xl shadow-violet-200 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isProcessing ? (
                <span>Activating Pro Access...</span>
              ) : (
                <>
                  <Zap size={16} className="text-amber-300" />
                  Upgrade to Pro Now <ArrowRight size={16} />
                </>
              )}
            </button>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>30-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
