import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import Virtuoso from '../../assets/images/partner_logos/Virtuoso.png';

import styles from './BookHotel.module.css';

const BookHotel = () => {
  return (
    <Grid container justifyContent='center' textAlign='center' >
      <Grid xs={12}><h1>Book a hotel on your own and receive VIP perks!</h1></Grid>
      <Grid xs={12}><img src={Virtuoso} alt="" className={styles.virtuosoLogo} /></Grid>
      <Grid xs={12}><p>My clients receive exclusive perks with their hotel bookings through my partnership with Virtuoso. If you already know where you want to go and do not require my hotel matchmaking service, you can now make your own hotel reservations using the Virtuoso Hotel Booking Tool.</p></Grid>

      <Grid xs={12}><h2>Common Virtuoso Perks Include:</h2></Grid>
      <Grid xs={12}>
        <ul>
          <li>Complimentary Daily Breakfast</li>
          <li>$100+ Hotel Credit</li>
          <li>Priority for a Room Upgrade</li>
          <li>Early Check-in & Check-Out, if available</li>
        </ul>
      </Grid>
      <Grid xs={12}>
      <Button variant="contained" href='https://www.virtuoso.com/advisor/samhahn52221/travel/' target='_blank' size='small' style={{ backgroundColor: 'black'}}>
          Book Now
      </Button>
      </Grid>
    </Grid>
  );
};

export default BookHotel;