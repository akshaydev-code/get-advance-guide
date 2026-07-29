import {
    ShieldCheck,
    MessageCircleMore,
    CalendarDays,
    Lock,
} from "lucide-react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const MentorsFeatures = () => {
    return (
        <div>
            <MaxWidthWrapper>
                <div className="pb-20">
                    <div className="bg-white border border-[#ececf3] rounded-[32px] grid md:grid-cols-4 overflow-hidden">
                        {[
                            {
                                icon: <ShieldCheck size={28} />,
                                title: "Verified Mentors",
                                desc: "All mentors are verified and background checked.",
                            },
                            {
                                icon: <MessageCircleMore size={28} />,
                                title: "Personalized Match",
                                desc: "Find mentors that match your goals and needs.",
                            },
                            {
                                icon: <CalendarDays size={28} />,
                                title: "Flexible Sessions",
                                desc: "Book sessions at your convenience.",
                            },
                            {
                                icon: <Lock size={28} />,
                                title: "Secure & Reliable",
                                desc: "Your data and privacy are our top priority.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-5 p-10 border-r border-[#ececf3] last:border-r-0"
                            >
                                <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 leading-7">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MentorsFeatures;