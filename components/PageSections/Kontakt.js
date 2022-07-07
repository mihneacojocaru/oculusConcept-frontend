import Image from 'next/image';
import React from 'react';

import Button from '../UtilityElements/Button';

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="container mx-auto"
      style={{ minHeight: '50vh' }}
    >
      <h2 className="text-fc-blueDarkHeader text-center font-medium tracking-wide text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-5">
        Kontakt
      </h2>
      <div className="pt-10 grid md:grid-cols-2 items-center justify-items-center">
        <h3 className="mb-7 md:mb-2 text-xl md:text-2xl font-light md:self-center">
          We work with ambitious leaders
        </h3>
        <p className="px-3 sm:px-7 lg:px-10 text-sm text-center md:text-left">
          Sie möchten gerne mit uns in Verbindung treten? Dann füllen Sie doch
          einfach das unten stehende Kontaktformular aus. Wir freuen uns auf
          Ihre Kontaktaufnahme.
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="leftContainer w-4/6 sm:w-3/6 md:w-5/6 lg:w-8/12 mt-12 mb-5 justify-self-center">
          <Image
            src="/assets/email-kontakt.svg"
            width={300}
            height={250}
            layout="responsive"
          />
        </div>
        <div className="rightContainer p-2 sm:p-7 lg:p-10 ">
          <p className="text-xl font-light mb-3">Bereit zum Reden?</p>
          <form className="flex flex-col w-full">
            <input
              className="p-2 my-3 border border-solid border-gray-300"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 my-3 border border-solid border-gray-300"
              type="email"
              placeholder="E-mail"
            />
            <textarea
              placeholder="Ihre Nachricht"
              id=""
              className="p-2 my-3 border border-solid border-gray-300"
              cols="30"
              rows="5"
            ></textarea>
            <button
              type="button"
              className="px-7 py-4 my-5 ml-auto border-2 font-medium text-sm leading-tight uppercase rounded-full bg-blueAccent border-blueAccent text-white  hover:text-blueAccent hover:bg-white active:bg-blueAccentLight active:text-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-fit"
            >
              Absenden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
