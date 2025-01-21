import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}
const TextUnderline = ({ className, ...props }: Props) => {
  return (
    <span
      className={`underline decoration-appYellow decoration-2 underline-offset-4 ${className}`}
      {...props}
    />
  );
};

export default TextUnderline;
