"use client";

import React, { useState } from 'react';
import {
  Settings, Bell, Lock, Shield, Eye, Smartphone, Globe,
  CheckCircle2, RotateCcw, AlertTriangle, Save
} from 'lucide-react';
import { StudentProfile } from '../types';

interface SettingsTabProps {
  profile: StudentProfile;
  onResetData: () => void;
}

export default function SettingsTab({
  profile,
  onResetData,
}: SettingsTabProps) {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [sessionReminders, setSessionReminders] = useState(true);
  const [chatPings, setChatPings] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [settingsSaved, setSettingsSaved] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('Please fill in all password fields.');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordSaved(true);
    setTimeout(() => {
      setPasswordSaved(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 2500);
  };

  const handleSavePreferences = () => {
    setSettingsSaved(true);
    setTimeout(() => {
      setSettingsSaved(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Account & App Settings
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Manage your account security, notification alerts, preferences, and data controls.
          </p>
        </div>

        <button
          onClick={handleSavePreferences}
          className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          {settingsSaved ? <CheckCircle2 size={16} className="text-emerald-300" /> : <Save size={16} />}
          {settingsSaved ? 'Preferences Saved!' : 'Save Preferences'}
        </button>
      </div>

      {settingsSaved && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold border border-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          Settings and notification preferences saved successfully!
        </div>
      )}

      {/* Notifications Preferences */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Bell size={18} className="text-violet-600" />
          <h3 className="font-extrabold text-gray-900 text-base">
            Notification Preferences
          </h3>
        </div>

        <div className="space-y-4">
          <ToggleOption
            title="Session Reminders & Calendar Alerts"
            description="Receive email & in-app alerts 24 hours and 30 minutes before your booked 1-on-1 mentorship call."
            checked={sessionReminders}
            onChange={setSessionReminders}
          />

          <ToggleOption
            title="Direct Chat & Reply Notifications"
            description="Get notified whenever a mentor responds to your messages or accepts a mentorship request."
            checked={chatPings}
            onChange={setChatPings}
          />

          <ToggleOption
            title="Email Digest & Weekly Recommendations"
            description="Receive a weekly summary of new mentors in your field and curated roadmap guides."
            checked={emailNotifications}
            onChange={setEmailNotifications}
          />

          <ToggleOption
            title="Product Announcements & Discounts"
            description="Stay updated with new features, workshops, and early-bird Pro student discounts."
            checked={marketingEmails}
            onChange={setMarketingEmails}
          />
        </div>
      </div>

      {/* Security & Password */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Lock size={18} className="text-violet-600" />
          <h3 className="font-extrabold text-gray-900 text-base">
            Security & Authentication
          </h3>
        </div>

        {passwordSaved && (
          <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200 flex items-center gap-2">
            <CheckCircle2 size={15} className="text-emerald-600" />
            Password changed successfully!
          </div>
        )}

        {passwordError && (
          <div className="p-3 bg-rose-50 text-rose-800 rounded-xl text-xs font-bold border border-rose-200 flex items-center gap-2">
            <AlertTriangle size={15} className="text-rose-600" />
            {passwordError}
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
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
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
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Update Password
          </button>
        </form>

        <div className="pt-4 border-t border-gray-100">
          <ToggleOption
            title="Two-Factor Authentication (2FA)"
            description="Require an SMS or authenticator code whenever you log in from a new device."
            checked={twoFactorAuth}
            onChange={setTwoFactorAuth}
          />
        </div>
      </div>

      {/* Danger Zone: Reset Data */}
      <div className="bg-rose-50/50 p-6 md:p-8 rounded-[2rem] border border-rose-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-base mb-1">
            <AlertTriangle size={18} className="text-rose-600" />
            <h3>Reset Student Data & Cache</h3>
          </div>
          <p className="text-xs text-rose-700/80 max-w-xl">
            This will reset your local mentorship requests, booked sessions, messages, and goals back to default initial values.
          </p>
        </div>

        <button
          onClick={onResetData}
          className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          <RotateCcw size={14} /> Reset Demo Data
        </button>
      </div>
    </div>
  );
}

function ToggleOption({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div>
        <h4 className="text-xs font-bold text-gray-900">{title}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer flex-shrink-0 ${
          checked ? 'bg-violet-600' : 'bg-gray-200'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
