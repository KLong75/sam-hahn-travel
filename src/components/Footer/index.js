import React from "react";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import ContactInfo from "../ContactInfo";
// import Partners from "../Partners";

// import images
 import textLogo from "../../assets/images/text_name_logo.png";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: '40px'}}>
        <Grid xs={12} style={{marginTop: '10px', marginBottom: '-20px'}}><ContactInfo /></Grid>
        <Grid xs={12} style={{marginBottom: '-10px'}}><span> ©2023 </span></Grid>
        <Grid xs={12}><img src={textLogo} alt="text logo" className="text-logo" style={{width: '175px', height: '21px', marginTop: '0px', marginBottom: '10px'}} /></Grid>
      </Grid>
    </footer>  
  )
}

export default Footer;