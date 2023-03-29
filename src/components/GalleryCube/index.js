// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import './GalleryCube.css'

// import "./styles.css";


import eifelTower from '../../assets/images/eifel_tower_1_1.jpg';
import waterfall from '../../assets/images/waterfall_1_1.jpg';
import germany from '../../assets/images/germany_1_1.jpg';
import bikeDream from '../../assets/images/bikeDream1_1.jpg';

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function GalleryCube() {
  return (
    <>
      <Swiper
        style={{
          width: '400px',
          height: '400px',
          position: 'relative',
          padding: '0',

        }}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        className="galleryCubeSwiper"
      >
        <SwiperSlide>
          <img src={waterfall} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={germany} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bikeDream} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={eifelTower} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>


      </Swiper>
    </>
  );
}