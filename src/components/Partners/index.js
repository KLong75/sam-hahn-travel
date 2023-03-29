// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./PartnerCube.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

// import styles
import styles from './Partners.module.css';

// import images
import BelmondBellini from '../../assets/partner_logos/Belmond_Bellini.png';
import Belmond from '../../assets/partner_logos/Belmond_new.png';
import Diamond from '../../assets/partner_logos/Diamond_crop.png';
import FourSeasons from '../../assets/partner_logos/FourSeasons_crop.png';
import HyattPrive from '../../assets/partner_logos/HyattPrive.png';
import InTheKnow from '../../assets/partner_logos/InTheKnow.png';
import Jumeriah from '../../assets/partner_logos/Jumeriah.png';
import Mandarin from '../../assets/partner_logos/Mandarin.png';
import MarriottStars from '../../assets/partner_logos/MarriottStars_new.png';
import OetkerCollection from '../../assets/partner_logos/OetkerCollection.png';
import Relais from '../../assets/partner_logos/Relais.png';
import Rosewood from '../../assets/partner_logos/Rosewood.png';
import Virtuoso from '../../assets/partner_logos/Virtuoso.png';
import Context from '../../assets/partner_logos/ContextTravel.png';
import globeKeyLogo from '../../assets/sam_logos/sht_globe_key_logo.png';


