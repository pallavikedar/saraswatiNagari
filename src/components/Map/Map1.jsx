

// import React, { useState, useRef, useEffect } from "react";
// import image from "../../assets/layouts1.jpg";
// import { useNavigate } from "react-router-dom";

// // CSS Styles
// const styles = `
// .container {
//   width: 100%;
//   height: 100vh;
//   background: linear-gradient(135deg, #f5f7fa 0%, #ffffffff 100%);
//   display: flex;
//   flex-direction: column;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
// }

// .header {
//   background: linear-gradient(135deg, #fffcf7ff 0%, #fffbf4ff 100%);
//   color: #876730ff;
//   padding: 2rem;
//   text-align: center;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// }

// .headerTitle {
//   font-size: 2rem;
//   font-weight: 700;
//   margin: 0 0 1rem 0;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
// }

// .legend {
//   display: flex;
//   gap: 2rem;
//   justify-content: center;
//   flex-wrap: wrap;
//   font-size: 0.95rem;
// }

// .legendItem {
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: rgba(255, 255, 255, 0.2);
//   padding: 0.5rem 1rem;
//   border-radius: 25px;
//   backdrop-filter: blur(10px);
// }

// .legendColor {
//   width: 1.2rem;
//   height: 1.2rem;
//   border-radius: 50%;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// }

// .legendColor.sold { background-color: #ef4444; }
// .legendColor.reserved { background-color: #eab308; }
// .legendColor.available { background-color: #10b981; }
// .legendColor.open { background-color: #3b82f6; }

// .mainContent {
//   display: grid;
//   grid-template-columns: 1fr 400px;
//   gap: 1.5rem;
//   padding: 1.5rem;
//   flex: 1;
// }

// /* Map Section */
// .mapSection {
//   background: white;
//   // border-radius: 1rem;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
// }

// .mapHeader {
//   background: linear-gradient(135deg, #fcf6edff 0%, #fcf1dfff 100%);
//   color: #9c7946ff;
//   padding: 1rem 1.5rem;
//   font-weight: 600;
//   font-size: 1.1rem;
// }

// .scrollContainer {
//   flex: 1;
//   overflow: auto;
//   background-color: #f9fafb;
//   padding: 1.5rem;
// }

// .scrollContainer::-webkit-scrollbar {
//   width: 10px;
//   height: 10px;
// }

// .scrollContainer::-webkit-scrollbar-track {
//   background: #e5e7eb;
//   border-radius: 10px;
// }

// .scrollContainer::-webkit-scrollbar-thumb {
//   background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%);
//   border-radius: 10px;
// }

// .mapWrapper {
//   display: inline-block;
//   min-width: 100%;
// }

// .mapContainer {
//   position: relative;
//   display: inline-block;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
//   border-radius: 0.75rem;
//   overflow: hidden;
// }

// .image {
//   display: block;
//   width: 100%;
//   height: auto;
//   min-width: 800px;
//   max-width: 1200px;
// }

// .plotButton {
//   position: absolute;
//   border: 2px solid #ffffff;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
//   color: #ffffff;
//   font-weight: 700;
//   font-size: clamp(0.7rem, 0.9vw, 0.9rem);
//   cursor: pointer;
//   transition: all 0.2s ease;
//   z-index: 10;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   backdrop-filter: blur(2px);
//   text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
// }

// .plotButton:hover {
//   transform: scale(1.1);
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
//   z-index: 20;
//   border-width: 3px;
// }

// .plotButton.selected {
//   border-color: #fbbf24;
//   border-width: 4px;
//   box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
//   z-index: 25;
// }

// /* Status Panel */
// .statusPanel {
//   background: white;
//   border-radius: 1rem;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   max-height: calc(120vh - 250px);
// }

// .statusHeader {
//       background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%)
//   color: white;
//   padding: 1rem 1.5rem;
//   font-weight: 600;
//   font-size: 1.1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;
// }

// .statusGrid {
//   overflow-y: auto;
//   padding: 1rem;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   gap: 0.75rem;
// }

// .statusGrid::-webkit-scrollbar {
//   width: 8px;
// }

// .statusGrid::-webkit-scrollbar-track {
//   background: #f3f4f6;
// }

// .statusGrid::-webkit-scrollbar-thumb {
//       background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%)
//   border-radius: 10px;
// }

// .plotCard {
//   background: white;
//   border-radius: 0.75rem;
//   padding: 2rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   border: 2px solid transparent;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
//   position: relative;
//   overflow: hidden;
// }

// .plotCard:hover {
//   transform: translateY(-4px);
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
//   border-color: #667eea;
// }

// .plotCard.selected {
//   border-color: #fbbf24;
//   background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
//   box-shadow: 0 8px 20px rgba(251, 191, 36, 0.3);
// }

// .plotCard::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 4px;
// }

// .plotCard.sold::before { background: #ef4444; }
// .plotCard.reserved::before { background: #eab308; }
// .plotCard.available::before { background: #10b981; }
// .plotCard.open::before { background: #3b82f6; }

// .plotNumber {
//   font-size: 1.2rem;
//   font-weight: 800;
//   color: #34332dff;
//   margin-bottom: 0.5rem;
// }

