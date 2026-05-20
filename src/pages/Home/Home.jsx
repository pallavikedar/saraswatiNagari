import React, { useState, useEffect, Suspense, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { FaRoad, FaChild, FaWalking } from "react-icons/fa";
import { MdWaterDrop, MdElectricBolt } from "react-icons/md";
import { GiBrickWall, GiWaterRecycling, GiWaterfall } from "react-icons/gi";
import layoutimg from '../../assets/layout1.jpg';
import layoutimg2 from '../../assets/layout2.jpg';
import layout11 from "../../assets/Sarswati Nagari 11.jpg.jpeg";
import WhyChoose from "../Choose/Choose";
import QualityWork from "../Qualitywork/QualityWork";
import UpcomingProjects from "../UpcomingProject/UpcomingProject";
import BookingSteps from "../BookingSteps/BookingSteps";
import SanctioningProcess from "../SanctionProcess/SanctioningProcess";
import BankLoanProcess from "../BankLoanProcess/BankLoanProcess";
import { FaSpinner } from "react-icons/fa";
import LazySection from "../LazySection";
import layouts1 from "../../assets/layouts1.jpg";
import { useLanguage } from "../../Context/LanguageContext";
import { FaWhatsapp, FaDownload } from "react-icons/fa";
import LeadForm from "../../components/lead/LeadForm";
import AdPopup from "../../components/popup/AdPopup";
import layout6 from "../../assets/layout6.jpg";

const BROCHURE_PDF = "/Saraswati 11.pdf";

// Pre-connect to CDN for faster resource loading
const preconnectLinks = [
  { rel: "preconnect", href: "https://firebasestorage.googleapis.com" },
  { rel: "dns-prefetch", href: "https://firebasestorage.googleapis.com" }
];
preconnectLinks.forEach(link => {
  const l = document.createElement("link");
  l.rel = link.rel;
  l.href = link.href;
  document.head.appendChild(l);
});

const CRITICAL_IMAGES = [
  "../assets/Sarswati Nagari 11.jpg.jpeg",
  layouts1
];
if (typeof window !== "undefined") {
  CRITICAL_IMAGES.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

const VIDEO_URL =
  "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/saraswati%20nagri%208%20(1)%20(1)%20(1).mp4?alt=media&token=aa64d50d-bcef-4a0b-9d92-6a6585394242";

const HERO_POSTER = "../assets/Sarswati Nagari 11.jpg.jpeg";

if (typeof window !== "undefined") {
  const posterLink = document.createElement("link");
  posterLink.rel = "preload";
  posterLink.as = "image";
  posterLink.href = HERO_POSTER;
  posterLink.fetchPriority = "high";
  document.head.appendChild(posterLink);
}

// ─── Skeleton: Amenity card placeholder ───────────────────────────────────────
const AmenityCardSkeleton = () => (
  <div className={styles.amenityCardSkeleton}>
    <div className={styles.amenityIconSkel} />
    <div className={styles.amenityLabelSkel} />
  </div>
);

// ─── LazyImg — gold skeleton while image loads ────────────────────────────────
const LazyImg = ({ src, alt, className, priority = false }) => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);

  useEffect(() => {
    if (priority) { setInView(true); return; }
    const el = imgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Gold skeleton shown while image loads */}
      {!loaded && (
        <div className={styles.cardImgSkeleton} style={{ position: "absolute", inset: 0 }}>
          <div className={styles.cardImgPlotIcon}>
            <div className={styles.plotIconBox} />
          </div>
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={className}
          onLoad={() => setLoaded(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </div>
  );
};

// ─── OptimizedHeroVideo — gold skeleton until video is ready ─────────────────
const OptimizedHeroVideo = ({ onLoad }) => {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video && !hasStarted) {
        video.play().catch(() => {
          const go = () => {
            video.play().catch(() => {});
            document.removeEventListener("click", go);
            document.removeEventListener("touchstart", go);
          };
          document.addEventListener("click", go);
          document.addEventListener("touchstart", go);
        });
        setHasStarted(true);
      }
    };

    const handleReady = () => {
      setIsReady(true);
      onLoad?.();
      playVideo();
    };

    video.addEventListener("canplaythrough", handleReady);
    video.load();
    return () => video.removeEventListener("canplaythrough", handleReady);
  }, [hasStarted, onLoad]);

  return (
    <div className={styles.videoContainer}>
      {/* Gold skeleton shown until video loads */}
      {!isReady && (
        <div className={styles.videoSkeleton}>
          <div className={styles.videoGridBg} />
          <div className={styles.videoScanLine} />
          <div className={`${styles.videoCorner} ${styles.tl}`} />
          <div className={`${styles.videoCorner} ${styles.tr}`} />
          <div className={`${styles.videoCorner} ${styles.bl}`} />
          <div className={`${styles.videoCorner} ${styles.br}`} />
          <div className={styles.videoPlayRing}>
            <div className={styles.videoPlayTri} />
          </div>
          <span className={styles.videoLoadingLabel}>Loading cinematic tour</span>
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.heroVideo}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 2,
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  );
};

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

const overlaySlide = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

// ─── Home ─────────────────────────────────────────────────────────────────────
const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const slides = t.hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  // Track whether amenities section has entered view (drives skeleton → real grid swap)
  const [amenitiesInView, setAmenitiesInView] = useState(false);

  const amenitiesList = [
    { icon: <FaRoad />, title: t.amenities.list.roads },
    { icon: <GiWaterfall />, title: t.amenities.list.sewer },
    { icon: <MdWaterDrop />, title: t.amenities.list.water },
    { icon: <MdElectricBolt />, title: t.amenities.list.electric },
    { icon: <FaChild />, title: t.amenities.list.play },
    { icon: <GiWaterRecycling />, title: t.amenities.list.stp },
  ];

  const tableData = [
    { id: 1,  layoutKey: t.layouts.sn1.name,  locationKey: t.layouts.sn1.location,  areaKey: t.layouts.sn1.area,  price: "₹3000", status: t.layouts.status.sold,      img: layouts1,   nav: "our-layouts",  priority: true },
    { id: 2,  layoutKey: t.layouts.sn2.name,  locationKey: t.layouts.sn2.location,  areaKey: t.layouts.sn2.area,  price: "₹3000", status: t.layouts.status.sold,      img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%202%20(1).jpg?alt=media&token=8de92aab-be4f-4100-8956-a8655cf299a8", nav: "our-layouts1" },
    { id: 3,  layoutKey: t.layouts.sn3.name,  locationKey: t.layouts.sn3.location,  areaKey: t.layouts.sn3.area,  price: "₹3000", status: t.layouts.status.available, img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%203%20(1).jpg?alt=media&token=e4ca4d02-449e-4a9c-ae35-2e171fa54bbb", nav: "our-layouts2" },
    { id: 4,  layoutKey: t.layouts.sn4.name,  locationKey: t.layouts.sn4.location,  areaKey: t.layouts.sn4.area,  price: "₹3000", status: t.layouts.status.available, img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SATASWATI%20NAGRI%204%20(1).jpg?alt=media&token=4e31ec32-e733-4639-98f7-d66eb7a0a40e", nav: "our-layouts3" },
    { id: 5,  layoutKey: t.layouts.sn5.name,  locationKey: t.layouts.sn5.location,  areaKey: t.layouts.sn5.area,  price: "₹3000", status: t.layouts.status.available, img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%205%20(1).jpg?alt=media&token=c556b5a4-ffde-4b3f-b257-ec77f63f7fcc", nav: "our-layouts4" },
    { id: 6,  layoutKey: t.layouts.sn6.name,  locationKey: t.layouts.sn6.location,  areaKey: t.layouts.sn6.area,  price: "₹2000", status: t.layouts.status.available, img: layout6,    nav: "our-layouts5" },
    { id: 7,  layoutKey: t.layouts.sn7.name,  locationKey: t.layouts.sn7.location,  areaKey: t.layouts.sn7.area,  price: "₹2000", status: t.layouts.status.sold,      img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/8_1%20-%20Photo_21%20-%20Photo%20(1).jpg?alt=media&token=1b6f6b9b-3028-49ff-9e9c-7f2082704fe2", nav: "our-layouts6" },
    { id: 8,  layoutKey: t.layouts.sn8.name,  locationKey: t.layouts.sn8.location,  areaKey: t.layouts.sn8.area,  price: "₹2000", status: t.layouts.status.available, img: "https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/saraswati%20nagri%208_2%20-%20Photo%20(1).jpg?alt=media&token=21298f0a-4e8e-41b1-9658-f109f0b32c1f", nav: "our-layouts7" },
    { id: 9,  layoutKey: t.layouts.sn9.name,  locationKey: t.layouts.sn9.location,  areaKey: t.layouts.sn9.area,  price: "₹2250", status: t.layouts.status.available, img: layoutimg,  nav: "our-layouts8" },
    { id: 10, layoutKey: t.layouts.sn10.name, locationKey: t.layouts.sn10.location, areaKey: t.layouts.sn10.area, price: "₹2000", status: t.layouts.status.sold,      img: layoutimg2, nav: "our-layouts9" },
    { id: 11, layoutKey: t.layouts.sn11.name, locationKey: t.layouts.sn11.location, areaKey: t.layouts.sn11.area, price: "₹2450", status: t.layouts.status.sold,      img: layout11,   nav: "our-layouts10" },
  ];

  // Hero slide auto-advance
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentContent = slides[currentSlide];

  const handleScheduleVisit = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreClick = () => {
    setTimeout(() => {
      document.getElementById("layout")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div id="home" className={styles.homeContainer}>
      <AdPopup />

      {/* ── Hero Section ── */}
      <div className={styles.heroSection}>
        <div className={styles.leftPanel}>
          <motion.div
            key={`welcome-${currentSlide}`}
            className={styles.welcomeBox}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.welcomeText}>{currentContent.welcome}</span>
          </motion.div>

          <motion.div
            className={styles.diamondIcon}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >♦</motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentContent.title}<br />
            <span className={styles.orangeText}>{currentContent.subtitle}</span>
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {currentContent.description}
          </motion.p>

          <motion.div
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.button
              className={`${styles.ctaButton} ${styles.primaryBtn}`}
              onClick={handleScheduleVisit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className={styles.btnIcon} />
              For More Details
            </motion.button>

            <motion.a
              download
              className={`${styles.ctaButton} ${styles.secondaryBtn}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(BROCHURE_PDF, "_blank")}
            >
              <FaDownload className={styles.btnIcon} />
              Download Brochure
            </motion.a>
          </motion.div>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Right panel — video with gold skeleton fallback */}
        <div className={styles.rightPanel}>
          <OptimizedHeroVideo onLoad={() => setHeroReady(true)} />
        </div>
      </div>

      {/* ── About Section ── */}
      <motion.section
        id="about"
        className={styles.aboutSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textArea}>
              <motion.h2 variants={fadeInUp} custom={1}>
                <span className={styles.title}>{t.about.title}</span>
              </motion.h2>
              <motion.h3 variants={fadeInUp} custom={2}>Who We Are</motion.h3>
              <motion.p variants={fadeInUp} custom={3}>
                Saraswati Nagri is Nagpur's most trusted name in NMRDA Sanctioned
                Residential Layouts, founded by Mr. Sachin Ingle.
              </motion.p>
              <motion.p variants={fadeInUp} custom={4}>
                We focus on quality planning, transparent dealings, and projects
                located within city growth corridors.
              </motion.p>
              <motion.h3 variants={fadeInUp} custom={5}>Why Choose Saraswati Nagri</motion.h3>
              <motion.ul className={styles.whyList} variants={fadeInUp} custom={6}>
                <li>NMRDA Sanctioned Layouts</li>
                <li>Within 15 km of Zero Mile</li>
                <li>100% Transparent Dealings</li>
                <li>Prime Locations with Appreciation</li>
              </motion.ul>
              <motion.h3 variants={fadeInUp} custom={7}>Our Commitment</motion.h3>
              <motion.p variants={fadeInUp} custom={8}>
                We don't just sell plots — we build communities, trust, and
                long-term value for families and investors.
              </motion.p>
              <motion.p variants={fadeInUp} custom={9} className={styles.tagline}>
                {t.about.tagline}
              </motion.p>
            </div>

            <motion.div className={styles.statsBox} variants={fadeInUp} custom={10}>
              <h3>Key Highlights</h3>
              <div className={styles.statsGrid}>
                <div className={styles.stat}><span>1000+</span><p>Acres Developed</p></div>
                <div className={styles.stat}><span>11</span><p>Completed Layouts</p></div>
                <div className={styles.stat}><span>1000+</span><p>Satisfied Customers</p></div>
                <div className={styles.stat}><span>20+</span><p>Years in Nagpur Real Estate</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Amenities Section ── */}
      <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
        <LazySection onVisible={() => setAmenitiesInView(true)}>
          <div className={styles.amenitiesVideoWrapper} id="amenities">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%203%20(1).jpg?alt=media&token=e4ca4d02-449e-4a9c-ae35-2e171fa54bbb"
              className={styles.amenitiesVideo}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            
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
                  <span className={styles.shimmerText}>{t.amenities.title}</span>
                </motion.h2>
                <motion.p variants={fadeInUp} custom={1.5} className={styles.description}>
                  {t.amenities.description}
                </motion.p>
                <div className={styles.amenitiesGrid}>
                  {amenitiesList.map((item, i) => (
                    <motion.div
                      key={i}
                      className={styles.amenityItem}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={styles.icon}>{item.icon}</span>
                      <p>{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          </div>
           
        </LazySection>
      </Suspense>

      <LeadForm />

      <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
        <LazySection><QualityWork /></LazySection>
      </Suspense>

      {/* ── Premium Layouts Section ── */}
      <div className={styles.premiumWrapper}>
        <div className={styles.goldWave} id="layout" />
        <motion.div
          className={styles.headerSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.goldTitle}>
            <span className={styles.shimmerText}>{t.layouts.title}</span>
          </h2>
          <div className={styles.underline} />
          <p className={styles.layoutDesc}>{t.layouts.layoutDesc}</p>
        </motion.div>

        <div className={styles.glowBackground} />

        <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
          <LazySection>
            <AnimatePresence mode="sync">
              <motion.div
                className={styles.cardCarousel}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {tableData.map((row, i) => (
                  <motion.div
                    key={row.id}
                    className={styles.card}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05, duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.imageWrapper}>
                      {/* LazyImg now shows gold skeleton while each card image loads */}
                      <LazyImg
                        src={row.img}
                        alt={row.layoutKey}
                        className={styles.cardImage}
                        priority={i < 4}
                      />
                      <div className={styles.gradientOverlay} />
                    </div>

                    <div className={styles.cardContent}>
                      <motion.h4
                        className={styles.cardTitle}
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {row.layoutKey}
                      </motion.h4>
                      <div className={styles.infoGrid}>
                        <p><strong>📍</strong> {row.locationKey}</p>
                        <p><strong>📐</strong> {row.areaKey}</p>
                        <p><strong>💵</strong> {row.price}/sq.ft.</p>
                      </div>
                      <motion.button
                        onClick={() => navigate(row.nav)}
                        className={styles.viewButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {t.layouts.view}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </LazySection>
        </Suspense>
      </div>

      {/* ── Other Sections ── */}
      <Suspense fallback={<div className={styles.sectionLoader}>Loading...</div>}>
        <LazySection><UpcomingProjects /></LazySection>
        <LazySection><BookingSteps /></LazySection>
        <LazySection><SanctioningProcess /></LazySection>
        <LazySection><BankLoanProcess /></LazySection>
        <LazySection><WhyChoose /></LazySection>
      </Suspense>

      {/* ── Contact Section ── */}
      <motion.section
        className={styles.contactSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.buttonGroup}>
          <motion.button
            onClick={handleScheduleVisit}
            className={styles.contactButton}
            variants={fadeInUp}
            custom={1}
          >
            SCHEDULE A TOUR
          </motion.button>
          <motion.button
            className={styles.contactButton}
            variants={fadeInUp}
            custom={3}
            onClick={() => window.open(BROCHURE_PDF, "_blank")}
          >
            DOWNLOAD BROCHURE
          </motion.button>
        </div>
        <motion.div className={styles.callBanner} variants={fadeInUp} custom={4}>
          📞 Need More Information? Call Us: +91 94 94 94 28 94
        </motion.div>
      </motion.section>

      {/* ── Floating Buttons ── */}
      <div className={styles.floatingButtons}>
        <motion.a
          href="https://wa.me/919494942894?text=Hello!%20I'm%20interested%20in%20Saraswati%20Nagri%20layouts.%20Can%20you%20share%20more%20details?"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.floatBtn}
          style={{ backgroundColor: "#25D366" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.902.906-3.693-.222-.335a9.83 9.83 0 01-1.417-5.025 9.92 9.92 0 0110.015-9.865 9.865 9.865 0 019.865 9.865 9.92 9.92 0 01-9.865 9.865z" />
          </svg>
          <span className={styles.tooltip}>Chat on WhatsApp</span>
        </motion.a>

        <motion.a
          href="tel:+919494942894"
          className={styles.floatBtn}
          style={{ backgroundColor: "#007bff" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.55-.57a1.5 1.5 0 00-1.73.38l-2.1 2.1c-3.78-1.43-6.86-4.51-8.28-8.29l2.1-2.1a1.5 1.5 0 00.38-1.73c-.37-1.13-.57-2.32-.57-3.55 0-.55-.45-1-1-1H4.5C3.95 3 3.5 3.45 3.5 4c0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-2.51c0-.55-.45-1-1-1z" />
          </svg>
          <span className={styles.tooltip}>Call Now</span>
        </motion.a>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Home;