// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import styles from "./Home.module.css";
// import video from "../../assets/walkthrough.mp4";
// import FeaturesCarousel from "../../components/FeaturesCarousel/FeaturesCarousel";

// import { FaRoad, FaChild, FaWalking, FaRegBuilding, FaHandshake } from "react-icons/fa";
// import { MdWaterDrop, MdElectricBolt, MdOutlineMapsHomeWork } from "react-icons/md";
// import { GiBrickWall, GiWaterRecycling, GiWaterfall, GiSofa } from "react-icons/gi";
//  const taglines = [
//   "Your Dream Begins with the Perfect Plot.",
//   "Designing the Future You Deserve.",
//   "Live Where Life Feels Right.",
//   "Plots That Grow with Your Dreams.",
//   "Find Your Place in the Perfect Space."
// ];

// const AnimatedTaglines = () => {
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % taglines.length);
//     }, 3500); // change every 3.5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       key={taglines[index]}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 1 }}
//       className={styles.tagline}
//     >
//       {taglines[index]}
//     </motion.div>
//   );
// };

// // Amenities List
// const amenitiesList = [
//   { icon: <FaRoad />, title: "Cement Roads" },
//   { icon: <GiWaterfall />, title: "Sewer Lines" },
//   { icon: <GiWaterfall />, title: "Stormwater Drainage" },
//   { icon: <MdWaterDrop />, title: "Water Pipelines" },
//   { icon: <MdElectricBolt />, title: "Electricity Connections" },
//   { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
//   { icon: <FaChild />, title: "Children's Play Areas" },
//   { icon: <FaWalking />, title: "Walking Tracks" },
//   { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
// ];

// // Layout Table Data
// const tableData = [
//   { id: 1, layout: "Saraswati Nagri 1", location: "Behind Podar International School, Godhni", area: "2 acres", launchYear: 2019, status: "Sold" },
//   { id: 2, layout: "Saraswati Nagri 2", location: "Bokhara Square, near Godhni", area: "7.5 acres", launchYear: 2000, status: "Sold" },
//   { id: "3, 4 & 5", layout: "Saraswati Nagri 3,4&5", location: "Bokhara Square, near Tuli International School", area: "11 acres", launchYear: 2022, status: "Available" },
//   { id: 6, layout: "Saraswati Nagri 6", location: "Lonara, beside Jhulelal Engineering College", area: "3.25 acres", launchYear: 2022, status: "Available" },
//   { id: 7, layout: "Saraswati Nagri 7", location: "Lonara, beside Central India College of Nursing", area: "4.5 acres", launchYear: 2023, status: "Sold" },
//   { id: 8, layout: "Saraswati Nagri 8", location: "Lava, near Dabha & Wadi", area: "2.5 acres", launchYear: 2024, status: "Available" },
// ];

// const Home = () => {
//   const navigate = useNavigate();

//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.3, duration: 1 }
//     })
//   };

//   return (
//     <div className={styles.homeContainer}>

//       {/* Hero Section */}
//       {/* Hero Section */}
// {/* Hero Section */}
// <div className={styles.heroSection}>
//   <video autoPlay loop muted playsInline className={styles.heroVideo}>
//     <source src={video} type="video/mp4" />
//   </video>

//   <div className={styles.overlay}></div>

//   <motion.div className={styles.heroContent} initial="hidden" animate="visible">
//     {/* Animated Tagline Slider */}
//     <motion.h1
//       key="saraswati"
//       initial={{ scale: 2, opacity: 0, y: -50 }}
//       animate={{ scale: 1, opacity: 1, y: 0 }}
//       transition={{ duration: 1.5, ease: "easeOut" }}
//       style={{
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//       }}
//     >
//       <AnimatedTaglines />
//     </motion.h1>

//     {/* Subtitle fade-in */}
//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1.5, duration: 1 }}
//     >
//       Experience premium layouts, modern amenities, and luxurious living designed for the future.
//     </motion.p>

//     {/* CTA Button fade-in */}
//     <motion.button
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 2, duration: 1 }}
//       whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255,195,113,0.7)" }}
//       className={styles.ctaButton}
//       onClick={() => navigate("/our-layouts")}
//     >
//       Explore Layouts
//     </motion.button>
//   </motion.div>
// </div>


