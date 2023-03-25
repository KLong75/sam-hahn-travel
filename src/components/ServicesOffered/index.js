import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

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

const ServiceCard = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  backgroundColor: '#fbdecc',
  // opacity: '0.8',
  // height: '80%'
  
}));

const Services = () => {
  return (
    <section>
      <Grid container spacing={2} textAlign='center'>
        <Grid xs={12}>
          {/* <ServiceCard elevation={6}> */}
          <h3 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '32px', textDecoration: 'underline', marginBottom: '-20px'}}>
            Services Offered
          </h3>
          {/* </ServiceCard> */}

        </Grid>

        <Grid xs={12} md={4} >
          <ServiceCard elevation={6}>
          <h4 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '24px', marginBottom: '-10px', marginTop: '10px' }}>Booking: Flight & Lodging</h4>
          <img src={globe} alt='globe icon' className={styles.globeIcon} sx={{ maxWidth: '100%' }} style={{ marginBottom: '-30px'}}/>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '20px' }} >Air Only Service: $75</p>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '20px', marginBottom: '' }}>Reservation Management: Fees may apply</p>
          </ServiceCard>
        </Grid>

        <Grid xs={12} md={4}>
        <ServiceCard elevation={6}>
          <h4 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '24px', marginBottom: '-10px', marginTop: '10px' }}>Custom Itineraries</h4>
          <img src={keychain} alt='globe icon' className={styles.keychainIcon} sx={{ maxWidth: '100%' }} style={{ marginBottom: '-30px'}} />
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Personalized Plans: Starting at $300</p>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Itinerary Management: Complimentary</p>
          </ServiceCard>
        </Grid>

        <Grid xs={12} md={4}>
          <ServiceCard elevation={6}>
          <h4 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '24px', marginBottom: '-10px', marginTop: '10px' }}>Group Getaways</h4>
          <img src={luggage} alt='globe icon' className={styles.luggageIcon} sx={{ maxWidth: '100%' }} style={{ marginBottom: '-30px' }}/>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Group Booking: Starting at $300</p>
          <p style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Itinerary Management: Complimentary</p>
          </ServiceCard>
        </Grid>
        
      </Grid>
    </section>
  );
};

export default Services;