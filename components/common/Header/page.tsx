"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { FiMenu, FiX } from "react-icons/fi";

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
        <div className={`w-full sticky top-0 z-50 transition-all duration-300 py-2
            ${scrolled
                ? "bg-white/60 backdrop-blur-[5px]"
                : "bg-transparent"
            }`}>
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
                        GetAdvance<span className="text-violet-600">Guide</span>
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
                        <button className="border border-[#b892ff] text-violet-600 px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-violet-50 transition-all cursor-pointer">
                            Login
                        </button>
                    </Link>

                    <Link href="/signup">
                        <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm cursor-pointer">
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* MOBILE HAMBURGER ICON */}
                <button
                    className="lg:hidden relative w-9 h-9 flex items-center justify-center text-[27px] text-[#000000] cursor-pointer focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <FiMenu
                        className={`absolute transition-all duration-500 ease-in-out ${isMobileMenuOpen
                            ? "rotate-90 scale-0 opacity-0"
                            : "rotate-0 scale-100 opacity-100"
                            }`}
                    />

                    <FiX
                        className={`absolute transition-all duration-500 ease-in-out ${isMobileMenuOpen
                            ? "rotate-0 scale-100 opacity-100"
                            : "-rotate-90 scale-0 opacity-0"
                            }`}
                    />
                </button>
            </MaxWidthWrapper>

            {/* MOBILE MENU OVERLAY */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full h-[calc(100vh-130px)] md:h-[calc(100vh-400px)] bg-white border-t border-gray-100 flex flex-col py-6 lg:hidden z-40 overflow-y-auto">
                    <MaxWidthWrapper>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-[18px] font-medium transition-colors ${isActive ? "text-violet-600 font-semibold" : "text-[#000000] hover:text-violet-600"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="flex flex-col gap-4 mt-11">
                            <Link
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full text-center border border-violet-600 text-violet-600 px-6 py-3 rounded-[11px] font-semibold text-[18px] hover:bg-violet-50 transition-all"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full text-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-[11px] font-semibold text-[18px] transition-all"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </MaxWidthWrapper>
                </div>
            )}
        </div>
    );
}

export default Header;