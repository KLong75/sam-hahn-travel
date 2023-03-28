import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import components
import ContactForm from '../../components/ContactForm';
import MailingListSignUp from '../../components/MailingListSignUp';
import ScheduleAppointment from '../../components/ScheduleAppointment';

// import images
// import boatMountains from '../../assets/images/boat-mountains.jpg';
// import boatsOnWater from '../../assets/images/blue-water.jpg'
// import pinkCar from '../../assets/images/pinkCarCuba.jpg';
// import bikeDream from '../assets/images/bike-dream.jpg';
// import bridgeHiker from '../assets/images/bridge-hiker.jpg';
// import textLogo from '../assets/images/text_name_logo.png';
// import landscapePic from '../assets/images/unsplash3.jpg'

// import utils
import { DisplayBox } from '../../utils/DisplayBox';

// import styles
// import styles from './Contact.module.css';


const Contact = () => {
  return (
    
    <Grid container spacing={6} justifyContent='center' textAlign='center' >
     
      <Grid xs={12} style={{ marginTop: '-40px'}}>
        <h1 className='nothing-you-could-do' style={{ fontSize: '42px'}}>Get In Touch</h1>
      </Grid>

      <Grid  xs={12} md={6} style={{ marginTop: '-80px'}} height=''>
        <DisplayBox elevation={6} >
          <ScheduleAppointment  />
          {/* <img src={boatMountains} alt='' style={{width: '90%', height: 'auto', marginTop: '', marginBottom: ''}}/> */}
        </DisplayBox>
        <DisplayBox elevation={6} >
          <MailingListSignUp />
          {/* <img src={boatsOnWater} alt='' style={{width: '90%', height: 'auto', marginTop: '', marginBottom: ''}}/> */}
        </DisplayBox>
      </Grid>
     
      <Grid xs={12} md={6} style={{ marginTop: '-80px'}}>
        <DisplayBox elevation={6}>
          <ContactForm />
          {/* <img src={pinkCar} alt='' style={{width: '90%', height: 'auto', marginTop: '', marginBottom: ''}}/> */}
        </DisplayBox>
      </Grid>
      
    </Grid>
    
  );
};

export default Contact;