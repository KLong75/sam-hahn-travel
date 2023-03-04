import React from "react";
import { Link } from "react-router-dom";

// import from MUI
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; 
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import components
import GlobeKeyLogo from '../GlobeKeyLogo';

// import css
// import styles from './Header.module.css';

const Surface = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: '#fbdecc',
}));

const Header = () => {
  return (
   
    <header>
      <Surface elevation={6}>
       
       
        <Grid container spacing={2}>
        <Grid xs={12}><Link><GlobeKeyLogo /></Link></Grid>
        <Grid xs={1}></Grid>
        <Grid xs={2}><Link to="/">Home</Link></Grid>
        <Grid xs={2}><Link to="/about">About</Link></Grid>
        <Grid xs={2}><Link to="/contact">Contact</Link></Grid>
        
        <Grid xs={2}><Link to="/design-process">Design Process</Link></Grid>
        <Grid xs={2}><Link to="/book-hotel">Book A Hotel</Link></Grid>
        <Grid xs={1}></Grid>
       
        </Grid>
      
      </Surface>
    </header>
   
  );
}

export default Header;

