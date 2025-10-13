import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import logo from "../../assets/logo.png";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const hoverVariants = {
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.footer 
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Logo & Intro */}
        <motion.div className={styles.section} variants={itemVariants} whileHover={hoverVariants}>
          <motion.img 
            src={logo} 
            alt="Saraswati Nagri" 
            className={styles.logo}
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to Saraswati Nagri, a well-renowned and trusted brand in Nagpur’s real estate industry.
          </motion.p>
        </motion.div>

        {/* Contact Info */}
        <motion.div className={styles.section} variants={itemVariants} whileHover={hoverVariants}>
          <motion.h3 
            className={styles.heading}
            whileHover={{ color: "#ffd700" }}
            transition={{ duration: 0.2 }}
          >
            Get In Touch
          </motion.h3>
          <motion.p 
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <strong>Phone:</strong><br />
            <a href="tel:9823388866" className={styles.link}>9823388866</a> / 
            <a href="tel:7888028866" className={styles.link}>7888028866</a>
          </motion.p>
          <motion.p 
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <strong>Email:</strong><br />
            <a href="mailto:info@saraswatinagri.com" className={styles.link}>info@saraswatinagri.com</a>
          </motion.p>
        </motion.div>

        {/* Address */}
        <motion.div className={styles.section} variants={itemVariants} whileHover={hoverVariants}>
          <motion.h3 
            className={styles.heading}
            whileHover={{ color: "#ffd700" }}
            transition={{ duration: 0.2 }}
          >
            Office Address
          </motion.h3>
          <motion.p 
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <strong>Visit Us Today:</strong><br />
            302, Sai Shraddha Appt., Behind White House Bungalow, Utkarsh Society, Dabha-Wadi Road, Nagpur
          </motion.p>
        </motion.div>

        {/* Working Hours */}
        <motion.div className={styles.section} variants={itemVariants} whileHover={hoverVariants}>
          <motion.h3 
            className={styles.heading}
            whileHover={{ color: "#ffd700" }}
            transition={{ duration: 0.2 }}
          >
            Working Hours
          </motion.h3>
          <motion.p 
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            10:00 AM to 7:00 PM, Every Day
          </motion.p>
          <motion.p 
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <strong>Google Maps Link</strong><br />
            <a href="https://g.co/kgs/ULJkGc3" target="_blank" rel="noopener noreferrer" className={styles.link}>
              View on Google Maps
            </a>
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        className={styles.bottomBar}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.p 
          whileHover={{ color: "#ffd700" }}
          transition={{ duration: 0.2 }}
        >
          Copyright © 2025 | Saraswati Nagri | All Rights Reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;