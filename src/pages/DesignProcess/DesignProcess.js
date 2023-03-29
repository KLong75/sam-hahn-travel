// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

// import styles
import styles from './DesignProcess.module.css';

// import components
import Partners from "../../components/Partners";
import TextLogo from '../../components/TextLogo';
import Services from '../../components/ServicesOffered';
import { DisplayBox } from '../../utils/DisplayBox';

// import images/logos
import imageOne from '../../assets/images/imageOne.jpeg';
import coverPic from '../../assets/images/sam_cover_pic.jpg';


const DesignProcess = () => {
  return (
    <Grid container justifyContent='center' textAlign='center' >

      <Grid xs={12}>
        <h1 className={`${styles.processHeadline} nothing-you-could-do`} style={{ fontSize: '60px', marginBottom: ''}}>The Value of a Travel Designer</h1>
      </Grid>

      <TextLogo />

      <Services />

      <Grid  xs={12} md={6}  style={{ }} >
        <DisplayBox elevation={6} >
          <h2>The Process</h2>
          <p 
            className={`${styles.processParagraph}`}
            style={{textAlign: 'left', fontSize: '22px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src={imageOne} alt='imageOne' style={{width: '100%'}} />
        </DisplayBox>
      </Grid>

      <Grid  xs={12} md={6} style={{ }} >
        <DisplayBox elevation={6} >
          <h2>FAQ</h2>
          <p 
            className={`${styles.processParagraph}`}
            style={{textAlign: 'left', fontSize: '22px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <ul style={{textAlign: 'left'}}>
              <li>
                <span style={{fontWeight: 'bold'}}>Q.</span> Lorem ipsum ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua?
              </li>
              <li>
                <span style={{fontWeight: 'bold'}}>A.</span> Lorem ipsum ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                <span style={{fontWeight: 'bold'}}>Q.</span> Lorem ipsum ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua?
              </li>
              <li>
                <span style={{fontWeight: 'bold'}}>A.</span> Lorem ipsum ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          <img src={coverPic} alt='imageOne' style={{width: '100%'}} />
        </DisplayBox>
      </Grid>

      <Partners/>


    </Grid>
  );
};

export default DesignProcess;