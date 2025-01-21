import Logo from "@/components/base/Logo";
import React from "react";
import comingSoon from "@/assets/images/construction.png";
import Image from "next/image";
import ComingSoonMain from "../ComingSoonMain";

const navLinks = [
  { title: "Twitter", href: "https://twitter.com/" },
  { title: "Instagram", href: "https://instagram.com/" },
  { title: "LinkedIn", href: "https://linkedin.com/" },
];

const ComingSoonCard = () => {
  return (
    <section className="p-5 bg-white rounded-2xl	max-w-5xl w-11/12 flex flex-col md:flex-row gap-6 min-h-[600px] my-6">
      <div className="flex flex-col items-start justify-between flex-1 space-y-5">
        <Logo />
        <div className="w-full">
          <div className="w-full flex justify-center">
            {/* image */}
            <Image
              src={comingSoon.src}
              alt="coming soon"
              width={392}
              height={243}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-textBlue text-4xl first-line:font-bold text-center mb-8">
            Coming Soon
          </h2>
          <div>
            <p className="text-[#979797] text-left text-xs">
              Stay Updated: <br />
              Follow us on social media and never miss an update
            </p>
            <nav>
              <ul className="flex space-x-2 mt-2">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#666565] text-[0.6875rem] font-medium underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-grow">
        <ComingSoonMain />
      </div>
    </section>
  );
};

export default ComingSoonCard;
