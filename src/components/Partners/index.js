import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import styles
import styles from './Partners.module.css';

// import images
import BelmondBellini from '../../assets/images/partner_logos/Belmond_Bellini.png';
import Belomond from '../../assets/images/partner_logos/Belmond_new.png';
import Diamond from '../../assets/images/partner_logos/Diamond.png';
import FourSeasons from '../../assets/images/partner_logos/FourSeasons.png';
import HyattPrive from '../../assets/images/partner_logos/HyattPrive.png';
import InTheKnow from '../../assets/images/partner_logos/InTheKnow.png';
import Jumeriah from '../../assets/images/partner_logos/Jumeriah.png';
import Mandarin from '../../assets/images/partner_logos/Mandarin.png';
import MarriottStars from '../../assets/images/partner_logos/MarriottStars_new.png';
import OetkerCollection from '../../assets/images/partner_logos/OetkerCollection.png';
import Relais from '../../assets/images/partner_logos/Relais.png';
import Rosewood from '../../assets/images/partner_logos/Rosewood.png';
import Virtuoso from '../../assets/images/partner_logos/Virtuoso.png';

const partnerDetails = [
  {
    name: 'Belmond Bellini',
    image: BelmondBellini,
    alt: 'Belmond Bellini',
    className: styles.belmondBelliniLogo,
  },
  {
    name: 'Belmond',
    image: Belomond,
    alt: 'Belmond',
    className: styles.belmondLogo,
  },
  {
    name: 'Diamond',
    image: Diamond,
    alt: 'Diamond',

    className: styles.diamondLogo,
  },
  {
    name: 'Four Seasons',
    image: FourSeasons,
    alt: 'Four Seasons',
    className: styles.fourSeasonsLogo,
  },
  {
    name: 'Hyatt Prive',
    image: HyattPrive,
    alt: 'Hyatt Prive',
    className: styles.hyattPriveLogo,
  },
  {
    name: 'In The Know',
    image: InTheKnow,
    alt: 'In The Know',
    className: styles.inTheKnowLogo,
  },
  {
    name: 'Jumeriah',
    image: Jumeriah,
    alt: 'Jumeriah',
    className: styles.jumeriahLogo,
    description: 'Jumeriah',
  },
  {
    name: 'Mandarin',
    image: Mandarin,
    alt: 'Mandarin',
    className: styles.mandarinLogo,
    description: 'Mandarin',
  },
  {
    name: 'Marriott Stars',
    image: MarriottStars,
    alt: 'Marriott Stars',
    className: styles.marriottStarsLogo,
    description: 'Marriott Stars',
  },
  {
    name: 'Oetker Collection',
    image: OetkerCollection,
    alt: 'Oetker Collection',
    className: styles.oetkerCollectionLogo,
    description: 'Oetker Collection',
  },
  {
    name: 'Relais',
    image: Relais,
    alt: 'Relais',
    className: styles.relaisLogo,
    description: 'Relais',
  },
  {
    name: 'Rosewood',
    image: Rosewood,
    alt: 'Rosewood',
    className: styles.rosewoodLogo,
    description: 'Rosewood',
  },
  {
    name: 'Virtuoso',
    image: Virtuoso,
    alt: 'Virtuoso',
    className: styles.virtuosoLogo,
    description: 'Virtuoso',
  },
];

const Partners = () => {
  return (
    <Grid container spacing={2} justifyContent="center" textAlign='center'>
      <img src={BelmondBellini} alt="" className={styles.belmondBelliniLogo} />
      <img src={Belomond} alt="" className={styles.belmondLogo} />
      <img src={Diamond} alt="" className={styles.diamondLogo} />
      <img src={FourSeasons} alt="" className={styles.fourSeasonsLogo} />
      <img src={HyattPrive} alt="" className={styles.hyattPriveLogo} />
      <img src={InTheKnow} alt="" className={styles.inTheKnowLogo} />
      <img src={Jumeriah} alt="" className={styles.jumeriahLogo} />
      <img src={Mandarin} alt="" className={styles.mandarinLogo} />
      <img src={MarriottStars} alt="" className={styles.marriottStarsLogo} />
      <img src={OetkerCollection} alt="" className={styles.oetkerCollectionLogo} />
      <img src={Relais} alt="" className={styles.relaisLogo} />
      <img src={Rosewood} alt="" className={styles.rosewoodLogo} />
      <img src={Virtuoso} alt="" className={styles.virtuosoLogo} />
      
    </Grid>
  );
};

export default Partners;