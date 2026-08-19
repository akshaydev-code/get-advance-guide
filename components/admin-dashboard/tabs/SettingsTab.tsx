"use client";

import React, { useState } from 'react';
import {
  Settings, Shield, Lock, DollarSign, Database,
  AlertTriangle, CheckCircle2, RotateCcw, Save, Bell
} from 'lucide-react';

interface SettingsTabProps {
  onResetAllData: () => void;
}

export default function SettingsTab({
  onResetAllData,
}: SettingsTabProps) {
  const [platformCommission, setPlatformCommission] = useState(10);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [autoApproveMentors, setAutoApproveMentors] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const handleSavePlatformSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 2500);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      alert('Passwords do not match or are empty.');
      return;
    }
    setPasswordSuccess(true);
    setTimeout(() => {
      setPasswordSuccess(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Platform Configuration & System Settings
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Configure platform commission revenue cut, maintenance switches, and security parameters.
          </p>
        </div>

        <button
          onClick={handleSavePlatformSettings}
          className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          {savedSuccess ? <CheckCircle2 size={16} className="text-emerald-300" /> : <Save size={16} />}
          {savedSuccess ? 'Settings Saved!' : 'Save System Settings'}
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold border border-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          Platform configuration changes updated!
        </div>
      )}

      {/* Commission & Operational Rules */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <DollarSign size={18} className="text-violet-600" />
          <h3 className="font-extrabold text-gray-900 text-base">Monetization & Commission Rules</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">
              Platform Take Rate Commission (%)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="50"
                value={platformCommission}
                onChange={(e) => setPlatformCommission(parseFloat(e.target.value) || 0)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-xs font-bold text-gray-400">%</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Default is 10% on every booked mentorship session.</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start justify-between gap-4 py-2 border-t border-gray-50">
            <div>
              <h4 className="text-xs font-bold text-gray-900">Maintenance Mode</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Temporarily show maintenance banner across public routes for scheduled platform upgrades.
              </p>
            </div>
            <input
              type="checkbox"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
              className="w-4 h-4 rounded text-violet-600 cursor-pointer mt-1"
            />
          </div>

          <div className="flex items-start justify-between gap-4 py-2 border-t border-gray-50">
            <div>
              <h4 className="text-xs font-bold text-gray-900">Auto-Approve Verified Work Emails</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Automatically verify applicants registering with @google.com, @microsoft.com, @amazon.com corporate emails.
              </p>
            </div>
            <input
              type="checkbox"
              checked={autoApproveMentors}
              onChange={(e) => setAutoApproveMentors(e.target.checked)}
              className="w-4 h-4 rounded text-violet-600 cursor-pointer mt-1"
            />
          </div>
        </div>
      </div>

      {/* Admin Security */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Lock size={18} className="text-violet-600" />
          <h3 className="font-extrabold text-gray-900 text-base">Superadmin Password & Security</h3>
        </div>

        {passwordSuccess && (
          <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200 flex items-center gap-2">
            <CheckCircle2 size={15} className="text-emerald-600" />
            Superadmin password changed!
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Update Admin Password
          </button>
        </form>
      </div>

      {/* Reset Admin Data */}
      <div className="bg-rose-50/50 p-6 md:p-8 rounded-[2rem] border border-rose-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-base mb-1">
            <AlertTriangle size={18} className="text-rose-600" />
            <h3>Reset Platform Seed Data</h3>
          </div>
          <p className="text-xs text-rose-700/80 max-w-xl">
            Reset all admin dashboard counters, mentors, sessions, applications, and inquiries back to original seed data.
          </p>
        </div>

        <button
          onClick={onResetAllData}
          className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
        >
          <RotateCcw size={14} /> Reset Admin Data
        </button>
      </div>
    </div>
  );
}
