import React from 'react';
import styles from './Footer.module.css';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo & Intro */}
        <div className={styles.section}>
          <img src={logo} alt="Saraswati Nagri" className={styles.logo} />
          <p className={styles.description}>
            Welcome to Saraswati Nagri, a well-renowned and trusted brand in Nagpur’s real estate industry.
          </p>
        </div>

        {/* Contact Info */}
        <div className={styles.section}>
          <h3>Get In Touch</h3>
          <p><strong>Phone:</strong><br />9823388866 / 7888028866</p>
          <p><strong>Email:</strong><br />info@saraswatinagri.com</p>
        </div>

        {/* Address */}
        <div className={styles.section}>
          <h3>Office Address</h3>
          <p>
            <strong>Visit Us Today:</strong><br />
            302, Sai Shraddha Appt., Behind White House Bungalow, Utkarsh Society, Dabha-Wadi Road, Nagpur
          </p>
        </div>

        {/* Working Hours */}
        <div className={styles.section}>
          <h3>Working Hours</h3>
          <p>10:00 AM to 7:00 PM, Every Day</p>
          <p>
            <strong>Google Maps Link</strong><br />
            <a href="https://g.co/kgs/ULJkGc3" target="_blank" rel="noopener noreferrer">
              https://g.co/kgs/ULJkGc3
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>Copyright © 2025 | Saraswati Nagri | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