const PartnerInfo = [
  {
    name: 'Belmond Bellini',
    image: BelmondBellini,
    alt: 'Belmond Bellini Logo',
    className: styles.belmondBelliniLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Belmond',
    image: Belmond,
    alt: 'Belmond Logo',
    className: styles.belmondLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Diamond Club',
    image: Diamond,
    alt: 'Diamond Club Logo',
    className: styles.diamondLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Four Seasons',
    image: FourSeasons,
    alt: 'Four Seasons Logo',
    className: styles.fourSeasonsLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Hyatt Prive',
    image: HyattPrive,
    alt: 'Hyatt Prive Logo',
    className: styles.hyattPriveLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'In The Know Experiences',
    image: InTheKnow,
    alt: 'In The Know Experiences Logo',
    className: styles.inTheKnowLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Jumeriah',
    image: Jumeriah,
    alt: 'Jumeriah Logo',
    className: styles.jumeriahLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Mandarin Oriental Fan Club',
    image: Mandarin,
    alt: 'Mandarin Oriental Fan Club Logo',
    className: styles.mandarinLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Marriott Stars',
    image: MarriottStars,
    alt: 'Marriott Stars Logo',
    className: styles.marriottStarsLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    name: 'Oetker Collection',
    image: OetkerCollection,
    alt: 'Oetker Collection Logo',
    className: styles.oetkerCollectionLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Relais',
    image: Relais,
    alt: 'Relais Logo',
    className: styles.relaisLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex.',
  },
  {
    name: 'Rosewood',
    image: Rosewood,
    alt: 'Rosewood Logo',
    className: styles.rosewoodLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Virtuoso',
    image: Virtuoso,
    alt: 'Virtuoso Logo',
    className: styles.virtuosoLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
  {
    name: 'Context Travel',
    image: Context,
    alt: 'Context Travel Logo',
    className: styles.contextLogo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  },
];


const Partners = () => {

  return (
   
      <Grid container spacing={2} textAlign='' alignItems='' justifyContent='' style={{marginBottom: '0px'}}>
        <Grid xs={12}>
          <h2 className='nothing-you-could-do' style={{ fontSize: '32px'}}>My Partnerships Bring You VIP Perks </h2>
        </Grid>

        <Grid xs={12} md={4} style={{marginBottom: '30px'}}>
          <Swiper
            style={{
               fontWeight: 'bold',
               width: '300px',
               height: '300px',
               position: 'relative',
               // left: '50%',
               // top: '50%',
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
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
         
            <SwiperSlide>
              <img src={`${PartnerInfo[0].image}`} alt={`${PartnerInfo[0].alt}`} className={`${PartnerInfo[0].className}`} />
              <p>{`${PartnerInfo[0].description}`}</p>
            </SwiperSlide>
           
            <SwiperSlide >
            <img src={`${PartnerInfo[1].image}`} alt={`${PartnerInfo[1].alt}`} className={`${PartnerInfo[1].className}`} />
              <p>{`${PartnerInfo[1].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
              <img src={`${PartnerInfo[2].image}`} alt={`${PartnerInfo[2].alt}`} className={`${PartnerInfo[2].className}`} />
              <p>{`${PartnerInfo[2].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
              <img src={`${PartnerInfo[3].image}`} alt={`${PartnerInfo[3].alt}`} className={`${PartnerInfo[3].className}`}/>
              <p>{`${PartnerInfo[3].description}`}</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src={`${PartnerInfo[4].image}`} alt={`${PartnerInfo[4].alt}`} className={`${PartnerInfo[4].className}`} />
              <p>{`${PartnerInfo[4].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
              <img src={globeKeyLogo} alt='Logo for Sam Hahn Travel' style={{width: '100%', height: 'auto'}}/>
            </SwiperSlide>

          </Swiper>
        </Grid>


        <Grid xs={12} md={4} style={{marginBottom: '30px'}}>
          <Swiper
            style={{
               fontWeight: 'bold',
               width: '300px',
               height: '300px',
               position: 'relative',
               // left: '50%',
               // top: '50%',
               marginLeft: '',
               marginTop: '',
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
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide >
            <img src={`${PartnerInfo[5].image}`} alt={`${PartnerInfo[5].alt}`} className={`${PartnerInfo[5].className}`} style={{marginTop: '30px'}}/>
              <p>{`${PartnerInfo[5].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
            <img src={`${PartnerInfo[6].image}`} alt={`${PartnerInfo[6].alt}`} className={`${PartnerInfo[6].className}`} />
              <p>{`${PartnerInfo[6].description}`}</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src={`${PartnerInfo[7].image}`} alt={`${PartnerInfo[7].alt}`} className={`${PartnerInfo[7].className}`}/>
              <p>{`${PartnerInfo[7].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
            <img src={`${PartnerInfo[8].image}`} alt={`${PartnerInfo[8].alt}`} className={`${PartnerInfo[8].className}`} />
              <p>{`${PartnerInfo[8].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
            <img src={`${PartnerInfo[9].image}`} alt={`${PartnerInfo[9].alt}`} className={`${PartnerInfo[9].className}`} />
              <p>{`${PartnerInfo[9].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
              <img src={globeKeyLogo} alt='Logo for Sam Hahn Travel' style={{width: '100%', height: 'auto'}} />
            </SwiperSlide>
          </Swiper>
        </Grid>

        <Grid xs={12} md={4} style={{marginBottom: '30px'}}>
          <Swiper
            style={{
               fontWeight: 'bold',
               width: '300px',
               height: '300px',
               position: 'relative',
               // left: '50%',
               // top: '50%',
               marginLeft: '',
               marginTop: '',
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
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            

            <SwiperSlide>
              <img src={`${PartnerInfo[10].image}`} alt={`${PartnerInfo[10].alt}`} className={`${PartnerInfo[10].className}`}/>
              <p>{`${PartnerInfo[10].description}`}</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src={`${PartnerInfo[11].image}`} alt={`${PartnerInfo[11].alt}`} className={`${PartnerInfo[11].className}`}/>
              <p>{`${PartnerInfo[11].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
              <img src={`${PartnerInfo[12].image}`} alt={`${PartnerInfo[12].alt}`} className={`${PartnerInfo[12].className}`}/>
              <p>{`${PartnerInfo[12].description}`}</p>
            </SwiperSlide>

            <SwiperSlide >
              <img src={`${PartnerInfo[13].image}`} alt={`${PartnerInfo[13].alt}`} className={`${PartnerInfo[13].className}`} />
              <p>{`${PartnerInfo[13].description}`}</p>
            </SwiperSlide>


            <SwiperSlide >
              <img src={globeKeyLogo} alt='Logo for Sam Hahn Travel' style={{width: '100%', height: 'auto'}}/>
            </SwiperSlide>

          </Swiper>
        </Grid>

      </Grid>
  );
};

export default Partners;