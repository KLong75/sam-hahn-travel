import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

// import components
import Services from '../components/ServicesOffered';

// import images
// import textLogo from '../assets/images/text_name_logo.png';
// import inspiredBackground from '../assets/images/unsplash.jpg';
// import coverPic from '../assets/images/sam_cover_pic.jpg';

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
      spacing={1} 
      justifyContent='center' 
      textAlign='center' 
      style={{ 
        // backgroundImage: `url(${coverPic})`, 
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // height: '100vh',
      }}
    >

      {/* <Grid xs={12}>
        <img 
          src={textLogo} 
          alt='text logo' 
          className='text-logo'
          style={{
            width: '526px', 
            height: 'auto', 
            maxWidth: '95%',
            // marginTop: '20px',
           
          }} 
        />
      </Grid> */}

      <Grid xs={12} >
        <h1 
          className='nothing-you-could-do home-headline' 
          style={{
            fontSize: '90px',
            fontWeight: 'bolder',
            // marginTop: '-330px'
          }}
          >Unlock Inspired Travel
        </h1>
      </Grid>

    </Grid>

    <Grid container spacing={2} justifyContent='center' textAlign='center' style={{ backGroundColor: '#7a6f6f'}}>

      <Grid xs={12}>
        <h2 className='nothing-you-could-do home-sub-headline' style={{fontSize: '42px', fontWeight: 'bolder', marginTop: ''}}>Discover the Value of a Travel Designer</h2>
      </Grid>

      <Grid xs={12} md={6} >
        <DisplayCard elevation={6}>
          <h3 style={{fontWeight: 'bolder', color: 'black', fontSize: '32px', marginBottom: '-10px', marginTop: '0px', textDecoration: 'underline'}}>Customized Service</h3>
          <p 
            style={{margin: '18px', fontWeight: 'bolder', fontSize: '24px', textAlign: 'left'}}>
              Every journey can be made uniquely yours with a trusted professional who understands you as well as the places you are going. I will match you with the right combination of pace, trusted outfitters, lodging partners, and local experiences.
          </p>
        </DisplayCard>
      </Grid>

      <Grid xs={12} md={6}>
        <DisplayCard elevation={6}>
          <h3 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '32px', marginBottom: '-10px', marginTop: '0px', textDecoration: 'underline'}}>Time and Ease</h3>
          <p 
            style={{margin: '18px', fontWeight: 'bolder', fontSize: '24px', textAlign: 'left'}} >
            Your vacation starts at the planning stage when you leave the heavy lifting and time-consuming research to an expert who will deliver curated options aligned with your personal values, schedule, and expectations.
          </p>
        </DisplayCard>
      </Grid>

      <Grid xs={12} style={{ marginBottom: '20px'}}>
        <Services />
      </Grid>

    </Grid>
    </>
  );
};

export default Home;