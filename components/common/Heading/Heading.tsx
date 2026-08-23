import React from "react";

interface TextPart {
    text: string;
    color?: string;
    weight?: React.CSSProperties["fontWeight"] | string;
    fontStyle?: React.CSSProperties["fontStyle"];
    fontFamily?: React.CSSProperties["fontFamily"] | string;
}

interface HeadingProps {
    headingParts: TextPart[];
    descriptionParts?: TextPart[];
    breakIndexes?: number[];
    isCenter?: boolean;
    headingClassName?: string;
    descriptionClassName?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
    headingParts,
    descriptionParts,
    breakIndexes = [],
    isCenter = false,
    headingClassName,
    descriptionClassName,
    as: Tag = "h1",
}: HeadingProps) => {
    // Heading level ke according automatic size
    const headingSizeClasses = {
        h1: "text-[36px] lg:text-[45px] leading-11 lg:leading-13",
        h2: "text-[27px] lg:text-[36px] leading-9 lg:leading-11",
        h3: "text-[24px] lg:text-[30px] leading-8 lg:leading-10",
        h4: "text-[21px] lg:text-[26px] leading-7 lg:leading-9",
        h5: "text-[18px] lg:text-[22px] leading-6 lg:leading-8",
        h6: "text-[16px] lg:text-[20px] leading-6 lg:leading-7",
    };

    const renderTextParts = (
        parts: TextPart[],
        enableBreaks = false
    ) => {
        let wordCount = 0;

        return parts.map((part, partIndex) => {
            const words = part.text.split(" ");

            const isTailwindColor =
                part.color?.startsWith("text-");

            const isTailwindWeight =
                typeof part.weight === "string" &&
                part.weight.startsWith("font-");

            const isTailwindFontFamily =
                typeof part.fontFamily === "string" &&
                part.fontFamily.startsWith("font-");

            return words.map((word, wordIndex) => {
                wordCount++;

                const shouldBreak =
                    enableBreaks &&
                    breakIndexes.includes(wordCount);

                return (
                    <React.Fragment
                        key={`${partIndex}-${wordIndex}`}
                    >
                        <span
                            className={[
                                isTailwindColor
                                    ? part.color
                                    : "",
                                isTailwindWeight
                                    ? part.weight
                                    : "",
                                isTailwindFontFamily
                                    ? part.fontFamily
                                    : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                            style={{
                                color: !isTailwindColor
                                    ? part.color
                                    : undefined,

                                fontWeight: !isTailwindWeight
                                    ? part.weight
                                    : undefined,

                                fontStyle: part.fontStyle,

                                fontFamily:
                                    !isTailwindFontFamily
                                        ? part.fontFamily
                                        : undefined,
                            }}
                        >
                            {word}
                        </span>

                        {shouldBreak ? <br /> : " "}
                    </React.Fragment>
                );
            });
        });
    };

    return (
        <div className={isCenter ? "text-center" : ""}>
            <Tag
                className={`
                    ${headingSizeClasses[Tag]}
                    ${headingClassName ?? ""}
                    ${isCenter ? "text-center" : "text-center lg:text-left"}
                `}
            >
                {renderTextParts(headingParts, true)}
            </Tag>

            {descriptionParts &&
                descriptionParts.length > 0 && (
                    <p
                        className={`
                            ${descriptionClassName ?? ""}
                            text-[14px] lg:text-[15px]
                            w-full lg:w-full
                            my-6 text-center lg:text-left
                            ${isCenter ? "mx-auto" : ""}
                        `}
                    >
                        {renderTextParts(descriptionParts)}
                    </p>
                )}
        </div>
    );
};

export default Heading;