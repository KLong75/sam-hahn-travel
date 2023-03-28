// import from React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import GlobeKeyLogo from '../GlobeKeyLogo';
// import { DisplayBox } from '../../utils/DisplayBox'

// import from Material UI
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import images/logos
// import textLogo from '../../assets/sam_logos/text_name_logo.png';
import frameGlobeLogoPeach from '../../assets/sam_logos/frame_globe_logo_peach.png';
// import coverPic from '../../assets/images/sam_cover_pic.jpg';

// import styles from './Header.module.css';

// const HeaderDisplayBox = styled(Paper)(({ theme }) => ({
//   // ...theme.typography.body2,
//   padding: theme.spacing(0),
//   margin: theme.spacing(0),
//   // textAlign: 'left',
//   // color: theme.palette.text.secondary,
//   backgroundColor: '#fbdecc',
//   opacity: '0.8',
//   // height: '80%'
// }));

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <header style={{ padding: '16px', backgroundColor: '#fbdecc' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
     
        <GlobeKeyLogo />
       
        {isMobile ? (
          <IconButton onClick={handleMenuOpen} size="large">
            <MenuIcon />
          </IconButton>
        ) : (
          <nav style={{ margin: 0, padding: 0 }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                  <Link to="/">Home</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/about">About</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/contact">Contact</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/design-process">Travel Design</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/self-booking">Self Booking Resources</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <a 
                  href='https://www.instagram.com/samhahntravelco/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='footer-instagram-link' 
                  aria-label='Link to Sam Hahn Travel Co Instagram'
                >
                  <InstagramIcon style={{ fontSize: '30px'}} />
                </a>  
              </li>
            </ul>
          </nav>
        )}
        
        <Menu
          className="mobile-menu"
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "fixed",
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
              backgroundColor: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fbdecc",
              opacity: ".89",
            },
          }}
        >
          <img 
            src={frameGlobeLogoPeach} 
            alt="Globe Key Logo" 
            style={{ width: '200px', height: '200px', marginTop: '0', marginLeft: '30px' }} 
          />
          <MenuItem 
            component={Link} 
            to="/" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '24px' }}
            >Home
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/about" 
            onClick={handleMenuClose} 
            style={{ 
              padding: '18px', 
              fontSize: '24px' 
            }}
            >About
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/contact" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '24px' 
              }}
            >Contact
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/design-process" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '24px' 
              }}
            >Travel Design
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/self-booking" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '24px' 
              }}
            >Self Booking Resources
          </MenuItem>
          <MenuItem style={{padding: '18px'}}>
            <a
              href='https://www.instagram.com/samhahntravelco/'
              target='_blank'
              rel='noreferrer'
              className=''
              aria-label='Link to Sam Hahn Travel Co Instagram'
              
            >
              <InstagramIcon style={{ fontSize: '30px', color: '#fbdecc'}} />
            </a>
          </MenuItem>

        </Menu>
      </div>
      {/* <Grid 
        container 
        spacing={1} 
        justifyContent='center' 
        textAlign='center' >
        <Grid xs={12}>
          <img 
            src={textLogo} 
            alt='text logo' 
            className='text-logo'
            style={{
              width: '526px', 
              height: 'auto', 
              maxWidth: '100%',
              maxHeight: '100%',
            }} 
          />
        </Grid>
      </Grid> */}
    </header>
  );
}

export default Header;








