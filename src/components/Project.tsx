import Image from 'next/image';
import React, { FC } from 'react'
import { MdArrowOutward } from "react-icons/md";


interface IProjectProps {
  imgSrc: string;
  tags: string[];
  title: string;
  webLink: string;
  borderColor: string;
}

const Project: FC<IProjectProps> = ({imgSrc, webLink, title, tags, borderColor}) => {
  return (
    <div className="flex flex-col">
      <div
        className="relative w-full h-[520px] border-[10px]"
        style={{ borderColor }}
      >
        <Image src={imgSrc} alt={title} fill />
      </div>
      <div className="flex flex-wrap gap-5 mt-8">
        {tags.map((tag) => (
          <div
            key={tag}
            className="border border-[#E7E0FA] h-11 px-7 flex items-center"
          >
            <span className="inline-block text-2xl uppercase">{tag}</span>
          </div>
        ))}
      </div>

      <a
        href={webLink}
        target="_blank"
        className="mt-6 flex group items-center gap-2 w-max"
      >
        <p className="text-2xl after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[#030326] after:transform after:scale-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out group-hover:after:scale-[1]">
          {title}
        </p>{" "}
        <MdArrowOutward fontSize={24} />
      </a>
    </div>
  );
};

export default Project