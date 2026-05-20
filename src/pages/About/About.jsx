

import React from "react";
import styles from "./About.module.css";
import FeaturesCarousel from "../../components/FeaturesCarousel/FeaturesCarousel";

import blueprint from "../../assets/icons/blueprint.png";
import sold from "../../assets/icons/sold_out.png";
import layout from "../../assets/icons/layout.png";
import sofa from "../../assets/icons/sofa.png";
// import team1 from "../../assets/team1.jpg";
// import team2 from "../../assets/team2.jpg";
// import team3 from "../../assets/team3.jpg";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText} data-aos="fade-right">
          <h1>About Us</h1>
          <p>
            Shaping Nagpur’s skyline with trust, innovation, and over two decades of experience.
          </p>
        </div>
        <div className={styles.heroImage} data-aos="fade-left">
          <img src={img1} alt="Real Estate" />
        </div>
      </section>

      {/* Who We Are */}
      <section className={styles.intro} data-aos="fade-up">
        <h2>Who We Are</h2>
        <p>
          At <b>Saraswati Nagri</b>, we believe real estate is more than buildings — it’s about creating 
          communities where families thrive. With 20+ projects and 5000+ happy customers, 
          our journey is built on trust, quality, and innovation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.card} data-aos="zoom-in">
          <h3>Our Mission</h3>
          <p>
            To create sustainable, modern, and affordable living spaces that enhance lives 
            and contribute to Nagpur’s growth story.
          </p>
        </div>
        <div className={styles.card} data-aos="zoom-in" data-aos-delay="200">
          <h3>Our Vision</h3>
          <p>
            To be Nagpur’s most trusted real estate brand by delivering projects 
            that combine innovation, luxury, and value.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.valueCard} data-aos="fade-up">
          <h3>Trust</h3>
          <p>Over 5000 families have placed their trust in our projects.</p>
        </div>
        <div className={styles.valueCard} data-aos="fade-up" data-aos-delay="200">
          <h3>Vision</h3>
          <p>We plan with foresight to deliver modern, sustainable communities.</p>
        </div>
        <div className={styles.valueCard} data-aos="fade-up" data-aos-delay="400">
          <h3>Excellence</h3>
          <p>20+ projects completed with unmatched quality and design.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statBox} data-aos="fade-in">
          <img src={blueprint} alt="Units" />
          <h4>154</h4>
          <span>Area & Units</span>
        </div>
        <div className={styles.statBox} data-aos="fade-in" data-aos-delay="200">
          <img src={sold} alt="Plots Sold" />
          <h4>97</h4>
          <span>Plots Sold</span>
        </div>
        <div className={styles.statBox} data-aos="fade-in" data-aos-delay="400">
          <img src={layout} alt="Layouts" />
          <h4>10</h4>
          <span>Total Layouts</span>
        </div>
        <div className={styles.statBox} data-aos="fade-in" data-aos-delay="600">
          <img src={sofa} alt="Amenities" />
          <h4>40</h4>
          <span>Amenities</span>
        </div>
      </section>

      {/* Journey Gallery */}
      <section className={styles.journey}>
        <div className={styles.journeyImage} data-aos="fade-right">
          <img src={img1} alt="Journey Start" />
          <div className={styles.overlayText}>
            <h3>Our Beginning</h3>
            <p>Started with a vision to redefine real estate in Nagpur.</p>
          </div>
        </div>
        <div className={styles.journeyImage} data-aos="fade-left">
          <img src={img2} alt="Journey Growth" />
          <div className={styles.overlayText}>
            <h3>Our Growth</h3>
            <p>20+ successful projects and thousands of happy families.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard} data-aos="flip-left">
            {/* <img src={team1} alt="Team Member" /> */}
            <h4>Rahul Sharma</h4>
            <p>Founder & CEO</p>
          </div>
          <div className={styles.teamCard} data-aos="flip-left" data-aos-delay="200">
            {/* <img src={team2} alt="Team Member" /> */}
            <h4>Priya Verma</h4>
            <p>Head of Design</p>
          </div>
          <div className={styles.teamCard} data-aos="flip-left" data-aos-delay="400">
            {/* <img src={team3} alt="Team Member" /> */}
            <h4>Amit Patel</h4>
            <p>Sales Director</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialBox} data-aos="fade-up">
          <p>
            “Saraswati Nagri gave us more than just a home – they gave us a lifestyle.
            The process was smooth, and the quality exceeded our expectations.”
          </p>
          <h4>- Anjali & Rakesh</h4>
        </div>
        <div className={styles.testimonialBox} data-aos="fade-up" data-aos-delay="200">
          <p>
            “Professional team, timely delivery, and great community planning.
            Highly recommend them for anyone looking to invest in Nagpur.”
          </p>
          <h4>- Mehul Jain</h4>
        </div>
      </section>

      {/* Carousel */}
      <section className={styles.carousel} data-aos="fade-up">
        <h2>Why Choose Us</h2>
        <FeaturesCarousel />
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Find Your Dream Home?</h2>
        <p>Contact us today and be a part of Nagpur’s most trusted real estate family.</p>
        <button className={styles.ctaButton}>Get in Touch</button>
      </section>
    </div>
  );
};

export default About;
