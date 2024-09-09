import React from 'react'

const HeroSection = () => {
  return (
    <section className="container relative flex flex-col justify-center items-center min-h-[92vh] md:min-h-[88vh]">
      <h1 className="text-6xl md:text-8xl leading-relaxed md:leading-relaxed transform -translate-y-10 text-center">
        Turning ideas into <br />{" "}
        <span className="text-[#9575EA] inline-block relative">
          <div className="border-2 border-[#C1EB1C] bg-transparent absolute top-0 -left-4 w-[110%] md:w-[107%] h-full" />
          creative
        </span>{" "}
        solutions
      </h1>
      <p className="mt-5 md:mt-6 font-sans max-w-[733px] text-center transform -translate-y-10">
        through intuitive design for websites and apps, helping businesses
        enhance user experience and boost key metrics.
      </p>
      <div className='absolute left-1/2 py-2 bottom-6 transform -translate-x-1/2 border rounded-3xl border-0.5 border-black h-16 w-7'>
        <div className='bounce bg-black h-5 w-2.5 rounded-2xl absolute left-1/2 transform -translate-x-1/2' />
      </div>
    </section> 
  );
}

export default HeroSection