// .plotType {
//   font-size: 0.75rem;
//   color: #6b7280;
//   margin-bottom: 0.5rem;
//   font-weight: 500;
// }

// .plotSize {
//   font-size: 0.8rem;
//   color: #374151;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// }

// .plotPrice {
//   font-size: 0.9rem;
//   font-weight: 700;
//   color: #059669;
//   margin-bottom: 0.5rem;
// }

// .statusBadge {
//   display: inline-block;
//   padding: 0.25rem 0.75rem;
//   border-radius: 12px;
//   font-size: 0.7rem;
//   font-weight: 600;
//   text-transform: uppercase;
// }

// .statusBadge.sold {
//   background-color: #fee2e2;
//   color: #991b1b;
// }

// .statusBadge.reserved {
//   background-color: #fef3c7;
//   color: #92400e;
// }

// .statusBadge.available {
//   background-color: #d1fae5;
//   color: #065f46;
// }

// .statusBadge.open {
//   background-color: #dbeafe;
//   color: #1e40af;
// }
// .button1{
//   padding:10px;
//    background-color: #0a7a2d;
//   color: white;
//   }
// /* Modal */
// .modalOverlay {
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.7);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   padding: 1rem;
//   animation: fadeIn 0.2s ease;
// }

// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }

// .modalContent {
//   background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
//   border-radius: 1.5rem;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//   max-width: 500px;
//   width: 100%;
//   padding: 2rem;
//   position: relative;
//   animation: slideUp 0.3s ease;
// }

// @keyframes slideUp {
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// }

// .closeButton {
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: #f3f4f6;
//   border: none;
//   color: #6b7280;
//   font-size: 1.5rem;
//   font-weight: 700;
//   cursor: pointer;
//   padding: 0.5rem;
//   line-height: 1;
//   transition: all 0.2s ease;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .closeButton:hover {
//   background: #ef4444;
//   color: white;
// }

