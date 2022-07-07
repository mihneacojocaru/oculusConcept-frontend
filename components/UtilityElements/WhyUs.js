import React from 'react';

import { FaCubes, FaAward } from 'react-icons/fa';
import { BsPhoneFill, BsFillPeopleFill } from 'react-icons/bs';

import CounterUp from '../UtilityElements/CounterUp';

export default function WhyUs() {
  return (
    <div className="bg-blueBackground">
      <div className="container mx-auto py-14 text-white flex flex-col items-center">
        <h2 className="text-center font-medium leading-tight text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-5">
          Consulting Successes
        </h2>
        <p className="text-sm md:text-base my-5 w-3/4 md:w-2/4 text-center">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Sit amet porttitor eget dolor morbi non
          arcu risus quis. Lacus sed viverra tellus in hac habitasse. Nam libero
          justo laoreet sit. Donec ultrices tincidunt arcu non sodales neque
          sodales.
        </p>
        <div className="my-10 grid gap-y-4 grid-cols-2 md:grid-cols-4 md:gap-5 lg:gap-16 justify-items-center items-center ">
          <div className="element flex flex-col items-center p-5 lg:p-8 w-11/12 lg:w-full shadow-lg transition-all duration-300 bg-gray-900 bg-opacity-20 hover:bg-opacity-50 rounded-xl">
            <FaCubes className="text-5xl" />
            <span className="py-5 text-lg">Projekte</span>
            <CounterUp className="text-5xl font-bold" end={200} speed={5} />
          </div>
          <div className="element flex flex-col items-center p-5 lg:p-8 w-11/12 lg:w-full shadow-lg transition-all duration-300 bg-gray-900 bg-opacity-20 hover:bg-opacity-50 rounded-xl">
            <BsPhoneFill className="text-5xl" />
            <span className="py-5 text-lg">Kunden</span>
            <CounterUp className="text-5xl font-bold" end={80} speed={20} />
          </div>
          <div className="element flex flex-col items-center p-5 lg:p-8 w-11/12 lg:w-full shadow-lg transition-all duration-300 bg-gray-900 bg-opacity-20 hover:bg-opacity-50 rounded-xl">
            <BsFillPeopleFill className="text-5xl" />
            <span className="py-5 text-lg">Team</span>
            <CounterUp className="text-5xl font-bold" end={20} speed={30} />
          </div>
          <div className="element flex flex-col items-center p-5 lg:p-8 w-11/12 lg:w-full shadow-lg transition-all duration-300 bg-gray-900 bg-opacity-20 hover:bg-opacity-50 rounded-xl">
            <FaAward className="text-5xl" />
            <span className="py-5 text-lg">Auszeichnungen</span>
            <CounterUp className="text-5xl font-bold" end={70} speed={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
