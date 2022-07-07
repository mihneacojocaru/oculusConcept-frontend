import Image from 'next/image';
import React from 'react';

import img from '../../public/assets/blank_profile.png';
import { teamMembers } from '../../data/staticData';

export default function TeamCircles() {
  return (
    <div className="container mx-auto my-5 text-fc-dark">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="card my-5 flex flex-col items-center justify-center"
          >
            <div className="w-4/12 md:w-3/6 lg:w-8/12 rounded-full">
              <Image
                src={item.img}
                width={150}
                height={150}
                layout="responsive"
                className="rounded-full"
              />
            </div>
            <h3 className="mt-5 mb-2 text-xl md:text-2xl ">{item.name}</h3>
            <p className="italic">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
