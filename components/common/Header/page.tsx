"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { FiMenu, FiX } from "react-icons/fi";
import {
  User, LayoutDashboard, Settings, LogOut, ChevronDown, Sparkles
} from "lucide-react";

interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: "student" | "mentor";
  avatar?: string;
}

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState<CurrentUser | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fetch authenticated user
    const checkAuth = async () => {
        try {
            // First check fast local storage cache
            const cached = localStorage.getItem("gag_user");
            if (cached) {
                try {
                    setUser(JSON.parse(cached));
                } catch {}
            }

            const res = await fetch("/api/auth/me");
            if (res.ok) {
                const data = await res.json();
                if (data.success && data.user) {
                    setUser(data.user);
                    localStorage.setItem("gag_user", JSON.stringify(data.user));
                } else {
                    setUser(null);
                    localStorage.removeItem("gag_user");
                }
            }
        } catch (e) {
            console.log("Auth session check skipped");
        }
    };

    useEffect(() => {
        checkAuth();

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleStorage = () => {
            checkAuth();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("storage", handleStorage);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("storage", handleStorage);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            localStorage.removeItem("gag_user");
            setUser(null);
            setIsDropdownOpen(false);
            setIsMobileMenuOpen(false);
            router.push("/login");
        } catch (e) {
            console.error("Logout error:", e);
        }
    };

    const getDashboardHref = () => {
        if (!user) return "/student-dashboard";
        if (user.role === "student") return "/student-dashboard";
        if (user.email === "admin@gmail.com") return "/admin-dashboard";
        return "/mentor-dashboard";
    };

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
                ? "bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100/60"
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
                        GetAdvance<span className="text-violet-600 text-[20px] md:text-[24px]">Guide</span>
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

                {/* DESKTOP ACTION BUTTONS / USER PROFILE */}
                <div className="hidden lg:flex items-center gap-3">
                    {user ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl bg-white border border-gray-200 hover:border-violet-300 hover:bg-violet-50/40 transition-all cursor-pointer shadow-xs"
                            >
                                <img
                                    src={user.avatar || "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp"}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-xl object-cover border border-violet-200"
                                />
                                <div className="text-left">
                                    <p className="text-xs font-bold text-gray-900 leading-tight">
                                        {user.name}
                                    </p>
                                    <span className="text-[9px] font-bold text-violet-600 uppercase tracking-wider">
                                        {user.role}
                                    </span>
                                </div>
                                <ChevronDown size={14} className="text-gray-400" />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                                    <div className="p-2.5 border-b border-gray-50 mb-1">
                                        <p className="text-xs font-bold text-gray-900">{user.name}</p>
                                        <p className="text-[10px] text-gray-400 truncate">{user.email}</p>
                                    </div>

                                    <Link
                                        href={getDashboardHref()}
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="w-full text-left px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors flex items-center gap-2"
                                    >
                                        <LayoutDashboard size={14} /> My Dashboard
                                    </Link>

                                    <Link
                                        href="/student-dashboard"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="w-full text-left px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors flex items-center gap-2"
                                    >
                                        <User size={14} /> Profile & Settings
                                    </Link>

                                    <div className="border-t border-gray-50 my-1" />

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                                    >
                                        <LogOut size={14} /> Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
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
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col py-6 lg:hidden z-40 overflow-y-auto shadow-2xl">
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

                        <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-gray-100">
                            {user ? (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-2xl">
                                        <img
                                            src={user.avatar || "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp"}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-xl object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                        </div>
                                    </div>

                                    <Link
                                        href={getDashboardHref()}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full text-center bg-violet-600 text-white px-6 py-3 rounded-xl font-bold text-sm"
                                    >
                                        Open Dashboard
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-center text-rose-600 border border-rose-200 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-rose-50"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <>
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
                                </>
                            )}
                        </div>
                    </MaxWidthWrapper>
                </div>
            )}
        </div>
    );
}

export default Header;