import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

// import components
import Services from '../../components/ServicesOffered';

// import images
// import textLogo from '../assets/images/text_name_logo.png';
import pinkBlueLandscape from '../../assets/images/unsplash.jpg';
import planeView from '../../assets/images/planeView.jpg';
import Italy from '../../assets/images/Italy.jpg';
// import coverPic from '../../assets/images/sam_cover_pic.jpg';

// import styles
import styles from './Home.module.css';

const DisplayCard = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  backgroundColor: '#fbdecc',
  // opacity: '0.8',
}));

const Home = () => {
  return (
    <>  
    <Grid container 
      className='container' 
      spacing={0} 
      justifyContent='center' 
      textAlign='center' 
      style={{ 
        // backgroundImage: `url(${coverPic})`, 
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // height: '50vh',
      }}
    >

      <Grid xs={12} >
        <h1 
          className='nothing-you-could-do home-headline' 
          style={{
            fontSize: '90px',
            fontWeight: 'bolder',
            zIndex: '2',
            position: 'relative',
            marginTop: '20px',
            marginBottom: '-150px',
          
          }}
          >Unlock Inspired Travel
        </h1>
      </Grid>

      <Grid xs={12} >
        <img src={pinkBlueLandscape} alt='cover pic' style={{width: '100%', height: 'auto', marginTop: '0px'}} />
      </Grid>

    </Grid>

    <Grid container spacing={0} justifyContent='center' textAlign='center' style={{ backGroundColor: '#7a6f6f'}}>

      <Grid xs={12}>
        <h2 className={`nothing-you-could-do home-sub-headline ${styles.homeSubHeadline}`} style={{fontSize: '42px', fontWeight: 'bolder', marginBottom: '0px'}}>The Value of a Travel Designer</h2>
      </Grid>

      <Grid xs={12} md={6} >
        <DisplayCard elevation={6}>
          <h3 style={{fontWeight: 'bolder', color: 'black', fontSize: '32px', marginBottom: '-10px', marginTop: '0px', textDecoration: ''}} className={styles['homePHeadline']}>Customized Service</h3>
          <p 
            className={styles['home-paragraph'] }
            style={{margin: '18px', fontWeight: 'bolder', fontSize: '24px', textAlign: 'left'}}>
              Every journey can be made uniquely yours with a trusted professional who understands you as well as the places you are going. I will match you with the right combination of pace, trusted outfitters, lodging partners, and local experiences.
          </p>
          <img src={planeView} alt='plane view' style={{width: '100%', height: 'auto', marginTop: '0px'}} />
        </DisplayCard>
      </Grid>

      <Grid xs={12} md={6}>
        <DisplayCard elevation={6}>
          <h3 className={styles['homePHeadline']} style={{fontWeight: 'bolder', color: 'black', fontSize: '32px', marginBottom: '-10px', marginTop: '0px', textDecoration: ''}}>Time and Ease</h3>
          <p
            className={styles['home-paragraph']}
            style={{margin: '18px', fontWeight: 'bolder', fontSize: '24px', textAlign: 'left'}} >
            Your vacation starts at the planning stage when you leave the heavy lifting and time-consuming research to an expert who will deliver curated options aligned with your personal values, schedule, and expectations.
          </p>
          <img src={Italy} alt='Italy' style={{width: '100%', height: 'auto', marginTop: '0px'}} />
        </DisplayCard>
      </Grid>

      <Grid xs={12} style={{ marginTop: '-20px', marginBottom: '20px'}}>
        <Services />
      </Grid>

    </Grid>
    </>
  );
};

export default Home;