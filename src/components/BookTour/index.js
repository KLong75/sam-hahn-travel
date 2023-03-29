import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import Context from '../../assets/partner_logos/ContextTravel.png';
import globeLogo from '../../assets/sam_logos/globe.png';
import tourPic from '../../assets/images/tourPic.jpg';

const BookTour = () => {
  return (
    <Grid container justifyContent='center' textAlign='center'>
      <Grid xs={12}>
        <h2 className='nothing-you-could-do' style={{fontSize: '48px', marginTop: '0px'}}>TOURS</h2>
      </Grid>
      <Grid xs={12}> 
        <img src={globeLogo} alt="globe logo" style={{width: '60%', height: 'auto', marginTop: '-140px', marginBottom: '-90px'}} />
      </Grid>
      <Grid xs={12}>
        <h3 style={{marginTop: '10px', marginBottom: '0'}}>Experience the World with Leading Experts</h3>
      </Grid>
      <Grid xs={12} style={{margin: '19px'}}>
        <a href='https://www.contexttravel.com/?ref=HAHN' target='_blank' rel='noreferrer'>
          <img src={Context} alt="Context Travel Logo" style={{width: '301px', height: 'auto', maxWidth: '100%'}} />
        </a>
      </Grid>
      <Grid xs={12} textAlign='left'>
        <p style={{margin: '20px', fontSize: '18px'}} >"Personal Tours for the Intentional Traveler" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Tempor orci dapibus ultrices in iaculis nunc sed augue.
        </p>
      </Grid>
      <Grid xs={12}>
        <h2 style={{margin: '-10px'}}>Featuring:</h2>
      </Grid>
      <Grid xs={12} style={{fontSize: '18px', fontWeight: 'bold'}}>
        <ul>
          <li>Private Tours</li>
          <li>Small Group Tours</li>
          <li>Excursions & Day Trips</li>
          <li>Tours for Kids</li>
        </ul>
      </Grid>
      <Grid xs={12}>
        <Button 
          variant="contained" 
          href='https://www.contexttravel.com/?ref=HAHN' 
          target='_blank' 
          size='small' 
          style={{ backgroundColor: 'black', marginTop: '-20px', marginBottom: '30px'}}>
          Book Tour Now
        </Button>
        <img src={tourPic} alt="dominican hotel" style={{width: '100%', height: 'auto'}} />
      </Grid>
    </Grid>
  );
};

export default BookTour;