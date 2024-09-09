'use client';

import clsx from "clsx";
import Image from "next/image";
import React, { FC, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { ProjectModal } from "./common/ProjectModal";

interface IProjectProps {
  imgSrc: string;
  tags: string[];
  title: string;
  webLink: string;
  caseStudyLink: string;
  borderColor: string;
  comingSoon: boolean;
  isPrivate: boolean;
}

const Project: FC<IProjectProps> = ({
  imgSrc,
  webLink,
  title,
  tags,
  borderColor,
  caseStudyLink,
  comingSoon,
  isPrivate
}) => {

  const [showModal, setShowModal] = useState(false);
  const redirect = () => {
    window.open(caseStudyLink, "_blank");
  };

  const handleClick = () => {
    if(isPrivate){
      setShowModal(true);
      return
    }

    redirect()
  };
  
  return (
    <>
      <div
        className={clsx("flex flex-col", {
          "pointer-events-none": comingSoon,
        })}
        onClick={handleClick}
      >
        <div
          className="relative w-full aspect-square max-h-none md:max-h-[520px] border-[10px] overflow-hidden group inline-block cursor-pointer"
          style={{ borderColor }}
        >
          {comingSoon && (
            <>
              <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[2px] z-[9] bg-transparent" />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 text-lg md:text-2xl h-12 md:h-14 rounded-full whitespace-nowrap flex items-center px-4 md:px-8 -translate-y-1/2 z-10 bg-[#E0CA3C] text-[#000F08]">
                Coming Soon
              </div>
            </>
          )}
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex items-center gap-5 mt-4 md:mt-8">
          <div className="flex flex-wrap gap-5">
            {tags.map((tag) => (
              <div
                key={tag}
                className="border border-[#E7E0FA] h-9 md:h-11 px-5 md:px-7 flex items-center"
              >
                <span className="inline-block text-lg md:text-2xl uppercase">{tag}</span>
              </div>
            ))}
          </div>
          {webLink && (
            <a
              href="https://quillbot.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-block transition-colors duration-200 ease-in-out transform text-blue-500 underline hover:text-blue-600"
            >
              Live website
            </a>
          )}
        </div>

        <div className="mt-4 md:mt-6 flex group items-center gap-2 md:w-max cursor-pointer">
          <p className="text-xl md:text-2xl after:content-[''] underline md:no-underline inline-block after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[#030326] after:transform after:scale-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out group-hover:after:scale-[1]">
            {title}
          </p>{" "}
          <MdArrowOutward fontSize={24} className="hidden md:inline-block" />
        </div>
      </div>
      <ProjectModal
        open={showModal}
        onClose={() => setShowModal(false)}
        handleRedirect={redirect}
      />
    </>
  );};

export default Project;
