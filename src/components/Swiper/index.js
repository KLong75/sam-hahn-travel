// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";


// import images
import eifelTower from "../../assets/images/eifel_tower_1_1.jpg";
import germany from "../../assets/images/germany_1_1.jpg";
import waterfall from "../../assets/images/waterfall_1_1.jpg";
import frameGlobeLogo from "../../assets/sam_logos/sht_globe_key_logo.png";




export default function App() {
  return (
    <>
      <h6 style={{textAlign: 'center', fontSize: '28px', marginBottom: '0', marginTop: '20px'}} className='nothing-you-could-do'>Testimonials</h6>
      <Swiper
        navigation={false}
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
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='sunset over a lake' style={{display: 'block', width: '100%'}} />
          <span style={{marginBottom: '', fontWeight: 'bolder', color: 'black'}}></span>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Smith Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Lake of the Ozarks</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='mountains in the clouds' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Jones Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Mountains in the Clouds</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='fall foliage' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Smith-Jones Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Vermont</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='beach sunset' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Jones-Smith Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Hawaii</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={eifelTower} alt='Eifel Tower' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The SmithJones Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Paris, France</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='flowers' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Smitherjones Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Botanical Garden</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='the sun behind a tree' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Jonessmither Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: New England</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={germany} alt='buildings in Germany' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for the next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- Some Guy</h6>
          
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Germany</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={waterfall} alt='tropical waterfall' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>

        <SwiperSlide>
          <h5 style={{fontSize: '20px', padding: '10px', margin: '10px'}}>Thank you Sam for a wonderful experience! Best vacation ever! Can't wait for our next adventure!</h5>
          <h6 style={{fontSize: '18px', padding: '10px', margin: '10px'}}>- The Smitherjones Family</h6>
          <p style={{ padding: '10px', margin: '10px'}}>Destination: Tropical Paradise</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={frameGlobeLogo} alt='Sam Hahn Travel Logo' style={{display: 'block', width: '100%'}} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}