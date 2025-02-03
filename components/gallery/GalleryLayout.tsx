import Image from "next/image";
import React from "react";
import portraitImg from "@/assets/images/portrait-dcc.jpeg";

const images = [
  { src: portraitImg.src, span: "row-span-1" },
  { src: portraitImg.src, span: "row-span-3" },
  { src: portraitImg.src, span: "row-span-2" },
  { src: portraitImg.src, span: "row-span-2" },
  { src: portraitImg.src, span: "row-span-1" },
  { src: portraitImg.src, span: "row-span-1" },
  { src: portraitImg.src, span: "row-span-3" },
  { src: portraitImg.src, span: "row-span-2" },
];

const GalleryLayout = () => {
  return (
    <div className="bg-brand700 px-10 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-auto-rows-[150px] start-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg group ${img.span}`}
          >
            <Image
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              width={140}
              height={140}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryLayout;
