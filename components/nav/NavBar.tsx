import Link from "next/link";
import React, { useState } from "react";
import Logo from "../base/Logo";
import { AppCtaBtn } from "../base/Buttons";
import Sidebar from "./SideBar";

const NavBar = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Event", href: "/" },
    { title: "Partners", href: "/" },
    { title: "Projects", href: "/" },
  ];
  return (
    <div className="flex justify-between items-center px-4 py-2 gap-2 border-b-2 border-gray-100 z-20 sticky top-[-10px] bg-white">
      <Sidebar links={links} />

      <div className=" flex w-[40%] justify-center max-lg:hidden">
        {links.map((link, index) => (
          <Link
            href={link?.href}
            key={index}
            className="font-light text-xs text-gray-700 w-[80px]"
          >
            {link?.title}
          </Link>
        ))}
      </div>
      <div className="flex w-[20%] max-sm:w-[80%] max-sm:justify-start justify-center ">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className=" flex w-[40%] justify-end max-sm:hidden ">
        <Link href="https://chat.whatsapp.com/ENV72u1PQEJ3bLfMolXwS5">
          <AppCtaBtn>Join Community</AppCtaBtn>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
