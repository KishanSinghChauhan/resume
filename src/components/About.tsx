import React from 'react'

const About = () => {
  return (
    <div className="relative w-full pt-16 md:pt-20 pb-24 md:pb-32 px-4 md:px-11 bg-gradient-to-r from-[#9575EA] via-[#7045E3] to-[#240E5D] text-[#E7E0FA] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/noise-animation.svg')]">
      <div className='relative z-10'>

      <p className="text-lg md:text-xl">Something little about me</p>
      <h4 className="text-5xl md:text-[88px] leading-snug md:leading-[90px] mt-4">Helloooo, hoooomns 👋🏻</h4>
      <p className="opacity-50 text-2xl md:text-[42px] leading-relaxed md:leading-[63px] mt-8 md:mt-12">
        Myself Muskaan Verma, a dedicated Product Designer with a passion for
        creating visually stunning and user-friendly digital products.
        With a passion of creating great user experiences is my primary focus. I
        ensure each project leaves users with a feel-good sensation through
        meticulous attention to detail and user-centric design principles.
      </p>
      </div>
    </div>
  );
}

export default About