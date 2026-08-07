import { Mail, Lock, Eye, ChartNoAxesCombined, MessageCircleMore, UserRoundPlus } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import Image from 'next/image';

const features = [
    {
        title: "Find Expert Mentors",
        desc: "Connect with verified mentors who can guide you.",
        icon: <UserRoundPlus size={22} />,
    },
    {
        title: "Send & Manage Requests",
        desc: "Easily send mentorship requests and track their status.",
        icon: <MessageCircleMore size={22} />,
    },
    {
        title: "Track Your Growth",
        desc: "Monitor your progress and achieve your personal goals.",
        icon: <ChartNoAxesCombined size={22} />,
    },
];

const LoginPage = () => {
    return (
        <div className='flex'>
            {/* Left Section */}
            <div className="relative w-[50%] bg-linear-to-br from-[#FFFFFF] to-[#EEE7FD] pl-14 py-6">
                {/* Logo */}
                <div className='mb-6'>
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784991234/LogoFull_jcmc4x.png"
                            alt="GetAdvanceGuide Logo"
                            width={66}
                            height={66}
                            className="object-cover w-[40px] md:w-[60px] lg:w-[66px] h-auto"
                        />
                        <p className="text-[18px] md:text-[22px] font-semibold text-[#000000]">
                            GetAdvance<span className="text-violet-600 text-[18px] md:text-[22px]">Guide</span>
                        </p>
                    </Link>
                </div>

                {/* Circle Logo */}
                <div className="absolute top-22 right-4 w-37.5 md:w-45 lg:w-50 aspect-square">
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
                        className="absolute inset-0 m-auto object-contain w-[50px] md:w-[65px] lg:w-[77px] h-auto animate-pulse"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-[18px] lg:text-[31px] leading-9 lg:leading-11 text-center lg:text-left font-bold text-[#000000] mb-2">
                    Welcome Back!<br />
                    <span className="text-violet-600 text-[18px] lg:text-[31px]">
                        Continue Your <br />
                        Mentorship Journey
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-[12px] lg:text-[14px] w-full md:w-[70%] mb-4">
                    Login to your account and connect with expert mentors, manage your requests, and achieve your goals.
                </p>

                {/* Features & Image */}
                <div className='relative'>
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <div className="p-5 bg-[#E8E0FD] text-violet-600 rounded-full">
                                    {feature.icon}
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#000000] text-[12px] mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[11px] text-gray-600 w-[60%]">
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
                        className="absolute right-4 top-0 object-contain w-[55%] md:w-[58%] lg:w-[62%] h-auto"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="bg-white w-[50%] px-14 py-6.5">
                {/* Form */}
                <div className="py-6 px-9 shadow-lg rounded-[22px]">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <p className="text-[18px] font-bold text-[#000000] mb-1">
                            <span className="text-violet-600">Login</span> to your account
                        </p>
                        <p className="text-gray-600 text-[12px]">Welcome back! Please enter your details.</p>
                    </div>

                    {/* Fields */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-[12px] font-bold text-[#000000] mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-[12px] font-bold text-[#000000]">Password</label>
                                <button type="button" className="text-[12px] font-bold text-[#6342E8] hover:text-purple-600">Forgot Password?</button>
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full pl-12 pr-12 py-2 border border-gray-200 rounded-[11px] focus:ring focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                />
                                <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-700" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="w-4 h-4 border-gray-300 rounded focus:ring-purple-600" />
                            <label htmlFor="remember" className="ml-2 text-[12px] font-semibold text-gray-600 cursor-pointer">Remember me</label>
                        </div>

                        <button className="w-full bg-[#6342E8] text-white font-bold py-2 rounded-[11px] hover:bg-[#5235cc] transition-all transform active:scale-[0.98] cursor-pointer">
                            Login
                        </button>

                        <div className="relative flex py-2 items-center">
                            <div className="grow border-t border-gray-400"></div>
                            <span className="shrink mx-4 text-gray-600 text-[11px] font-semibold uppercase tracking-widest">or continue with</span>
                            <div className="grow border-t border-gray-400"></div>
                        </div>

                        <div className="w-full">
                            <button className="flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-[11px] hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-[14px] mx-auto px-6 cursor-pointer">
                                <FcGoogle className="w-4 h-4" />
                                Continue with Google
                            </button>
                        </div>

                        <p className="text-center text-[12px] text-gray-600 mt-6 font-semibold">
                            Do not have an account?
                            <button type="button" className="text-[#6342E8] font-bold ml-1 cursor-pointer">Sign Up</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;