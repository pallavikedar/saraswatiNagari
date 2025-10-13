import React, { useState } from "react";
import styles from "./Map.module.css";
import mapImg from "../../assets/map.png";

const plots = [
  { id: 1, top: "64.8%", left: "83%", opacity: "0.7" },
  { id: 2, top: "64.8%", left: "76.5%", opacity: "0.7" },
  { id: 3, top: "64.8%", left: "70.8%", opacity: "0.7" },
  { id: 4, top: "64.8%", left: "65%", opacity: "0.7" },
  { id: 5, top: "64.8%", left: "59.5%", opacity: "0.7" },
  { id: 6, top: "64.8%", left: "54.4%", opacity: "0.7" },
  { id: 7, top: "64.8%", left: "49%", opacity: "0.7" },
  { id: 8, top: "64.8%", left: "43.5%", opacity: "0.7" },
  { id: 9, top: "64.8%", left: "37.7%", opacity: "0.7" },
  { id: 10, top: "64.8%", left: "32.2%", opacity: "0.7" },
  { id: 11, top: "64.8%", left: "27.2%", opacity: "0.7" },
  { id: 12, top: "64.8%", left: "22.2%", opacity: "0.7" },
  { id: 13, top: "64.8%", left: "16.4%", opacity: "0.7" },
  { id: 14, top: "64.8%", left: "10.8%", opacity: "0.7" },
  { id: 15, top: "65%", left: "5.5%", opacity: "0.7" },
  { id: 16, top: "36.5%", left: "5.5%", opacity: "0.7" },
  { id: 17, top: "36.5%", left: "10.8%", opacity: "0.7" },
  { id: 18, top: "36.5%", left: "16.4%", opacity: "0.7" },
  { id: 19, top: "36.5%", left: "22.2%", opacity: "0.7" },
  { id: 20, top: "36.5%", left: "27.2%", opacity: "0.7" },
  { id: 21, top: "36.5%", left: "32.2%", opacity: "0.7" },
  { id: 22, top: "36.5%", left: "37.7%", opacity: "0.7" },
  { id: 23, top: "36.5%", left: "43.5%", opacity: "0.7" },
  { id: 24, top: "36.5%", left: "49.7%", opacity: "0.7" }, // Open space
  { id: 25, top: "36.5%", left: "54%", opacity: "0.7" },
  { id: 26, top: "36.5%", left: "59.4%", opacity: "0.7" },
  { id: 27, top: "36.5%", left: "65%", opacity: "0.7" },
  { id: 28, top: "36.5%", left: "70.8%", opacity: "0.7" },
  { id: 29, top: "36.5%", left: "76.2%", opacity: "0.7" },
  { id: 30, top: "36.5%", left: "84.2%", opacity: "0.7" },
  { id: 31, top: "36.5%", left: "92.2%", opacity: "0.7" },
];

const data = [
  {
    id: 1,
    size: "0.20 acres",
    price: "₹75,000",
    type: "Standard Lot",
    status: "sold",
  },
  {
    id: 2,
    size: "0.30 acres",
    price: "₹95,000",
    type: "Premium Lot",
    status: "sold",
  },
  {
    id: 3,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 4,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 5,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 6,
    size: "0.25 acres",
    price: "₹85,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 7,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 8,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 9,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 10,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 11,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 12,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 13,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 14,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 15,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 16,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 17,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 18,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 19,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 20,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 21,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 22,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 23,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 24,
    size: "1.00 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 25,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 26,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 27,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 28,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 29,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
  {
    id: 30,
    size: "1.00 acres",
    price: "N/A",
    type: "Open Space",
    status: "open",
  },
  {
    id: 31,
    size: "0.40 acres",
    price: "₹120,000",
    type: "Corner Lot",
    status: "sold",
  },
];

const Map = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  const handleClick = (id) => {
    const plotDetails = data.find((item) => item.id === id);
    setSelectedPlot(plotDetails || null);
  };

  const getStatusClass = (status) => {
    if (status === "sold") return styles.statusSold;
    if (status === "reserved") return styles.statusReserved;
    if (status === "open") return styles.statusOpen;
    return "";
  };

  return (
    <div className={styles.container}>
      {/* Map */}
      <div className={styles.mapContainer}>
        <img src={mapImg} alt="Map" className={styles.image} />
        {plots.map((plot) => {
          const plotData = data.find((item) => item.id === plot.id);
          let bgColor  = "green";
          
          if (plotData?.status === "sold") bgColor = "red";
          if (plotData?.status === "reserved") bgColor = "yellow";
          if (plotData?.status === "open") bgColor = "blue";
           

          return (
            <button
              key={plot.id}
              className={`${styles.plotButton} ${styles[`plotButton${plot.id}`]}`}
              style={{
                top: plot.top,
                left: plot.left,
                backgroundColor: bgColor,
                color: bgColor,
                opacity: plot.opacity || 1,
              }}
              onClick={() => handleClick(plot.id)}
            >
              {plot.id}
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {selectedPlot && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedPlot(null)}
            >
              ✕
            </button>

            <h2>{selectedPlot.type === "Open Space" ? "Open Space" : `Plot ${selectedPlot.id}`}</h2>
            <span
              className={`${styles.status} ${getStatusClass(
                selectedPlot.status
              )}`}
            >
              {selectedPlot.status.charAt(0).toUpperCase() +
                selectedPlot.status.slice(1)}
            </span>

            <div className={styles.plotDetails}>
              <p>
                <strong>Size:</strong> {selectedPlot.size}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                <span className={styles.price}>
                  {selectedPlot.price === "N/A" ? "Not for Sale" : selectedPlot.price}
                </span>
              </p>
              <p>
                <strong>Type:</strong> {selectedPlot.type}
              </p>
            </div>

            <p className={styles.contactInfo}>
              {selectedPlot.status === "sold"
                ? "This plot has been sold."
                : selectedPlot.status === "open"
                ? "This is an open space area, not sold for purchase."
                : "This plot is reserved."}
              Contact our sales team for more information.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;