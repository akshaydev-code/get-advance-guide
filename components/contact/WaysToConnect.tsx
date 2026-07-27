import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircleMore,
} from "lucide-react";

const WaysToConnectData = [
    {
        icon: <MapPin size={18} />,
        title: "Visit Our Office",
        text1: "GetAdvanceGuide HQ",
        text2: "123, Knowledge Park, Sector 66",
        text3: "Noida, Uttar Pradesh - 201309",
    },
    {
        icon: <Mail size={18} />,
        title: "Email Support",
        text1: "For general queries and support",
        text2: "support@getadvanceguide.com",
    },
    {
        icon: <Phone size={18} />,
        title: "Phone Support",
        text1: "Speak with our support team",
        text2: "+91 98765 43210",
    },
    {
        icon: <MessageCircleMore size={18} />,
        title: "Live Chat",
        text1: "Chat with us live",
        text2: "Available on website",
    },
]

const WaysToConnect = () => {
    return (
        <div className="py-12">
            <MaxWidthWrapper>
                <div className="text-center mb-14">
                    <h2 className="text-[31px] font-semibold">
                        Other Ways to Connect
                    </h2>

                    <div className="w-22 h-1 bg-violet-600 mx-auto rounded-full mt-4" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {WaysToConnectData?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#ececf3] rounded-[14px] p-4"
                        >
                            <div className="w-11 h-11 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-[14px] font-semibold">
                                {item.title}
                            </h3>

                            <div className="space-y-2 text-gray-500 text-[12px]">
                                <p>{item.text1}</p>
                                <p className="text-violet-600 font-semibold">
                                    {item.text2}
                                </p>

                                {item.text3 && <p>{item.text3}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default WaysToConnect;