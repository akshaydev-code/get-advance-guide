"use client";

import { useState } from 'react';
import { User, Mail, Lock, Eye, ChevronDown, GraduationCap, Users } from 'lucide-react';
import { ChartNoAxesCombined, MessageCircleMore, UserRoundPlus } from 'lucide-react';
// import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import Image from 'next/image';

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
    desc: "I want to learn and grow with mentors.",
    icon: GraduationCap,
  },
  {
    id: "mentor",
    title: "Mentor",
    desc: "I want to guide and help others grow.",
    icon: Users,
  },
] as const;

const SignupPage = () => {
  const [role, setRole] = useState<'student' | 'mentor'>('student');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
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
            {/* Row 1 */}
            <circle cx="90" cy="20" r="2.8" />
            <circle cx="110" cy="20" r="2.8" />
            <circle cx="130" cy="20" r="2.8" />
            <circle cx="150" cy="20" r="2.8" />
            <circle cx="170" cy="20" r="2.8" />

            {/* Row 2 */}
            <circle cx="70" cy="40" r="2.8" />
            <circle cx="90" cy="40" r="2.8" />
            <circle cx="110" cy="40" r="2.8" />
            <circle cx="130" cy="40" r="2.8" />
            <circle cx="150" cy="40" r="2.8" />
            <circle cx="170" cy="40" r="2.8" />
            <circle cx="190" cy="40" r="2.8" />

            {/* Row 3 */}
            <circle cx="50" cy="60" r="2.8" />
            <circle cx="70" cy="60" r="2.8" />
            <circle cx="90" cy="60" r="2.8" />
            <circle cx="110" cy="60" r="2.8" />
            <circle cx="130" cy="60" r="2.8" />
            <circle cx="150" cy="60" r="2.8" />
            <circle cx="170" cy="60" r="2.8" />
            <circle cx="190" cy="60" r="2.8" />
            <circle cx="210" cy="60" r="2.8" />

            {/* Row 4 */}
            <circle cx="50" cy="80" r="2.8" />
            <circle cx="70" cy="80" r="2.8" />
            <circle cx="90" cy="80" r="2.8" />
            <circle cx="110" cy="80" r="2.8" />
            <circle cx="130" cy="80" r="2.8" />
            <circle cx="150" cy="80" r="2.8" />
            <circle cx="170" cy="80" r="2.8" />
            <circle cx="190" cy="80" r="2.8" />
            <circle cx="210" cy="80" r="2.8" />

            {/* Row 5 */}
            <circle cx="50" cy="100" r="2.8" />
            <circle cx="70" cy="100" r="2.8" />
            <circle cx="90" cy="100" r="2.8" />
            <circle cx="110" cy="100" r="2.8" />
            <circle cx="130" cy="100" r="2.8" />
            <circle cx="150" cy="100" r="2.8" />
            <circle cx="170" cy="100" r="2.8" />
            <circle cx="190" cy="100" r="2.8" />
            <circle cx="210" cy="100" r="2.8" />

            {/* Row 6 */}
            <circle cx="50" cy="120" r="2.8" />
            <circle cx="70" cy="120" r="2.8" />
            <circle cx="90" cy="120" r="2.8" />
            <circle cx="110" cy="120" r="2.8" />
            <circle cx="130" cy="120" r="2.8" />
            <circle cx="150" cy="120" r="2.8" />
            <circle cx="170" cy="120" r="2.8" />
            <circle cx="190" cy="120" r="2.8" />
            <circle cx="210" cy="120" r="2.8" />

            {/* Row 7 */}
            <circle cx="50" cy="140" r="2.8" />
            <circle cx="70" cy="140" r="2.8" />
            <circle cx="90" cy="140" r="2.8" />
            <circle cx="110" cy="140" r="2.8" />
            <circle cx="130" cy="140" r="2.8" />
            <circle cx="150" cy="140" r="2.8" />
            <circle cx="170" cy="140" r="2.8" />
            <circle cx="190" cy="140" r="2.8" />
            <circle cx="210" cy="140" r="2.8" />

            {/* Row 8 */}
            <circle cx="70" cy="160" r="2.8" />
            <circle cx="90" cy="160" r="2.8" />
            <circle cx="110" cy="160" r="2.8" />
            <circle cx="130" cy="160" r="2.8" />
            <circle cx="150" cy="160" r="2.8" />
            <circle cx="170" cy="160" r="2.8" />
            <circle cx="190" cy="160" r="2.8" />

            {/* Row 9 */}
            <circle cx="90" cy="180" r="2.8" />
            <circle cx="110" cy="180" r="2.8" />
            <circle cx="130" cy="180" r="2.8" />
            <circle cx="150" cy="180" r="2.8" />
            <circle cx="170" cy="180" r="2.8" />
          </g>
        </svg>

        {/* Logo */}
        <div className='mb-6'>
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
          Join GetAdvanceGuide and connect with expert mentors who can help you learn, grow, and achieve your goals.
        </p>

        {/* Features & Image */}
        <div className='relative'>
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
        <div className="p-6 lg:px-9 border border-gray-300 rounded-[22px] w-[85%] lg:w-[80%]">
          {/* Heading */}
          <div className="text-center mb-9">
            <p className="text-[18px] font-bold text-[#000000] mb-1">
              <span className="text-violet-600">Sign up</span> for free
            </p>
            <p className="text-gray-600 text-[12px]">Create your account and start your journey with us.</p>
          </div>

          {/* Fields */}
          <form className="space-y-4">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Full Name */}
              <div>
                <label className="block uppercase text-[12px] font-bold text-[#000000] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="text-[11px] w-full pl-12 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block uppercase text-[12px] font-bold text-[#000000] mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-[11px] w-full pl-12 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Password */}
              <div>
                <label className="block uppercase text-[12px] font-bold text-[#000000] mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="password"
                    placeholder="Create your password"
                    className="text-[11px] w-full pl-12 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-700" />
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
                <label className="block uppercase text-[12px] font-bold text-[#000000] mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="text-[11px] w-full pl-12 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-700" />
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block uppercase text-[12px] font-bold text-[#000000] mb-2">I am a</label>
              <div className="relative mb-4">
                <div className="text-[11px] w-full pl-4 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                  Select your role
                </div>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {roles.map((item) => {
                  const Icon = item.icon;
                  const active = role === item.id;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setRole(item.id)}
                      className={`relative p-4 border-2 rounded-[11px] cursor-pointer transition-all flex flex-col items-center text-center gap-1 ${active
                        ? "border-[#6342E8] bg-[#F8F7FF]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                    >
                      {/* Icon */}
                      <div
                        className={`p-2 rounded-full ${active
                          ? "bg-[#6342E8] text-white"
                          : "bg-gray-50 text-gray-600 hover:text-[#000000]"
                          }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h5 className={`text-[11px] font-bold ${active ? "text-[#6342E8]" : "text-[#000000]"}`}>
                        {item.title}
                      </h5>

                      {/* Description */}
                      <p className="text-[11px] text-gray-500">{item.desc}</p>

                      {/* Radio */}
                      <div className={`absolute right-2 top-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? "border-[#6342E8]" : "border-gray-200"}`}>
                        {active && (<div className="w-2 h-2 rounded-full bg-[#6342E8]" />)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded text-[#6342E8] focus:ring-purple-600" />
              <label htmlFor="terms" className="ml-2 text-[12px] font-semibold text-gray-600 cursor-pointer">
                I agree to the <span className="text-[#6342E8] font-bold">Terms & Conditions</span> and <span className="text-[#6342E8] font-bold">Privacy Policy</span>
              </label>
            </div>

            {/* Button */}
            <button className="w-full bg-[#6342E8] text-white font-bold py-2 rounded-[11px] hover:bg-[#5235cc] transition-all transform active:scale-[0.98] cursor-pointer">
              Create Account
            </button>

            {/* <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-400"></div>
              <span className="shrink mx-4 text-gray-600 text-[11px] font-semibold uppercase tracking-widest">or continue with</span>
              <div className="grow border-t border-gray-400"></div>
            </div>

            <div className="w-full">
              <button className="flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-[11px] hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-[14px] mx-auto px-6 cursor-pointer">
                <FcGoogle className="w-4 h-4" />
                Continue with Google
              </button>
            </div> */}

            <p className="text-center text-[12px] text-gray-600 font-semibold">
              Already have an account?
              <Link
                href="/login"
                className="text-[#6342E8] font-bold ml-1 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div >
    </div >
  );
}

export default SignupPage;