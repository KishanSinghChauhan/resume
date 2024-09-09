import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import { Projects_List, Services } from "./constant";
import clsx from "clsx";
import Button from "@/components/Button";
import { HiOutlineArrowRight } from "react-icons/hi";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container" id="about">
        <div className="flex flex-wrap md:flex-nowrap mb-8 md:mb-10">
          {Services.map((service, index) => (
            <div
              key={service}
              className={clsx(
                "flex-1 border-black border-t min-w-[50%] md:min-w-[25%] border md:border-r md:border-b-0 flex justify-center items-center h-20",
                {
                  "border-l": index === 0,
                }
              )}
            >
              <span className="inline-block text-xl md:text-2xl text-center">{service}</span>
            </div>
          ))}
        </div>
        <About />
      </section>

      <Clients />

      <section
        className="container flex flex-col items-center my-20 md:my-[150px]"
        id="projects"
      >
        <h2 className="text-4xl md:text-6xl">Selected Projects</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-14 md:gap-y-20 my-12 md:my-20">
          {Projects_List.map((project, index) => {
            if(!project.showOnHomePage) return;
            return (
              <Project
                imgSrc={project.imgSrc}
                title={project.name}
                caseStudyLink={project.caseStudyLink}
                webLink={project.webLink}
                key={index}
                borderColor={project.borderColor}
                tags={project.tags}
                comingSoon={project.comingSoon || false}
                isPrivate={project.isPrivate || false}
              />
            );})}
        </div>
        <Link href='/projects'>
        <Button
          animate
          text="View more projects"
          endIcon={<HiOutlineArrowRight />}
          className="text-[#030326] fill-[#030326] hover:bg-[#240E5D] hover:text-[#E7E0FA] hover:fill-[#E7E0FA]"
        />
        </Link>
      </section>
      <Testimonials />
    </>
  );
}
