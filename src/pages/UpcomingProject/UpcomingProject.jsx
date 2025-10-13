import React, { useEffect, useRef, useState } from "react";
import styles from "./UpcomingProjects.module.css";

const UpcomingProjects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const locations = [
    "Chicholi",
    "Fetri",
    "Khadgaon",
    "Hingna",
    "Karli",
    "Kalmeshwar",
    "Lava",
    "Koradi",
    "Wardha Road",
    "Umred Road",
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <h2 className={`${styles.heading} ${visible ? styles.animate : ""}`}>
        Upcoming Projects
      </h2>
      <div className={styles.grid}>
        {locations.map((loc, i) => (
          <div
            key={i}
            className={`${styles.card} ${visible ? styles.showCard : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <span className={styles.line}></span>
            <h3>{loc}</h3>
          </div>
        ))}
      </div>

      <p className={`${styles.note} ${visible ? styles.fadeIn : ""}`}>
        (Over <strong>1000 acres</strong> of future development.)
      </p>
    </section>
  );
};

export default UpcomingProjects;
