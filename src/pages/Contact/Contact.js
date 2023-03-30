import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import components
import ContactForm from '../../components/ContactForm';
import MailingListSignUp from '../../components/MailingListSignUp';
import ScheduleAppointment from '../../components/ScheduleAppointment';
import TextLogo from '../../components/TextLogo';

// import images
import thaiBoat from '../../assets/images/thaiBoat.jpg';
import groupSunset from '../../assets/images/groupSunset.jpg'

// import utils
import { DisplayBox } from '../../utils/DisplayBox';

// import styles
// import styles from './Contact.module.css';


const Contact = () => {
  return (
    
    <Grid container spacing={6} justifyContent='center' textAlign='center' >
     
      <Grid xs={12} style={{ marginTop: ''}}>
        <h1 className='nothing-you-could-do' style={{ fontSize: '60px', marginBottom: '0px'}}>Get In Touch</h1>
      </Grid>

      <TextLogo />

      <Grid  xs={12} md={6} style={{ marginTop: '-80px'}} height=''>
        <DisplayBox elevation={6} >
          <ScheduleAppointment  />
        </DisplayBox>
        <DisplayBox elevation={6} >
          <MailingListSignUp />
          <img src={groupSunset} alt='' style={{width: '90%', height: 'auto', marginTop: '', marginBottom: ''}}/>
        </DisplayBox>
      </Grid>
     
      <Grid xs={12} md={6} style={{ marginTop: '-80px'}}>
        <DisplayBox elevation={6}>
          <ContactForm />
          <img src={thaiBoat} alt='' style={{width: '90%', height: 'auto', marginTop: '', marginBottom: ''}}/>
        </DisplayBox>
      </Grid>
      
    </Grid>
    
  );
};

export default Contact;