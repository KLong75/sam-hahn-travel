import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

import BookHotel from '../components/BookHotel';
import BookTour from '../components/BookTour';
// import BookTour from './BookTour/BookTour';

const SelfBooking = () => {
  return (
    
    <Grid container justifyContent='center' textAlign='center' >
    <Grid xs={12}><h2>Self Booking Resources</h2></Grid>
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