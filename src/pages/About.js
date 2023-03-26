import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';

// import Gallery from '../components/Gallery';

import samPic from  '../assets/images/sam_pic_crop.jpg';
// import textLogo from '../assets/images/text_name_logo.png';

import { DisplayBox } from '../utils/DisplayBox';

const About = () => {
  return (
    <>
    <Grid container spacing={1} alignItems='center'  textAlign='center' >
      {/* <Grid xs={12}>
        <img 
          src={textLogo} 
          alt="Sam Hahn Travel text logo" className="text-logo" 
          style={{
            width: '526px', 
            height: 'auto', 
            maxWidth: '95%',
          }} 
        />
      </Grid> */}
      <Grid xs={12}>
        <h1 className='nothing-you-could-do' style={{fontSize: '42px'}}>Hi, I'm Sam.</h1>
      </Grid>

    </Grid>

    <Grid container spacing={1} alignItems='center'  textAlign='' >
      <Grid xs={12} md={6} textAlign=''>
        <DisplayBox elevation={6} style={{ fontSize: '18px', fontWeight: 'bold'}}>
        {/* <h1 className='nothing-you-could-do' style={{marginLeft: '40px', marginTop: '10px'}} >Hi, I'm Sam.</h1> */}

        <p 
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            I provide clients with singular experiences that reflect their unique lifestyles and personalities.
        </p>

        <p 
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            My partnerships and experience enable you to discover and appreciate the culture of a destination with the added bonus of VIP perks and comfort.
        </p>

        <p 
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            I started Sam Hahn Travel to bring the far corners of the world just a little bit closer. Creating authentic experience and making memories through travel is my passion. I love sharing insight, smoothing wrinkles, and amplifying itineraries to make the process amazing. 
        </p>

        <p 
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            If you are looking to take your personal or professional travel to the next level, I can help. By working with carefully selected travel partners around the globe, I can assure my clients that they’ll be comfortable and supported while enjoying the experience of a new or long-beloved destination. 
        </p>
        </DisplayBox>
      </Grid>
      
      <Grid xs={12} md={6} sx={{ textAlign: 'center' }} >
        <img src={samPic} alt='Sam Hahn' style={{width: '357px', height: '505px', marginTop: '20px', marginBottom: '15px'}}/>
      </Grid>
    </Grid>
    </>
  );
};

export default About;