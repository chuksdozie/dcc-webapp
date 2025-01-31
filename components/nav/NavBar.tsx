import Link from "next/link";
import React from "react";
import AppCtaBtn from "../base/AppCtaBtn";
import Logo from "../base/Logo";

const NavBar = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Event", href: "/" },
    { title: "Partners", href: "/" },
    { title: "Projects", href: "/" },
  ];
  return (
    <div className="flex justify-between items-center px-4 py-2 gap-2">
      <div className=" flex w-[40%] justify-center">
        {links.map((link) => (
          <Link
            href={link?.href}
            className="font-light text-xs text-gray-700 w-[80px]"
          >
            {link?.title}
          </Link>
        ))}
      </div>
      <div className="flex w-[20%] justify-center ">
        <Logo />
      </div>
      <div className=" flex w-[40%] justify-end">
        <Link href="https://chat.whatsapp.com/ENV72u1PQEJ3bLfMolXwS5">
          <AppCtaBtn>Join Community</AppCtaBtn>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
