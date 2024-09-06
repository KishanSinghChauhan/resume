import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import { Services } from "./constant";
import clsx from "clsx";
import Button from "@/components/Button";
import { HiOutlineArrowRight } from "react-icons/hi";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="container">
        <div className="flex flex-nowrap mb-10">
          {Services.map((service, index) => (
            <div
              key={service}
              className={clsx(
                "flex-1 border-black border-t border-r flex justify-center items-center h-20",
                {
                  "border-l": index === 0,
                }
              )}
            >
              <span className="inline-block text-2xl">{service}</span>
            </div>
          ))}
        </div>
        <About />
      </section>

      <Clients />
      
      <section className="container flex flex-col items-center my-[150px]">
        <h2 className="text-6xl">Selected Projects</h2>
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-10 my-20">
          {[1, 2, 34, 4].map((_, index) => (
            <Project
              imgSrc="/images/logo.svg"
              title="Fastn"
              webLink="https://quillbot.com/"
              key={index}
              borderColor="red"
              tags={["ui", "ux"]}
            />
          ))}
        </div>
        <Button
        animate
          text="View more projects"
          endIcon={<HiOutlineArrowRight />}
          className="text-[#030326] fill-[#030326] hover:bg-[#240E5D] hover:text-[#E7E0FA] hover:fill-[#E7E0FA]"
        />
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}
