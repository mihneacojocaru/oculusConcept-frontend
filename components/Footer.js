import Image from 'next/image';
import { Link as SLink } from 'react-scroll';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { navLinks } from '../data/staticData';

import { SiXing } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

function Footer() {
  const [optionsActive, setOptionsActive] = useState(false);

  const router = useRouter();

  const year = new Date().getFullYear();

  const clickHandler = () => {
    setOptionsActive(!optionsActive);
  };

  return (
    <footer className="bg-blueBackground text-white">
      <section className="container mx-auto py-14 flex flex-col items-center justify-center">
        <div className="socialIcons flex">
          <a href="">
            <div className="border-2 transition-all borrder-white text-blueBackground hover:text-white  text-xl bg-white hover:bg-blueBackground rounded-full p-2 m-2">
              <ImFacebook />
            </div>
          </a>
          <a href="">
            <div className="border-2 transition-all borrder-white text-xl bg-white hover:bg-blueBackground  text-blueBackground hover:text-white  rounded-full p-2 m-2">
              <SiXing />
            </div>
          </a>

          <a href="">
            <div className="border-2 transition-all borrder-white text-blueBackground hover:text-white  text-xl bg-white hover:bg-blueBackground rounded-full p-2 m-2">
              <FaLinkedinIn />
            </div>
          </a>
        </div>
        <ul className="md:flex md:flex-row md:items-center md:justify-center grid grid-cols-2 py-5">
          {navLinks.map((item) => (
            <li className="p-2 text-lg cursor-pointer" key={item.link}>
              <SLink
                to={item.link}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
              >
                {item.text}
              </SLink>
            </li>
          ))}
        </ul>
        <div className="options flex flex-row flex-wrap items-center justify-center">
          <div className="language flex flex-row px-2 ">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-fc-dark shadow-sm hover:bg-blueSectionLight focus:outline-none"
                  onClick={clickHandler}
                >
                  Sprache
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {optionsActive && (
                <div className="absolute top-8 right-0 mt-2 w-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {router.locales.map((locale) => (
                    <div
                      className="px-2 block rounded-md py-1 text-sm text-fc-dark"
                      key={locale}
                    >
                      <Link
                        onClick={clickHandler}
                        href={router.asPath}
                        locale={locale}
                      >
                        <a className="uppercase">{locale}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="">
            {/* <span className="px-2 border-r-2">Blog</span> */}
            <a className="px-2 border-r-2 border-l-2 cursor-pointer">
              Impressum
            </a>
            <a className="px-2 cursor-pointer">Datenschutz</a>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-row justify-center flex-wrap text-sm pb-2">
        <p className="text-center mx-2">
          Copyright &copy; {year} - Oculus Concept GmbH.
        </p>
        <p className="text-center">
          Design von{' '}
          <a
            className="underline"
            href="https://mihneacojocaru.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Mihnea Cojocaru
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
