import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';

import frame from '../../assets/images/frame.png';

const ContactInfo = () => {
  return (
    <Grid container spacing={1} justifyContent='center'>
      <Grid xs={12} md={3}>
        <a href="tel:314-304-3196">
        <span style={{fontWeight: 'bolder', fontSize: '20px'}}>314-304-3196</span>
        </a>
      </Grid>
      <Grid xs={12} md={3}>
        <a 
          href='https://www.instagram.com/samhahntravelco/' 
          target='_blank' 
          rel='noreferrer' 
          className='footer-instagram-link' 
          aria-label='Link to Sam Hahn Travel Co Instagram'
        >
          <InstagramIcon style={{marginBottom: '-10px', fontSize: '30px', zIndex: 2, position: 'relative'}} />
        </a>  
      </Grid>
      <Grid xs={12} md={3}>
        <a href="mailto:sam@samhahntravel.com">
          <span style={{fontWeight: 'bold', fontSize: '20px'}}>sam@samhahntravel.com</span>
        </a>
      </Grid>

      <Grid xs={12}>
        <img src={frame} className='footer-logo' alt="Sam Hahn Travel Company logo" style={{width: '100px', height: 'auto', marginTop: '-70px', position: 'relative', zIndex: 1}} />
      </Grid>
      
    </Grid>
  );
};

export default ContactInfo;


