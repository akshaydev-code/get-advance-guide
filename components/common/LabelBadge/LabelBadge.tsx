import { IconType } from "react-icons";

interface LabelBadgeProps {
    icon?: IconType;
    iconSize?: number;
    subTitle?: string;
    className?: string;
}

const LabelBadge = ({
    icon: Icon,
    iconSize = 16,
    subTitle,
    className,
}: LabelBadgeProps) => {
    return (
        <div
            className={`${className ?? ""} flex items-center justify-center gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold mb-4`}
        >
            {Icon && <Icon size={iconSize} />}
            {subTitle}
        </div>
    );
};

export default LabelBadge;