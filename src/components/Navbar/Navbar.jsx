import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll detection ── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ── Track active section based on scroll (only on home page) ── */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["home", "about", "layout"];
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-80px 0px 0px 0px"
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, [location.pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* ── Scroll to section (works cross-page) ── */
  const handleSectionClick = useCallback(
    (sectionId) => {
      setActiveSection(sectionId);
      closeMenu();
      if (location.pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 250);
      }
    },
    [location.pathname, navigate, closeMenu]
  );

  /* ── Helper to check if a route/section is active ── */
  const isActive = (item) => {
    if (item === "home" || item === "about" || item === "layout") {
      return location.pathname === "/" && activeSection === item;
    }
    if (item === "gallery") {
      return location.pathname === "/gallery";
    }
    if (item === "contact") {
      return location.pathname === "/contact";
    }
    return false;
  };

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>

          {/* Logo */}
          <div
            className={styles.logo}
            onClick={() => { navigate("/"); closeMenu(); setActiveSection("home"); }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          >
            <img src={logo} alt="Saraswati Nagri" />
          </div>

          {/* Hamburger — only visible on mobile */}
          <button
            className={`${styles.menuButton} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Nav links */}
          <ul
            id="mobile-nav"
            className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}
          >
            <li>
              <span 
                onClick={() => handleSectionClick("home")}
                className={isActive("home") ? styles.active : ""}
              >
                Home
              </span>
            </li>
            <li>
              <span 
                onClick={() => handleSectionClick("about")}
                className={isActive("about") ? styles.active : ""}
              >
                About Us
              </span>
            </li>
            <li>
              <span 
                onClick={() => handleSectionClick("layout")}
                className={isActive("layout") ? styles.active : ""}
              >
                Projects
              </span>
            </li>
            <li>
              <Link 
                to="/gallery" 
                onClick={closeMenu}
                className={isActive("gallery") ? styles.active : ""}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={isActive("contact") ? styles.active : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>

        </div>
      </nav>

      {/* ── Dark overlay — click to close ── */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;