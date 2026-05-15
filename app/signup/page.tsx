"use client";

import React, { useState } from 'react';
import { User, Mail, Lock, Eye, ChevronDown, GraduationCap, Users } from 'lucide-react';

export default function SignupPage() {
  const [role, setRole] = useState<'student' | 'mentor'>('student');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100">
      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* Left Branding Section */}
        <section className="lg:w-1/2 bg-[#F3F0FF] p-8 lg:p-16 relative overflow-hidden flex flex-col justify-between">
          <div className="z-10">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-[#6342E8] rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg">AG</div>
              <span className="text-xl font-extrabold text-[#1A1A1A] tracking-tight">GetAdvanceGuide</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Create Your Account
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6342E8] mb-6">
              Start Your Mentorship Journey Today!
            </h2>
            <p className="text-gray-600 max-w-md mb-10 text-base leading-relaxed">
              Join GetAdvanceGuide and connect with expert mentors who can help you learn, grow, and achieve your goals.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 gap-6">
              <FeatureItem icon="👥" title="Connect with Experts" desc="Find and connect with mentors who match your goals." />
              <FeatureItem icon="📖" title="Learn & Grow" desc="Gain insights, resources, and guidance to achieve your dreams." />
              <FeatureItem icon="💬" title="Personalized Guidance" desc="Get personalized support tailored to your needs." />
              <FeatureItem icon="📈" title="Achieve More" desc="Track your progress and unlock your full potential." />
            </div>
          </div>

          {/* Illustration Overlay */}
          <div className="mt-12 lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[75%] pointer-events-none">
             {/* Placeholder for the woman with laptop image */}
             <div className="aspect-square bg-gradient-to-t from-purple-200/50 to-transparent rounded-full blur-3xl absolute bottom-0 right-0 -z-10" />
          </div>
        </section>

        {/* Right Form Section */}
        <section className="lg:w-1/2 flex items-center justify-center p-6 bg-white">
          <div className="w-full max-w-[550px] border border-gray-100 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(99,66,232,0.08)]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                <span className="text-[#6342E8]">Sign up</span> for free
              </h3>
              <p className="text-gray-400 text-sm mt-1">Create your account and start your journey with us.</p>
            </div>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Enter your full name" className="input-style" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="email" placeholder="Enter your email" className="input-style" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="password" placeholder="Create a password" className="input-style" />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-gray-400">At least 8 characters</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-green-500 mr-1">Strong</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-1 w-3 rounded-full bg-green-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="password" placeholder="Confirm your password" className="input-style" />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">I am a</label>
                <div className="relative mb-4">
                  <select className="input-style appearance-none cursor-pointer">
                    <option>Select your role</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <RoleCard 
                    active={role === 'student'} 
                    onClick={() => setRole('student')}
                    icon={<GraduationCap className="w-6 h-6" />}
                    title="Student / Learner"
                    desc="I want to learn and grow with mentors."
                  />
                  <RoleCard 
                    active={role === 'mentor'} 
                    onClick={() => setRole('mentor')}
                    icon={<Users className="w-6 h-6" />}
                    title="Mentor"
                    desc="I want to guide and help others grow."
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded text-[#6342E8] focus:ring-purple-500" />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the <span className="text-[#6342E8] font-bold">Terms & Conditions</span> and <span className="text-[#6342E8] font-bold">Privacy Policy</span>
                </label>
              </div>

              <button className="w-full bg-[#6342E8] text-white font-bold py-3.5 rounded-xl hover:bg-[#5235cc] transition-all shadow-lg shadow-purple-100">
                Create Account
              </button>

              <p className="text-center text-sm text-gray-500 pt-2 font-medium">
                Already have an account? <button type="button" className="text-[#6342E8] font-bold hover:underline ml-1">Login</button>
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Global styles for inputs to keep code clean */}
      <style jsx>{`
        .input-style {
          @apply w-full pl-12 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm;
        }
      `}</style>

      <Footer />
    </div>
  );
}

// Sub-components
function FeatureItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white rounded-xl shadow-sm text-lg">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function RoleCard({ active, onClick, icon, title, desc }: { active: boolean, onClick: () => void, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 border-2 rounded-2xl cursor-pointer transition-all flex flex-col items-center text-center gap-2 ${
        active ? 'border-[#6342E8] bg-[#F8F7FF]' : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <div className={`p-2 rounded-full ${active ? 'bg-[#6342E8] text-white' : 'bg-gray-50 text-gray-400'}`}>
        {icon}
      </div>
      <h5 className={`text-xs font-bold ${active ? 'text-[#6342E8]' : 'text-gray-700'}`}>{title}</h5>
      <p className="text-[10px] text-gray-400 leading-tight">{desc}</p>
      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? 'border-[#6342E8]' : 'border-gray-200'}`}>
        {active && <div className="w-2 h-2 bg-[#6342E8] rounded-full" />}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#6342E8] text-white py-12 px-8 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white text-[#6342E8] rounded flex items-center justify-center font-bold italic">AG</div>
            <span className="text-xl font-bold">GetAdvanceGuide</span>
          </div>
          <p className="text-purple-100 text-xs leading-relaxed max-w-xs opacity-80">
            Empowering students and professionals by connecting them with the right mentors for guidance, growth, and success.
          </p>
        </div>
        <FooterCol title="Quick Links" items={['Home', 'Mentors', 'How It Works', 'About Us', 'Contact']} />
        <FooterCol title="Resources" items={['Blog', 'Guides', 'FAQs', 'Help Center']} />
        <FooterCol title="Legal" items={['Privacy Policy', 'Terms of Service', 'Refund Policy']} />
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h5 className="font-bold mb-4 text-sm">{title}</h5>
      <ul className="space-y-2 text-xs text-purple-100 opacity-80">
        {items.map(i => <li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}
      </ul>
    </div>
  );
}