import Image from 'next/image';
import { Link as SLink } from 'react-scroll';

import { navLinks } from '../data/staticData';

import { SiXing } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

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
        <div className="legal">
          <div className="">
            {/* <span className="px-2 border-r-2">Blog</span> */}
            <a className="px-2 border-r-2 cursor-pointer">Impressum</a>
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
