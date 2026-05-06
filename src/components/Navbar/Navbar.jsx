import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler with throttle
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleSectionClick = useCallback((sectionId) => {
    closeMenu();
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [location.pathname, navigate, closeMenu]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={() => { navigate("/"); closeMenu(); }}>
            <img src={logo} alt="Saraswati Nagri Logo" />
          </div>

          <button
            className={`${styles.menuButton} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            <li>
              <span onClick={() => handleSectionClick("home")}>Home</span>
            </li>
            <li>
              <span onClick={() => handleSectionClick("about")}>About Us</span>
            </li>
            <li>
              <span onClick={() => handleSectionClick("layout")}>Projects</span>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay to close menu on outside click */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;
