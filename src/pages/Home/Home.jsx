import React from "react";
import styles from "./Home.module.css";
import img1 from "../../assets/icons/img1.png";
import img2 from "../../assets/icons/img2.png";
import img3 from "../../assets/icons/img3.png";
import img4 from "../../assets/icons/img4.png";
import img5 from "../../assets/icons/img5.png";
import img6 from "../../assets/icons/img6.png";
import img7 from "../../assets/icons/img7.png";
import img8 from "../../assets/icons/img8.png";
import img9 from "../../assets/icons/img9.png";
import blueprint from "../../assets/icons/blueprint.png";
import sold from "../../assets/icons/sold_out.png";
import layout from "../../assets/icons/layout.png";
import sofa from "../../assets/icons/sofa.png";
import FeaturesCarousel from "../../components/FeaturesCarousel/FeaturesCarousel";
import video from '../../assets/VN20250826_154452.mp4'
import { 
  FaRoad, FaBolt, FaChild, FaWalking, FaTree 
} from "react-icons/fa";
import { 
  MdWaterDrop, MdElectricBolt 
} from "react-icons/md";
import { 
  GiBrickWall, GiWaterRecycling, GiWaterfall 
} from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

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

const tableData = [
  {
    id: 1,
    layout: "Saraswati Nagri 1",
    location: "Behind Podar International School, Godhni",
    area: "2 acres",
    launchYear: 2019,
    status: "Sold",
  },
  {
    id: 2,
    layout: "Saraswati Nagri 2",
    location: "Bokhara Square, near Godhni",
    area: "7.5 acres",
    launchYear: 2000,
    status: "Sold",
  },
  {
    id: "3, 4 & 5",
    layout: "Saraswati Nagri 3, 4 & 5",
    location: "Bokhara Square, near Tuli International School",
    area: "11 acres",
    launchYear: 2022,
    status: "Available",
  },
  {
    id: 6,
    layout: "Saraswati Nagri 6",
    location: "Lonara, beside Jhulelal Engineering College",
    area: "3.25 acres",
    launchYear: 2022,
    status: "Available",
  },
  {
    id: 7,
    layout: "Saraswati Nagri 7",
    location: "Lonara, beside Central India College of Nursing and Pharmacy",
    area: "4.5 acres",
    launchYear: 2023,
    status: "Sold",
  },
  {
    id: 8,
    layout: "Saraswati Nagri 8",
    location: "Lava, near Dabha and Wadi, in front of Sarojini Public School",
    area: "2.5 acres",
    launchYear: 2024,
    status: "Available",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("our-layouts");
  };
  return (
    <>
      <div className={styles.homeContainer}>
        {/* Carousel Banner Here */}
        <div className={styles.bannerCarousel}>
  <video src={video}  autoPlay loop muted className={styles.bannerVideo} />
  {/* Your carousel component goes here */}
</div>

        {/* Welcome Section */}
<section className={styles.section}>
      <h1 className={styles.welcomeTitle}>
        Welcome to <span>Saraswati Nagri</span>
      </h1>
      <h2 className={styles.subheading}>
        A WELL-RENOWNED AND TRUSTED BRAND IN NAGPUR'S REAL ESTATE INDUSTRY
      </h2>

      <div className={styles.textContainer}>
        <p>
          With over two decades of experience, our founder and owner,{" "}
          <strong>Mr. Sachin Ingle</strong>, has transformed the real estate
          landscape of the city. A young, energetic, and highly motivated leader,
          Mr. Ingle inspires his team to achieve excellence in every project.
        </p>
        <p>
          Under his visionary leadership, Saraswati Nagri has successfully
          completed more than 20 projects & earned the trust & satisfaction of
          over 5,000 happy customers.
        </p>
      </div>
    </section>

        {/* Amenities Section */}
   <section className={styles.amenitiesSection}>
  <h2 className={styles.amenitiesTitle}>
    At Saraswati Nagri, we specialize in NMRDA-sanctioned layouts,
    offering meticulously planned developments with top-notch amenities such as:
  </h2>

  <div className={styles.amenitiesGrid}>
    {amenitiesList.map((item, index) => (
      <div className={styles.amenityItem} key={index}>
        <span className={styles.icon}>{item.icon}</span>
        <p>{item.title}</p>
      </div>
    ))}
  </div>

  <p className={styles.amenitiesFooter}>
    Additionally, our child company, <span>SS Construction</span>, takes care of all
    development works to ensure the highest quality standards. We believe in
    uncompromising quality and strive to create exceptional living spaces tailored
    to meet the needs of modern families.
  </p>
</section>



        {/* Stats Section */}
        <section className={styles.statsSection}>
      <div className={styles.statItem}>
        <FaRegBuilding className={styles.icon} />
        <h4>Area & Units</h4>
        <p>154</p>
      </div>
      <div className={styles.statItem}>
        <FaHandshake className={styles.icon} />
        <h4>Plots Sold</h4>
        <p>97</p>
      </div>
      <div className={styles.statItem}>
        <MdOutlineMapsHomeWork className={styles.icon} />
        <h4>Total Layout</h4>
        <p>10</p>
      </div>
      <div className={styles.statItem}>
        <GiSofa className={styles.icon} />
        <h4>Our Amenities</h4>
        <p>40</p>
      </div>
    </section>
        {/* Features Carousel Section  */}
        <FeaturesCarousel />

        {/* Table Section */}
        <section className={styles.layoutSection}>
      <h2 className={styles.sectionTitle}>
        WIDE RANGE OF STYLISH LAYOUT AVAILABILITY
      </h2>
      <h3 className={styles.sectionSubtitle}>SELECT AVAILABLE LAYOUT</h3>

      {/* Layout Cards */}
<div className={styles.cardGrid}>
  {tableData.map((row) => (
    <div key={row.id} className={styles.card}>
      <div className={`${styles.statusBadge} ${row.status === "Available" ? styles.available : styles.sold}`}>
        {row.status}
      </div>
      <h4 className={styles.cardTitle}>{row.layout}</h4>
      <p><strong>📍 Location:</strong> {row.location}</p>
      <p><strong>📐 Area:</strong> {row.area}</p>
      <p><strong>📅 Launch Year:</strong> {row.launchYear}</p>
      <button onClick={handleClick} className={styles.viewButton}>VIEW</button>
    </div>
  ))}
</div>



      {/* CTA Section */}
      <section className={styles.contactSection}>
        <div className={styles.buttonGroup}>
          <button className={styles.contactButton}>SCHEDULE A TOUR</button>
          <button className={styles.contactButton}>ASK A QUESTION</button>
          <button className={styles.contactButton}>DOWNLOAD BROCHURE</button>
        </div>

        <div className={styles.callBanner}>
          <span className={styles.callText}>
            Need More Information? Call Us Today
          </span>
          <span className={styles.phoneNumber}>
            📞 +91 9823388866
          </span>
        </div>
      </section>
    </section>

        {/* Contact Section */}
        {/* 
        
      </section> */}
      </div>
    </>
  );
};

export default Home;
