import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactInfo = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid xs={12} md={3}>
        <a href="tel:314-304-3196">
        <span style={{fontWeight: 'bold'}}>314-304-3196</span>
        </a>
      </Grid>
      <Grid xs={12} md={3}>
        <a 
          href='https://www.instagram.com/samhahntravelco/' 
          target='_blank' 
          rel='noreferrer' 
          className='footer-instagram-link' 
          aria-label='Link to Sam Hahn Travel Co Instagram'>
          <InstagramIcon />
        </a>  
      </Grid>
      <Grid xs={12} md={3}>
        <a href="mailto:sam@samhahntravel.com">
          <span style={{fontWeight: 'bold'}}>sam@samhahntravel.com</span>
        </a>
      </Grid>
      
    </Grid>
  );
};

export default ContactInfo;


