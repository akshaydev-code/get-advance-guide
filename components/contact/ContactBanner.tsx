"use client";

import { useState, useRef, useEffect } from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";
import {
    Mail,
    Phone,
    Clock3,
    Send,
    ChevronDown,
    User,
    ChevronRight,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from "lucide-react";

const contactDetails = [
    {
        id: 1,
        title: "Email Us",
        value: "support@getadvanceguide.com",
        href: "mailto:support@getadvanceguide.com",
        Icon: Mail,
    },
    {
        id: 2,
        title: "Call Us",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
        Icon: Phone,
    },
    {
        id: 3,
        title: "Working Hours",
        value: "Mon - Sat : 9:30 AM - 6:30 PM",
        Icon: Clock3,
    },
];

const subjectOptions = [
    "General Inquiry",
    "Find a Mentor Support",
    "Become a Mentor",
    "Account & Billing",
    "Partnership & Collaboration",
    "Feedback & Suggestions",
];

const ContactBanner = () => {
    const [showForm, setShowForm] = useState(false);
    const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{
        type: "success" | "error" | null;
        text: string;
    }>({ type: null, text: "" });

    // Close subject dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setSubjectDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (statusMessage.type === "error") {
            setStatusMessage({ type: null, text: "" });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setStatusMessage({ type: "error", text: "Please enter your full name." });
            return;
        }
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            setStatusMessage({ type: "error", text: "Please provide a valid email address." });
            return;
        }
        if (!formData.message.trim() || formData.message.trim().length < 5) {
            setStatusMessage({ type: "error", text: "Message must be at least 5 characters long." });
            return;
        }

        try {
            setLoading(true);
            setStatusMessage({ type: null, text: "" });

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatusMessage({
                    type: "success",
                    text: data.message || "Thank you! Your message has been sent successfully.",
                });
                setFormData({
                    name: "",
                    email: "",
                    subject: "General Inquiry",
                    message: "",
                });
            } else {
                setStatusMessage({
                    type: "error",
                    text: data.message || "Something went wrong. Please try again.",
                });
            }
        } catch (err: any) {
            console.error("Submission error:", err);
            setStatusMessage({
                type: "error",
                text: "Network error. Please check your connection and try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-linear-to-b from-[#FFFFFF] to-violet-50 py-6 overflow-hidden">
            <MaxWidthWrapper className="grid lg:grid-cols-2 gap-6 items-center">
                {/* LEFT */}
                <div className="relative space-y-4">
                    {/* Label */}
                    <div className="flex items-center justify-center gap-2 w-fit bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold">
                        <RiStarSLine size={16} />
                        Contact Us
                    </div>

                    {/* Heading */}
                    <h1 className="text-[31px] font-bold leading-tight">
                        We’re Here to Help You
                        <br />
                        <span className="text-violet-600">
                            Connect, Learn & Grow
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-[#000000]/60 text-[16px] w-[90%]">
                        Have questions or need support? Our team is here to help you with anything you need. Reach out to us and we’ll get back to you as soon as possible.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        {contactDetails.map(({ id, Icon, title, value, href }) => {
                            const Content = (
                                <div key={id} className="flex items-start gap-5 group">
                                    <div
                                        className={`w-11 h-11 rounded-full bg-violet-50 group-hover:bg-violet-600 group-hover:text-white transition-all flex items-center justify-center text-violet-600 shrink-0`}
                                    >
                                        <Icon size={18} />
                                    </div>

                                    <div>
                                        <h3 className="text-[14px] font-semibold">{title}</h3>
                                        <p className="text-[#000000]/60 group-hover:text-violet-600 transition-colors text-[12px]">
                                            {value}
                                        </p>
                                    </div>
                                </div>
                            );

                            return href ? (
                                <a key={id} href={href} className="block w-fit">
                                    {Content}
                                </a>
                            ) : (
                                Content
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT CONTAINER */}
                <div
                    className="relative flex items-stretch min-h-115 w-full"
                    style={{ perspective: "1200px" }}
                >
                    {/* Image Section */}
                    <div
                        className={`absolute inset-0 mr-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left
                            ${showForm
                                ? "opacity-0 scale-90 -translate-x-12 -rotate-y-12 blur-[4px] pointer-events-none"
                                : "opacity-100 scale-100 translate-x-0 rotate-y-0 blur-none"
                            }`}
                    >
                        <Image
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785173373/ContactUsBannerImage_awb693.webp"
                            alt="girl"
                            fill
                            className="object-contain rounded-[22px] drop-shadow-xl"
                        />
                    </div>

                    {/* Vertical Strip */}
                    <button
                        onClick={() => setShowForm(true)}
                        className={`absolute right-0 top-0 h-full w-12 bg-violet-600 hover:bg-violet-500 text-white rounded-[14px] cursor-pointer flex items-center justify-center z-20 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)]
                            ${showForm
                                ? "translate-x-16 opacity-0 pointer-events-none scale-y-90"
                                : "translate-x-0 opacity-100 scale-y-100"
                            }`}
                    >
                        <span
                            className="tracking-[5px] font-bold text-[11px]"
                            style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                            }}
                        >
                            SEND US A MESSAGE
                        </span>
                    </button>

                    {/* Form Section */}
                    <div
                        className={`absolute inset-0 z-30 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-right
                            ${showForm
                                ? "opacity-100 scale-100 translate-x-0 rotate-y-0"
                                : "opacity-0 scale-90 translate-x-24 rotate-y-12 pointer-events-none"
                            }`}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="relative w-full h-full bg-white/95 backdrop-blur-md border border-violet-100 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.25)] rounded-[24px] py-6 px-8 flex flex-col justify-center"
                        >
                            {/* Close Arrow on the left edge */}
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-violet-100 text-violet-600 hover:bg-violet-50 hover:text-violet-700 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-110 active:scale-95 z-40 group cursor-pointer"
                                title="Close Form"
                            >
                                <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
                            </button>

                            {/* Title */}
                            <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">
                                Send Us a Message
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 text-[13px] mb-4 mt-1">
                                Fill out the form below and our team will get back to you.
                            </p>

                            {/* Status Alerts */}
                            {statusMessage.type === "success" && (
                                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-[10px] text-[12px] flex items-center gap-2">
                                    <CheckCircle2 size={16} className="shrink-0 text-green-600" />
                                    <span>{statusMessage.text}</span>
                                </div>
                            )}

                            {statusMessage.type === "error" && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-[10px] text-[12px] flex items-center gap-2">
                                    <AlertCircle size={16} className="shrink-0 text-red-500" />
                                    <span>{statusMessage.text}</span>
                                </div>
                            )}

                            {/* Inputs */}
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="font-semibold block mb-1.5 text-[12px] text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="border border-gray-200 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all rounded-[10px] flex items-center px-3 bg-gray-50/50">
                                        <User className="text-gray-400 shrink-0" size={14} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="w-full py-2 px-2 outline-none bg-transparent text-gray-900 placeholder-gray-400 text-[12px]"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-semibold block mb-1.5 text-[12px] text-gray-700">
                                        Email Address
                                    </label>
                                    <div className="border border-gray-200 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all rounded-[10px] flex items-center px-3 bg-gray-50/50">
                                        <Mail className="text-gray-400 shrink-0" size={14} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="w-full py-2 px-2 outline-none bg-transparent text-gray-900 placeholder-gray-400 text-[12px]"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject Dropdown */}
                            <div ref={dropdownRef} className="relative mb-3">
                                <label className="font-semibold block mb-1.5 text-[12px] text-gray-700">
                                    Subject
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
                                    className="w-full border border-gray-200 hover:border-violet-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all rounded-[10px] flex items-center justify-between py-2 px-3 cursor-pointer bg-gray-50/50 text-left"
                                >
                                    <div className="flex items-center gap-2">
                                        <Mail size={14} className="text-gray-400 shrink-0" />
                                        <span className="text-gray-800 text-[12px] font-medium">
                                            {formData.subject}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        size={15}
                                        className={`text-gray-400 transition-transform duration-200 ${
                                            subjectDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {subjectDropdownOpen && (
                                    <div className="absolute left-0 right-0 mt-1 bg-white border border-violet-100 rounded-[10px] shadow-lg overflow-hidden z-50">
                                        {subjectOptions.map((subj) => (
                                            <div
                                                key={subj}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, subject: subj }));
                                                    setSubjectDropdownOpen(false);
                                                }}
                                                className={`px-3.5 py-2 text-[12px] cursor-pointer transition-colors ${
                                                    formData.subject === subj
                                                        ? "bg-violet-50 text-violet-600 font-semibold"
                                                        : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                                                }`}
                                            >
                                                {subj}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label className="font-semibold block mb-1.5 text-[12px] text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Type your message here..."
                                    className="w-full border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all rounded-[10px] py-2 px-3 outline-none resize-none bg-gray-50/50 text-gray-900 placeholder-gray-400 text-[12px]"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 hover:from-violet-800 hover:to-violet-600 text-white py-2.5 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(124,58,237,0.7)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={15} className="animate-spin" />
                                        <span>Sending Message...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={14} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default ContactBanner;