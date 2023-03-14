import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import images
import globe from '../../assets/images/globe.png';
import keychain from '../../assets/images/keychain.png';
import luggage from '../../assets/images/luggage.png';

// import styles
import styles from './ServicesOffered.module.css';

// const ServiceCard = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   margin: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   backgroundColor: '#fbdecc',
//   // width: '30%',
// }));

const Services = () => {
  return (
    <section>
      <Grid container spacing={2} justifyContent="center" >
        <Grid xs={12}><h3 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '30px'}}>Services Offered</h3></Grid>
        <Grid xs={12} md={4} >
          <h4 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '18px'}}>Booking: Flight & Lodging</h4>
          <img src={globe} alt='globe icon' className={styles.globeIcon} sx={{ maxWidth: '100%' }}/>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '14px'}} >Air Only Service: $75</p>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '14px'}}>Reservation Management: Fees may apply</p>
        </Grid>
        <Grid xs={12} md={4}>
          <h4 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '18px'}}>Custom Itineraries</h4>
          <img src={keychain} alt='globe icon' className={styles.keychainIcon} sx={{ maxWidth: '100%' }} />
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '14px'}}>Personalized Plans: Starting at $300</p>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '14px'}}>Itinerary Management: Complimentary</p>
        </Grid>
        <Grid xs={12} md={4}>
          <h4 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '18px'}}>Group Getaways</h4>
          <img src={luggage} alt='globe icon' className={styles.luggageIcon} sx={{ maxWidth: '100%' }} />
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '14px'}}>Group Booking: Starting at $300</p>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '14px'}}>Itinerary Management: Complimentary</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default Services;