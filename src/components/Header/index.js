import React from "react";
import { Link } from "react-router-dom";

// import from MUI
import Stack from '@mui/material/Stack';

// import components
import GlobeKeyLogo from '../GlobeKeyLogo';

// import css
import './Header.css';

const Header = () => {
  return (
    <header>
      <ul>
        <Stack direction="row" spacing={2}>
        <li><Link to="/">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <GlobeKeyLogo />
        <li><Link to="/design-process">Design Process</Link></li>
        <li><Link to="/book-hotel">Book A Hotel</Link></li>
        </Stack>
      </ul>
    </header>
  );
}

export default Header;

