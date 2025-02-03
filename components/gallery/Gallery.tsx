import React from "react";
import GalleryLayout from "./GalleryLayout";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-brand700 px-10 min-h-[200px]">
      <p className="text-2xl font-bold text-center my-3  text-gray-100 max-md:text-xl max-md:font-semibold">
        Community Gallery
      </p>
      <GalleryLayout />
    </div>
  );
};

export default Gallery;
