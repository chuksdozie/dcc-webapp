import React from "react";

interface AppCtaBtnProps extends React.HTMLAttributes<HTMLButtonElement> {}

const AppCtaBtn = ({ className, ...props }: AppCtaBtnProps) => {
  return (
    <button
      className={`h-12 rounded-3xl bg-appYellow text-[#0355C9] text-[0.9375rem] font-semibold px-10 ${className}`}
      {...props}
    />
  );
};

export default AppCtaBtn;
