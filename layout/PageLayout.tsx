import Footer from "@/components/nav/Footer";
import NavBar from "@/components/nav/NavBar";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  if (false) return <>{children}</>;
  return (
    <div>
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