//       {/* About Section */}
//       <motion.section 
//         className={styles.aboutSection} 
//         initial="hidden" 
//         whileInView="visible" 
//         viewport={{ once: true }}
//       >
//         <motion.h2 variants={fadeInUp} custom={1}>About Us</motion.h2>
//         <motion.p variants={fadeInUp} custom={2}>
//           For over two decades, <strong>Saraswati Nagri</strong> has been a symbol of trust and quality in Nagpur's real estate industry. 
//           Led by <strong>Mr. Sachin Ingle</strong>, our team continues to craft modern, sustainable, and community-driven layouts that redefine urban living.
//         </motion.p>
//       </motion.section>

//       {/* Amenities Section */}
//       <motion.section 
//         className={styles.amenitiesSection} 
//         initial="hidden" 
//         whileInView="visible" 
//         viewport={{ once: true }}
//       >
//         <motion.h2 variants={fadeInUp} custom={1}>Our Amenities</motion.h2>
//         <div className={styles.amenitiesGrid}>
//           {amenitiesList.map((item, i) => (
//             <motion.div 
//               key={i} 
//               className={styles.amenityItem} 
//               whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,195,113,0.7)" }} 
//               variants={fadeInUp} 
//               custom={i+2}
//             >
//               <span className={styles.icon}>{item.icon}</span>
//               <p>{item.title}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Stats Section */}
//       <motion.section 
//         className={styles.statsSection} 
//         initial="hidden" 
//         whileInView="visible" 
//         viewport={{ once: true }}
//       >
//         <motion.div className={styles.statItem} variants={fadeInUp} custom={1}><FaRegBuilding className={styles.icon} /><h4>Area & Units</h4><p>154</p></motion.div>
//         <motion.div className={styles.statItem} variants={fadeInUp} custom={2}><FaHandshake className={styles.icon} /><h4>Plots Sold</h4><p>97</p></motion.div>
//         <motion.div className={styles.statItem} variants={fadeInUp} custom={3}><MdOutlineMapsHomeWork className={styles.icon} /><h4>Total Layouts</h4><p>10</p></motion.div>
//         <motion.div className={styles.statItem} variants={fadeInUp} custom={4}><GiSofa className={styles.icon} /><h4>Amenities</h4><p>40+</p></motion.div>
//       </motion.section>

//       {/* Features Carousel */}
//       <FeaturesCarousel />

//       {/* Layout Cards */}
//       <motion.section className={styles.layoutSection} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <motion.h2 variants={fadeInUp} custom={1}>Our Premium Layouts</motion.h2>
//         <div className={styles.cardGrid}>
//           {tableData.map((row, i) => (
//             <motion.div 
//               key={row.id} 
//               className={styles.card} 
//               whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,195,113,0.7)" }} 
//               variants={fadeInUp} 
//               custom={i+2}
//             >
//               <div className={`${styles.statusBadge} ${row.status === "Available" ? styles.available : styles.sold}`}>{row.status}</div>
//               <h4>{row.layout}</h4>
//               <p><strong>📍 Location:</strong> {row.location}</p>
//               <p><strong>📐 Area:</strong> {row.area}</p>
//               <p><strong>📅 Launch Year:</strong> {row.launchYear}</p>
//               <button onClick={() => navigate("/our-layouts")} className={styles.viewButton}>VIEW</button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Contact CTA */}
//       <motion.section className={styles.contactSection} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <div className={styles.buttonGroup}>
//           <motion.button className={styles.contactButton} variants={fadeInUp} custom={1}>SCHEDULE A TOUR</motion.button>
//           <motion.button className={styles.contactButton} variants={fadeInUp} custom={2}>ASK A QUESTION</motion.button>
//           <motion.button className={styles.contactButton} variants={fadeInUp} custom={3}>DOWNLOAD BROCHURE</motion.button>
//         </div>
//         <motion.div className={styles.callBanner} variants={fadeInUp} custom={4}>
//           📞 Need More Information? Call Us: +91 9823388866
//         </motion.div>
//       </motion.section>

//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect, Suspense ,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import heroVideo from "../../assets/walkthrough.mp4";
import amenitiesVideo from "../../assets/walkthrough.mp4";
import aboutimg1 from '../../assets/Instagram post - 1.jpg';
// import aboutimg2 from '../../assets/Instagram post - 1.jpg';

