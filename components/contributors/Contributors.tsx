import SectionLayout from "@/layout/SectionLayout";
import Image from "next/image";
import React from "react";
import sendImg from "@/assets/icons/send.svg";

const Contributors = () => {
  const contributors = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <SectionLayout header="Contributors">
        <div
          className="flex flex-wrap items-center justify-center  gap-8 max-w-[800px] self-center
        py-12"
        >
          {contributors.map((contributor, index) => (
            <div className="flex flex-col items-center ">
              <Image
                src={sendImg.src}
                alt="send"
                width={80}
                height={80}
                style={{
                  objectFit: "contain",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                }}
              />
              <p className="text-gray800 text-sm pt-4 font-bold">User Name</p>
              <p className="text-gray800 text-xs pt-0">Front-end Developer</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Contributors;
