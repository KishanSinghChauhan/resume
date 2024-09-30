import React from 'react'
import Button from './Button';
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { GrLinkDown } from "react-icons/gr";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container relative py-16 md:py-[120px] ">
        <h5 className="text-[#E7E0FA] text-5xl md:text-[88px] leading-normal md:leading-[90px]">
          Let’s get in touch!
        </h5>
        <p className="text-[#E7E0FA] text-xl md:text-2xl mt-6 md:mt-7 font-sans leading-relaxed md:leading-normal max-w-[720px]">
          A designer from India turning ideas into creative solution. Let&apos;s
          get in touch and explore new design opportunities.
        </p>

        <div className="flex gap-6 items-center mt-[240px] justify-between md:justify-start flex-wrap relative z-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=muskanverma5910@gmail.com"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Button
              text="Email"
              startIcon={<AiOutlineMail fill="inherit" />}
              className="border-[#E7E0FA] !text-[#E7E0FA] fill-[#E7E0FA] text-2xl px-5 font-sans hover:bg-[#BB001B] hover:border-[#BB001B]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muskaan-verma-6aba71179/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Button
              text="LinkedIn"
              startIcon={<FaLinkedinIn fill="inherit" />}
              className="border-[#E7E0FA] !text-[#E7E0FA] fill-[#E7E0FA] text-2xl px-5 font-sans hover:bg-[#0077B5] hover:border-[#0077B5]"
            />
          </a>
          <a
            href="https://www.behance.net/muskanverma1"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Button
              text="Behance"
              startIcon={<FaBehance fill="inherit" />}
              className="border-[#E7E0FA] !text-[#E7E0FA] fill-[#E7E0FA] text-2xl px-5 font-sans hover:bg-[#053EFF] hover:border-[#053EFF]"
            />
          </a>
          <a
            href="/resume1.pdf"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Button
              text="Resume"
              startIcon={<GrLinkDown fill="inherit" />}
              className="border-[#E7E0FA] !text-[#E7E0FA] fill-[#E7E0FA] text-2xl px-5 font-sans hover:bg-[#9575EA] hover:border-[#9575EA]"
            />
          </a>
        </div>
        <div className="absolute w-[80%] md:w-[40%] h-full top-0 right-0 flex items-center opacity-15 md:opacity-20">
          <div className="relative w-full h-[84%]">
            <Image src="/images/footer_logo.svg" alt="footer logo" fill />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer