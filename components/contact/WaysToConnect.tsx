"use client";

import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircleMore,
    ExternalLink,
} from "lucide-react";

const WaysToConnectData = [
    {
        icon: <MapPin size={18} />,
        title: "Visit Our Office",
        text1: "GetAdvanceGuide HQ",
        text2: "123, Knowledge Park, Sector 66",
        text3: "Noida, Uttar Pradesh - 201309",
        href: "https://maps.google.com/?q=Noida+Uttar+Pradesh",
        isExternal: true,
    },
    {
        icon: <Mail size={18} />,
        title: "Email Support",
        text1: "For general queries and support",
        text2: "support@getadvanceguide.com",
        href: "mailto:support@getadvanceguide.com",
        isExternal: false,
    },
    {
        icon: <Phone size={18} />,
        title: "Phone Support",
        text1: "Speak with our support team",
        text2: "+91 98765 43210",
        href: "tel:+919876543210",
        isExternal: false,
    },
    {
        icon: <MessageCircleMore size={18} />,
        title: "Live Chat Support",
        text1: "Chat with our assistance team",
        text2: "Send a message anytime",
        action: () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        isExternal: false,
    },
];

const WaysToConnect = () => {
    return (
        <div className="py-12">
            <MaxWidthWrapper>
                <div className="text-center mb-14">
                    <h2 className="text-[31px] font-semibold text-[#000000]">
                        Other Ways to Connect
                    </h2>

                    <div className="w-22 h-1 bg-violet-600 mx-auto rounded-full mt-4" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {WaysToConnectData?.map((item, index) => {
                        const CardContent = (
                            <div className="bg-white border border-[#ececf3] hover:border-violet-300 hover:shadow-md transition-all duration-300 rounded-[14px] p-5 flex flex-col justify-between h-full group">
                                <div>
                                    <div className="w-11 h-11 rounded-full bg-violet-100 group-hover:bg-violet-600 group-hover:text-white transition-all text-violet-600 flex items-center justify-center mb-5 shadow-xs">
                                        {item.icon}
                                    </div>

                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-[14px] font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        {item.href && item.isExternal && (
                                            <ExternalLink size={12} className="text-gray-400 group-hover:text-violet-600" />
                                        )}
                                    </div>

                                    <div className="space-y-1.5 text-gray-500 text-[12px] pt-1">
                                        <p>{item.text1}</p>
                                        <p className="text-violet-600 font-semibold break-all">
                                            {item.text2}
                                        </p>
                                        {item.text3 && <p className="text-gray-400 text-[11px]">{item.text3}</p>}
                                    </div>
                                </div>
                            </div>
                        );

                        if (item.href) {
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : undefined}
                                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                                    className="block cursor-pointer active:scale-95 transition-transform"
                                >
                                    {CardContent}
                                </a>
                            );
                        }

                        return (
                            <div
                                key={index}
                                onClick={item.action}
                                className="cursor-pointer active:scale-95 transition-transform"
                            >
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default WaysToConnect;