import Image from 'next/image';

import { Link as SLink } from 'react-scroll';

import QuestionSelector from './TestComponents/QuestionSelector';

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="px-6 lg:py-40 md:px-1 text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="mt-7 lg:mt-0 lg:px-3 flex flex-col items-center lg:items-stretch">
                <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-7 text-center lg:text-left">
                  Strukturgeber für Organisationen und Leadership
                </h1>
                <p className="text-md md:text-lg opacity-70 max-w-lg">
                  In Allem was wir tun, glauben wir daran, dass jeder Mensch zu
                  eigenverantwortlichen Handeln befähigt werden kann. <br /> Wir
                  glauben daran positiv zu verändern.
                </p>
              </div>
              <div className="mb-12 lg:mb-0 ">
                <div className="my-7 lg:my-0 w-full rounded-xl shadow-lg bg-white bg-opacity-5 p-7">
                  <div className="flex flex-col items-center justify-center">
                    <QuestionSelector />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
