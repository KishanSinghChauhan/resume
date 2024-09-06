import React from 'react'
import { Qoutes } from './Svg';

const Testimonials = () => {
  return (
    <section className="bg-[#9575EA] min-h-[760px] flex items-center">
      <div className="container ">
        <div className="text-[#E7E0FA] text-center">
          <div className="relative  max-w-[80%] mx-auto">
            <div className="absolute top-0 left-0 transform -translate-y-[48%] -translate-x-8">
              <Qoutes />
            </div>
            <p className="font-sans text-2xl leading-loose">
              Myself Muskaan Verma, a dedicated Product Designer with a passion
              for creating visually stunning and user-friendly digital products.
              With a passion of creating great user experiences is my primary
              focus. I ensure each project leaves users with a feel-good
              sensation through meticulous attention to detail and user-centric
              design principles.
            </p>
            <div className="absolute bottom-0 right-0 transform rotate-180 translate-y-[48%] translate-x-8">
              <Qoutes />
            </div>
          </div>
          <p className="text-4xl mt-20 mb-5">Amit Upadhyay</p>
          <p className="text-xl">Founder, CEO | Fastn</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials