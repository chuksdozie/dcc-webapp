import SectionLayout from "@/layout/SectionLayout";
import Image from "next/image";
import React from "react";
import sendImg from "@/assets/icons/send.svg";
import portraitImg from "@/assets/images/portrait-dcc.jpeg";
import zubyImg from "@/assets/images/contributors/zuby.jpg";
import chuksImg from "@/assets/images/contributors/chuks.jpg";
import Link from "next/link";

const Contributors = () => {
  const contributors = [
    {
      name: "Chiedozie Chukwu",
      role: "Fullstack Engineer",
      url: "",
      image: chuksImg.src,
    },
    {
      name: "Jones Ogolo",
      role: "Front-end Engineer",
      url: "",
      image: portraitImg.src,
    },
    {
      name: "Franca Francis",
      role: "UI/UX Designer",
      url: "",
      image: portraitImg.src,
    },
    { name: "Joshua", role: "Video Editor", url: "", image: portraitImg.src },
    {
      name: "Zuby Onye",
      role: "Graphics Designer",
      url: "",
      image: zubyImg.src,
    },
  ];
  return (
    <>
      <SectionLayout header="Contributors">
        <div
          className="flex flex-wrap items-center justify-center  gap-8 max-w-[800px] self-center
        py-12"
        >
          {contributors.map((contributor, index) => (
            <Link href={contributor.url} key={index} target="_blank">
              <div className="flex flex-col items-center " key={index}>
                <Image
                  src={contributor?.image}
                  alt="send"
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    width: "80px",
                    height: "80px",
                  }}
                />
                <p className="text-gray800 text-sm pt-4 font-bold">
                  {contributor.name}
                </p>
                <p className="text-gray800 text-xs pt-0">{contributor.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Contributors;
