
import React from 'react'
import { Qoutes } from './Svg';
import { Testimonials_List } from '@/app/constant';
import Link from 'next/link';
import { Carousel } from "flowbite-react";

export default function Component() {
  return (
    <section className="bg-[#9575EA] min-h-[960px] md:min-h-[800px] flex items-center">
      <div className="container">
        <div className="h-[860px] md:h-[720px]">
          <Carousel pauseOnHover>
            {Testimonials_List.map((testimonial) => (
              <div
                className="text-[#E7E0FA] text-center"
                key={testimonial.name}
              >
                <div className="relative  max-w-[80%] mx-auto">
                  <div className="absolute top-0 left-0 transform -translate-y-[48%] -translate-x-8">
                    <Qoutes className="w-24 md:w-auto" />
                  </div>
                  <p className="font-sans text-base md:text-2xl leading-loose">
                    {testimonial.detail}
                  </p>
                  <div className="absolute bottom-0 right-0 transform rotate-180 translate-y-[48%] translate-x-8">
                    <Qoutes className="w-24 md:w-auto" />
                  </div>
                </div>
                <Link
                  href={testimonial.linkedIn}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <p className="text-2xl md:text-4xl mt-12 md:mt-20 mb-4 md:mb-5 underline">
                    {testimonial.name}
                  </p>
                </Link>
                <p className="text-base md:text-xl">{testimonial.occupation}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}