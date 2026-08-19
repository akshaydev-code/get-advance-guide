"use client";

import React, { useState } from 'react';
import { X, Video, Mic, MicOff, VideoOff, MessageSquare, Share2, PhoneOff, Users, Sparkles } from 'lucide-react';
import { SessionItem } from '../types';

interface LiveMeetModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: SessionItem | null;
  onCompleteSession?: (sessionId: string) => void;
}

export default function LiveMeetModal({
  isOpen,
  onClose,
  session,
  onCompleteSession,
}: LiveMeetModalProps) {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [meetingChatOpen, setMeetingChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: 'Mentor', text: 'Hello! I am ready to review your project. Can you share your screen?', time: 'Just now' },
  ]);

  if (!isOpen || !session) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { sender: 'You', text: chatInput, time: 'Just now' },
    ]);
    setChatInput('');
  };

  const handleEndCall = () => {
    if (onCompleteSession) {
      onCompleteSession(session.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0f111a] rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col h-[85vh]">
        {/* Top Meeting Header */}
        <div className="bg-[#181a26] px-6 py-3.5 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                {session.topic}
                <span className="text-[10px] bg-violet-900/60 text-violet-300 font-bold px-2 py-0.5 rounded-full border border-violet-700/50">
                  Live 1-on-1 Call
                </span>
              </h3>
              <p className="text-[11px] text-gray-400">
                Mentor: <strong className="text-gray-200">{session.mentorName}</strong> ({session.mentorCompany})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800">
              00:14:32
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Area Grid */}
        <div className="flex-grow p-4 grid grid-cols-1 md:grid-cols-12 gap-4 overflow-hidden relative">
          {/* Main Mentor Stream */}
          <div className={`${meetingChatOpen ? 'md:col-span-8' : 'md:col-span-12'} h-full flex flex-col gap-3 transition-all duration-300`}>
            <div className="relative flex-grow bg-[#151722] rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">
              {/* Mentor Video Simulation */}
              <img
                src={session.mentorImage}
                alt={session.mentorName}
                className="w-full h-full object-cover opacity-90 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Mentor Tag */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold">{session.mentorName} (Mentor)</span>
              </div>

              {/* Self Video (Picture-in-picture) */}
              <div className="absolute top-4 right-4 w-36 sm:w-48 aspect-video bg-[#202336] rounded-xl overflow-hidden border-2 border-violet-500 shadow-2xl">
                {isVideoOn ? (
                  <div className="w-full h-full bg-gradient-to-tr from-violet-950 to-indigo-900 flex items-center justify-center text-white relative">
                    <img
                      src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp"
                      alt="You"
                      className="w-12 h-12 rounded-full border border-white/20 object-cover"
                    />
                    <span className="absolute bottom-1 left-2 text-[10px] font-bold bg-black/50 px-1.5 py-0.5 rounded text-white">
                      You
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center text-gray-400">
                    <VideoOff size={20} />
                    <span className="text-[10px] mt-1">Camera Off</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Side Meeting Chat */}
          {meetingChatOpen && (
            <div className="md:col-span-4 h-full bg-[#181a26] rounded-2xl border border-gray-800 flex flex-col overflow-hidden">
              <div className="p-3 bg-[#202336] border-b border-gray-800 text-xs font-bold text-gray-200 flex items-center justify-between">
                <span>In-Call Messages</span>
                <button onClick={() => setMeetingChatOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={14} />
                </button>
              </div>

              <div className="flex-grow p-3 overflow-y-auto space-y-3">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`text-xs ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                    <span className="text-[10px] text-gray-400 font-bold block mb-0.5">{msg.sender}</span>
                    <div
                      className={`inline-block px-3 py-2 rounded-xl max-w-[85%] text-left ${
                        msg.sender === 'You'
                          ? 'bg-violet-600 text-white'
                          : 'bg-[#25283c] text-gray-200 border border-gray-700'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-2 border-t border-gray-800 flex gap-2">
                <input
                  type="text"
                  placeholder="Send a message to call..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-grow bg-[#10121d] border border-gray-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold"
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Meeting Controls */}
        <div className="bg-[#181a26] px-6 py-4 border-t border-gray-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-3 rounded-2xl transition-all cursor-pointer ${
                isMicOn ? 'bg-[#25283c] text-white hover:bg-[#30334d]' : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
              title={isMicOn ? 'Mute Mic' : 'Unmute Mic'}
            >
              {isMicOn ? <Mic size={18} /> : <MicOff size={18} />}
            </button>

            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-3 rounded-2xl transition-all cursor-pointer ${
                isVideoOn ? 'bg-[#25283c] text-white hover:bg-[#30334d]' : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
              title={isVideoOn ? 'Turn off camera' : 'Turn on camera'}
            >
              {isVideoOn ? <Video size={18} /> : <VideoOff size={18} />}
            </button>

            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className={`p-3 rounded-2xl transition-all cursor-pointer hidden sm:flex items-center gap-2 text-xs font-bold ${
                isScreenSharing ? 'bg-emerald-600 text-white' : 'bg-[#25283c] text-white hover:bg-[#30334d]'
              }`}
            >
              <Share2 size={16} />
              <span>{isScreenSharing ? 'Sharing Screen' : 'Share Screen'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMeetingChatOpen(!meetingChatOpen)}
              className={`p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
                meetingChatOpen ? 'bg-violet-600 text-white' : 'bg-[#25283c] text-white hover:bg-[#30334d]'
              }`}
            >
              <MessageSquare size={16} />
              <span className="hidden sm:inline">Chat</span>
            </button>

            <button
              onClick={handleEndCall}
              className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-900/40 transition-all cursor-pointer"
            >
              <PhoneOff size={16} />
              <span>End Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
