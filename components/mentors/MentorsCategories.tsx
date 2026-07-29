import {
    Code2,
    BarChart3,
    PenTool,
    Megaphone,
    Briefcase,
    UserRound,
    MoreHorizontal,
} from "lucide-react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const MentorsCategories = () => {
    return (
        <div>
            <MaxWidthWrapper>
                <div className="py-10">
                    <div className="flex flex-wrap gap-5">
                        {[
                            {
                                icon: <Code2 size={18} />,
                                text: "All Categories",
                            },
                            {
                                icon: <Code2 size={18} />,
                                text: "Web Development",
                            },
                            {
                                icon: <BarChart3 size={18} />,
                                text: "Data Science",
                            },
                            {
                                icon: <PenTool size={18} />,
                                text: "Design",
                            },
                            {
                                icon: <Megaphone size={18} />,
                                text: "Marketing",
                            },
                            {
                                icon: <Briefcase size={18} />,
                                text: "Business",
                            },
                            {
                                icon: <UserRound size={18} />,
                                text: "Career Coaching",
                            },
                            {
                                icon: <MoreHorizontal size={18} />,
                                text: "More",
                            },
                        ].map((item, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-3 px-7 py-4 rounded-2xl border font-medium ${index === 0
                                    ? "bg-violet-50 border-violet-300 text-violet-700"
                                    : "bg-white border-[#ececf3]"
                                    }`}
                            >
                                {item.icon}
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MentorsCategories