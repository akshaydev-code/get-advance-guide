"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Mail, Lock, Eye, EyeOff, ChartNoAxesCombined, MessageCircleMore,
  UserRoundPlus, Sparkles, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Toast, { ToastType } from '@/components/common/Toast';

const features = [
  {
    title: "Find Expert Mentors",
    desc: "Connect with verified mentors from Google, Microsoft, and Nvidia.",
    icon: <UserRoundPlus className="w-3 h-3 lg:w-6 lg:h-6" />,
  },
  {
    title: "Send & Manage Requests",
    desc: "Easily send mentorship requests and track their status in real time.",
    icon: <MessageCircleMore className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
  },
  {
    title: "Track Your Growth",
    desc: "Monitor your progress, achieve milestones, and level up your skills.",
    icon: <ChartNoAxesCombined className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
  },
];

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState<{ isOpen: boolean; message: string; type: ToastType }>({
    isOpen: false,
    message: '',
    type: 'info',
  });

  const showToast = (message: string, type: ToastType = 'error') => {
    setToast({ isOpen: true, message, type });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      showToast('Please enter your registered email address.', 'error');
      return;
    }

    if (!password) {
      showToast('Please enter your password.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        showToast(data.message || 'Invalid email or password. Please try again.', 'error');
        setIsLoading(false);
        return;
      }

      // Success
      showToast(`Welcome back, ${data.user.name}! 👋 Redirecting to dashboard...`, 'success');

      // Update student profile in local storage for instant sync
      try {
        localStorage.setItem('gag_user', JSON.stringify(data.user));

        // If existing student profile exists, update its name and email
        const existingProfile = localStorage.getItem('gag_student_profile');
        if (existingProfile) {
          const parsed = JSON.parse(existingProfile);
          parsed.name = data.user.name;
          parsed.email = data.user.email;
          parsed.role = data.user.role;
          localStorage.setItem('gag_student_profile', JSON.stringify(parsed));
        } else {
          const newProfile = {
            id: data.user.id || `std_${Date.now()}`,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
            avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp',
            title: data.user.role === 'student' ? 'Aspiring Full Stack Engineer' : 'AdvanceGuide Mentor',
            bio: 'Passionate about engineering excellence and lifelong learning.',
            phone: '+91 98765 43210',
            location: 'Bangalore, India',
            timezone: 'Asia/Kolkata (IST)',
            university: 'Indian Institute of Technology (IIT)',
            graduationYear: '2026',
            targetRole: 'Full Stack Engineer',
            skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
            dreamCompanies: ['Google', 'Microsoft', 'Uber'],
            socialLinks: {
              github: 'https://github.com',
              linkedin: 'https://linkedin.com',
              portfolio: '',
              twitter: '',
            },
            isPro: false,
            joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          };
          localStorage.setItem('gag_student_profile', JSON.stringify(newProfile));
        }
        window.dispatchEvent(new Event('storage'));
      } catch (err) {}

      setTimeout(() => {
        if (data.user.role === 'student') {
          router.push('/student-dashboard');
        } else if (data.user.role === 'mentor' && data.user.email !== 'admin@gmail.com') {
          router.push('/mentor-dashboard');
        } else if (data.user.email === 'admin@gmail.com') {
          router.push('/admin-dashboard');
        } else {
          router.push('/');
        }
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
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
          width="100"
          height="162"
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
            className="absolute inset-0 m-auto object-contain w-12.5 md:16 lg:w-19.5 h-auto animate-pulse"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[18px] md:text-[27px] lg:text-[31px] leading-6 md:leading-8 lg:leading-11 text-left font-bold text-[#000000] mb-2">
          Welcome Back!<br />
          <span className="text-violet-600 text-[18px] md:text-[27px] lg:text-[31px]">
            Continue Your <br />
            Mentorship Journey
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-[12px] lg:text-[14px] w-[70%] md:w-[45%] lg:w-[70%] mb-4">
          Login to your account and connect with expert mentors, manage your requests, and achieve your career milestones.
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
                  <p className="text-[8px] md:text-[9px] lg:text-[11px] text-gray-600 w-[60%]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1786139415/image_2.webp"
            alt="Mentorship Illustration"
            width={600}
            height={600}
            className="absolute right-2 lg:right-4 top-4 md:-top-45 lg:top-0 object-contain w-[60%] md:w-[65%] lg:w-[62%] h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white w-full lg:w-[50%] flex items-center justify-center py-9 lg:py-0">
        {/* Form */}
        <div className="p-6 lg:px-9 border border-gray-300 rounded-[22px] w-[85%] lg:w-[80%] shadow-sm">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-[20px] font-black text-[#000000] mb-1">
              <span className="text-violet-600">Login</span> to your account
            </p>
            <p className="text-gray-600 text-[12px]">Welcome back! Please enter your details.</p>
          </div>

          {/* Fields */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block uppercase text-[11px] font-bold text-gray-800 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-xs w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block uppercase text-[11px] font-bold text-gray-800">Password</label>
                <Link href="/help" className="text-[10px] font-bold text-violet-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
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

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-xs font-semibold text-gray-600 cursor-pointer">
                Remember me on this device
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-md shadow-violet-200 transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-xs flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span>Logging In...</span>
              ) : (
                <>
                  <Sparkles size={14} className="text-amber-300" />
                  <span>Log In to Workspace</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-600 mt-6 font-semibold">
              Do not have an account?
              <Link
                href="/signup"
                className="text-violet-600 font-bold ml-1 hover:underline cursor-pointer"
              >
                Sign Up for free
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;