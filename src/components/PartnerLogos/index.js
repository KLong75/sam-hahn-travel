import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import styles
import styles from './PartnerLogos.module.css';

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


const PartnerLogos = () => {
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

export default PartnerLogos;