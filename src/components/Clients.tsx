import { Clients_List } from '@/app/constant';
import Image from 'next/image';
import React from 'react'

const Clients = () => {
  return (
    <div className="container my-20 md:my-[150px]">
      <h3 className="text-3xl md:text-6xl text-center">
        Brands I have worked with
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-20">
        {Clients_List.map((client) => (
          <div
            key={client.name}
            className="flex justify-center items-center border-2 border-[#C1EB1C] h-[120px] md:h-[150px]"
          >
            <Image
              src={client.imgSrc}
              alt="hello"
              width={Number(client.width)}
              height={Number(client.height)}
            />
          </div>
        ))}
        <div className="bg-[#030326] h-[120px] md:h-[150px] flex justify-center items-center p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[80%]">
            <Image
              src="/images/background.png"
              alt="star"
              fill
              objectFit="contain"
            />
          </div>
          <p className="text-lg md:text-xl font-semibold w-[226px] text-center text-white font-sans">
            & few more and here it could be you 😄
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clients