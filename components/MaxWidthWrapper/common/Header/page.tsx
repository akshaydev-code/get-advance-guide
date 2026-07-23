"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const Header = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/home" },
        { name: "Mentors", href: "/mentors" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Resources", href: "/resources" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`w-full bg-[#FFFFFF] sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-4"}`}
        >
            <MaxWidthWrapper className="flex items-center justify-between">

                {/* LOGO SECTION */}
                <Link href="/home" className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784827459/Logo_ljeii5.png"
                        alt="GetAdvanceGuide Logo"
                        width={111}
                        height={111}
                        className="object-contain w-[50px] md:w-[70px] lg:w-[111px] h-auto"
                    />
                    <p className="text-[20px] md:text-[24px] font-semibold text-[#000000]">
                        GetAdvance<span className="text-[#6c47ff]">Guide</span>
                    </p>
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden lg:flex items-center gap-8 font-medium text-[18px] text-[#000000]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative py-1 transition-colors ${isActive
                                    ? "text-[#6c47ff] font-semibold"
                                    : "hover:text-[#6c47ff]"
                                    }`}
                            >
                                {link.name}

                                {/* Active Line Indicator */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#6c47ff] rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* DESKTOP ACTION BUTTONS */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/login">
                        <button className="border border-[#b892ff] text-[#6c47ff] px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-violet-50 transition-all cursor-pointer">
                            Login
                        </button>
                    </Link>

                    <Link href="/signup">
                        <button className="bg-[#6c47ff] hover:bg-[#5b3ae0] text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm cursor-pointer">
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* MOBILE HAMBURGER ICON */}
                <button
                    className="lg:hidden text-3xl text-black cursor-pointer focus:outline-none p-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </MaxWidthWrapper>

            {/* MOBILE MENU OVERLAY */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-white border-t border-gray-100 flex flex-col p-6 lg:hidden z-40 overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)} // Link click hone par menu band ho jayega
                                    className={`text-xl font-medium transition-colors ${isActive ? "text-[#6c47ff] font-semibold" : "text-[#000000] hover:text-[#6c47ff]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-4 mt-10">
                        <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-center border border-[#b892ff] text-[#6c47ff] px-6 py-3 rounded-xl font-semibold text-lg hover:bg-violet-50 transition-all"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-center bg-[#6c47ff] hover:bg-[#5b3ae0] text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;