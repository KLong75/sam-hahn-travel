import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

import ContactForm from '../components/ContactForm';
import MailingListSignUp from '../components/MailingListSignUp';

// import images
import textLogo from '../assets/images/text_name_logo.png';

const Contact = () => {
  return (
    
    <Grid container justifyContent='center' textAlign='center' >
      <Grid xs={12}>
        <img 
          src={textLogo} 
          alt="Sam Hahn Travel text logo" className="text-logo" 
          style={{
            width: '526px', 
            height: 'auto', 
            maxWidth: '95%',
            marginBottom: '30px'}} />
    </Grid>
    <Grid xs={12}><h1>Get In Touch</h1></Grid>
      <Grid xs={12} md={6}><ContactForm /></Grid>
      <Grid xs={12} md={6}><MailingListSignUp /></Grid>
    </Grid>
    
  );
};

export default Contact;