import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BiSolidRightArrow } from "react-icons/bi";

interface ButtonProps {
    text: string;
    variant?: "fill" | "outline";
    icon?: "arrow" | "play";
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const Button = ({
    text,
    variant = "fill",
    icon,
    href,
    onClick,
    className,
    type = "button",
}: ButtonProps) => {
    const isFill = variant === "fill";

    const Icon =
        icon === "arrow"
            ? ChevronRight
            : icon === "play"
              ? BiSolidRightArrow
              : null;

    const iconClass =
        icon === "arrow"
            ? "h-4 w-4 lg:h-5 lg:w-5"
            : icon === "play"
              ? "h-3 w-3 lg:h-3.5 lg:w-3.5"
              : "";

    const commonClassName = [
        "group",
        "relative",
        "inline-flex",
        "w-fit",
        "shrink-0",
        "items-center",
        "justify-center",
        "whitespace-nowrap",
        "overflow-hidden",
        "rounded-[11px]",
        isFill ? "bg-violet-600" : "bg-white",
        "px-6",
        "py-3",
        "font-semibold",
        "cursor-pointer",
        "transition-all",
        "duration-100",
        "active:scale-95",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const buttonContent = (
        <>
            <span
                className={`pointer-events-none absolute inset-0 -translate-x-full ${
                    isFill ? "bg-white" : "bg-violet-600"
                } transition-transform duration-700 ease-out group-hover:translate-x-0`}
            />

            <span
                className={`relative z-10 flex items-center gap-2 whitespace-nowrap transition-colors duration-500 ${
                    isFill
                        ? "text-white group-hover:text-violet-600"
                        : "text-violet-600 group-hover:text-white"
                }`}
            >
                {text}

                {Icon && <Icon className={iconClass} />}
            </span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={commonClassName}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={commonClassName}
        >
            {buttonContent}
        </button>
    );
};

export default Button;