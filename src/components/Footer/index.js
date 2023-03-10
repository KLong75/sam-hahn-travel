import React from "react";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import ContactInfo from "../ContactInfo";
// import Partners from "../Partners";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} justifyContent="center" textAlign='center'>
        <Grid xs={12}><ContactInfo /></Grid>
      </Grid>
    </footer>  
  )
}

export default Footer;