import React from "react";
import styles from "./Gallery.module.css";

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const Gallery = () => {

  const galleryItems = [
  { title: "Apartment", img: img1 },
  { title: "Living Room", img: img2 },
  { title: "Cozy Home", img: img1 },
  { title: "Modern Flat", img: img2 },
  { title: "Luxury Living", img: img1 },
  { title: "Happy Family", img: img2 },
  { title: "Scenic Room", img: img1 },
  { title: "Outdoor Lounge", img: img2 },
];

  return (
    <>
      <div className={styles.galleryPage}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1>Gallery</h1>
            <p className={styles.breadcrumbs}>
              <a href="/">Home</a> <span>|</span> Gallery
            </p>
          </div>
        </div>

        <div className={styles.galleryContainer}>
          {galleryItems.map((item, index) => (
            <div className={styles.galleryItem} key={index}>

              <img
                src={item.img}
                alt={item.title}
                className={styles.galleryImage}
              />
              <div className={styles.overlay}>
                <span className={styles.title}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
