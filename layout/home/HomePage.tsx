import Contributors from "@/components/contributors/Contributors";
import HeroSection from "@/components/hero/HeroSection";
import Partners from "@/components/partners/Partners";
import React from "react";
import SectionLayout from "../SectionLayout";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <Contributors />
    </div>
  );
};

export default HomePage;