// .modalContent h2 {
//   font-size: 1.75rem;
//   font-weight: 700;
//   color: #1f2937;
//   margin: 0 0 1rem 0;
//       background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%)
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .modalStatus {
//   display: inline-block;
//   padding: 0.5rem 1rem;
//   border-radius: 20px;
//   font-size: 0.875rem;
//   font-weight: 600;
//   border: 2px solid;
//   margin-bottom: 1.5rem;
//   text-transform: uppercase;
// }

// .modalStatus.sold {
//   background-color: #fee2e2;
//   color: #991b1b;
//   border-color: #fca5a5;
// }

// .modalStatus.reserved {
//   background-color: #fef3c7;
//   color: #92400e;
//   border-color: #fcd34d;
// }

// .modalStatus.available {
//   background-color: #d1fae5;
//   color: #065f46;
//   border-color: #6ee7b7;
// }

// .modalStatus.open {
//   background-color: #dbeafe;
//   color: #1e40af;
//   border-color: #93c5fd;
// }

// .plotDetails {
//   background: white;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   margin-bottom: 1.5rem;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// }

// .plotDetails p {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.75rem 0;
//   border-bottom: 1px solid #e5e7eb;
//   margin: 0;
//   font-size: 1rem;
// }

// .plotDetails p:last-child {
//   border-bottom: none;
// }

// .plotDetails strong {
//   font-weight: 600;
//   color: #374151;
// }

// .price {
//   font-weight: 700;
//   font-size: 1.25rem;
//   background: linear-gradient(135deg, #10b981 0%, #059669 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .contactInfo {
//   font-size: 0.95rem;
//   color: #4b5563;
//   background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
//   padding: 1rem;
//   border-radius: 0.75rem;
//   margin: 0;
//   line-height: 1.6;
//   border-left: 4px solid #3b82f6;
// }

// @media (max-width: 640px) {
// .container {
  
//   height: 200vh;
  
// }
//   .header { 
//     padding: 1.5rem 1rem; 
//   }
//   .headerTitle { 
//     font-size: 1.5rem; 
//   }
//   .legend { 
//     gap: 1rem; 
//     font-size: 0.85rem; 
//   }
  
//   .statusGrid { 
//     grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
//   }
//   .modalContent { 
//     padding: 1.5rem; 
//   }
//   .mainContent {
//     display: flex !important; /* Force flex over grid for reliable stacking */
//     flex-direction: column !important; /* Vertical stack: map top, status bottom */
//     gap: 1rem;
//     padding: 1rem;
//     height: auto; /* Ensure full height availability */
//     min-height: 0; /* Allow shrinking if needed, but flex children will expand */
//   }


// }
// `;

// const plots = [
//   { id: 1, top: "355px", left: "687px", width: "157px", height: "65px" },
//   { id: 2, top: "354px", left: "626px", width: "62px", height: "69px" },
//   { id: 3, top: "353px", left: "586px", width: "41px", height: "71px" },
//   { id: 4, top: "351px", left: "549px", width: "38px", height: "74px" },
//   { id: 5, top: "347px", left: "506px", width: "44px", height: "80px" },
//   { id: 6, top: "344px", left: "461px", width: "46px", height: "88px" },
//   { id: 7, top: "342px", left: "417px", width: "46px", height: "91px" },
//   { id: 8, top: "340px", left: "388px", width: "46px", height: "91px" },
//   { id: 9, top: "338px", left: "332px", width: "46px", height: "91px" },
//   { id: 10, top: "335px", left: "290px", width: "46px", height: "91px" },
//   { id: 11, top: "332px", left: "250px", width: "46px", height: "91px" },
//   { id: 12, top: "330px", left: "200px", width: "46px", height: "91px" },
//   { id: 13, top: "328px", left: "150px", width: "46px", height: "91px" },
//   { id: 14, top: "326px", left: "100px", width: "46px", height: "91px" },
//   { id: 15, top: "324px", left: "50px", width: "46px", height: "91px" },
//   { id: 16, top: "35%", left: "34.8%", width: "3.5%", height: "23%" },
//   { id: 17, top: "35%", left: "38.6%", width: "3.5%", height: "23%" },
//   { id: 18, top: "35%", left: "42.4%", width: "3.5%", height: "23%" },
//   { id: 19, top: "35%", left: "46.2%", width: "3.5%", height: "23%" },
//   { id: 20, top: "35%", left: "50%", width: "3.5%", height: "23%" },
//   { id: 21, top: "35%", left: "53.8%", width: "3.5%", height: "23%" },
//   { id: 22, top: "35%", left: "57.6%", width: "3.5%", height: "23%" },
//   { id: 23, top: "35%", left: "61.4%", width: "3.5%", height: "23%" },
//   { id: 24, top: "35%", left: "65.2%", width: "3.5%", height: "23%" },
//   { id: 25, top: "35%", left: "69%", width: "3.5%", height: "23%" },
//   { id: 26, top: "35%", left: "72.8%", width: "3.5%", height: "23%" },
//   { id: 27, top: "35%", left: "76.6%", width: "3.5%", height: "23%" },
//   { id: 28, top: "35%", left: "80.4%", width: "3.5%", height: "23%" },
//   { id: 29, top: "35%", left: "85.5%", width: "6%", height: "23%" },
//   { id: 30, top: "35%", left: "91.2%", width: "3.5%", height: "23%" },
// ];

// const data = [
//   { id: 1,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 2, price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 3, price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 4,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 5,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 6,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 7,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 8,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 9,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 10,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 11,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 12,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 13,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 14,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 15,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 16,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 17,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 18,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 19,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 20,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 21,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 22,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 23,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 24,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 25,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 26,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 27,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 28,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 29,  price: "3000", type: "Standard Lot", status: "sold" },
//   // { id: "Open Space" ,  price: "3000", type: "Open Space", status: "Open Space" },
//   { id: 30,  price: "3000", type: "Corner Lot", status: "sold" },
//    { id: 31,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 32, price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 33, price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 34,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 35,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 36,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 37,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 38,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 39,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 40,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 41,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 42,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 43,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 44,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 45,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 46,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 47,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 48,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 49,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 50,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 51,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 52,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 53,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 54,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 55,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 56,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 57,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 58,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 59,  price: "3000", type: "Standard Lot", status: "sold" },
//   // { id: "Open Space" ,  price: "3000", type: "Open Space", status: "Open Space" },
//   { id: 60,  price: "3000", type: "Corner Lot", status: "sold" },
//    { id: 61,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 62, price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 63, price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 64,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 65,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 66,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 67,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 68,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 69,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 70,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 71,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 72,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 73,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 74,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 75,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 76,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 77,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 78,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 79,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 80,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 81,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 82,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 83,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 84,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 85,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 86,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 87,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 88,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id:89,  price: "3000", type: "Standard Lot", status: "sold" },
//   // { id: "Open Space" ,  price: "3000", type: "Open Space", status: "Open Space" },
//   { id: 90,  price: "3000", type: "Corner Lot", status: "sold" },
//    { id: 91,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 92,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 93,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 94,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 95,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 96,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 97,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 98,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 99,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 100,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 101,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 102,  price: "3000", type: "Standard Lot", status: "sold" },
//   { id: 103,  price: "3000", type: "Standard Lot", status: "sold" },
//   // { id: "Open Space" ,  price: "3000", type: "Open Space", status: "Open Space" },
//   { id: 104,  price: "3000", type: "Corner Lot", status: "sold" },
// ];

// const Map1 = () => {
//   const navigate = useNavigate();
//   const [selectedPlot, setSelectedPlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.textContent = styles;
//     document.head.appendChild(styleSheet);
//     return () => styleSheet.remove();
//   }, []);

//   const handlePlotClick = (id) => {
//     const plotDetails = data.find((item) => item.id === id);
//     setSelectedPlot(plotDetails || null);
//     setShowModal(true);
//   };

//   const getStatusColor = (status) => {
//     if (status === "sold") return "rgba(239, 68, 68, 0.7)";
//     if (status === "reserved") return "rgba(234, 179, 8, 0.7)";
//     if (status === "open") return "rgba(59, 130, 246, 0.7)";
//     return "rgba(16, 185, 129, 0.7)";
//   };

//   return (
//     <div className="container">
//       {/* Header */}
//       <div className="header">
//         {/* <h1 className="headerTitle">Plot Layout Map - Professional View</h1> */}
//         <div className="legend">
//           <div className="legendItem">
//             <div className="legendColor sold"></div>
//             <span>Sold</span>
//           </div>
//           <div className="legendItem">
//             <div className="legendColor reserved"></div>
//             <span>Reserved</span>
//           </div>
//           <div className="legendItem">
//             <div className="legendColor available"></div>
//             <span>Available</span>
//           </div>
//           <div className="legendItem">
//             <div className="legendColor open"></div>
//             <span>Open Space</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content - Split View */}
//       <div className="mainContent">
//         {/* Map Section (Left) */}
//         <div className="mapSection">
//           <div className="mapHeader">📍 Interactive Plot Map</div>
//           <div className="scrollContainer">
//             <div className="mapWrapper">
//               <div className="mapContainer">
//                 <img
//                   ref={imageRef}
//                   src="https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%202%20(1).jpg?alt=media&token=8de92aab-be4f-4100-8956-a8655cf299a8"
//                   alt="Plot Layout Map"
//                   className="image"
//                 />
              
               
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Status Panel (Right) */}
//         <div className="statusPanel">
//           <div className="statusHeader">📋 Plot Status Overview</div>
//           <div className="statusGrid">
//             {data.map((plot) => {
//               const isSelected = selectedPlot?.id === plot.id;
//               return (
//                 <div
//                   key={plot.id}
//                   onClick={() => handlePlotClick(plot.id)}
//                   className={`plotCard ${plot.status} ${isSelected ? 'selected' : ''}`}
//                 >
//                   <div className="plotNumber">{plot.id}</div>
//                   <div className="plotType">{plot.type}</div>
//                   <div className="plotSize">{plot.size}</div>
//                   <div className="plotPrice">
//                     {plot.price === "N/A" ? "Not for Sale" : plot.price}
//                   </div>
//                   <span className={`statusBadge ${plot.status}`}>
//                     {plot.status}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && selectedPlot && (
//         <div className="modalOverlay" onClick={() => setShowModal(false)}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="closeButton"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </button>

