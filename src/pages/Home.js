import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import components
import Services from '../components/ServicesOffered';

// import images
import textLogo from '../assets/images/text_name_logo.png';
// import inspiredBackground from '../assets/images/unsplash.jpg';

// const ServiceCard = styled(Paper)(({ theme }) => ({
//   // ...theme.typography.body2,
//   padding: theme.spacing(2),
//   margin: theme.spacing(1),
//   textAlign: 'center',
//   // color: theme.palette.text.secondary,
//   backgroundColor: '#fbdecc',
//   // opacity: '0.8',
//   // width: '30%',
// }));

const Home = () => {
  return (
      <Grid container className='container' spacing={1} justifyContent='center' textAlign='center'  >
        <Grid xs={12}>
          <img 
            src={textLogo} 
            alt='text logo' 
            className='text-logo'
            style={{
              width: '526px', 
              height: 'auto', 
              maxWidth: '95%'
            }} 
          />
       
        </Grid>
        <Grid xs={12} style={{marginBottom: ''}}><h1 className='nothing-you-could-do' style={{fontSize: '80px'}}>Unlock Inspired Travel</h1></Grid>
        <Grid xs={12}><h2 className='' style={{fontSize: '36px'}}>Discover the Value of a Travel Designer</h2></Grid>
        
        <Grid xs={12} md={6} >
        
          <h3 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '30px'}}>Customized Service</h3>
          <p 
            style={{margin: '18px', fontWeight: '', fontSize: '20px', textAlign: 'left'}}>
              Every journey can be made uniquely yours with a trusted professional who understands you as well as the places you are going. I will match you with the right combination of pace, trusted outfitters, lodging partners, and local experiences.
          </p>

          
         
        </Grid>
        
        <Grid xs={12} md={6}>
        
          <h3 className='' style={{fontWeight: 'bolder', color: 'black', fontSize: '30px'}}>Time and Ease</h3>
          <p 
            style={{margin: '18px', fontWeight: '', fontSize: '20px', textAlign: 'left'}} >
              Your vacation starts at the planning stage when you leave the heavy lifting and time-consuming research to an expert who will deliver curated options aligned with your personal values, schedule, and expectations.
          </p>
          
        </Grid>
        <Grid xs={12} style={{ marginBottom: '20px'}}>
          <Services />
        </Grid>
      </Grid>
  );
};

export default Home;