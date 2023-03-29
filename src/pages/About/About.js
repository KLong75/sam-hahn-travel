import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';



// import Gallery from '../components/Gallery';

import samPic from  '../../assets/images/sam_pic_crop.jpg';
// import textLogo from '../assets/images/text_name_logo.png';
// import frame from '../../assets/sam_logos/frame.png';

import { DisplayBox } from '../../utils/DisplayBox';

// import styles
import styles from './About.module.css';

const About = () => {
  return (
    <>
    <Grid container spacing={1} alignItems='center'  textAlign='center' >
    
      <Grid xs={12}>
        <h1 className={`nothing-you-could-do  ${styles.aboutHeadline}`} style={{fontSize: '80px'}}>Hi, I'm Sam.</h1>
      </Grid>

      {/* <Grid xs={12}>
        <img src={frame} alt='Sam Hahn' style={{width: '100%', height: 'auto', marginTop: '', marginBottom: ''}}/>
      </Grid> */}

    </Grid>

    <Grid container spacing={1} alignItems='center'  textAlign='' >
      <Grid xs={12} md={12} lg={6} textAlign=''>
        <DisplayBox elevation={6} style={{ fontSize: '20px', fontWeight: 'bold'}}>

        <p
          className={styles['aboutParagraph'] }
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            I provide clients with singular experiences that reflect their unique lifestyles and personalities.
        </p>

        <p 
          className={styles['aboutParagraph'] }
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            My partnerships and experience enable you to discover and appreciate the culture of a destination with the added bonus of VIP perks and comfort.
        </p>

        <p 
          className={styles['aboutParagraph'] }
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            I started Sam Hahn Travel to bring the far corners of the world just a little bit closer. Creating authentic experience and making memories through travel is my passion. I love sharing insight, smoothing wrinkles, and amplifying itineraries to make the process amazing. 
        </p>

        <p
          className={styles['aboutParagraph'] }
          style={{marginTop: '10px', marginBottom: '20px', marginLeft: '40px', marginRight: '30px'}}>
            If you are looking to take your personal or professional travel to the next level, I can help. By working with carefully selected travel partners around the globe, I can assure my clients that they’ll be comfortable and supported while enjoying the experience of a new or long-beloved destination. 
        </p>
        </DisplayBox>
        
      </Grid>

      <Grid xs={12} md={12} lg={6} sx={{ textAlign: 'center' }} >
        <DisplayBox elevation={6}>
          <img src={samPic} alt='Sam Hahn' style={{width: '70%', height: 'auto', marginTop: '20px', marginBottom: '15px'}}/>
        </DisplayBox>
      </Grid>
      
    </Grid>
    </>
  );
};

export default About;