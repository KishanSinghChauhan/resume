import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from 'next/link';


const Header = () => {
  return (
    <header className="container flex justify-between items-center mt-7">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={60}
          height={32}
          priority
        />
      </Link>
      <Button
      animate
        text={`Let's talk`}
        endIcon={<HiOutlineArrowRight />}
        className="text-[#030326] fill-[#030326] hover:bg-[#240E5D] hover:text-[#E7E0FA] hover:fill-[#E7E0FA]"
      />
    </header>
  );
}

export default Header