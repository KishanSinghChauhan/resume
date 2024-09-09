'use client';

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  const showPageScrollButtons = pathname === "/";

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="container flex justify-between items-center py-4 md:py-6">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width="100"
            height="70"
            className="w-[70px] md:w-[100px] h-[32px] md:h-[64px]"
            priority
          />
        </Link>
        {showPageScrollButtons && (
          <div className="relative left-8 hidden md:flex">
            <Link
              href="#about"
              className="relative inline-block mr-16 after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:w-full after:h-[2px] after:bg-[#030326] after:transform after:scale-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1]"
            >
              <span>About</span>
            </Link>
            <Link
              href="#projects"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:w-full after:h-[2px] after:bg-[#030326] after:transform after:scale-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1]"
            >
              <span>Projects</span>
            </Link>
          </div>
        )}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=muskanverma5910@gmail.com"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Button
            animate
            text={`Let's talk`}
            endIcon={<HiOutlineArrowRight />}
            className="text-[#030326] fill-[#030326] hover:bg-[#240E5D] hover:text-[#E7E0FA] hover:fill-[#E7E0FA]"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
