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
          
          PaperProps={{
            style: {
              top: "64px",
              left: 0,
              right: 0,
              bottom: 0,
              position: "fixed",
              width: "100vw",
              height: "100vh",
              margin: 0,
              padding: 0,
              backgroundColor: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fbdecc"
            },
          }}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose} style={{ padding: '18px' }}>Home</MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleMenuClose} style={{ padding: '18px' }}>About</MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleMenuClose} style={{ padding: '18px' }}>Contact</MenuItem>
          <MenuItem component={Link} to="/design-process" onClick={handleMenuClose} style={{ padding: '18px' }}>Design Process</MenuItem>
          <MenuItem component={Link} to="/book-hotel" onClick={handleMenuClose} style={{ padding: '18px' }}>Book A Hotel</MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;








