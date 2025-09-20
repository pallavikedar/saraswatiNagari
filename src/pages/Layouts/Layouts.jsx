import React from "react";
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

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Saraswati Nagri – Premium Plot Layouts</h1>

      {/* Plot Status Legend */}
      <div className={styles.legend}>
        {[
          { status: "Available", class: styles.statusAvailable },
          { status: "Sold", class: styles.statusSold },
          { status: "Reserved", class: styles.statusReserved },
          { status: "Open", class: styles.statusOpen },
        ].map((item, i) => (
          <div className={styles.legendItem} key={i}>
            <div className={`${styles.statusBox} ${item.class}`}></div>
            <span className={styles.legendText}>{item.status}</span>
          </div>
        ))}
      </div>

      {/* Interactive Map */}
      <div className={styles.mapWrapper}>
        <Map />
      </div>

      {/* Featured Plot Layout */}
      <section className={styles.featuredPlot}>
        <h2 className={styles.sectionTitle}>Featured Premium Layout</h2>
        <div className={styles.featuredContent}>
          <img
            src={image}
            alt="Featured Plot Layout"
            className={styles.featuredImage}
          />
          <div className={styles.featuredText}>
            <p>
              Our <strong>Premium Residential Plot</strong> is located in the heart of
              Saraswati Nagri. Designed with meticulous planning, wide cement roads,
              underground drainage, and abundant green zones, it represents a perfect
              balance of modern infrastructure and serene living.
            </p>
            <p>
              Each plot is well-demarcated, ensuring clear boundaries and long-term value.
              With easy access to highways, schools, and essential services, this layout
              is ideal for building your dream home or for long-term investment.
            </p>
          </div>
        </div>
      </section>

      {/* 360° Virtual Tour */}
      <section className={styles.virtualTour}>
        <h2 className={styles.sectionTitle}>360° Virtual Experience</h2>
        <p className={styles.virtualText}>
          Immerse yourself in our project with this interactive 360° showcase.
          Explore every detail of the layout before visiting in person.
        </p>
        <div className={styles.virtualFrame}>
          {/* Replace with actual 360 iframe/VR viewer */}
          <img
            src={image}
            alt="360 View Placeholder"
            className={styles.virtualImage}
          />
          <div className={styles.overlay}>Drag to Explore 360°</div>
        </div>
      </section>

      {/* Amenities */}
      <section className={styles.amenitiesSection}>
        <h2 className={styles.sectionTitle}>World-Class Infrastructure & Amenities</h2>
        <div className={styles.amenitiesGrid}>
          {amenitiesList.map((item, index) => (
            <div className={styles.amenityItem} key={index}>
              <span className={styles.icon}>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <p className={styles.amenitiesFooter}>
          Backed by <span>SS Construction</span>, every project is executed with
          unmatched precision, uncompromising quality, and a vision to create
          sustainable, family-friendly communities.
        </p>
      </section>
    </div>
  );
};

export default Layouts;
