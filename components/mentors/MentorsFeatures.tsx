import {
    ShieldCheck,
    MessageCircleMore,
    CalendarDays,
    Lock,
} from "lucide-react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const MentorFeaturesData = [
    {
        icon: <ShieldCheck size={22} />,
        title: "Verified Mentors",
        desc: "All mentors are verified and background checked.",
    },
    {
        icon: <MessageCircleMore size={22} />,
        title: "Personalized Match",
        desc: "Find mentors that match your goals and needs.",
    },
    {
        icon: <CalendarDays size={22} />,
        title: "Flexible Sessions",
        desc: "Book sessions at your convenience.",
    },
    {
        icon: <Lock size={22} />,
        title: "Secure & Reliable",
        desc: "Your data and privacy are our top priority.",
    },
]

const MentorsFeatures = () => {
    return (
        <div className="py-6">
            <MaxWidthWrapper>
                <div className="bg-white border border-gray-300 rounded-[22px] grid grid-cols-1 md:grid-cols-4 overflow-hidden">
                    {MentorFeaturesData?.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4"
                        >
                            <div className="p-3 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-[14px] font-semibold mb-1">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-[12px]">
                                    {item.desc}
                                </p>
                            </div>

                            {index !== MentorFeaturesData.length - 1 && (
                                <div className="w-0.5 h-[80%] bg-gray-200 shrink-0" />
                            )}
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MentorsFeatures;