import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import components
import Services from '../components/ServicesOffered';

const Home = () => {
  return (
      <Grid container spacing={1} justifyContent='center' textAlign='center'>
        <Grid xs={12}><h1>Unlock Inspired Travel</h1></Grid>
        <Grid xs={12}><h2>The Value of a Travel Designer</h2></Grid>
        <Grid xs={12} md={6} >
          <h3>Customized Service</h3>
          <p>Every journey can be made uniquely yours with a trusted professional who understands you as well as the places you are going. I will match you with the right combination of pace, trusted outfitters, lodging partners, and local experiences.</p>
        </Grid>

        <Grid xs={12} md={6}>
          <h3>Time and Ease</h3>
          <p>Your vacation starts at the planning stage when you leave the heavy lifting and time-consuming research to an expert who will deliver curated options aligned with your personal values, schedule, and expectations.</p>
        </Grid>
        <Services />
      </Grid>
  
      
    
  );
};

export default Home;