"use client";

import { useState } from "react";
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
} from "lucide-react";

const contactDetails = [
    {
        id: 1,
        title: "Email Us",
        value: "support@getadvanceguide.com",
        Icon: Mail,
    },
    {
        id: 2,
        title: "Call Us",
        value: "+91 98765 43210",
        Icon: Phone,
    },
    {
        id: 3,
        title: "Working Hours",
        value: "Mon - Sat : 9:31 AM - 6:31 PM",
        Icon: Clock3,
    },
];

const ContactBanner = () => {
    const [showForm, setShowForm] = useState(false);

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
                        {contactDetails.map(({ id, Icon, title, value }) => (
                            <div key={id} className="flex items-start gap-5">
                                <div
                                    className={`w-11 h-11 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 shrink-0`}
                                >
                                    <Icon size={18} />
                                </div>

                                <div>
                                    <h3 className="text-[14px] font-semibold">{title}</h3>
                                    <p className="text-[#000000]/60 text-[12px]">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTAINER */}
                <div 
                    className="relative flex items-stretch min-h-115 w-full"
                    style={{ perspective: "1200px" }} // Added 3D perspective for premium feel
                >
                    {/* Image Section */}
                    <div
                        className={`absolute inset-0 mr-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left
                            ${showForm
                                ? "opacity-0 scale-90 -translate-x-12 -rotate-y-12 blur-[4px] pointer-events-none" // 3D push back & blur
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
                                transform: "rotate(180deg)", // Fixed standard bottom-to-top reading
                            }}
                        >
                            SEND US A MESSAGE
                        </span>
                    </button>

                    {/* Form Section */}
                    <div
                        className={`absolute inset-0 z-30 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-right
                            ${showForm
                                ? "opacity-100 scale-100 translate-x-0 rotate-y-0" // 3D pops in seamlessly
                                : "opacity-0 scale-90 translate-x-24 rotate-y-12 pointer-events-none" // Hides with a 3D hinge effect
                            }`}
                    >
                        <div className="relative w-full h-full bg-white/95 backdrop-blur-md border border-violet-100 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.25)] rounded-[24px] py-6 px-8 flex flex-col justify-center">

                            {/* Close Arrow on the left edge (Premium Floating Style) */}
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-violet-100 text-violet-600 hover:bg-violet-50 hover:text-violet-700 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-110 active:scale-95 z-40 group"
                            >
                                {/* Make sure you have ChevronRight imported from lucide-react */}
                                <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
                            </button>

                            {/* Title */}
                            <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">
                                Send Us a Message
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 text-[13px] mb-6 mt-1">
                                Fill out the form below and our team will get back to you.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="font-semibold block mb-2 text-[12px] text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="border border-gray-200 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all rounded-[10px] flex items-center px-4 bg-gray-50/50">
                                        <User className="text-gray-400 shrink-0" size={14} />
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full py-2.5 px-2 outline-none bg-transparent text-gray-900 placeholder-gray-400 text-[13px]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-semibold block mb-2 text-[12px] text-gray-700">
                                        Email Address
                                    </label>
                                    <div className="border border-gray-200 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all rounded-[10px] flex items-center px-4 bg-gray-50/50">
                                        <Mail className="text-gray-400 shrink-0" size={14} />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full py-2.5 px-2 outline-none bg-transparent text-gray-900 placeholder-gray-400 text-[13px]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold block mb-2 text-[12px] text-gray-700">
                                    Subject
                                </label>
                                <div className="border border-gray-200 hover:border-violet-400 transition-colors rounded-[10px] flex items-center justify-between py-2.5 px-4 cursor-pointer bg-gray-50/50 group">
                                    <div className="flex items-center gap-2">
                                        <Mail size={14} className="text-gray-400 group-hover:text-violet-500 transition-colors shrink-0" />
                                        <span className="text-gray-500 text-[13px]">How can we help you?</span>
                                    </div>
                                    <ChevronDown size={16} className="text-gray-400 group-hover:text-violet-500 transition-colors shrink-0" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="font-semibold block mb-2 text-[12px] text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Type your message here..."
                                    className="w-full border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all rounded-[10px] py-3 px-4 outline-none resize-none bg-gray-50/50 text-gray-900 placeholder-gray-400 text-[13px]"
                                />
                            </div>

                            <button className="w-full bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 text-white py-3 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(124,58,237,0.7)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300">
                                <Send size={15} />
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default ContactBanner;









// import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
// import Image from "next/image";
// import { RiStarSLine } from "react-icons/ri";
// import {
//     Mail,
//     Phone,
//     Clock3,
//     Send,
//     ChevronDown,
//     User,
// } from "lucide-react";

// const contactDetails = [
//     {
//         id: 1,
//         title: "Email Us",
//         value: "support@getadvanceguide.com",
//         Icon: Mail,
//     },
//     {
//         id: 2,
//         title: "Call Us",
//         value: "+91 98765 43210",
//         Icon: Phone,
//     },
//     {
//         id: 3,
//         title: "Working Hours",
//         value: "Mon - Sat : 9:00 AM - 7:00 PM",
//         Icon: Clock3,
//     },
// ];

// const ContactBanner = () => {
//     return (
//         <div className="py-16 overflow-hidden">
//             <MaxWidthWrapper className="grid lg:grid-cols-2 gap-14 items-center">
//                 {/* LEFT */}
//                 <div className="relative space-y-4">
//                     {/* Label */}
//                     <div className="flex items-center justify-center gap-2 w-fit bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold">
//                         <RiStarSLine size={16} />
//                         Contact Us
//                     </div>

//                     {/* Heading */}
//                     <h1 className="text-[31px] font-bold leading-tight">
//                         We’re Here to Help You
//                         <br />
//                         <span className="text-violet-600">
//                             Connect, Learn & Grow
//                         </span>
//                     </h1>

//                     {/* Description */}
//                     <p className="text-[#000000]/60 text-[16px]">
//                         Have questions or need support? Our team is here to help you with anything you need. Reach out to us and we’ll get back to you as soon as possible.
//                     </p>

//                     {/* Contact Details */}
//                     <div className="space-y-4">
//                         {contactDetails.map(({ id, Icon, title, value }) => (
//                             <div key={id} className="flex items-start gap-5">
//                                 <div
//                                     className={`w-11 h-11 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 shrink-0`}
//                                 >
//                                     <Icon size={18} />
//                                 </div>

//                                 <div>
//                                     <h3 className="text-[14px] font-semibold">{title}</h3>
//                                     <p className="text-[#000000]/60 text-[12px]">{value}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* IMAGE */}
//                     <div className="lg:absolute lg:right-0 lg:-bottom-10 mt-10 lg:mt-0">
//                         <Image
//                             src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785173373/ContactUsBannerImage_awb693.webp"
//                             alt="girl"
//                             width={420}
//                             height={500}
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* CONTACT FORM */}
//                 <div className="bg-white border border-violet-200 rounded-[22px] py-4 px-8">
//                     {/* Title */}
//                     <h2 className="text-[20px] font-semibold">
//                         Send Us a Message
//                     </h2>

//                     {/* Description */}
//                     <p className="text-[#000000]/60 text-[13px] mb-6">
//                         Fill out the form below and our team will get back to you.
//                     </p>

//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         <div>
//                             <label className="font-semibold block mb-2 text-[12px]">
//                                 Full Name
//                             </label>
//                             <div className="border border-[#000000]/11 rounded-[9px] flex items-center px-4 bg-white">
//                                 <User className="text-[#000000]/60 shrink-0" size={14} />
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your full name"
//                                     className="w-full p-2 outline-none bg-transparent text-[#000000] placeholder-[#000000]/40 text-[12px]"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="font-semibold block mb-2 text-[12px]">
//                                 Email Address
//                             </label>
//                             <div className="border border-[#000000]/11 rounded-[9px] flex items-center px-4 bg-white">
//                                 <Mail className="text-[#000000]/60 shrink-0" size={14} />
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="w-full p-2 outline-none bg-transparent text-[#000000] placeholder-[#000000]/40 text-[12px]"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label className="font-semibold block mb-2 text-[12px]">
//                             Subject
//                         </label>
//                         <div className="border border-[#000000]/11 rounded-[9px] flex items-center justify-between py-2 px-4 cursor-pointer bg-white">
//                             <div className="flex items-center gap-2 text-gray-400">
//                                 <Mail size={14} className="text-[#000000]/60 shrink-0" />
//                                 <span className="text-[#000000]/40 text-[12px]">How can we help you?</span>
//                             </div>
//                             <ChevronDown size={16} className="text-[#000000]/60 shrink-0" />
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label className="font-semibold block mb-2 text-[12px]">
//                             Message
//                         </label>
//                         <textarea
//                             rows={4}
//                             placeholder="Type your message here..."
//                             className="w-full border border-[#000000]/11 rounded-[9px] py-2 px-4 outline-none resize-none bg-white text-[#000000] placeholder-[#000000]/40 text-[12px]"
//                         />
//                     </div>

//                     <button className="w-full bg-linear-to-r from-violet-700 via-violet-600 to-violet-500 transition-all text-white py-2 rounded-[14px] text-[12px] font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95">
//                         <Send size={14} />
//                         Send Message
//                     </button>
//                 </div>
//             </MaxWidthWrapper>
//         </div>
//     );
// };

// export default ContactBanner;