import React from "react";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import ContactInfo from "../ContactInfo";
import PartnerLogos from "../PartnerLogos";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} justifyContent="center" textAlign='center'>
        <h1>Footer</h1>
        <Grid xs={12}><PartnerLogos /></Grid>
        <Grid xs={12}><ContactInfo /></Grid>
      </Grid>
    </footer>  
  )
}

export default Footer;