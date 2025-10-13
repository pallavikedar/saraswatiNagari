import React from "react";
import { motion } from "framer-motion";
import Map from "../../components/Map/Map";
import styles from "./Layouts.module.css";
import {
  FaRoad,
  FaChild,
  FaWalking,
} from "react-icons/fa";
import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
import {
  GiBrickWall,
  GiWaterRecycling,
  GiWaterfall,
} from "react-icons/gi";
import image from '../../assets/Oops!.jpeg'

const Layouts = () => {
  const amenitiesList = [
    { icon: <FaRoad />, title: "Cement Roads" },
    { icon: <GiWaterfall />, title: "Sewer Lines" },
    { icon: <GiWaterfall />, title: "Stormwater Drainage" },
    { icon: <MdWaterDrop />, title: "Water Pipelines" },
    { icon: <MdElectricBolt />, title: "Electricity Connections" },
    { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
    { icon: <FaChild />, title: "Children's Play Areas" },
    { icon: <FaWalking />, title: "Walking Tracks" },
    { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
  ];

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

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const staggerVariants = {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: { y: -10, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 
        className={styles.mainTitle} 
        variants={leftToRightVariants}
        initial="hidden"
        animate="visible"
      >
        Saraswati Nagri – Premium Plot Layouts
      </motion.h1>

      {/* Plot Status Legend */}
      <motion.div 
        className={styles.legend}
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { status: "Available", class: styles.statusAvailable },
          { status: "Sold", class: styles.statusSold },
          { status: "Reserved", class: styles.statusReserved },
          { status: "Open", class: styles.statusOpen },
        ].map((item, i) => (
          <motion.div 
            className={styles.legendItem} 
            key={i}
            variants={itemVariants}
            whileHover={hoverVariants}
          >
            <motion.div 
              className={`${styles.statusBox} ${item.class}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <motion.span 
              className={styles.legendText}
              whileHover={{ color: "#b8860b" }}
              transition={{ duration: 0.2 }}
            >
              {item.status}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Map */}
      <motion.div 
        className={styles.mapWrapper}
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Map />
      </motion.div>

      {/* Featured Plot Layout */}
      <motion.section 
        className={styles.featuredPlot}
        variants={leftToRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className={styles.sectionTitle} 
          variants={fadeInUpVariants}
        >
          Featured Premium Layout
        </motion.h2>
        <motion.div 
          className={styles.featuredContent}
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={image}
            alt="Featured Plot Layout"
            className={styles.featuredImage}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div 
            className={styles.featuredText}
            variants={itemVariants}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our <strong>Premium Residential Plot</strong> is located in the heart of
              Saraswati Nagri. Designed with meticulous planning, wide cement roads,
              underground drainage, and abundant green zones, it represents a perfect
              balance of modern infrastructure and serene living.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Each plot is well-demarcated, ensuring clear boundaries and long-term value.
              With easy access to highways, schools, and essential services, this layout
              is ideal for building your dream home or for long-term investment.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 360° Virtual Tour */}
      <motion.section 
        className={styles.virtualTour}
        variants={leftToRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={fadeInUpVariants}
        >
          360° Virtual Experience
        </motion.h2>
        <motion.p 
          className={styles.virtualText}
          variants={itemVariants}
        >
          Immerse yourself in our project with this interactive 360° showcase.
          Explore every detail of the layout before visiting in person.
        </motion.p>
        <motion.div 
          className={styles.virtualFrame}
          variants={fadeInUpVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={image}
            alt="360 View Placeholder"
            className={styles.virtualImage}
            whileHover={{ rotate: 2 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Drag to Explore 360°
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Amenities */}
      <motion.section 
        className={styles.amenitiesSection}
        variants={leftToRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={fadeInUpVariants}
        >
          World-Class Infrastructure & Amenities
        </motion.h2>
        <motion.div 
          className={styles.amenitiesGrid}
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {amenitiesList.map((item, index) => (
            <motion.div 
              className={styles.amenityItem} 
              key={index}
              variants={itemVariants}
              whileHover={hoverVariants}
            >
              <motion.span 
                className={styles.icon}
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                {item.icon}
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className={styles.amenitiesFooter}
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Backed by <motion.span 
            className={styles.backSpan}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            SS Construction
          </motion.span>, every project is executed with
          unmatched precision, uncompromising quality, and a vision to create
          sustainable, family-friendly communities.
        </motion.p>
      </motion.section>
    </motion.div>
  );
};

export default Layouts;