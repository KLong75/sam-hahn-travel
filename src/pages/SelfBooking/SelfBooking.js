import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import components
import BookHotel from '../../components/BookHotel';
import BookTour from '../../components/BookTour';
import TextLogo from '../../components/TextLogo';

// import images

// import styles
// import styles from './SelfBooking.module.css';

import { DisplayBox } from '../../utils/DisplayBox';

const SelfBooking = () => {
  return (
    
    <Grid container justifyContent='center' textAlign='center' spacing={4} >
  
      <Grid xs={12}>
        <h1 className='nothing-you-could-do' style={{fontSize: '60px', marginTop: '', marginBottom: ''}}>Self Booking Resources</h1>
      </Grid>

      <TextLogo />

      <Grid xs={12} md={6}>
        <DisplayBox elevation={6} style={{height: 'auto'}}>
          <BookHotel />
        </DisplayBox>
      </Grid>

      <Grid xs={12} md={6}>
        <DisplayBox elevation={6} style={{height: 'auto'}}>
         <BookTour />
        </DisplayBox>
      </Grid>

    </Grid>
    
  );
};

export default SelfBooking;