//             <h2>
//               {selectedPlot.type === "Open Space" 
//                 ? "🏞️ Open Space" 
//                 : `🏠 Plot #${selectedPlot.id}`}
//             </h2>

//             <span className={`modalStatus ${selectedPlot.status}`}>
//               {selectedPlot.status}
//             </span>

//             <div className="plotDetails">
             
//               <p>
//                 <strong>💰 Price:</strong>
//                 <span className="price">
//                   {selectedPlot.price === "N/A" ? "Not for Sale" : selectedPlot.price}
//                 </span>
//               </p>
//               <p>
//                 <strong>🏷️ Type:</strong>
//                 <span>{selectedPlot.type}</span>
//               </p>
//             </div>
//               {selectedPlot.status === "available" ? <button className="button1" onClick={()=>navigate("/enquiry")}> Enquiry For Booking </button>
//            :"" }
//             <p className="contactInfo">
//               <strong>ℹ️ Information:</strong><br />
//               {selectedPlot.status === "sold"
//                 ? "This plot has been sold."
//                 : selectedPlot.status === "open"
//                 ? "This is an open space/playground area, not available for purchase."
//                 : selectedPlot.status === "reserved"
//                 ? "This plot is currently reserved."
//                 : "This plot is available for purchase!"}
//               {" "}Contact our sales team for more information at +91 9494942894
              

//             </p>
           
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Map1;

















