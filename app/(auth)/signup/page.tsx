"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  User, Mail, Lock, Eye, EyeOff, ChevronDown, GraduationCap, Users,
  CheckCircle2, XCircle, Sparkles, Check
} from 'lucide-react';
import { ChartNoAxesCombined, MessageCircleMore, UserRoundPlus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Toast, { ToastType } from '@/components/common/Toast';

const features = [
  {
    title: "Connect with Experts",
    desc: "Find and connect with mentors who match your goals.",
    icon: <UserRoundPlus className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
  },
  {
    title: "Learn & Grow",
    desc: "Gain insights, resources, and guidance to achieve your dreams.",
    icon: <MessageCircleMore className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
  },
  {
    title: "Personalized Guidance",
    desc: "Get personalized support tailored to your needs.",
    icon: <ChartNoAxesCombined className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
  },
  {
    title: "Achieve More",
    desc: "Track your progress and unlock your full potential.",
    icon: <ChartNoAxesCombined className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
  },
];

const roles = [
  {
    id: "student",
    title: "Student / Learner",
    desc: "I want to learn and grow with top tech mentors.",
    icon: GraduationCap,
  },
  {
    id: "mentor",
    title: "Mentor / Expert",
    desc: "I want to guide and help others grow.",
    icon: Users,
  },
] as const;

const SignupPage = () => {
  const router = useRouter();

  const [role, setRole] = useState<'student' | 'mentor'>('student');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState<{ isOpen: boolean; message: string; type: ToastType }>({
    isOpen: false,
    message: '',
    type: 'info',
  });

  const showToast = (message: string, type: ToastType = 'error') => {
    setToast({ isOpen: true, message, type });
  };

  // Password Strength Calculation
  const passwordStrength = useMemo(() => {
    if (!password) return { score: 0, label: 'None', color: 'bg-gray-200', textColor: 'text-gray-400' };

    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^a-zA-Z0-9]/.test(password)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: 'Weak', color: 'bg-rose-500', textColor: 'text-rose-500' };
      case 2:
        return { score: 2, label: 'Fair', color: 'bg-amber-500', textColor: 'text-amber-500' };
      case 3:
        return { score: 3, label: 'Good', color: 'bg-blue-500', textColor: 'text-blue-500' };
      case 4:
        return { score: 4, label: 'Strong', color: 'bg-emerald-500', textColor: 'text-emerald-500' };
      default:
        return { score: 0, label: 'Too Short', color: 'bg-rose-400', textColor: 'text-rose-400' };
    }
  }, [password]);

  const passwordChecks = useMemo(() => {
    return [
      { label: 'At least 8 characters', valid: password.length >= 8 },
      { label: 'Uppercase & lowercase letters', valid: /[a-z]/.test(password) && /[A-Z]/.test(password) },
      { label: 'At least 1 number (0-9)', valid: /\d/.test(password) },
      { label: '1 Special symbol (@, $, !, etc.)', valid: /[^a-zA-Z0-9]/.test(password) },
    ];
  }, [password]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      showToast('Please enter your full name.', 'error');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    if (password.length < 8) {
      showToast('Password must be at least 8 characters long.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Passwords do not match. Please recheck.', 'error');
      return;
    }

    if (!termsAccepted) {
      showToast('Please accept the Terms & Conditions to proceed.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        showToast(data.message || 'Signup failed. Please try again.', 'error');
        setIsLoading(false);
        return;
      }

      // Success
      showToast(`Welcome to GetAdvanceGuide, ${name.trim()}! 🎉 Setting up your workspace...`, 'success');

      // Update student profile in local storage for instant synchronized dashboard
      const newProfile = {
        id: data.user.id || `std_${Date.now()}`,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
        avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp',
        title: role === 'student' ? 'Learner & Aspiring Engineer' : 'AdvanceGuide Mentor',
        bio: 'Excited to learn, grow, and connect with top mentors on GetAdvanceGuide.',
        phone: '',
        location: 'India',
        timezone: 'Asia/Kolkata (IST)',
        university: 'University / Institute',
        graduationYear: '2026',
        targetRole: 'Full Stack Engineer',
        skills: ['React', 'TypeScript', 'Node.js', 'Next.js'],
        dreamCompanies: ['Google', 'Microsoft', 'Uber'],
        socialLinks: {
          github: '',
          linkedin: '',
          portfolio: '',
          twitter: '',
        },
        isPro: false,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      };

      try {
        localStorage.setItem('gag_user', JSON.stringify(data.user));
        localStorage.setItem('gag_student_profile', JSON.stringify(newProfile));
        window.dispatchEvent(new Event('storage'));
      } catch (err) {}

      setTimeout(() => {
        if (data.user.role === 'student') {
          router.push('/student-dashboard');
        } else if (data.user.role === 'mentor') {
          router.push('/mentor-dashboard');
        } else {
          router.push('/');
        }
      }, 1200);
    } catch (error) {
      console.error('Signup error:', error);
      showToast('Network error or server unavailable. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Toast Notification */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Left Section */}
      <div className="relative w-full lg:w-[50%] bg-linear-to-br from-[#FFFFFF] to-[#EEE7FD] pl-6 md:pl-14 py-6 overflow-hidden">
        {/* DOTS */}
        <svg
          width="120"
          height="195"
          viewBox="0 0 260 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 -bottom-20 hidden lg:flex"
        >
          <g fill="#C7B8FF" opacity="0.4">
            <circle cx="90" cy="20" r="2.8" />
            <circle cx="110" cy="20" r="2.8" />
            <circle cx="130" cy="20" r="2.8" />
            <circle cx="150" cy="20" r="2.8" />
            <circle cx="170" cy="20" r="2.8" />
            <circle cx="70" cy="40" r="2.8" />
            <circle cx="90" cy="40" r="2.8" />
            <circle cx="110" cy="40" r="2.8" />
            <circle cx="130" cy="40" r="2.8" />
            <circle cx="150" cy="40" r="2.8" />
            <circle cx="170" cy="40" r="2.8" />
            <circle cx="190" cy="40" r="2.8" />
            <circle cx="50" cy="60" r="2.8" />
            <circle cx="70" cy="60" r="2.8" />
            <circle cx="90" cy="60" r="2.8" />
            <circle cx="110" cy="60" r="2.8" />
            <circle cx="130" cy="60" r="2.8" />
            <circle cx="150" cy="60" r="2.8" />
            <circle cx="170" cy="60" r="2.8" />
            <circle cx="190" cy="60" r="2.8" />
            <circle cx="210" cy="60" r="2.8" />
          </g>
        </svg>

        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784991234/LogoFull_jcmc4x.png"
              alt="GetAdvanceGuide Logo"
              width={66}
              height={66}
              className="object-cover w-10 md:w-16.5 h-auto"
            />
            <p className="text-[18px] md:text-[22px] font-semibold text-[#000000]">
              GetAdvance<span className="text-violet-600 text-[18px] md:text-[22px]">Guide</span>
            </p>
          </Link>
        </div>

        {/* Circle Logo */}
        <div className="absolute top-15 lg:top-22 right-2 md:right-4 w-36 lg:w-50 aspect-square md:hidden lg:block">
          <Image
            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1786139415/image_1.webp"
            alt="Logo Circle"
            fill
            className="object-contain"
          />

          <Image
            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784991234/LogoFull_jcmc4x.png"
            alt="GetAdvanceGuide Logo"
            width={77}
            height={77}
            className="absolute inset-0 m-auto object-contain w-12.5 md:w-16.5 lg:w-19.5 h-auto animate-pulse"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[18px] md:text-[27px] lg:text-[31px] leading-6 md:leading-8 lg:leading-11 text-left font-bold text-[#000000] mb-2">
          Create Your Account<br />
          <span className="text-violet-600 text-[18px] md:text-[27px] lg:text-[31px]">
            Start Your Mentorship <br />
            Journey Today!
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-[12px] lg:text-[14px] w-[60%] md:w-[50%] lg:w-[70%] mb-4">
          Join GetAdvanceGuide and connect with expert mentors from Google, Microsoft, and Nvidia who can help you learn, grow, and achieve your goals.
        </p>

        {/* Features & Image */}
        <div className="relative">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 lg:gap-4 group">
                <div className="p-3 bg-[#E8E0FD] text-violet-600 rounded-full">
                  {feature.icon}
                </div>

                <div>
                  <h4 className="font-bold text-[#000000] text-[9px] md:text-[10px] lg:text-[12px] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[8px] md:text-[9px] lg:text-[11px] text-gray-600 w-[65%]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1786178095/image.webp"
            alt="Mentorship Illustration"
            width={600}
            height={600}
            className="absolute right-2 lg:right-4 top-2 md:-top-50 lg:top-0 object-contain w-[56%] md:w-[54%] lg:w-[58%] h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white w-full lg:w-[50%] flex items-center justify-center py-6.5">
        {/* Form */}
        <div className="p-6 lg:px-9 border border-gray-300 rounded-[22px] w-[85%] lg:w-[85%] shadow-sm">
          {/* Heading */}
          <div className="text-center mb-6">
            <p className="text-[20px] font-black text-[#000000] mb-1">
              <span className="text-violet-600">Sign up</span> for free
            </p>
            <p className="text-gray-600 text-[12px]">Create your account and start your mentorship journey.</p>
          </div>

          {/* Fields */}
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Full Name */}
              <div>
                <label className="block uppercase text-[11px] font-bold text-gray-800 mb-1.5">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ankit Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-xs w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block uppercase text-[11px] font-bold text-gray-800 mb-1.5">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-xs w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Passwords Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Password */}
              <div>
                <label className="block uppercase text-[11px] font-bold text-gray-800 mb-1.5">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Create strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-xs w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block uppercase text-[11px] font-bold text-gray-800 mb-1.5">Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`text-xs w-full pl-10 pr-10 py-2.5 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all font-medium ${
                      confirmPassword && confirmPassword !== password
                        ? 'border-rose-300 focus:ring-rose-500'
                        : 'border-gray-200 focus:ring-violet-500'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Strength Indicator & Bars */}
            {password && (
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-2 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-600">
                    Password Strength: <strong className={passwordStrength.textColor}>{passwordStrength.label}</strong>
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`h-1.5 w-6 rounded-full transition-colors ${
                          passwordStrength.score >= step ? passwordStrength.color : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Checklist */}
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {passwordChecks.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px]">
                      {item.valid ? (
                        <Check size={11} className="text-emerald-600 stroke-[3]" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 ml-1" />
                      )}
                      <span className={item.valid ? 'text-emerald-700 font-bold' : 'text-gray-500'}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Role Selection */}
            <div>
              <label className="block uppercase text-[11px] font-bold text-gray-800 mb-2">I am registering as</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((item) => {
                  const Icon = item.icon;
                  const active = role === item.id;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setRole(item.id)}
                      className={`relative p-3.5 border-2 rounded-2xl cursor-pointer transition-all flex flex-col items-center text-center gap-1 ${
                        active
                          ? 'border-violet-600 bg-violet-50/60 shadow-xs'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl transition-colors ${
                          active ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Icon size={18} />
                      </div>

                      <h5 className={`text-xs font-bold ${active ? 'text-violet-700' : 'text-gray-900'}`}>
                        {item.title}
                      </h5>

                      <p className="text-[10px] text-gray-500 leading-snug">{item.desc}</p>

                      <div
                        className={`absolute right-2.5 top-2.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                          active ? 'border-violet-600' : 'border-gray-300'
                        }`}
                      >
                        {active && <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs font-semibold text-gray-600 cursor-pointer">
                I agree to the <Link href="/terms" className="text-violet-600 font-bold hover:underline">Terms of Service</Link> and{' '}
                <Link href="/privacy" className="text-violet-600 font-bold hover:underline">Privacy Policy</Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-md shadow-violet-200 transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-xs flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span>Creating Account...</span>
              ) : (
                <>
                  <Sparkles size={14} className="text-amber-300" />
                  <span>Create Free Account</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-600 font-semibold pt-1">
              Already have an account?
              <Link
                href="/login"
                className="text-violet-600 font-bold ml-1 hover:underline cursor-pointer"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;