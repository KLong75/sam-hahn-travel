import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// import images
import eifelTower from "../../assets/images/eifel_tower_1_1.jpg";
import germany from "../../assets/images/germany_1_1.jpg";
import waterfall from "../../assets/images/waterfall_1_1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";


export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
  
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='sunset over a lake' />
          <span style={{marginBottom: '', fontWeight: 'bolder', color: 'black'}}></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='mountains in the clouds' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='fall foliage'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='beach sunset'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={eifelTower} alt='Eifel Tower' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='flowers' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='the sun behind a tree'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={germany} alt='buildings in Germany' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterfall} alt='buildings in Germany' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}