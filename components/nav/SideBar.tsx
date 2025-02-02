import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import colors from "@/constants/colors";

const Sidebar = ({ links }: { links: { href: string; title: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="lg:hidden relative w-[40%] " ref={sidebarRef}>
      <RxHamburgerMenu
        onClick={() => setIsOpen(!isOpen)}
        // className="p-2 bg-gray-300 rounded-md"
        size={30}
        color={colors.brand900}
      />

      <div
        className={`absolute top-10 left-[-20px] w-[250px] h-screen bg-white shadow-lg flex flex-col items-end p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="font-light text-base text-gray-700 w-full p-4 border-b border-gray-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
