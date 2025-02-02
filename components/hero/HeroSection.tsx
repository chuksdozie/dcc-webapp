import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-5 min-h-[600px]">
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
      <p className="text-sm font-light text-center w-[30%] text-gray-600 max-lg:w-[60%] max-md:w-[80%]">
        A thriving community of tech enthusiasts, developers, and innovators.
        Learn, collaborate, and grow with DCC!
      </p>
      <p className="text-6xl font-bold text-center mt-6 text-gray-600 max-md:w-[80%] max-md:text-5xl">
        Building Lives Through Tech
      </p>
    </div>
  );
};

export default HeroSection;
