import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import InstagramFeed from '../components/InstagramFeed';

import samPic from  '../assets/images/sam_pic.jpg';


const About = () => {
  return (
    // <Grid container spacing={1} textAlign='left' alignItems='center' style={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container spacing={1} textAlign='left' alignItems='center' >
      <Grid xs={12} md={6}>
        <h1>Hi, I'm Sam.</h1>

        <p>I provide clients with singular experiences that reflect their unique lifestyles and personalities.</p>

        <p>My partnerships and experience enable you to discover and appreciate the culture of a destination with the added bonus of VIP perks and comfort.</p>

        <p>I started Sam Hahn Travel to bring the far corners of the world just a little bit closer. Creating authentic experience and making memories through travel is my passion. I love sharing insight, smoothing wrinkles, and amplifying itineraries to make the process amazing. </p>

        <p>If you are looking to take your personal or professional travel to the next level, I can help. By working with carefully selected travel partners around the globe, I can assure my clients that they’ll be comfortable and supported while enjoying the experience of a new or long-beloved destination. </p>
      </Grid>
      <Grid xs={12} md={6} sx={{ textAlign: 'center' }} >
        <img src={samPic} alt='Sam Hahn' style={{width: '375px', height: '563px'}}/>
      </Grid>
      <Grid xs={12}>
        <InstagramFeed />
      </Grid>
    </Grid>
  );
};

export default About;