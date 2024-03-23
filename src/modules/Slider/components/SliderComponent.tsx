'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import useMediaQueries from '@/hooks/useMediaQueries';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles.css';

export default function App() {
  const { isOnMobile, isOnTablet, isOnDesktop } = useMediaQueries();

  let slidesPerView;

  if (isOnMobile) {
    slidesPerView = 1;
  } else if (isOnTablet) {
    slidesPerView = 3;
  } else {
    slidesPerView = 3;
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
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <p>Slide 1</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 2</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 3</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 4</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 5</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 6</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 7</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 8</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 9</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p>Slide 10</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            veniam quos aliquid ratione quia itaque exercitationem voluptatum
            beatae esse iure nihil
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
