import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

const PartnerDetails = [
  {
    name: 'Belmond Bellini',
    image: BelmondBellini,
    alt: 'Belmond Bellini',
    className: styles.belmondBelliniLogo,
    description: 'description text',
  },
  {
    name: 'Belmond',
    image: Belomond,
    alt: 'Belmond',
    className: styles.belmondLogo,
    description: 'description text',
  },
  {
    name: 'Diamond',
    image: Diamond,
    alt: 'Diamond',
    className: styles.diamondLogo,
    description: 'description text',
  },
  {
    name: 'Four Seasons',
    image: FourSeasons,
    alt: 'Four Seasons',
    className: styles.fourSeasonsLogo,
    description: 'description text',
  },
  {
    name: 'Hyatt Prive',
    image: HyattPrive,
    alt: 'Hyatt Prive',
    className: styles.hyattPriveLogo,
    description: 'description text',
  },
  {
    name: 'In The Know',
    image: InTheKnow,
    alt: 'In The Know',
    className: styles.inTheKnowLogo,
    description: 'description text',
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
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
      
    </Grid>

  );
};



export default Partners;