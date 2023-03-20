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
    <footer style={{ backgroundColor: '#fbdecc'}}>
      <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: '10px'}}>
        <Grid xs={12} style={{marginTop: '10px', marginBottom: '-10px'}}><ContactInfo /></Grid>
        <Grid xs={12}><img src={textLogo} alt="text logo" className="text-logo" style={{width: '175px', height: '21px', marginTop: '-10px', marginBottom: ''}} /></Grid>
        <Grid xs={12} style={{marginTop: '-20px', marginBottom: '10px', fontSize: '18px'}}><span> ©2023 </span></Grid>
      </Grid>
    </footer>  
  )
}

export default Footer;