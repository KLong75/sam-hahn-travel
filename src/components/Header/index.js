// import React from "react";
// import { Link } from "react-router-dom";

// // import from MUI
// // import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Unstable_Grid2'; 
// import { Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';

// // import components
// import GlobeKeyLogo from '../GlobeKeyLogo';

// // import css
// // import styles from './Header.module.css';

// const Surface = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   backgroundColor: '#fbdecc',
// }));

// const Header = () => {
//   return (
   
//     <header>
//       <Surface elevation={6}>
       
       
//         <Grid container spacing={2}>
//         <Grid xs={12}><Link><GlobeKeyLogo /></Link></Grid>
//         <Grid xs={1}></Grid>
//         <Grid xs={2}><Link to="/">Home</Link></Grid>
//         <Grid xs={2}><Link to="/about">About</Link></Grid>
//         <Grid xs={2}><Link to="/contact">Contact</Link></Grid>
        
//         <Grid xs={2}><Link to="/design-process">Design Process</Link></Grid>
//         <Grid xs={2}><Link to="/book-hotel">Book A Hotel</Link></Grid>
//         <Grid xs={1}></Grid>
       
//         </Grid>
      
//       </Surface>
//     </header>
   
//   );
// }

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import Grid from '@mui/material/Unstable_Grid2'; 
// import { Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import GlobeKeyLogo from '../GlobeKeyLogo';

// const Surface = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   backgroundColor: '#fbdecc',
// }));

// const Header = () => {
//   return (
//     <header>
//       <Surface elevation={6}>
//         <Grid container spacing={2}>
//           <Grid xs={12}><Link><GlobeKeyLogo /></Link></Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={8}>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//               <li><Link to="/design-process">Design Process</Link></li>
//               <li><Link to="/book-hotel">Book A Hotel</Link></li>
//             </ul>
//           </Grid>
//           <Grid xs={1}></Grid>
//         </Grid>
//       </Surface>
//     </header>
//   );
// }

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import { styled } from '@mui/material/styles';
// import GlobeKeyLogo from '../GlobeKeyLogo';
// import { Box } from '@mui/material';

// const Surface = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   backgroundColor: '#fbdecc',
// }));

// const Header = () => {
//   return (
//     <header>
//       <Surface elevation={6}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Link><GlobeKeyLogo /></Link>
//           <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
//             <li style={{ margin: '0 10px' }}><Link to="/">Home</Link></li>
//             <li style={{ margin: '0 10px' }}><Link to="/about">About</Link></li>
//             <li style={{ margin: '0 10px' }}><Link to="/contact">Contact</Link></li>
//             <li style={{ margin: '0 10px' }}><Link to="/design-process">Design Process</Link></li>
//             <li style={{ margin: '0 10px' }}><Link to="/book-hotel">Book A Hotel</Link></li>
//           </ul>
//         </div>
//       </Surface>
//     </header>
//   );
// }

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { styled } from '@mui/material/styles';
// import GlobeKeyLogo from '../GlobeKeyLogo';
// import { Box, IconButton, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Surface = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   backgroundColor: '#fbdecc',
// }));

// const Header = () => {
//   const [menuAnchor, setMenuAnchor] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 960);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuOpen = (event) => {
//     setMenuAnchor(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchor(null);
//   };

//   return (
//     <header>
//       <Surface elevation={6}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Link><GlobeKeyLogo /></Link>
//           {isMobile ? (
//             <IconButton onClick={handleMenuOpen} size="large">
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <nav style={{ margin: 0, padding: 0 }}>
//               <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
//                 <li style={{ margin: '0 10px' }}><Link to="/">Home</Link></li>
//                 <li style={{ margin: '0 10px' }}><Link to="/about">About</Link></li>
//                 <li style={{ margin: '0 10px' }}><Link to="/contact">Contact</Link></li>
//                 <li style={{ margin: '0 10px' }}><Link to="/design-process">Design Process</Link></li>
//                 <li style={{ margin: '0 10px' }}><Link to="/book-hotel">Book A Hotel</Link></li>
//               </ul>
//             </nav>
//           )}
//           <Menu
//             anchorEl={menuAnchor}
//             open={Boolean(menuAnchor)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
//             <MenuItem component={Link} to="/about" onClick={handleMenuClose}>About</MenuItem>
//             <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contact</MenuItem>
//             <MenuItem component={Link} to="/design-process" onClick={handleMenuClose}>Design Process</MenuItem>
//             <MenuItem component={Link} to="/book-hotel" onClick={handleMenuClose}>Book A Hotel</MenuItem>
//           </Menu>
//         </div>
//       </Surface>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from '@mui/material';
// import { styled } from '@mui/material/styles';
import GlobeKeyLogo from '../GlobeKeyLogo';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
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
              <li style={{ margin: '0 20px' }}><Link to="/">Home</Link></li>
              <li style={{ margin: '0 20px' }}><Link to="/about">About</Link></li>
              <li style={{ margin: '0 20px' }}><Link to="/contact">Contact</Link></li>
              <li style={{ margin: '0 20px' }}><Link to="/design-process">Design Process</Link></li>
              <li style={{ margin: '0 20px' }}><Link to="/book-hotel">Book A Hotel</Link></li>
            </ul>
          </nav>
        )}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleMenuClose}>About</MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contact</MenuItem>
          <MenuItem component={Link} to="/design-process" onClick={handleMenuClose}>Design Process</MenuItem>
          <MenuItem component={Link} to="/book-hotel" onClick={handleMenuClose}>Book A Hotel</MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;




