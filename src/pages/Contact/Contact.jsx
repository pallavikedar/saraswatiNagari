import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import homeImage from "../../assets/layout6.jpg"; // Updated banner image for contact page
import { 
  MdOutlineLocationOn, 
  MdOutlineEmail, 
  MdAccessTime, 
  MdHelpOutline,
  MdPhoneInTalk,
  MdPlace,
  MdEmail,
  MdSchedule,
  MdArrowForward,
  MdChat
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { 
      y: -8, 
      transition: { duration: 0.3 },
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
    },
  };

  const faqItems = [
    {
      question: "How soon will I get a response?",
      answer: "We usually respond within 24 hours on business days. For urgent inquiries, please call us directly."
    },
    {
      question: "Can I visit your office directly?",
      answer: "Yes, feel free to drop by during our business hours. We recommend scheduling an appointment for a dedicated consultation."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Absolutely! We offer virtual consultations via video call. You can book a consultation through phone or email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, cheques, and various online payment methods. EMI options are also available."
    },
    {
      question: "Is there a site visit available?",
      answer: "Yes, we organize site visits for serious buyers. Please contact us to schedule a convenient time."
    },
    {
      question: "What are the document requirements?",
      answer: "We'll guide you through the entire documentation process. Basic requirements include ID proof, address proof, and income documents for loan eligibility."
    }
  ];

  return (
    <motion.div
      className={styles.contactPage}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Banner */}
      <motion.div
        className={styles.banner}
        // style={{ backgroundImage: `url(${homeImage})` }}
        variants={bannerVariants}
      >
        {/* <motion.div className={styles.bannerOverlay} />
        <motion.div className={styles.bannerContent} variants={itemVariants}>
          <motion.h1 variants={itemVariants}>Get In Touch</motion.h1>
          <motion.p variants={itemVariants}>
            We're here to help and answer any questions you might have
          </motion.p>
          <motion.div 
            className={styles.bannerIndicator}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MdArrowForward />
          </motion.div>
        </motion.div> */}
      </motion.div>

      {/* FAQ Section - FIRST */}
      <motion.div
        className={styles.faqSection}
        variants={containerVariants}
      >
        <motion.div className={styles.faqHeader} variants={itemVariants}>
          <MdHelpOutline className={styles.faqIcon} />
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common queries about our properties and services</p>
        </motion.div>
        
        <motion.div className={styles.faqGrid} variants={containerVariants}>
          {faqItems.map((faq, index) => (
            <motion.div 
              key={index}
              className={styles.faqCard}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={styles.faqQuestion}>
                <MdChat className={styles.faqQuestionIcon} />
                <h4>{faq.question}</h4>
              </div>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Info Cards - SECOND */}
      <motion.div
        className={styles.contactInfoSection}
        variants={containerVariants}
      >
        <motion.div className={styles.sectionHeader} variants={itemVariants}>
          <h2>Contact Information</h2>
          <p>Reach out to us through any of these channels</p>
        </motion.div>

        <motion.div className={styles.infoGrid} variants={containerVariants}>
          {/* Phone Card */}
          <motion.div 
            className={styles.infoCard}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={styles.cardIconWrapper}>
              <MdPhoneInTalk className={styles.cardIcon} />
            </div>
            <h3>Phone Numbers</h3>
            <div className={styles.contactDetails}>
              <a href="tel:+919494942894" className={styles.contactLink}>
                <span>📞</span> +91 94949 42894
              </a>
              <a href="tel:+91982338866" className={styles.contactLink}>
                <span>📞</span> +91 98233 88866
              </a>
              <a href="tel:+917888028866" className={styles.contactLink}>
                <span>📞</span> +91 78880 28866
              </a>
            </div>
            <div className={styles.whatsappGroup}>
              <FaWhatsapp className={styles.whatsappIcon} />
              <span>Available on WhatsApp</span>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div 
            className={styles.infoCard}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={styles.cardIconWrapper}>
              <MdPlace className={styles.cardIcon} />
            </div>
            <h3>Office Address</h3>
            <div className={styles.contactDetails}>
              <p>302, Sai Shraddha Appartment,</p>
              <p>Behind White House Bungalow,</p>
              <p>Utkarsh Society, Dabha-Wadi Road,</p>
              <p className={styles.city}>Nagpur - 440023</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Sai+Shraddha+Apt+Dabha-Wadi+Road+Nagpur" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            className={styles.infoCard}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={styles.cardIconWrapper}>
              <MdEmail className={styles.cardIcon} />
            </div>
            <h3>Email Us</h3>
            <div className={styles.contactDetails}>
              <a href="mailto:info@saraswatinagri.com" className={styles.emailLink}>
                info@saraswatinagri.com
              </a>
              <p className={styles.emailNote}>We respond within 24 hours</p>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div 
            className={styles.infoCard}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={styles.cardIconWrapper}>
              <MdSchedule className={styles.cardIcon} />
            </div>
            <h3>Business Hours</h3>
            <div className={styles.hoursList}>
              <div className={styles.hourItem}>
                <span>Monday - Friday:</span>
                <strong>9:00 AM - 6:00 PM</strong>
              </div>
              <div className={styles.hourItem}>
                <span>Saturday:</span>
                <strong>10:00 AM - 4:00 PM</strong>
              </div>
              <div className={styles.hourItem}>
                <span>Sunday:</span>
                <strong>Closed</strong>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Map Section - THIRD */}
      <motion.div 
        className={styles.mapSection}
        variants={containerVariants}
      >
        <motion.div className={styles.mapContainer} variants={itemVariants}>
          <div className={styles.mapHeader}>
            <h3>Find Us Here</h3>
            <p>Visit our office for a personal consultation</p>
          </div>
          <motion.iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.637619819438!2d79.012322!3d21.166815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c4b5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sSai%20Shraddha%20Apartment!5e0!3m2!1sen!2sin!4v1749541710264!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className={styles.mapIframe}
          />
        </motion.div>
      </motion.div>

      {/* CTA Banner */}
      <motion.div 
        className={styles.ctaBanner}
        variants={itemVariants}
      >
        <div className={styles.ctaContent}>
          <h3>Ready to Find Your Dream Property?</h3>
          <p>Schedule a site visit or consultation with our experts today</p>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/919494942894" className={styles.ctaWhatsapp}>
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <a href="tel:+919494942894" className={styles.ctaCall}>
              <MdPhoneInTalk /> Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;