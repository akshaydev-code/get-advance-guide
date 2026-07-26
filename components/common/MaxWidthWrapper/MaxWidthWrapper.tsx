import React from "react";

const MaxWidthWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <section
      className={`${className} mx-auto box-border w-[85%]`}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;