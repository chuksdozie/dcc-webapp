import Image from "next/image";
import React from "react";
import portraitImg from "@/assets/images/portrait-dcc.jpeg";
import { AppCtaBtn } from "../base/Buttons";
import Link from "next/link";
import { links } from "@/constants/links";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 py-5 h-[800px] overflow-hidden max-lg:h-screen bg-hero-bg bg-cover bg-center ">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10" 
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20  h-[800px] max-lg:h-screen  z-10"></div>
      <p className="text-sm font-light text-center w-[30%] text-gray-100 max-lg:w-[60%] max-md:w-[80%] z-10">
        A thriving community of tech enthusiasts, developers, and innovators.
        Learn, collaborate, and grow with DCC!
      </p>
      <p className="text-6xl font-bold text-center mt-6 text-gray-100 max-md:w-[80%] max-md:text-5xl z-10 mb-10">
        Building Lives Through Tech
      </p>
      <Link href={links.join_community} target="_blank" className="z-10">
        <AppCtaBtn>Join the Community</AppCtaBtn>
      </Link>
      {/* <div className=" absolute top-[-750px] bg-gray-800 w-[3200px] h-[1500px] mt-5 rounded-b-full  overflow-hidden">
        <Image
          src={portraitImg.src}
          alt="send"
          width={300}
          height={150}
          style={{
            objectFit: "cover",
            // borderRadius: "50%",
            backgroundColor: "gray",
            borderRadius: "8px 8px 0px 0px",
            height: "250px",
            zIndex: 20,
          }}
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