import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ─── Safari-safe global styles ────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

  :root {
    --gold-light: #e8c97a;
    --gold:        #c9973d;
    --gold-dark:   #9c6f1e;
    --cream:       #faf6ef;
    --cream-dark:  #f0e8d8;
    --ink:         #1c1710;
    --ink-mid:     #3d3526;
    --muted:       #7a6e5f;

    --sold:        #e05252;
    --reserved:    #d4942a;
    --available:   #2eaa72;
    --open:        #3b7dd8;

    --sold-bg:     #fdf0f0;
    --reserved-bg: #fdf5e6;
    --available-bg:#edf8f3;
    --open-bg:     #edf3fd;

    --radius-sm:   6px;
    --radius-md:   12px;
    --radius-lg:   20px;
    --shadow-sm:   0 2px 8px rgba(28,23,16,.08);
    --shadow-md:   0 6px 24px rgba(28,23,16,.12);
    --shadow-lg:   0 16px 48px rgba(28,23,16,.18);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pm-root {
    min-height: 100vh;
    background: var(--cream);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  /* ── Header ── */
  .pm-header {
    background: var(--ink);
    padding: 1.4rem 2rem;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    gap: 1.5rem;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 2px solid var(--gold-dark);
  }

  .pm-brand {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    gap: 0.75rem;
  }

  .pm-brand-icon {
    width: 38px; height: 38px;
    background: linear-gradient(135deg, var(--gold-light), var(--gold-dark));
    border-radius: var(--radius-sm);
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 1.2rem;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }

  .pm-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: var(--gold-light);
    line-height: 1.2;
  }

  .pm-brand-sub {
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 1px;
  }

  .pm-legend {
    display: -webkit-flex;
    display: flex;
    gap: 0.5rem;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .pm-leg-item {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.12);
    padding: 0.35rem 0.75rem;
    border-radius: 100px;
    font-size: 0.78rem;
    color: #d4c9b8;
    font-weight: 500;
  }

  .pm-leg-dot {
    width: 9px; height: 9px;
    border-radius: 50%;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }
  .pm-leg-dot.sold      { background: var(--sold); }
  .pm-leg-dot.reserved  { background: var(--reserved); }
  .pm-leg-dot.available { background: var(--available); }
  .pm-leg-dot.open      { background: var(--open); }

  /* ── Stats Bar ── */
  .pm-stats {
    background: var(--ink-mid);
    padding: 0.7rem 2rem;
    display: -webkit-flex;
    display: flex;
    gap: 2rem;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .pm-stat {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: #b8a98a;
  }

  .pm-stat-val {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--gold-light);
  }

  /* ── Body ── */
  .pm-body {
    display: -webkit-flex;
    display: flex;
    -webkit-flex: 1;
    flex: 1;
    gap: 0;
    min-height: 0;
  }

  /* ── Map Panel ── */
  .pm-map-panel {
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    background: var(--cream-dark);
    border-right: 1px solid rgba(201,151,61,.25);
    min-width: 0;
    position: relative;
  }

  .pm-panel-header {
    padding: 0.9rem 1.5rem;
    background: white;
    border-bottom: 1px solid var(--cream-dark);
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--ink-mid);
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }

  .pm-panel-icon {
    width: 28px; height: 28px;
    background: linear-gradient(135deg, var(--gold-light), var(--gold));
    border-radius: var(--radius-sm);
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 0.85rem;
  }

  /* Zoom Controls */
  .pm-zoom-controls {
    display: -webkit-flex;
    display: flex;
    gap: 8px;
    background: rgba(28,23,16,0.9);
    padding: 6px 12px;
    border-radius: 40px;
    backdrop-filter: blur(8px);
  }

  .pm-zoom-btn {
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .pm-zoom-btn:hover {
    background: var(--gold);
    color: var(--ink);
    transform: scale(1.05);
  }

  .pm-zoom-reset {
    font-size: 0.75rem;
    width: auto;
    padding: 0 12px;
    border-radius: 32px;
  }

  .pm-zoom-level {
    color: var(--gold-light);
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0 8px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }

  .pm-map-scroll {
    -webkit-flex: 1;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 1.5rem;
  }

  .pm-map-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
  .pm-map-scroll::-webkit-scrollbar-track { background: var(--cream-dark); }
  .pm-map-scroll::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 4px;
  }

  .pm-map-wrap {
    display: inline-block;
    min-width: 100%;
  }

  .pm-map-container {
    position: relative;
    display: inline-block;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(201,151,61,.3);
    transition: transform 0.2s ease-out;
    transform-origin: 0 0;
  }

  .pm-map-img {
    display: block;
    width: 100%;
    height: auto;
    min-width: 760px;
    max-width: 1100px;
    pointer-events: none;
  }

  /* ── Plot Buttons ── */
  .pm-plot-btn {
    position: absolute;
    border: 2px solid rgba(255,255,255,.8);
    border-radius: var(--radius-sm);
    color: white;
    font-weight: 700;
    font-size: 0.7rem;
    cursor: pointer;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-transition: all 0.18s ease;
    transition: all 0.18s ease;
    z-index: 10;
    text-shadow: 0 1px 3px rgba(0,0,0,.5);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    line-height: 1;
  }

  .pm-plot-btn:hover {
    border-color: white;
    border-width: 2.5px;
    z-index: 20;
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
    box-shadow: 0 4px 16px rgba(0,0,0,.35);
  }

  .pm-plot-btn.pm-selected {
    border-color: var(--gold-light) !important;
    border-width: 3px !important;
    box-shadow: 0 0 0 3px rgba(232,201,122,.45), 0 4px 16px rgba(0,0,0,.3) !important;
    z-index: 25;
  }

  /* Status colors for plot buttons */
  .pm-plot-btn.sold { background-color: rgba(224,82,82,0.7); }
  .pm-plot-btn.reserved { background-color: rgba(212,148,42,0.7); }
  .pm-plot-btn.available { background-color: rgba(46,170,114,0.7); }
  .pm-plot-btn.open { background-color: rgba(59,125,216,0.6); }

  /* ── Status Panel ── */
  .pm-status-panel {
    width: 360px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    background: white;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    max-height: calc(100vh - 120px);
  }

  .pm-status-grid {
    -webkit-flex: 1;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.6rem;
    -webkit-align-content: start;
    align-content: start;
  }

  .pm-status-grid::-webkit-scrollbar { width: 6px; }
  .pm-status-grid::-webkit-scrollbar-track { background: #f5f5f5; }
  .pm-status-grid::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 3px;
  }

  .pm-card {
    background: white;
    border-radius: var(--radius-md);
    padding: 1.9rem 0.85rem;
    cursor: pointer;
    border: 1.5px solid var(--cream-dark);
    box-shadow: var(--shadow-sm);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  .pm-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
  }
  .pm-card.sold::after      { background: var(--sold); }
  .pm-card.reserved::after  { background: var(--reserved); }
  .pm-card.available::after { background: var(--available); }
  .pm-card.open::after      { background: var(--open); }

  .pm-card:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--gold);
  }

  .pm-card.pm-card-sel {
    border-color: var(--gold);
    background: #fffbf0;
    box-shadow: 0 0 0 2px rgba(201,151,61,.2), var(--shadow-md);
  }

  .pm-card-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 2px;
  }

  .pm-card-type {
    font-size: 0.67rem;
    color: var(--muted);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.4rem;
  }

  .pm-card-price {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--available);
    margin-bottom: 0.45rem;
  }

  .pm-badge {
    display: inline-block;
    padding: 0.18rem 0.55rem;
    border-radius: 100px;
    font-size: 0.63rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .pm-badge.sold      { background: var(--sold-bg);      color: var(--sold); }
  .pm-badge.reserved  { background: var(--reserved-bg);  color: var(--reserved); }
  .pm-badge.available { background: var(--available-bg); color: var(--available); }
  .pm-badge.open      { background: var(--open-bg);      color: var(--open); }

  /* ── Modal ── */
  .pm-overlay {
    position: fixed;
    inset: 0;
    background: rgba(28,23,16,.65);
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    -webkit-animation: pmFadeIn .2s ease;
    animation: pmFadeIn .2s ease;
  }

  @-webkit-keyframes pmFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pmFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .pm-modal {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    max-width: 460px;
    width: 100%;
    position: relative;
    overflow: hidden;
    -webkit-animation: pmSlideUp .28s ease;
    animation: pmSlideUp .28s ease;
  }

  @-webkit-keyframes pmSlideUp {
    from { opacity: 0; -webkit-transform: translateY(28px); transform: translateY(28px); }
    to   { opacity: 1; -webkit-transform: translateY(0);    transform: translateY(0); }
  }
  @keyframes pmSlideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pm-modal-top {
    background: var(--ink);
    padding: 1.5rem 1.75rem 1.25rem;
    position: relative;
  }

  .pm-modal-close {
    position: absolute;
    top: 1rem; right: 1rem;
    background: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.15);
    color: #ccc;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    width: 32px; height: 32px;
    border-radius: 50%;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    line-height: 1;
  }

  .pm-modal-close:hover {
    background: var(--sold);
    border-color: var(--sold);
    color: white;
  }

  .pm-modal-plot-label {
    font-size: 0.72rem;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .pm-modal-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: white;
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }

  .pm-modal-body {
    padding: 1.5rem 1.75rem;
  }

  .pm-detail-row {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--cream-dark);
    font-size: 0.9rem;
  }

  .pm-detail-row:last-of-type { border-bottom: none; }

  .pm-detail-label {
    color: var(--muted);
    font-weight: 500;
    font-size: 0.82rem;
  }

  .pm-detail-val {
    font-weight: 600;
    color: var(--ink);
    font-size: 0.9rem;
  }

  .pm-detail-val.price-val {
    color: var(--available);
    font-size: 1rem;
  }

  .pm-info-box {
    margin-top: 1rem;
    padding: 0.9rem 1rem;
    border-radius: var(--radius-md);
    font-size: 0.82rem;
    line-height: 1.6;
    border-left: 3px solid;
  }

  .pm-info-box.sold      { background: var(--sold-bg);      border-color: var(--sold);      color: #6b2020; }
  .pm-info-box.reserved  { background: var(--reserved-bg);  border-color: var(--reserved);  color: #6b3a10; }
  .pm-info-box.available { background: var(--available-bg); border-color: var(--available); color: #1a5e40; }
  .pm-info-box.open      { background: var(--open-bg);      border-color: var(--open);      color: #1a3d6b; }

  .pm-enquiry-btn {
    display: block;
    width: 100%;
    margin-top: 1rem;
    padding: 0.85rem;
    background: linear-gradient(135deg, var(--gold-light), var(--gold-dark));
    color: var(--ink);
    border: none;
    border-radius: var(--radius-md);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    letter-spacing: 0.02em;
  }

  .pm-enquiry-btn:hover {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(201,151,61,.35);
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .pm-body {
      -webkit-flex-direction: column;
      flex-direction: column;
    }
    .pm-status-panel {
      width: 100%;
      max-height: 360px;
      border-top: 1px solid var(--cream-dark);
    }
    .pm-map-panel { border-right: none; }
  }

  @media (max-width: 560px) {
    .pm-header { padding: 1rem; gap: 0.75rem; }
    .pm-brand-name { font-size: 1rem; }
    .pm-stats { padding: 0.5rem 1rem; gap: 1rem; }
    .pm-map-scroll { padding: 0.75rem; }
    .pm-modal { border-radius: var(--radius-md); }
    .pm-modal-top { padding: 1.2rem 1.25rem 1rem; }
    .pm-modal-body { padding: 1.2rem 1.25rem; }
    .pm-modal-title { font-size: 1.35rem; }
    .pm-status-grid { padding: 0.75rem; gap: 0.5rem; }
    .pm-status-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
    .pm-zoom-controls { gap: 4px; }
    .pm-zoom-btn { width: 28px; height: 28px; font-size: 1rem; }
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const plots = [
  { id: 1,  top: "355px", left: "687px", width: "157px", height: "65px" },
  { id: 2,  top: "354px", left: "626px", width: "62px",  height: "69px" },
  { id: 3,  top: "353px", left: "586px", width: "41px",  height: "71px" },
  { id: 4,  top: "351px", left: "549px", width: "38px",  height: "74px" },
  { id: 5,  top: "347px", left: "506px", width: "44px",  height: "80px" },
  { id: 6,  top: "344px", left: "461px", width: "46px",  height: "88px" },
  { id: 7,  top: "342px", left: "417px", width: "46px",  height: "91px" },
  { id: 8,  top: "340px", left: "388px", width: "46px",  height: "91px" },
  { id: 9,  top: "338px", left: "332px", width: "46px",  height: "91px" },
  { id: 10, top: "335px", left: "290px", width: "46px",  height: "91px" },
  { id: 11, top: "332px", left: "250px", width: "46px",  height: "91px" },
  { id: 12, top: "330px", left: "200px", width: "46px",  height: "91px" },
  { id: 13, top: "328px", left: "150px", width: "46px",  height: "91px" },
  { id: 14, top: "326px", left: "100px", width: "46px",  height: "91px" },
  { id: 15, top: "324px", left: "50px",  width: "46px",  height: "91px" },
  { id: 16, top: "35%",   left: "34.8%", width: "3.5%",  height: "23%" },
  { id: 17, top: "35%",   left: "38.6%", width: "3.5%",  height: "23%" },
  { id: 18, top: "35%",   left: "42.4%", width: "3.5%",  height: "23%" },
  { id: 19, top: "35%",   left: "46.2%", width: "3.5%",  height: "23%" },
  { id: 20, top: "35%",   left: "50%",   width: "3.5%",  height: "23%" },
  { id: 21, top: "35%",   left: "53.8%", width: "3.5%",  height: "23%" },
  { id: 22, top: "35%",   left: "57.6%", width: "3.5%",  height: "23%" },
  { id: 23, top: "35%",   left: "61.4%", width: "3.5%",  height: "23%" },
  { id: 24, top: "35%",   left: "65.2%", width: "3.5%",  height: "23%" },
  { id: 25, top: "35%",   left: "69%",   width: "3.5%",  height: "23%" },
  { id: 26, top: "35%",   left: "72.8%", width: "3.5%",  height: "23%" },
  { id: 27, top: "35%",   left: "76.6%", width: "3.5%",  height: "23%" },
  { id: 28, top: "35%",   left: "80.4%", width: "3.5%",  height: "23%" },
  { id: 29, top: "35%",   left: "85.5%", width: "6%",    height: "23%" },
  { id: 30, top: "35%",   left: "91.2%", width: "3.5%",  height: "23%" },
];

const generateData = () => {
  const entries = [];
  for (let i = 1; i <= 104; i++) {
    let type = "Standard Lot";
    if ([30, 60, 90, 104].includes(i)) type = "Corner Lot";
    // Randomize status for demo - replace with actual data as needed
    let status = "available";
    if (i % 5 === 0) status = "sold";
    else if (i % 7 === 0) status = "reserved";
    else status = "available";
    
    entries.push({ 
      id: i, 
      price: "₹3,000", 
      type, 
      status, 
      size: "30×40 ft",
      plotArea: "1200 sq.ft",
      facing: i % 2 === 0 ? "East" : "North"
    });
  }
  return entries;
};

const DATA = generateData();

const STATUS_COLORS = {
  sold:      "rgba(224,82,82,0.72)",
  reserved:  "rgba(212,148,42,0.72)",
  available: "rgba(46,170,114,0.72)",
  open:      "rgba(59,125,216,0.72)",
};

const STATUS_ICON = {
  sold:      "🔴",
  reserved:  "🟡",
  available: "🟢",
  open:      "🔵",
};

// Project name constant
const PROJECT_NAME = "Saraswati Nagari 2";

// ─── Component ────────────────────────────────────────────────────────────────
const Map1 = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlotData, setSelectedPlotData] = useState(null);
  
  // Zoom state
  const [zoom, setZoom] = useState(1);
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.1;
  
  // Refs
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = STYLES;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  const selectedPlot = DATA.find(d => d.id === selectedId) || null;

  const handleClick = (id) => {
    const plotDetails = DATA.find((item) => item.id === id);
    setSelectedId(id);
    setSelectedPlotData(plotDetails || null);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  // Navigate to enquiry with project name and plot details
  const handleEnquiryClick = () => {
    closeModal();
    navigate("/enquiry", {
      state: {
        projectName: PROJECT_NAME,
        selectedPlot: selectedPlotData ? {
          id: selectedPlotData.id,
          type: selectedPlotData.type,
          price: selectedPlotData.price,
          size: selectedPlotData.size,
          area: selectedPlotData.plotArea,
          facing: selectedPlotData.facing,
          status: selectedPlotData.status
        } : null
      }
    });
  };

  // Zoom handlers
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  };

  const handleResetZoom = () => {
    setZoom(1);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  };

  const counts = DATA.reduce((acc, d) => {
    acc[d.status] = (acc[d.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="pm-root">

      {/* Header with Legend */}
   
      {/* Stats Bar */}
      <div className="pm-stats">
        <div className="pm-stat">Total <span className="pm-stat-val" style={{marginLeft:6}}>{DATA.length}</span></div>
        <div className="pm-stat">Sold <span className="pm-stat-val" style={{marginLeft:6,color:"#e07a7a"}}>{counts.sold || 0}</span></div>
        <div className="pm-stat">Reserved <span className="pm-stat-val" style={{marginLeft:6,color:"#d4b472"}}>{counts.reserved || 0}</span></div>
        <div className="pm-stat">Available <span className="pm-stat-val" style={{marginLeft:6,color:"#6ecfa6"}}>{counts.available || 0}</span></div>
      </div>

      {/* Body */}
      <div className="pm-body">

        {/* Map Panel */}
        <div className="pm-map-panel">
          <div className="pm-panel-header">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div className="pm-panel-icon">📍</div>
              Interactive Master Plan — Click any plot
            </div>
            {/* Zoom Controls */}
            <div className="pm-zoom-controls">
              <button className="pm-zoom-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
              <span className="pm-zoom-level">{Math.round(zoom * 100)}%</span>
              <button className="pm-zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
              <button className="pm-zoom-btn pm-zoom-reset" onClick={handleResetZoom} title="Reset Zoom">↺</button>
            </div>
          </div>
          <div className="pm-map-scroll" ref={scrollContainerRef}>
            <div className="pm-map-wrap">
              <div 
                className="pm-map-container"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: '0 0'
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%202%20(1).jpg?alt=media&token=8de92aab-be4f-4100-8956-a8655cf299a8"
                  alt="Plot Layout Map"
                  className="pm-map-img"
                />
                
              </div>
            </div>
          </div>
        </div>

        {/* Status Panel */}
        <div className="pm-status-panel">
          <div className="pm-panel-header">
            <div className="pm-panel-icon">📋</div>
            Plot Portfolio
          </div>
          <div className="pm-status-grid">
            {DATA.map(plot => (
              <div
                key={plot.id}
                className={`pm-card ${plot.status}${selectedId === plot.id ? " pm-card-sel" : ""}`}
                onClick={() => handleClick(plot.id)}
              >
                <div className="pm-card-num">{plot.id}</div>
                <div className="pm-card-type">{plot.type}</div>
                <div className="pm-card-price">{plot.price}</div>
                <span className={`pm-badge ${plot.status}`}>{plot.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedPlotData && (
        <div className="pm-overlay" onClick={closeModal}>
          <div className="pm-modal" onClick={e => e.stopPropagation()}>

            <div className="pm-modal-top">
              <button className="pm-modal-close" onClick={closeModal}>✕</button>
              <div className="pm-modal-plot-label">
                {STATUS_ICON[selectedPlotData.status]} Plot Details
              </div>
              <div className="pm-modal-title">
                {selectedPlotData.type === "Open Space"
                  ? "Open Space Area"
                  : `Plot No. ${selectedPlotData.id}`}
              </div>
              <span className={`pm-badge ${selectedPlotData.status}`} style={{fontSize:"0.75rem",padding:"0.3rem 0.8rem"}}>
                {selectedPlotData.status.toUpperCase()}
              </span>
            </div>

            <div className="pm-modal-body">
              <div className="pm-detail-row">
                <span className="pm-detail-label">Plot Number</span>
                <span className="pm-detail-val">#{selectedPlotData.id}</span>
              </div>
              <div className="pm-detail-row">
                <span className="pm-detail-label">Type</span>
                <span className="pm-detail-val">{selectedPlotData.type}</span>
              </div>
              <div className="pm-detail-row">
                <span className="pm-detail-label">Size</span>
                <span className="pm-detail-val">{selectedPlotData.size}</span>
              </div>
              <div className="pm-detail-row">
                <span className="pm-detail-label">Area</span>
                <span className="pm-detail-val">{selectedPlotData.plotArea}</span>
              </div>
              <div className="pm-detail-row">
                <span className="pm-detail-label">Facing</span>
                <span className="pm-detail-val">{selectedPlotData.facing}</span>
              </div>
              <div className="pm-detail-row">
                <span className="pm-detail-label">Price</span>
                <span className="pm-detail-val price-val">
                  {selectedPlotData.price === "N/A" ? "Not for Sale" : selectedPlotData.price}
                </span>
              </div>

              <div className={`pm-info-box ${selectedPlotData.status}`}>
                {selectedPlotData.status === "sold"
                  ? "✨ This prime plot has been successfully booked. Explore other premium plots in our inventory."
                  : selectedPlotData.status === "open"
                  ? "🌿 This area is designated as open space / green zone and is not available for purchase."
                  : selectedPlotData.status === "reserved"
                  ? "⏳ This plot is currently under reservation. Contact us for availability updates."
                  : "✅ This premium plot is ready for immediate purchase! Get the best deals with flexible payment plans."}
                {" "}For inquiries call <strong>+91 94949 42894</strong>.
              </div>

              {selectedPlotData.status === "available" && (
                <button
                  className="pm-enquiry-btn"
                  onClick={handleEnquiryClick}
                >
                  Enquire / Book This Plot →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map1;