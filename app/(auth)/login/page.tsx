"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, ChartNoAxesCombined, MessageCircleMore, UserRoundPlus } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import Image from 'next/image';

const features = [
    {
        title: "Find Expert Mentors",
        desc: "Connect with verified mentors who can guide you.",
        icon: <UserRoundPlus className="w-3 h-3   lg:w-6 lg:h-6" />,
    },
    {
        title: "Send & Manage Requests",
        desc: "Easily send mentorship requests and track their status.",
        icon: <MessageCircleMore className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
    },
    {
        title: "Track Your Growth",
        desc: "Monitor your progress and achieve your personal goals.",
        icon: <ChartNoAxesCombined className="w-3 h-3 md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />,
    },
];

const LoginPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');

        if (!email.trim()) {
            setError('Please enter your email.');
            return;
        }

        if (!password) {
            setError('Please enter your password.');
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
                setError(data.message || 'Invalid email or password.');
                return;
            }

            // Login successful
            if (data.user.role === 'student') {
                router.push('/student-dashboard');
            } else if (data.user.role === 'mentor' && data.user.email !== "admin@gmail.com") {
                router.push('/mentor-dashboard');
            } else if (data.user.email === 'admin@gmail.com' && data.user.role === 'mentor') {
                router.push('/admin-dashboard');
            } else {
                router.push('/');
            }

        } catch (error) {
            console.error('Login error:', error);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col lg:flex-row min-h-screen'>
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
                    Login to your account and connect with expert mentors, manage your requests, and achieve your goals.
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
                <div className="p-6 lg:px-9 border border-gray-300 rounded-[22px] w-[85%] lg:w-[80%]">
                    {/* Heading */}
                    <div className="text-center mb-9">
                        <p className="text-[18px] font-bold text-[#000000] mb-1">
                            <span className="text-violet-600">Login</span> to your account
                        </p>
                        <p className="text-gray-600 text-[12px]">Welcome back! Please enter your details.</p>
                    </div>

                    {/* Fields */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block uppercase text-[12px] font-bold text-[#000000] mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="text-[11px] w-full pl-12 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block uppercase text-[12px] font-bold text-[#000000]">Password</label>
                                <button type="button" className="text-[9px] font-bold text-[#6342E8] hover:text-purple-600">Forgot Password?</button>
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="text-[11px] w-full pl-12 pr-12 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                />
                                <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-700" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="w-4 h-4 border-gray-300 rounded focus:ring-purple-600" />
                            <label htmlFor="remember" className="ml-2 text-[12px] font-semibold text-gray-600 cursor-pointer">Remember me</label>
                        </div>

                        {error && (
                            <p className="text-center text-[11px] font-semibold text-red-500">
                                {error}
                            </p>
                        )}

                        {/* <button className="w-full bg-[#6342E8] text-white font-bold py-2 rounded-[11px] hover:bg-[#5235cc] transition-all transform active:scale-[0.98] cursor-pointer">
                            Login
                        </button> */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#6342E8] text-white font-bold py-2 rounded-[11px] hover:bg-[#5235cc] transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
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

                        <p className="text-center text-[12px] text-gray-600 mt-6 font-semibold">
                            Do not have an account?
                            <Link
                                href="/signup"
                                className="text-[#6342E8] font-bold ml-1 cursor-pointer"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;