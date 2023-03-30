import React from "react";

import { Link } from "react-router-dom";

import globeKeyLogo from '../../assets/sam_logos/sht_globe_key_logo.png';

import styles from './GlobeKeyLogo.module.css';


const GlobeKeyLogo = () => {
  return (
    // <Link to="/"><img src={globeKeyLogo} alt="Sam Hahn Travel Logo" /></Link>
    <Link to="/sam-hahn-travel">
      <img src={globeKeyLogo} alt="Sam Hahn Travel Logo" className={styles.logoImage} sx={{ maxWidth: '100%' }} />
    </Link>
  )
}

export default GlobeKeyLogo;