import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BsStars, BsStack, BsMegaphone } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { TbCalendarStats } from 'react-icons/tb';

const Element = ({ icon, title, paragraph }) => {
  return (
    <div className="mb-5 w-5/6 md:w-4/6 lg:w-8/12 mx-auto flex flex-row justify-center items-center">
      <div className="icon p-7 rounded-full border-2 border-blueAccent text-3xl text-blueAccent transition-all duration-200 hover:bg-blueAccent  hover:text-white">
        {icon}
      </div>
      <div className="text mx-5">
        <h4 className="text-fc-blueDarkHeader font-medium tracking-wide text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-5">
          {title}
        </h4>
        <p className="text-fc-darkGray">{paragraph}</p>
      </div>
    </div>
  );
};

export default function PortfolioStandard() {
  const [clicked, setClicked] = useState({
    id: null,
    state: true,
  });

  const toggle = (id) => {
    let newState;
    if (clicked.id !== id) {
      newState = true;
    } else if (clicked.id === id) {
      newState = !clicked.state;
    }

    setClicked({
      id: id,
      state: newState,
    });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="headerText w-5/6 md:w-4/6 lg:w-8/12 mx-auto">
        <h3 className="text-fc-blueDarkHeader text-center font-medium tracking-wide text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-5">
          Portfolio Standard
        </h3>
        <p className="text-center my-3">
          Et harum quidem rerum facilis est et expedita distinctio nam libero
          tempore cum soluta nobis eligendi cumque.
        </p>
      </div>
      <div className="card1 my-5 lg:my-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className=" leftContainer w-4/6 lg:w-7/12">
            <Image
              src="/assets/Sections/team1.svg"
              width={300}
              height={250}
              layout="responsive"
            />
          </div>
          <div className="rightContainer w-4/6 lg:w-8/12 lg:px-14">
            <p className="flex flex-row items-center uppercase mb-3">
              <BsStars className="text-blueAccent text-2xl" /> Creative Subtitle
            </p>
            <h3 className="mb-7 md:mb-2 text-fc-dark text-xl md:text-2xl font-bold md:self-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aspernatur.
            </h3>
            <p className="text-fc-darkGray my-3">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint
              molestiae non recusandae itaque.
            </p>
            <p className="mb-2 text-fc-darkGray flex flex-row items-center">
              <BsStack className="mr-2 " /> Donec pede justo fringila vec nec.
            </p>
            <p className="mb-2 text-fc-darkGray flex flex-row items-center">
              <BsMegaphone className="mr-2 " /> Cras ultricies mi eu turpis
              hendrerit fringilla.
            </p>
            <button
              onClick={() => {
                toggle(1);
              }}
              type="button"
              className="px-7 py-4 mt-5 ml-auto cursor-pointer border-2 font-medium text-sm leading-tight uppercase rounded-full bg-blueAccent border-blueAccent text-white  hover:text-blueAccent hover:bg-white active:bg-blueAccentLight active:text-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-fit"
            >
              {clicked.state && clicked.id === 1 ? 'Close' : 'Read More'}
            </button>
          </div>
        </div>
        {clicked.id === 1 && clicked.state ? (
          <div className="showHide py-5 shadow-lg rounded-lg grid lg:grid-cols-2">
            <Element
              icon={<BsMegaphone />}
              title="Title #1"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<FaBalanceScale />}
              title="Title #2"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<BiWorld />}
              title="Title #3"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<TbCalendarStats />}
              title="Title #4"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
          </div>
        ) : null}
      </div>
      <div className="card2 my-5 lg:my-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="rightContainer w-4/6 lg:w-7/12 md:order-2">
            <Image
              src="/assets/Sections/team2.svg"
              width={300}
              height={250}
              layout="responsive"
            />
          </div>
          <div className="leftContainer w-4/6 lg:w-8/12 lg:px-14">
            <p className="flex flex-row items-center uppercase mb-3">
              <BsStars className="text-blueAccent text-2xl" /> Creative Subtitle
            </p>
            <h3 className="mb-7 md:mb-2 text-fc-dark text-xl md:text-2xl font-bold md:self-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aspernatur.
            </h3>
            <p className="text-fc-darkGray my-3">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint
              molestiae non recusandae itaque.
            </p>
            <p className="mb-2 text-fc-darkGray flex flex-row items-center">
              <BsStack className="mr-2 " /> Donec pede justo fringila vec nec.
            </p>
            <p className="mb-2 text-fc-darkGray flex flex-row items-center">
              <BsMegaphone className="mr-2 " /> Cras ultricies mi eu turpis
              hendrerit fringilla.
            </p>
            <button
              onClick={() => {
                toggle(2);
              }}
              type="button"
              className="px-7 py-4 mt-5 ml-auto cursor-pointer border-2 font-medium text-sm leading-tight uppercase rounded-full bg-blueAccent border-blueAccent text-white  hover:text-blueAccent hover:bg-white active:bg-blueAccentLight active:text-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-fit"
            >
              {clicked.state && clicked.id === 2 ? 'Close' : 'Read More'}
            </button>
          </div>
        </div>
        {clicked.id === 2 && clicked.state ? (
          <div className="showHide py-5 shadow-lg rounded-lg grid lg:grid-cols-2">
            <Element
              icon={<BsMegaphone />}
              title="Title #1"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<FaBalanceScale />}
              title="Title #2"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<BiWorld />}
              title="Title #3"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<TbCalendarStats />}
              title="Title #4"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
          </div>
        ) : null}
      </div>
      <div className="card3 my-5 lg:my-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className=" leftContainer w-4/6 lg:w-7/12">
            <Image
              src="/assets/Sections/team3.svg"
              width={300}
              height={250}
              layout="responsive"
            />
          </div>
          <div className="rightContainer w-4/6 lg:w-8/12 lg:px-14">
            <p className="flex flex-row items-center uppercase mb-3">
              <BsStars className="text-blueAccent text-2xl" /> Creative Subtitle
            </p>
            <h3 className="mb-7 md:mb-2 text-fc-dark text-xl md:text-2xl font-bold md:self-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aspernatur.
            </h3>
            <p className="text-fc-darkGray my-3">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint
              molestiae non recusandae itaque.
            </p>
            <p className="mb-2 text-fc-darkGray flex flex-row items-center">
              <BsStack className="mr-2 " /> Donec pede justo fringila vec nec.
            </p>
            <p className="mb-2 text-fc-darkGray flex flex-row items-center">
              <BsMegaphone className="mr-2 " /> Cras ultricies mi eu turpis
              hendrerit fringilla.
            </p>
            <button
              onClick={() => {
                toggle(3);
              }}
              type="button"
              className="px-7 py-4 mt-5 ml-auto cursor-pointer border-2 font-medium text-sm leading-tight uppercase rounded-full bg-blueAccent border-blueAccent text-white  hover:text-blueAccent hover:bg-white active:bg-blueAccentLight active:text-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-fit"
            >
              {clicked.state && clicked.id === 3 ? 'Close' : 'Read More'}
            </button>
          </div>
        </div>
        {clicked.id === 3 && clicked.state ? (
          <div className="showHide py-5 shadow-lg rounded-lg grid lg:grid-cols-2">
            <Element
              icon={<BsMegaphone />}
              title="Title #1"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<FaBalanceScale />}
              title="Title #2"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<BiWorld />}
              title="Title #3"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
            <Element
              icon={<TbCalendarStats />}
              title="Title #4"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro ullam ad soluta eaque cumque quidem? Odit, animi! Id, officia!"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
