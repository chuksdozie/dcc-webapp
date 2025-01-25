import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  if (true) return <>{children}</>;
  return (
    <div>
      {/* Navbar Here */}
      <h1>navbar</h1>
      <div className="content">{children}</div>
      {/* Footer Here */}
      <h1>footer</h1>
    </div>
  );
};

export default PageLayout;
