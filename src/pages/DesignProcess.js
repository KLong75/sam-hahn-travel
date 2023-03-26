import React from 'react';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import styles

// import components
import Partners from "../components/Partners";

// import images
// import textLogo from '../assets/images/text_name_logo.png';

const DesignProcess = () => {
  return (
    <Grid container justifyContent='center' textAlign='center' >
    
      {/* <Grid xs={12}>
        <img 
          src={textLogo} 
          alt="text logo" 
          className="text-logo" 
          style={{
            width: '526px', 
            height: 'auto', 
            maxWidth: '95%',
            marginBottom: '30px'
          }} 
        />
      </Grid> */}

      <Grid xs={12}>
        <h1 className='nothing-you-could-do' style={{ fontSize: '42px'}}>How It Works</h1>
      </Grid>
      <Grid xs={12}>
     
      </Grid>

      <Partners />

    </Grid>
  );
};

export default DesignProcess;