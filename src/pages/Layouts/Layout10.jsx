import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import styles from "./Layouts.module.css";
import adBanner from "../../../public/banner-ad.jpeg"; // adjust path if needed
import {
  FaRoad, FaChild, FaWalking,
} from "react-icons/fa";
import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
import { FaPersonSwimming, FaWarehouse, FaTree } from "react-icons/fa6";
import { GiBrickWall, GiWaterRecycling, GiWaterfall } from "react-icons/gi";
import image from '../../assets/layouts1.jpg';
import Map11 from "../../components/Map/Map11";

const BROCHURE_PDF = "/Saraswati 11.pdf";
const PAMPHLET_PDF = "/Pomplate.pdf";

const Map = lazy(() => import("../../components/Map/Map"));
// const PanoramaViewer = lazy(() => import("../../components/PanoramaViewer"));

// ✅ FIX: Create LazyOnScroll component
const LazyOnScroll = ({ children, fallback }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : (fallback || <LoadingSpinner />)}
    </div>
  );
};

const LoadingSpinner = () => (
  <motion.div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', color: '#B8860B' }}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
  >
    <motion.div className={styles.spinner} animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="#B8860B" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" />
      </svg>
    </motion.div>
  </motion.div>
);

const Layout10 = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBannerVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const videoUrl = "https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/69425efd002e2614a2d2/view?project=68ece1d1000abe9952c0&mode=all";

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
    { icon: <FaPersonSwimming />, title: "Swimming pool" },
    { icon: <FaWarehouse />, title: "Clubhouse" },
    { icon: <FaTree />, title: "Tree Plantation for a Green Lifestyle" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <div className={styles.container}>
      {/* ── HERO ── */}
      <motion.section className={styles.heroSection} style={{ opacity, scale }}>
        <motion.div className={styles.heroGradient} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} />
        <motion.h1 className={styles.mainTitle} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
          Saraswati Nagri – 11
        </motion.h1>
        <motion.p className={styles.heroSubtitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
          Where Timeless Elegance Meets Discerning Serenity
        </motion.p>
        <motion.div className={styles.heroAccent} initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} />
      </motion.section>

      {/* ── MAP SECTION ── */}
      <motion.section 
        className={styles.videoSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className={styles.sectionTitle}
          variants={fadeInUp}
        >
          Plots Status
        </motion.h2>
        
        {/* Lazy loaded Map with scale animation */}
        <motion.div 
          className={styles.mapWrapper}
          variants={fadeInScale}
        >
          <motion.div 
            className={styles.mapFrame}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 45px rgba(184, 134, 11, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <LazyOnScroll fallback={<LoadingSpinner />}>
              <Suspense fallback={<LoadingSpinner />}>
                <Map11/>
              </Suspense>
            </LazyOnScroll>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── AMENITIES SECTION ── */}
      <motion.section 
        className={styles.amenitiesSection} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={slideInRight}>
          Artistry in Infrastructure & Timeless Amenities
        </motion.h2>
        
        <motion.div className={styles.amenitiesGrid} variants={staggerContainer}>
          {amenitiesList.map((amenity, index) => (
            <motion.div 
              className={styles.amenityItem} 
              key={index} 
              variants={itemVariant}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 12px 30px rgba(184, 134, 11, 0.2)", 
                transition: { duration: 0.3 } 
              }}
            >
              <motion.div 
                className={styles.iconHalo} 
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5, 
                  transition: { duration: 0.3 } 
                }}
              >
                <motion.span 
                  className={styles.icon} 
                  whileHover={{ 
                    scale: 1.2, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  {amenity.icon}
                </motion.span>
              </motion.div>
              <p className={styles.amenityTitle}>{amenity.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── LOCATION & FINANCE SECTION ── */}
        <div className={styles.locationSection}>
          <motion.h4 
            className={styles.sectionTitle} 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
          >
            📍 Prime Location with Unmatched Connectivity
          </motion.h4>
          <ul className={styles.locationList}>
            <li>🏫 Central India College of Nursing & Pharmacy</li>
            <li>🏞️ Lonara Lake – serene surroundings</li>
            <li>🚉 Godhni Railway Station – 1 km</li>
            <li>🏥 Alexis Hospital – 2 km</li>
            <li>🎓 Poddar International School – 0.5 km</li>
            <li>🚗 Zero Mile & Railway Station – 6–7 km</li>
          </ul>

          <motion.h4 
            className={styles.sectionTitle} 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
          >
            🏡 Educational & Convenience Hotspots
          </motion.h4>
          <ul className={styles.locationList}>
            <li>📚 Narayana Vidyalaya & Tuli Public School – 1 km</li>
            <li>🎖️ Bhonsla Military School – 2 km</li>
            <li>🌟 Godhni T-Point & Bokhara – 0.5 km</li>
          </ul>

          <motion.div 
            className={styles.financeSection} 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className={styles.financeText}>✨ <strong>Fixed Rate:</strong> ₹ 2000 per sq. ft. ✨</p>
          </motion.div>
          
          <motion.div 
            className={styles.financeSection} 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className={styles.financeText}>✅ The <strong>ONLY</strong> layout in the area with premium amenities!</p>
            <p className={styles.financeText}>🏊 Swimming Pool, Clubhouse, Tree Plantation & More</p>
          </motion.div>
        </div>

        <div className={styles.mapwrapper}>
          <motion.p className={styles.amenitiesFooter} variants={fadeInUp}>
            Orchestrated under the stewardship of{" "}
            <motion.span 
              className={styles.backSpan} 
              whileHover={{ 
                color: "#DAA520", 
                transition: { duration: 0.2 } 
              }}
            >
              SS Construction
            </motion.span>, each vision materializes with exquisite finesse,
            unyielding refinement, and an ethos of cultivating legacies that whisper of enduring grace.
          </motion.p>
          
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3534.9712451877717!2d79.05319307526221!3d21.232504980468317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzU3LjAiTiA3OcKwMDMnMjAuOCJF!5e1!3m2!1sen!2sin!4v1766404182741!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "clamp(280px, 50vw, 450px)",
              border: "none",
              borderRadius: "10px"
            }}
          />
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <motion.footer 
        className={styles.pageFooter} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shall We Unveil Your Chapter? Our Attendants Await.
        </motion.p>
        
        <a href="https://wa.me/919494942894" target="_blank" rel="noopener noreferrer">
          <motion.button 
            className={styles.footerCta}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 25px rgba(184, 134, 11, 0.3)", 
              transition: { duration: 0.3 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            Arrange an Intimate Tour
          </motion.button>
        </a>
      </motion.footer>
    </div>
  );
};

export default Layout10;