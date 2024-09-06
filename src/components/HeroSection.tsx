import React from 'react'

const HeroSection = () => {
  return (
    <section className="container flex flex-col justify-center items-center min-h-[91vh]">
      <h1 className="text-8xl leading-snug transform -translate-y-8">
        Turning ideas into <br />{" "}
        <span className="text-[#9575EA] inline-block relative">
          <div className="border-2 border-[#C1EB1C] bg-transparent absolute top-0 -left-4 w-[107%] h-full" />
          creative
        </span>{" "}
        solutions
      </h1>
      <p className="mt-6  font-sans w-[733px] text-center transform -translate-y-8">
        through intuitive design for websites and apps, helping businesses
        enhance user experience and boost key metrics.
      </p>
    </section>
  );
}

export default HeroSection