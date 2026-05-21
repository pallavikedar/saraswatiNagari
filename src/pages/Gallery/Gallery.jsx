import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {

  const galleryItems = [
  {  img:import.meta.env.VITE_MAP_IMAGE_URL},
  {  img: import.meta.env.VITE_MAP_IMAGE_URL1 },
  {  img: import.meta.env.VITE_MAP_IMAGE_URL2 },
  { img: import.meta.env.VITE_MAP_IMAGE_URL3},
  {  img: import.meta.env.VITE_MAP_IMAGE_URL4 },
  { img: import.meta.env.VITE_MAP_IMAGE_URL5 },
  
  
];

  return (
    <>
      <div className={styles.galleryPage}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1>Gallery</h1>
            {/* <p className={styles.breadcrumbs}>
              <a href="/">Home</a> <span>|</span> Gallery
            </p> */}
          </div>
        </div>

        <div className={styles.galleryContainer}>
          {galleryItems.map((item, index) => (
            <div className={styles.galleryItem} key={index}>

              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
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
