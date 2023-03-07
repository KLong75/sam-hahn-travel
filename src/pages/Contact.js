import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

import ContactForm from '../components/ContactForm';
import MailingListSignUp from '../components/MailingListSignUp';

const Contact = () => {
  return (
    <Grid container justifyContent='center' textAlign='center'>
    <Grid xs={12}><h1>Get In Touch</h1></Grid>
      <Grid xs={12} md={6}><ContactForm /></Grid>
      <Grid xs={12} md={6}><MailingListSignUp /></Grid>
    </Grid>
  );
};

export default Contact;