import { FaRoad, FaChild, FaWalking } from "react-icons/fa";
import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
import { GiBrickWall, GiWaterRecycling, GiWaterfall } from "react-icons/gi";
// import { useState } from "react";
import layoutimg from '../../assets/layout1.jpg';
import layoutimg2 from '../../assets/layout2.jpg';
import { img } from "framer-motion/client";
import WhyChoose from "../Choose/Choose";
import QualityWork from "../Qualitywork/QualityWork";
import UpcomingProjects from "../UpcomingProject/UpcomingProject";
import BookingSteps from "../BookingSteps/BookingSteps";
import SanctioningProcess from "../SanctionProcess/SanctioningProcess";
import BankLoanProcess from "../BankLoanProcess/BankLoanProcess";
import { MdOutlinePriceChange } from "react-icons/md";
import { databases } from "../../appwrite";
import { FaSpinner } from "react-icons/fa";
import LazySection from "../LazySection";

const taglines = [
  "Your Dream Begins with the Perfect Plot.",
  "Designing the Future You Deserve.",
  "Live Where Life Feels Right.",
  "Plots That Grow with Your Dreams.",
  "Find Your Place in the Perfect Space."
];

const AnimatedTaglines = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => setIndex(prev => (prev + 1) % taglines.length), 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      key={taglines[index]}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
      className={styles.heroTagline}
    >
      {taglines[index]}
    </motion.div>
  );
};

const amenitiesList = [
  { icon: <FaRoad />, title: "Cement Roads" },
  { icon: <GiWaterfall />, title: "Sewer Lines" },
  // { icon: <GiWaterfall />, title: "Stormwater Drainage" },
  { icon: <MdWaterDrop />, title: "Water Line" },
  { icon: <MdElectricBolt />, title: "Electrification & Street Lights" },
  // { icon: <GiBrickWall />, title: "Open Spaces with Compound Walls" },
  { icon: <FaChild />, title: "Children's Play Area & Garden" },
  // { icon: <FaWalking />, title: "Walking Tracks" },
  { icon: <GiWaterRecycling />, title: "Sewage Treatment Plants (STP)" },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const overlaySlide = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};


