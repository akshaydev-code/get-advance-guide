import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';

const Footer = () => {
    return (
        <footer className="bg-violet-50 lg:bg-white mt-6 lg:mt-0 py-8 lg:py-12 text-[#5e6475]">
            <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between space-y-4">
                {/* Brand Column */}
                <div className="lg:max-w-75 space-y-3">
                    {/* Logo */}
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                        <Image
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784991234/LogoFull_jcmc4x.png"
                            alt="GetAdvanceGuide Logo"
                            width={77}
                            height={77}
                            className="object-cover w-[50px] md:w-[70px] lg:w-[77px] h-auto"
                        />
                        <span className="text-[18px] font-semibold text-[#000000]">
                            GetAdvance<span className="text-violet-600">Guide</span>
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#000000]/70 text-[12px] text-center lg:text-left w-[60%] mx-auto lg:w-full lg:mx-0">
                        Empowering students and professionals by connecting them with the right mentors for guidance, growth, and success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 md:gap-31 lg:mx-0 lg:gap-18 lg:grid-none">
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-[#000000] text-[14px] mb-3 text-center md:text-left">Quick Links</h3>
                        <ul className="space-y-2 text-[#000000]/70 text-[12px] text-center md:text-left">
                            <li><Link href="/" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Home</Link></li>
                            <li><Link href="/about-us" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">About Us</Link></li>
                            <li><Link href="/how-it-works" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">How It Works</Link></li>
                            <li><Link href="/mentors" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Mentors</Link></li>
                            <li><Link href="/contact" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-[#000000] text-[14px] mb-3 text-center md:text-left">Resources</h3>
                        <ul className="space-y-2 text-[#000000]/70 text-[12px] text-center md:text-left">
                            <li><Link href="/blog" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Blog</Link></li>
                            <li><Link href="/resources" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Guides</Link></li>
                            <li><Link href="/faqs" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">FAQs</Link></li>
                            <li><Link href="/help" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-[#000000] text-[14px] mb-3 text-center md:text-left">Legal</h3>
                        <ul className="space-y-2 text-[#000000]/70 text-[12px] text-center md:text-left">
                            <li><Link href="/privacy" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Terms of Service</Link></li>
                            <li><Link href="/refund" className="inline-block hover:text-violet-600 hover:translate-x-1 transition-all duration-500 cursor-pointer">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Follow Us & Copyright */}
                <div className="shrink-0 mx-auto lg:mx-0 mt-6 md:mt-0">
                    <h3 className="font-semibold text-[#000000] text-[14px] mb-3 text-center lg:text-left">Follow Us</h3>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                        <a href="https://www.facebook.com/akshayg.0922" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#635BFF] text-white flex items-center justify-center opacity-90 hover:opacity-100 hover:-translate-y-2 transition-all duration-500">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#5468FF] text-white flex items-center justify-center opacity-90 hover:opacity-100 hover:-translate-y-2 transition-all duration-500">
                            <FaTwitter size={14} />
                        </a>
                        <a href="https://www.linkedin.com/in/akshay0922" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#4853E0] text-white flex items-center justify-center opacity-90 hover:opacity-100 hover:-translate-y-2 transition-all duration-500">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="https://www.instagram.com/akshay.o22/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#6C47FF] text-white flex items-center justify-center opacity-90 hover:opacity-100 hover:-translate-y-2 transition-all duration-500">
                            <FaInstagram size={14} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-[12px] text-[#000000]/70 text-center lg:text-left whitespace-nowrap">
                        © 2026 GetAdvanceGuide. All rights reserved.
                    </p>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;