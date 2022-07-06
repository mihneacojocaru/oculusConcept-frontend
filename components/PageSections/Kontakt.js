import Image from 'next/image';
import React from 'react';

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="container mx-auto"
      style={{ minHeight: '50vh' }}
    >
      <h2 className="text-center font-medium leading-tight text-2xl md:text-3xl lg:text-4xl pb-5">
        Kontakt
      </h2>
      <div className="grid md:grid-cols-2">
        <div className="leftContainer p-10 flex flex-col items-center">
          <p className="mb-12 text-center">We work with ambitious leaders</p>
          <div className="image w-52 sm:w-72 lg:w-96">
            <Image
              src="/assets/email-kontakt2.svg"
              width={300}
              height={250}
              layout="responsive"
            />
          </div>
        </div>
        <div className="rightContainer p-3 sm:p-7 lg:p-10">
          <p className="text-center">Bereit zum Reden?</p>
          <form className="flex flex-col w-full">
            <input
              className="p-2 my-3 border border-solid border-gray-300"
              type="text"
              placeholder="name"
            />
            <input
              className="p-2 my-3 border border-solid border-gray-300"
              type="email"
              placeholder="email"
            />
            <textarea
              placeholder="deine Nachricht"
              id=""
              className="p-2 my-3 border border-solid border-gray-300"
              cols="30"
              rows="5"
            ></textarea>
            <button className="border-2 my-3" type="button">
              Absenden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
