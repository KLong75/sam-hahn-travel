import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import components
import BookHotel from '../components/BookHotel';
import BookTour from '../components/BookTour';

// import images
import textLogo from '../assets/images/text_name_logo.png';



const SelfBooking = () => {
  return (
    
    <Grid container justifyContent='center' textAlign='center' >
      <Grid xs={12}>
        <img 
          src={textLogo} 
          alt="text logo" 
          className="text-logo" 
          style={{width: '526px', height: 'auto', maxWidth: '95%', marginBottom: '30px'}} 
        />
      </Grid>
      <Grid xs={12}>
        <h1>Self Booking Resources</h1>
      </Grid>
      <Grid xs={12} md={6}>
        <BookHotel />
      </Grid>
      <Grid xs={12} md={6}>
        <BookTour />
      </Grid>
    </Grid>
    
  );
};

export default SelfBooking;