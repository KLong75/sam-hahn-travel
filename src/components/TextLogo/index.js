// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import images
import textLogo from '../../assets/sam_logos/text_name_logo.png';

const TextLogo = () => {

  return (
    <Grid container style={{marginTop: '', marginBottom: '5px'}} >
      <Grid xs={12} >
        <img src={textLogo} alt='text logo' style={{width: '80%', height: 'auto', marginTop: ''}} />
      </Grid>
    </Grid>
  );
};

export default TextLogo;