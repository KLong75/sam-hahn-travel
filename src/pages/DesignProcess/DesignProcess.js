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
// import sam logos
import keyChain from '../../assets/sam_logos/keychain.png';
// import globe from '../../assets/sam_logos/globe.png';
import luggage from '../../assets/sam_logos/luggage.png';

const DesignProcess = () => {
  return (
    <Grid container justifyContent='center' textAlign='center' >

      <Grid xs={12}>
        <h1 className={`${styles.processHeadline} nothing-you-could-do`} style={{ fontSize: '60px', marginBottom: ''}}>The Value of a Travel Designer</h1>
      </Grid>

      <TextLogo />

      <Grid  xs={12} md={6}  style={{ }} >
        <DisplayBox elevation={6} >
          <h2 className={`nothing-you-could-do ${styles.processHeadline}`} style={{fontSize: '48px'}} >The Process</h2>
          <img src={keyChain} alt="keychain logo" style={{width: '60%', height: 'auto', marginTop: '-80px', marginBottom: '-60px'}} />
          <p 
            className={`${styles.processParagraph}`}
            style={{padding: '2px', textAlign: 'left', fontSize: '22px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src={imageOne} alt='imageOne' style={{width: '100%'}} />
        </DisplayBox>
      </Grid>

      <Grid  xs={12} md={6} style={{ }} >
        <DisplayBox elevation={6} >
          <h2 className={`nothing-you-could-do ${styles.processHeadline}`} style={{fontSize: '48px'}}>FAQ</h2>
          <img src={luggage} alt="globe logo" style={{width: '60%', height: 'auto', marginTop: '-80px', marginBottom: '-60px'}} />
          <p 
            className={`${styles.processParagraph}`}
            style={{padding: '2px', textAlign: 'left', fontSize: '22px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <ul className={` ${styles.processUL}`} style={{textAlign: 'left'}}>
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

      <Services />

      <Partners/>

    </Grid>
  );
};

export default DesignProcess;