const tableData = [
  { id: 1, layout: "Saraswati Nagri 1", location: "Behind Podar International School, Godhni", area: "2 acres", launchYear:"₹3000", status: "Sold", img: layoutimg },
  { id: 2, layout: "Saraswati Nagri 2", location: "Bokhara Square, near Godhni", area: "7.5 acres", launchYear: "₹3000", status: "Sold", img: layoutimg2 },
  { id: 3, layout: "Saraswati Nagri 3", location: "Bokhara Square, near Tuli International School", area: "11 acres", launchYear: "₹3000", status: "Available", img: layoutimg },
  { id: 4, layout: "Saraswati Nagri 4", location: "Bokhara Square, near Tuli International School", area: "11 acres", launchYear:"₹3000", status: "Available", img: layoutimg2 },
  { id: 5, layout: "Saraswati Nagri 5", location: "Bokhara Square, near Tuli International School", area: "11 acres", launchYear: "₹3000", status: "Available", img: layoutimg },
  { id: 6, layout: "Saraswati Nagri 6", location: "Lonara, beside Jhulelal Engineering College", area: "3.25 acres", launchYear:"₹2000", status: "Available", img: layoutimg2 },
  { id: 7, layout: "Saraswati Nagri 7", location: "Lonara, beside Central India College of Nursing", area: "4.5 acres", launchYear: "₹2000", status: "Sold", img: layoutimg },
  { id: 8, layout: "Saraswati Nagri 8", location: "Lava, near Dabha & Wadi", area: "2.5 acres", launchYear: "₹2000", status: "Available", img: layoutimg2 },
  { id: 9, layout: "Saraswati Nagri 9", location: "Godhani", area: "2 acres", launchYear: " ₹2250 ", status: "Available", img: layoutimg },
  { id: 10, layout: "Saraswati Nagri 10", location: " Lonara", area: "1.5 acres", launchYear: "₹2000", status: "Sold", img: layoutimg2 },
  { id: 11, layout: "Saraswati Nagri 11", location: "Central India College, Lonara", area: "4.25 acres", launchYear: "₹2450", status: "Sold", img: layoutimg },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

    const [buffered, setBuffered] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateBuffer = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        const percent = (bufferedEnd / duration) * 100;
        setBuffered(percent);
      }
    };

    const onCanPlay = () => setLoading(false);

    video.addEventListener("progress", updateBuffer);
    video.addEventListener("canplay", onCanPlay);

    return () => {
      video.removeEventListener("progress", updateBuffer);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);




  const slides = [
    {
      id: 0,
      welcome: '- Welcome to Saraswati Nagri',
      title: 'Perfect Place Business &',
      subtitle: 'Start With Ease.',
      description: 'We provide the most House and functional design place for companies and businesses home.',
      stats: [
        { value: 'Explore Layout' },
        { value: 'Get in Touch' }
      ],
      address: '400 896',
    },
    {
      id: 1,
      welcome: '- Discover Your Dream Home',
      title: 'Luxury Living &',
      subtitle: 'Comfort Redefined.',
      description: 'Experience premium layouts, modern amenities, and luxurious living designed for the future.',
      stats: [
        { value: 'Explore Layout' },
        { value: 'Get in Touch' }
      ],
      address: 'London Road'
    },
    {
      id: 2,
      welcome: '- Join Our Community',
      title: 'Business Hub &',
      subtitle: 'Innovation Starts Here.',
      description: 'Connect, collaborate, and grow in a space built for success and creativity.',
      stats: [
        { value: 'Explore Layout' },
        { value: 'Get in Touch' }
      ],
      address: 'City Place'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = slides[currentSlide];
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 2 >= tableData.length ? 0 : prev + 2
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [tableData.length]);

  const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 1 } }) };

  return (
    <div className={styles.homeContainer}>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.leftPanel}>
          <motion.div
            key={`welcome-${currentSlide}`}
            className={styles.welcomeBox}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.welcomeText}>{currentContent.welcome}</span>
          </motion.div>

          <motion.div
            className={styles.diamondIcon}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ♦
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {currentContent.title}<br />
            <span className={styles.orangeText}>{currentContent.subtitle}</span>
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {currentContent.description}
          </motion.p>

          <div className={styles.statsContainer}>
            {currentContent.stats.map((stat, index) => (
              <motion.button
                key={`stat-${currentSlide}-${index}`}
                className={styles.statBox}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* <div className={styles.statIcon}>{stat.icon}</div> */}
                {stat.value}
              </motion.button>
            ))}
          </div>



          {/* Dots for content slider */}
          <div className={styles.dots}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className={styles.rightPanel}>
         <div className={styles.videoContainer}>
      {loading && (
        <div className={styles.videoLoader}>
          <FaSpinner className={styles.spinnerIcon} />
          <p>Loading video... {Math.floor(buffered)}%</p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${buffered}%` }}></div>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`${styles.heroVideo} ${loading ? styles.hiddenVideo : ""}`}
        onLoadedData={() => setLoading(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
        </div>
      </div>

      {/* About Section with two images */}
      {/* About Section with Images */}
      <motion.section id="about" className={styles.aboutSection} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className={styles.aboutContent}>

          {/* Text Content */}
          <div className={styles.aboutText}>
            <motion.h2 variants={fadeInUp} custom={1}>
              <span className={styles.shimmerText}>About Us </span></motion.h2>
             

            <motion.p variants={fadeInUp} custom={2}>
              Welcome to <strong>Saraswati Nagri,</strong> Nagpur’s most trusted name in<strong>NMRDA Sanctioned
Residential Layouts</strong>
               Founded by<strong>Mr. Sachin Ingle</strong>, Saraswati Nagri has set a benchmark in the city for<strong>quality
construction, transparent dealings, and prime locations</strong>
            </motion.p>

            <motion.p variants={fadeInUp} custom={3}>
             Unlike other developers who focus on remote areas far from the city, Saraswati Nagri’s<strong>unique specialty</strong>, is that all our layouts are located <strong>within 15 kms of Zero Mile,</strong>
              the heart of
Nagpur. This ensures our customers not only buy plots but also<strong> invest in convenience,
appreciation, and a better lifestyle.
</strong>
            </motion.p>
            <motion.p variants={fadeInUp} custom={3}>We don’t just sell plots – we build <strong>lasting relationships communities, trust, and a brighter future </strong>for our
customers.</motion.p>
          <motion.p variants={fadeInUp} custom={1.5}><strong> “Saraswati Nagri se judiye, apna bhavishya bright aur safe banaiye.”</strong></motion.p>
            <motion.h3 variants={fadeInUp} custom={4}>Our Mission</motion.h3>
            <motion.p variants={fadeInUp} custom={5}>
              To transform raw land into well-planned communities that provide comfort, sustainability, and lasting value to our clients and investors.
            </motion.p>

            <motion.h3 variants={fadeInUp} custom={6}>Our Vision</motion.h3>
            <motion.p variants={fadeInUp} custom={7}>
              To be the most trusted name in plot layout and land development, known for quality, transparency, and customer satisfaction.
            </motion.p>


          </div>

          {/* Images */}
          <div className={styles.aboutImages}>
            <motion.img src={aboutimg1} alt="About 1" variants={fadeInUp} custom={12} />
            {/* <motion.img src={aboutimg} alt="About 2" variants={fadeInUp} custom={13} /> */}
          </div>
        </div>
      </motion.section>


      {/* Amenities Section with video background */}
      <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
 <LazySection>
      <div className={styles.amenitiesVideoWrapper} id="amenities">
        <video autoPlay loop muted playsInline className={styles.amenitiesVideo}>
          <source src={heroVideo} type="video/mp4" />
        </video>
  
        {/* Sliding Overlay */}
        <motion.div
          className={styles.overlay1}
          variants={overlaySlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.section
            className={styles.amenitiesSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} custom={1}>
              <span className={styles.shimmerText}>Our Amenities</span>
            </motion.h2>
            <motion.p variants={fadeInUp} custom={1.5} className={styles.description}>
              Discover a range of thoughtfully designed amenities that enhance your
              living experience — from landscaped gardens to modern infrastructure.
            </motion.p>

            <div className={styles.amenitiesGrid}>
              {amenitiesList.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.amenityItem}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <p>{item.title}</p>
                  {/* <span className={styles.span}></span> */}
                </motion.div>
              ))}
            </div>

          </motion.section>
        </motion.div>
      </div>
      </LazySection>
      </Suspense>
    <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
        <LazySection>
          <QualityWork />
        </LazySection>
        </Suspense>
      {/* Premium Layout Carousel */}
      <div className={styles.premiumWrapper}>
        {/* Parallax Gold Background */}
        <div className={styles.goldWave}></div>

        {/* Section Header */}
        <motion.div
          className={styles.headerSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.goldTitle}>
            <span className={styles.shimmerText}>Premium Layouts</span>
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.layoutDesc}>
            Explore our handpicked collection of signature layouts — blending elegant architecture with modern amenities.
            Each layout is designed for those who value sophistication, serenity, and smart living.
          </p>
        </motion.div>

        {/* Animated Background Glow */}
        <div className={styles.glowBackground}></div>
<Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
 <LazySection>
        {/* Animated Carousel */}
        <AnimatePresence mode="sync">
          <motion.div
            className={styles.cardCarousel}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {tableData.map((row, i) => (
              <motion.div
                key={row.id}
                className={styles.card}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 0 60px rgba(215, 152, 78, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 10, delay: i * 0.1, duration: 0.4 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {/* 🖼️ Image Section */}
                <div className={styles.imageWrapper}>
                  <img src={row.img} alt={row.layout} className={styles.cardImage} />
                  <div className={styles.gradientOverlay}></div>
                  <div
                    className={`${styles.statusBadge} ${row.status === "Available" ? styles.available : styles.sold
                      }`}
                  >
                    {row.status}
                  </div>
                </div>
                
                {/* 💬 Content Section */}
                <div className={styles.cardContent}>
                  <motion.h4
                    className={styles.cardTitle}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {row.layout}
                  </motion.h4>

                  <p className={styles.cardSubtitle}>{row.shortDescription}</p>

                  <div className={styles.infoGrid}>
                    <p><strong>📍</strong> {row.location}</p>
                    <p><strong>📐</strong> {row.area}</p>
                    <p><strong>💵</strong> {row.launchYear}</p>
                  </div>

                  <motion.button
                    onClick={() => { navigate("/our-layouts");}}
                    className={styles.viewButton}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    VIEW DETAILS
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        </LazySection>
        </Suspense>




      </div>
    



    <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
       

        <LazySection>
          <UpcomingProjects />
        </LazySection>

        <LazySection>
          <BookingSteps />
        </LazySection>

        <LazySection>
          <SanctioningProcess />
        </LazySection>

        <LazySection>
          <BankLoanProcess />
        </LazySection>

        <LazySection>
          <WhyChoose />
        </LazySection>
      </Suspense>
      {/* Contact Section */}

      <motion.section className={styles.contactSection} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className={styles.buttonGroup}>
          <motion.button className={styles.contactButton} variants={fadeInUp} custom={1}>SCHEDULE A TOUR</motion.button>
          <motion.button className={styles.contactButton} variants={fadeInUp} custom={2}>ASK A QUESTION</motion.button>
          <motion.button className={styles.contactButton} variants={fadeInUp} custom={3}>DOWNLOAD BROCHURE</motion.button>
        </div>
        <motion.div className={styles.callBanner} variants={fadeInUp} custom={4}>
          📞 Need More Information? Call Us: +91 9823388866
        </motion.div>
      </motion.section>

    </div>
  );
};

export default Home;
