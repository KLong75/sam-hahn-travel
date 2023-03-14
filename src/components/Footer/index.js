import React from "react";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import ContactInfo from "../ContactInfo";
// import Partners from "../Partners";

// import images
 import textLogo from "../../assets/images/text_name_logo_crop.png";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} justifyContent="center" textAlign='center'>
        <Grid xs={12}>
          <img src={textLogo} alt="text logo" className="text-logo" style={{width: '175px', height: '21px', marginBottom: '-40px'}} />
        </Grid>
        <Grid xs={12}><ContactInfo /></Grid>
      </Grid>
    </footer>  
  )
}

export default Footer;