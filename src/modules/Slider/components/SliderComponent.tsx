'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import useMediaQueries from '@/hooks/useMediaQueries';

import slideData from '../data/slide-data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SpriteSVG from '../img/SpriteSVG';
import { twMerge } from 'tailwind-merge';

export default function App() {
  const { isOnMobile, isOnTablet } = useMediaQueries();

  let slidesPerView;
  let spaceBetween;

  if (isOnMobile) {
    slidesPerView = 1;
    spaceBetween = 30;
  } else if (isOnTablet) {
    slidesPerView = 3;
    spaceBetween = 50;
  } else {
    slidesPerView = 3;
    spaceBetween = 153;
  }

  return (
    <>
      <Swiper
        cssMode={true}
        grabCursor={true}
        mousewheel={true}
        keyboard={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        initialSlide={0}
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: '.mySwiper-button-next',
          prevEl: '.mySwiper-button-prev',
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex items-center justify-center w-full gap-4 md:gap-5 relative">
          <button className="mySwiper-button-prev">
            <SpriteSVG width="134" name="arrow" />
          </button>

          <button className={twMerge(`mySwiper-button-next`, `rotate-180`)}>
            <SpriteSVG width="134" name="arrow" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
