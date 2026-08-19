"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  Search, Send, Paperclip, Smile, MoreVertical, Phone, Video,
  CheckCheck, Clock, Sparkles, User, Circle
} from 'lucide-react';
import { MentorConversation, MentorChatMessage } from '../types';

interface MessagesTabProps {
  conversations: MentorConversation[];
  activeStudentId?: string | null;
  onSendMessage: (conversationId: string, text: string) => void;
  onStartVideoCall?: (studentName: string) => void;
}

export default function MessagesTab({
  conversations,
  activeStudentId,
  onSendMessage,
  onStartVideoCall,
}: MessagesTabProps) {
  const [selectedConvId, setSelectedConvId] = useState<string>(
    activeStudentId
      ? conversations.find((c) => c.studentId === activeStudentId)?.id || conversations[0]?.id || ''
      : conversations[0]?.id || ''
  );
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeStudentId) {
      const match = conversations.find((c) => c.studentId === activeStudentId);
      if (match) {
        setSelectedConvId(match.id);
      }
    }
  }, [activeStudentId, conversations]);

  const activeConversation = conversations.find((c) => c.id === selectedConvId) || conversations[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConversation?.messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || !activeConversation) return;

    const mentorText = inputText.trim();
    setInputText('');
    onSendMessage(activeConversation.id, mentorText);

    // Simulate mentee response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2200);
  };

  const filteredConversations = conversations.filter((c) =>
    c.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.studentRole.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const quickPrompts = [
    'Please review the architecture diagram we discussed.',
    'Let me know if 6:00 PM tomorrow works for our call.',
    'Great job on the mock interview! Keep up the momentum.',
    'Here are the system design study notes for our next session.',
  ];

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden h-[750px] flex flex-col md:flex-row animate-in fade-in duration-300">
      {/* Left Sidebar: Conversations List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-gray-100 flex flex-col bg-gray-50/40">
        {/* Search */}
        <div className="p-4 border-b border-gray-100 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-extrabold text-gray-900 text-base">Mentee Chats</h3>
            <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full">
              {conversations.length} Active
            </span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        {/* Conversation Items */}
        <div className="flex-grow overflow-y-auto p-2 space-y-1.5">
          {filteredConversations.map((conv) => {
            const isSelected = conv.id === selectedConvId;
            return (
              <div
                key={conv.id}
                onClick={() => setSelectedConvId(conv.id)}
                className={`p-3.5 rounded-2xl flex items-center gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                    : 'hover:bg-gray-100/80 bg-white border border-gray-100'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={conv.studentAvatar}
                    alt={conv.studentName}
                    className="w-12 h-12 rounded-2xl object-cover"
                  />
                  {conv.isOnline && (
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 ${
                        isSelected ? 'border-violet-600 bg-emerald-400' : 'border-white bg-emerald-500'
                      }`}
                    />
                  )}
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {conv.studentName}
                    </h4>
                    <span className={`text-[10px] font-medium ${isSelected ? 'text-violet-200' : 'text-gray-400'}`}>
                      {conv.lastMessageTime}
                    </span>
                  </div>

                  <p className={`text-[11px] truncate ${isSelected ? 'text-violet-100' : 'text-gray-500'}`}>
                    {conv.lastMessage}
                  </p>
                </div>

                {conv.unreadCount > 0 && !isSelected && (
                  <span className="w-4 h-4 rounded-full bg-violet-600 text-white text-[9px] font-black flex items-center justify-center flex-shrink-0">
                    {conv.unreadCount}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Pane: Chat Window */}
      {activeConversation ? (
        <div className="flex-grow flex flex-col h-full bg-white">
          {/* Chat Header */}
          <div className="p-4 px-6 border-b border-gray-100 flex items-center justify-between bg-white z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={activeConversation.studentAvatar}
                  alt={activeConversation.studentName}
                  className="w-11 h-11 rounded-2xl object-cover border border-gray-200"
                />
                {activeConversation.isOnline && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-gray-900 flex items-center gap-2">
                  {activeConversation.studentName}
                  <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full">
                    {activeConversation.studentCompany || 'Mentee'}
                  </span>
                </h3>
                <p className="text-[11px] text-gray-500 font-medium">
                  {activeConversation.isOnline ? 'Online now • Ready to chat' : 'Away'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onStartVideoCall && onStartVideoCall(activeConversation.studentName)}
                className="p-2.5 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-700 transition-colors cursor-pointer"
                title="Start Video Meeting"
              >
                <Video size={17} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/30">
            <div className="text-center">
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                End-to-End Encrypted Mentorship Chat
              </span>
            </div>

            {activeConversation.messages.map((msg) => {
              const isMe = msg.sender === 'mentor';
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2.5 ${isMe ? 'justify-end' : 'justify-start'}`}
                >
                  {!isMe && (
                    <img
                      src={activeConversation.studentAvatar}
                      alt={activeConversation.studentName}
                      className="w-7 h-7 rounded-xl object-cover mb-1"
                    />
                  )}

                  <div className={`max-w-[75%] space-y-1 ${isMe ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs font-medium leading-relaxed ${
                        isMe
                          ? 'bg-violet-600 text-white rounded-br-xs shadow-sm shadow-violet-200'
                          : 'bg-white text-gray-800 rounded-bl-xs border border-gray-100 shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className={`flex items-center gap-1 text-[10px] text-gray-400 ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <span>{msg.timestamp}</span>
                      {isMe && <CheckCheck size={12} className="text-violet-600" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-400 italic">
                <img
                  src={activeConversation.studentAvatar}
                  alt={activeConversation.studentName}
                  className="w-6 h-6 rounded-lg object-cover"
                />
                <span>{activeConversation.studentName.split(' ')[0]} is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Suggestions */}
          <div className="px-6 py-2 bg-white border-t border-gray-100 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <Sparkles size={13} className="text-violet-600 flex-shrink-0" />
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => setInputText(prompt)}
                className="text-[11px] font-semibold bg-violet-50 hover:bg-violet-100 text-violet-700 px-3 py-1 rounded-full whitespace-nowrap border border-violet-100 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-4 px-6 bg-white border-t border-gray-100 flex items-center gap-3">
            <button
              type="button"
              onClick={() => alert('Attachments: Code snippet / PDF sharing simulated.')}
              className="p-2 text-gray-400 hover:text-violet-600 rounded-xl hover:bg-gray-100 transition-colors"
              title="Attach File"
            >
              <Paperclip size={18} />
            </button>

            <input
              type="text"
              placeholder={`Write response to ${activeConversation.studentName.split(' ')[0]}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-grow bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
            />

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white rounded-2xl shadow-md shadow-violet-200 transition-all cursor-pointer"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center p-12 text-center text-gray-400">
          <div>
            <User size={48} className="mx-auto mb-3 opacity-30" />
            <h4 className="text-base font-bold text-gray-800">No conversation selected</h4>
            <p className="text-xs text-gray-500">Pick a student from the sidebar to chat.</p>
          </div>
        </div>
      )}
    </div>
  );
}
