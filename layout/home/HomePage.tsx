import Contributors from "@/components/contributors/Contributors";
import HeroSection from "@/components/hero/HeroSection";
import Partners from "@/components/partners/Partners";
import React from "react";
import SectionLayout from "../SectionLayout";
import AboutUs from "@/components/about_us/AboutUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <AboutUs />
      <Contributors />
    </div>
  );
};

export default HomePage;
