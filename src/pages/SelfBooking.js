import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import components
import BookHotel from '../components/BookHotel';
import BookTour from '../components/BookTour';

// import images
// import textLogo from '../assets/images/text_name_logo.png';

import { DisplayBox } from '../utils/DisplayBox';

const SelfBooking = () => {
  return (
    
    <Grid container justifyContent='center' textAlign='center' spacing={4} >
      {/* <Grid xs={12}>
        <img 
          src={textLogo} 
          alt="text logo" 
          className="text-logo" 
          style={{width: '526px', height: 'auto', maxWidth: '95%', marginBottom: '20px'}} 
        />
      </Grid> */}
      <Grid xs={12}>
        <h1 className='nothing-you-could-do' style={{fontSize: '42px'}}>Self Booking Resources</h1>
      </Grid>
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