import React from "react";

import { Link } from "react-router-dom";

import globeKeyLogo from '../../assets/images/sht_globe_key_logo.png';

import styles from './GlobeKeyLogo.module.css';


const GlobeKeyLogo = () => {
  return (
    // <Link to="/"><img src={globeKeyLogo} alt="Sam Hahn Travel Logo" /></Link>
    <Link to="/" className={styles.logoLink}>
      <img src={globeKeyLogo} alt="Sam Hahn Travel Logo" className={styles.logoImage} />
    </Link>
  )
}

export default GlobeKeyLogo;