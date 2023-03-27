import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import components
import ContactForm from '../components/ContactForm';
import MailingListSignUp from '../components/MailingListSignUp';
import ScheduleAppointment from '../components/ScheduleAppointment';

// import images
import boatMountains from '../assets/images/boat-mountains.jpg';
// import bikeDream from '../assets/images/bike-dream.jpg';
// import bridgeHiker from '../assets/images/bridge-hiker.jpg';
// import textLogo from '../assets/images/text_name_logo.png';
// import landscapePic from '../assets/images/unsplash3.jpg'

// import utils
import { DisplayBox } from '../utils/DisplayBox';

// const DisplayCard = styled(Paper)(({ theme }) => ({
//   // ...theme.typography.body2,
//   // padding: theme.spacing(2),
//   margin: theme.spacing(4),
//   textAlign: 'center',
//   // color: theme.palette.text.secondary,
//   backgroundColor: '#fbdecc',
//   // opacity: '0.8',
// }));

const Contact = () => {
  return (
    
    <Grid container spacing={6} justifyContent='center' textAlign='center' >
      {/* <Grid xs={12}>
        <img 
          src={textLogo} 
          alt="Sam Hahn Travel text logo" className="text-logo" 
          style={{
            width: '526px', 
            height: 'auto', 
            maxWidth: '95%',
            marginBottom: '0px'}} />
      </Grid> */}
      <Grid xs={12} style={{ marginTop: '-40px'}}>
        <h1 className='nothing-you-could-do' style={{ fontSize: '42px'}}>Get In Touch</h1>
      </Grid>

      {/* <Grid xs={0} md={3} style={{ marginTop: '-40px'}}></Grid>
    
      <Grid xs={12} md={4} style={{ marginTop: '-40px'}} height=''>
        <DisplayBox elevation={6} width=''>
          <ScheduleAppointment  />
        </DisplayBox>
      </Grid>

      <Grid xs={0} md={3} style={{ marginTop: '-60px'}}></Grid> */}

      <Grid  xs={12} md={6} style={{ marginTop: '-80px'}} height=''>
        <DisplayBox elevation={6} >
          <ScheduleAppointment  />
          <img src={boatMountains} alt='' style={{width: '90%', height: 'auto', marginTop: '', marginBottom: ''}}/>

        </DisplayBox>
        <DisplayBox elevation={6} >
          <MailingListSignUp />
        </DisplayBox>
      </Grid>
     
      <Grid xs={12} md={6} style={{ marginTop: '-80px'}}>
        <DisplayBox elevation={6}>
          <ContactForm />
        </DisplayBox>
      </Grid>

      {/* <Grid xs={12} md={6} style={{ marginTop: ''}}  >
        <img src={landscapePic} alt='' style={{width: '500px', height: '369px', marginTop: '', marginBottom: ''}}/>
      </Grid> */}
      
    </Grid>
    
  );
};

export default Contact;