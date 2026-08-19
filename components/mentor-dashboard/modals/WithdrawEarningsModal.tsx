"use client";

import React, { useState } from 'react';
import { X, Wallet, CheckCircle2, Building, Smartphone, ArrowRight, ShieldCheck } from 'lucide-react';

interface WithdrawEarningsModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableBalance: number;
  onWithdraw: (amount: number, method: string) => void;
}

export default function WithdrawEarningsModal({
  isOpen,
  onClose,
  availableBalance,
  onWithdraw,
}: WithdrawEarningsModalProps) {
  const [amount, setAmount] = useState(availableBalance.toString());
  const [method, setMethod] = useState<'bank' | 'upi' | 'stripe'>('bank');
  const [accountNumber, setAccountNumber] = useState('•••• •••• 8821');
  const [upiId, setUpiId] = useState('anubhav@okhdfcbank');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const withdrawVal = parseFloat(amount);
    if (isNaN(withdrawVal) || withdrawVal <= 0 || withdrawVal > availableBalance) {
      alert(`Please enter a valid amount up to $${availableBalance.toFixed(2)}`);
      return;
    }

    onWithdraw(withdrawVal, method);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-2xl">
              <Wallet size={22} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
                Payout Gateway
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">Withdraw Mentorship Earnings</h3>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Payout Request Initiated!</h4>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              ${parseFloat(amount).toFixed(2)} is being transferred to your {method.toUpperCase()} account. Estimated arrival in 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleWithdrawSubmit} className="p-6 space-y-5">
            {/* Balance Card */}
            <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-violet-700 uppercase tracking-wider">Available for Payout</p>
                <h4 className="text-2xl font-black text-violet-950">${availableBalance.toFixed(2)}</h4>
              </div>
              <button
                type="button"
                onClick={() => setAmount(availableBalance.toString())}
                className="px-3 py-1 bg-white border border-violet-200 text-violet-700 text-xs font-bold rounded-lg hover:bg-violet-100"
              >
                Max Amount
              </button>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Withdrawal Amount ($ USD) *</label>
              <input
                type="number"
                step="0.01"
                min="10"
                max={availableBalance}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Payout Method Tabs */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-2">Payout Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMethod('bank')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    method === 'bank'
                      ? 'bg-violet-50 text-violet-700 border-violet-400 ring-2 ring-violet-200'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <Building size={16} /> Direct Bank
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('upi')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    method === 'upi'
                      ? 'bg-violet-50 text-violet-700 border-violet-400 ring-2 ring-violet-200'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <Smartphone size={16} /> UPI / VPA
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('stripe')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    method === 'stripe'
                      ? 'bg-violet-50 text-violet-700 border-violet-400 ring-2 ring-violet-200'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <Wallet size={16} /> Stripe Express
                </button>
              </div>
            </div>

            {method === 'bank' && (
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs space-y-1">
                <p className="font-bold text-gray-700">Account: HDFC Bank •••• 8821</p>
                <p className="text-gray-400 text-[11px]">Direct NEFT/IMPS automated settlement</p>
              </div>
            )}

            {method === 'upi' && (
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Enter UPI ID</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Confirm Payout Request <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
