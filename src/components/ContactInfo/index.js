import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const ContactInfo = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid xs={12}>
        <h5>Contact Info</h5>
      </Grid>
      <Grid xs={6} md={3}>
        <p>Phone: 314-304-3196</p>
      </Grid>
      <Grid xs={6} md={3}>
        <a href="mailto:sam@samhahntravel.com">
          <p>Email: sam@samhahntravel.com</p>
        </a>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;

// make the email <p> a link to send an email 
// show example
// <a href="mailto:sam@samhahntravel.com "> 
