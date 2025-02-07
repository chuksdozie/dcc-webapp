import SectionLayout from "@/layout/SectionLayout";
import Image from "next/image";
import React from "react";
import sendImg from "@/assets/icons/send.svg";
import portraitImg from "@/assets/images/portrait-dcc.jpeg";

const Contributors = () => {
  const contributors = [
    { name: "Chiedozie Chukwu", role: "Fullstack Engineer", url: "" },
    { name: "Jones Ogolo", role: "Front-end Engineer", url: "" },
    { name: "Franca Francis", role: "UI/UX Designer", url: "" },
    { name: "Joshua", role: "Video Editor", url: "" },
    { name: "Nzube Onye", role: "Graphics Designer", url: "" },
  ];
  return (
    <>
      <SectionLayout header="Contributors">
        <div
          className="flex flex-wrap items-center justify-center  gap-8 max-w-[800px] self-center
        py-12"
        >
          {contributors.map((contributor, index) => (
            <div className="flex flex-col items-center " key={index}>
              <Image
                src={portraitImg.src}
                alt="send"
                width={80}
                height={80}
                style={{
                  objectFit: "contain",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                }}
              />
              <p className="text-gray800 text-sm pt-4 font-bold">
                {contributor.name}
              </p>
              <p className="text-gray800 text-xs pt-0">{contributor.role}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Contributors;
