import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

import ContactForm from '../components/ContactForm';
import MailingListSignUp from '../components/MailingListSignUp';
import ScheduleAppointment from '../components/ScheduleAppointment';

// import images
import textLogo from '../assets/images/text_name_logo.png';

const DisplayCard = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(2),
  margin: theme.spacing(4),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  backgroundColor: '#fbdecc',
  // opacity: '0.8',
}));

const Contact = () => {
  return (
    
    <Grid container spacing={6} justifyContent='center' textAlign='center' >
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
      <Grid xs={2}></Grid>
    
      <Grid xs={12} md={6}>
        <DisplayCard elevation={6}>
        <ScheduleAppointment />
        </DisplayCard>
      </Grid>

      <Grid xs={2}></Grid>

      

      <Grid  xs={12} md={6} style={{ marginTop: ''}}>
      <DisplayCard elevation={6}>
        <MailingListSignUp />
        </DisplayCard>
      </Grid>
     
      <Grid xs={12} md={6} style={{ marginTop: ''}}>
      <DisplayCard elevation={6}>
        <ContactForm />
        </DisplayCard>
      </Grid>
      
    </Grid>
    
  );
};

export default Contact;