"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

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
        { name: "Home", href: "/" },
        { name: "Mentors", href: "/mentors" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Resources", href: "/resources" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className={`w-full sticky top-0 z-50 transition-all duration-300 py-2 ${scrolled ? "" : ""}`}>
            <MaxWidthWrapper className="flex items-center justify-between">
                {/* LOGO SECTION */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784991234/LogoFull_jcmc4x.png"
                        alt="GetAdvanceGuide Logo"
                        width={77}
                        height={77}
                        className="object-cover w-[50px] md:w-[70px] lg:w-[77px] h-auto"
                    />
                    <p className="text-[20px] md:text-[24px] font-semibold text-[#000000]">
                        GetAdvance<span className="text-[#6c47ff]">Guide</span>
                    </p>
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden lg:flex items-center gap-8 font-semibold text-[14px] text-[#000000]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative py-1 transition-colors
                                    ${isActive
                                        ? "text-violet-600"
                                        : "hover:text-violet-600"
                                    }`}
                            >
                                {link.name}

                                {/* Active Line Indicator */}
                                <span className={`absolute left-0 -bottom-1 h-[2.5px] bg-violet-600 rounded-full transition-all duration-500
                                        ${isActive
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                    }`}
                                />
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
        </div>
    );
}

export default Header;