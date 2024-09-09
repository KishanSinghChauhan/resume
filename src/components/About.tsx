import React from 'react'

const About = () => {
  return (
    <div className="relative w-full pt-20 pb-32 px-11 bg-gradient-to-r from-[#9575EA] via-[#7045E3] to-[#240E5D] text-[#E7E0FA] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/noise-animation.svg')]">
      <div className='relative z-10'>

      <p className="text-xl">Something little about me</p>
      <h4 className="text-[88px] leading-[90px] mt-4">Helloooo, hoooomns 👋🏻</h4>
      <p className="opacity-50 text-[42px] leading-[63px] mt-12">
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