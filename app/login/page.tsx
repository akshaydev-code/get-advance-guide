import React from 'react';
import { Mail, Lock, Eye } from 'lucide-react'; // Using Lucide for clean icons

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100">
            <main className="flex-grow flex flex-col lg:flex-row">

                {/* Left Branding Section */}
                <section className="lg:w-1/2 bg-[#F3F0FF] p-8 lg:p-20 relative overflow-hidden flex flex-col justify-between">
                    <div className="z-10">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-16">
                            <div className="w-10 h-10 bg-[#6342E8] rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg">AG</div>
                            <span className="text-xl font-extrabold text-[#1A1A1A] tracking-tight">GetAdvanceGuide</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
                            Welcome Back!
                        </h1>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#6342E8] mb-8">
                            Continue Your Mentorship Journey
                        </h2>
                        <p className="text-gray-600 max-w-md mb-12 text-lg leading-relaxed">
                            Login to your account and connect with expert mentors, manage your requests, and achieve your goals.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-8">
                            <FeatureItem
                                title="Find Expert Mentors"
                                desc="Connect with verified mentors who can guide you."
                                icon="👥"
                            />
                            <FeatureItem
                                title="Send & Manage Requests"
                                desc="Easily send mentorship requests and track their status."
                                icon="💬"
                            />
                            <FeatureItem
                                title="Track Your Growth"
                                desc="Monitor your progress and achieve your personal goals."
                                icon="📈"
                            />
                        </div>
                    </div>

                    {/* Image Placeholder - In production, use next/image */}
                    <div className="mt-12 lg:absolute lg:-bottom-10 lg:-right-10 w-full lg:w-[80%] opacity-90">
                        <div className="aspect-video bg-gradient-to-tr from-purple-200 to-transparent rounded-tl-[100px]" />
                    </div>
                </section>

                {/* Right Form Section */}
                <section className="lg:w-1/2 flex items-center justify-center p-6 bg-white">
                    <div className="w-full max-w-[480px] border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(99,66,232,0.1)]">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-gray-900">
                                <span className="text-[#6342E8]">Login</span> to your account
                            </h3>
                            <p className="text-gray-400 text-sm mt-2">Welcome back! Please enter your details.</p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Password</label>
                                    <button type="button" className="text-xs font-bold text-[#6342E8] hover:text-purple-700">Forgot Password?</button>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="w-4 h-4 text-[#6342E8] border-gray-300 rounded focus:ring-purple-500" />
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-600 cursor-pointer">Remember me</label>
                            </div>

                            <button className="w-full bg-[#6342E8] text-white font-bold py-4 rounded-xl hover:bg-[#5235cc] transition-all transform active:scale-[0.98] shadow-lg shadow-purple-200">
                                Login
                            </button>

                            <div className="relative flex py-4 items-center">
                                <div className="flex-grow border-t border-gray-100"></div>
                                <span className="flex-shrink mx-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">or continue with</span>
                                <div className="flex-grow border-t border-gray-100"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {/* <SocialButton icon={<Chrome className="w-5 h-5 text-red-500" />} text="Continue with Google" /> */}
                                <SocialButton icon={<div className="w-4 h-4 bg-blue-500" />} text="Continue with Microsoft" />
                            </div>

                            <p className="text-center text-sm text-gray-500 mt-8 font-medium">
                                Do not have an account?
                                <button type="button" className="text-[#6342E8] font-bold hover:underline ml-1">Sign Up</button>
                            </p>
                        </form>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </div>
    );
}

// Sub-components for cleaner code
function FeatureItem({ title, desc, icon }: { title: string, desc: string, icon: string }) {
    return (
        <div className="flex items-start gap-5 group">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-gray-800 text-base">{title}</h4>
                <p className="text-sm text-gray-500 leading-snug">{desc}</p>
            </div>
        </div>
    );
}

function SocialButton({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <button className="flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700 text-sm">
            {icon}
            {text}
        </button>
    );
}

// function Footer() {
//     return (
//         <footer className="bg-[#6342E8] text-white py-16 px-8 lg:px-20">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//                 <div className="lg:col-span-2">
//                     <div className="flex items-center gap-2 mb-6">
//                         <div className="w-8 h-8 bg-white text-[#6342E8] rounded flex items-center justify-center font-bold italic">AG</div>
//                         <span className="text-xl font-bold">GetAdvanceGuide</span>
//                     </div>
//                     <p className="text-purple-100 text-sm leading-relaxed max-w-sm opacity-80">
//                         Empowering students and professionals by connecting them with the right mentors for guidance, growth, and success.
//                     </p>
//                 </div>

//                 <FooterColumn title="Quick Links" links={['Home', 'Mentors', 'How It Works', 'About Us', 'Contact']} />
//                 <FooterColumn title="Resources" links={['Blog', 'Guides', 'FAQs', 'Help Center']} />
//                 <FooterColumn title="Legal" links={['Privacy Policy', 'Terms of Service', 'Refund Policy']} />
//             </div>
//             <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//                 <p className="text-xs text-purple-200 opacity-60">© 2024 GetAdvanceGuide. All rights reserved.</p>
//                 <div className="flex gap-4">
//                     {/* Social icons here */}
//                 </div>
//             </div>
//         </footer>
//     );
// }

function FooterColumn({ title, links }: { title: string, links: string[] }) {
    return (
        <div>
            <h5 className="font-bold mb-5 text-lg">{title}</h5>
            <ul className="text-purple-100 text-sm space-y-3 opacity-80">
                {links.map(link => (
                    <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
            </ul>
        </div>
    );
}