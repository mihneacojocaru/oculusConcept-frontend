import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import profilePic from '../../public/assets/profileDemo.jpeg';
import profilePic2 from '../../public/assets/profileDemo1.jpeg';
import profilePic3 from '../../public/assets/profileDemo2.jpeg';

function CarouselSlider() {
  return (
    <div className="bg-blueSectionLight shadow-inner">
      <div className="container mx-auto py-14">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="w-full p-5">
              <div className="card grid md:grid-cols-3 justify-items-center items-center gap-5 w-5/6 sm:w-4/6 mx-auto">
                <div className="picture border-4 border-white  w-24 h-24 md:w-36 md:h-36 lg:w-52 lg:h-52 rounded-full md:justify-self-end">
                  <Image
                    src={profilePic}
                    width={90}
                    height={90}
                    layout="responsive"
                    className="rounded-full"
                  />
                </div>
                <div className="content md:col-span-2 text-center md:text-left">
                  <h4 className="mb-2 text-xl md:text-2xl ">John Doe</h4>
                  <span className="my-3 text-gray-500">Ceo & Founder</span>
                  <p className="my-3 text-light italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores iste expedita corrupti consequatur aspernatur
                    architecto deserunt neque, dolor omnis non.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card grid md:grid-cols-3 justify-items-center items-center gap-5 w-5/6 sm:w-4/6 mx-auto">
              <div className="picture border-4 border-white  w-24 h-24 md:w-36 md:h-36 lg:w-52 lg:h-52 rounded-full md:justify-self-end">
                <Image
                  src={profilePic2}
                  width={90}
                  height={90}
                  layout="responsive"
                  className="rounded-full"
                />
              </div>
              <div className="content md:col-span-2 text-center md:text-left">
                <h4 className="mb-2 text-xl md:text-2xl ">John Doe</h4>
                <span className="my-3 text-gray-500">Ceo & Founder</span>
                <p className="my-3 text-light italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores iste expedita corrupti consequatur aspernatur
                  architecto deserunt neque, dolor omnis non.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card grid md:grid-cols-3 justify-items-center items-center gap-5 w-5/6 sm:w-4/6 mx-auto">
              <div className="picture border-4 border-white  w-24 h-24 md:w-36 md:h-36 lg:w-52 lg:h-52 rounded-full md:justify-self-end">
                <Image
                  src={profilePic3}
                  width={90}
                  height={90}
                  layout="responsive"
                  className="rounded-full"
                />
              </div>
              <div className="content md:col-span-2 text-center md:text-left">
                <h4 className="mb-2 text-xl md:text-2xl ">John Doe</h4>
                <span className="my-3 text-gray-500">Ceo & Founder</span>
                <p className="my-3 text-light italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores iste expedita corrupti consequatur aspernatur
                  architecto deserunt neque, dolor omnis non.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselSlider;
