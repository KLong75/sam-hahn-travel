// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// import images
import eifelTower from "../../assets/images/eifel_tower_1_1.jpg";
import germany from "../../assets/images/germany_1_1.jpg";
import waterfall from "../../assets/images/waterfall_1_1.jpg";
import frameGlobeLogo from "../../assets/sam_logos/sht_globe_key_logo.png";

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
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='sunset over a lake' />
          <span style={{marginBottom: '', fontWeight: 'bolder', color: 'black'}}></span>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Smith Family</h6>
          <p>Destination: Lake of the Ozarks</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='mountains in the clouds' />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Jones Family</h6>
          <p>Destination: Mountains in the Clouds</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='fall foliage'/>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Smith-Jones Family</h6>
          <p>Destination: Vermont</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='beach sunset'/>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Jones-Smith Family</h6>
          <p>Destination: Hawaii</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={eifelTower} alt='Eifel Tower' />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The SmithJones Family</h6>
          <p>Destination: Paris, France</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='flowers' />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Smitherjones Family</h6>
          <p>Destination: Botanical Garden</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='the sun behind a tree'/>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Jonessmither Family</h6>
          <p>Destination: New England</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={germany} alt='buildings in Germany' />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for the next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- Some Guy</h6>
          
          <p>Destination: Germany</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={waterfall} alt='tropical waterfall' />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '15px'}}>- The Smitherjones Family</h6>
          <p>Destination: Tropical Paradise</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}