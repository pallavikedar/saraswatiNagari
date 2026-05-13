import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ─── Elegant Safari-safe global styles (Same as Map1 premium design) ─────────
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
  .pm-map-scroll::-webkit-scrollbar-track { background: var(--cream-dark); border-radius: 10px; }
  .pm-map-scroll::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 10px;
  }
  .pm-map-scroll {
    scrollbar-width: thin;
    scrollbar-color: var(--gold) var(--cream-dark);
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
    line-height: 1;
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(2px);
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
  .pm-status-grid::-webkit-scrollbar-track { background: #f5f5f5; border-radius: 10px; }
  .pm-status-grid::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 10px;
  }
  .pm-status-grid {
    scrollbar-width: thin;
    scrollbar-color: var(--gold) #f5f5f5;
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
    font-size: 1rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 4px;
  }

  .pm-card-type {
    font-size: 0.65rem;
    color: var(--muted);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.3rem;
  }

  .pm-card-price {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--available);
    margin-bottom: 0.4rem;
  }

  .pm-badge {
    display: inline-block;
    padding: 0.18rem 0.55rem;
    border-radius: 100px;
    font-size: 0.6rem;
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
    background: rgba(28,23,16,.75);
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
    max-height: 90vh;
    overflow-y: auto;
  }

  .pm-modal::-webkit-scrollbar {
    width: 6px;
  }
  .pm-modal::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .pm-modal::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 10px;
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
    font-size: 1.5rem;
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
    text-align: right;
  }

  .pm-detail-val.price-val {
    color: var(--available);
    font-size: 1rem;
    font-weight: 700;
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

// ─── Plot Coordinates (for map overlay buttons) ──────────────────────────────
const plotsPositions = [
  { id: 1, top: "355px", left: "687px", width: "157px", height: "65px" },
  { id: 2, top: "354px", left: "626px", width: "62px", height: "69px" },
  { id: 3, top: "353px", left: "586px", width: "41px", height: "71px" },
  { id: 4, top: "351px", left: "549px", width: "38px", height: "74px" },
  { id: 5, top: "347px", left: "506px", width: "44px", height: "80px" },
  { id: 6, top: "344px", left: "461px", width: "46px", height: "88px" },
  { id: 7, top: "342px", left: "417px", width: "46px", height: "91px" },
  { id: 8, top: "340px", left: "388px", width: "46px", height: "91px" },
  { id: 9, top: "338px", left: "332px", width: "46px", height: "91px" },
  { id: 10, top: "335px", left: "290px", width: "46px", height: "91px" },
  { id: 11, top: "332px", left: "250px", width: "46px", height: "91px" },
  { id: 12, top: "330px", left: "200px", width: "46px", height: "91px" },
  { id: 13, top: "328px", left: "150px", width: "46px", height: "91px" },
  { id: 14, top: "326px", left: "100px", width: "46px", height: "91px" },
  { id: 15, top: "324px", left: "50px", width: "46px", height: "91px" },
  { id: 16, top: "35%", left: "34.8%", width: "3.5%", height: "23%" },
  { id: 17, top: "35%", left: "38.6%", width: "3.5%", height: "23%" },
  { id: 18, top: "35%", left: "42.4%", width: "3.5%", height: "23%" },
  { id: 19, top: "35%", left: "46.2%", width: "3.5%", height: "23%" },
  { id: 20, top: "35%", left: "50%", width: "3.5%", height: "23%" },
  { id: 21, top: "35%", left: "53.8%", width: "3.5%", height: "23%" },
  { id: 22, top: "35%", left: "57.6%", width: "3.5%", height: "23%" },
  { id: 23, top: "35%", left: "61.4%", width: "3.5%", height: "23%" },
  { id: 24, top: "35%", left: "65.2%", width: "3.5%", height: "23%" },
  { id: 25, top: "35%", left: "69%", width: "3.5%", height: "23%" },
  { id: 26, top: "35%", left: "72.8%", width: "3.5%", height: "23%" },
  { id: 27, top: "35%", left: "76.6%", width: "3.5%", height: "23%" },
  { id: 28, top: "35%", left: "80.4%", width: "3.5%", height: "23%" },
  { id: 29, top: "35%", left: "85.5%", width: "6%", height: "23%" },
  { id: 30, top: "35%", left: "91.2%", width: "3.5%", height: "23%" },
];

// ─── Plot Data (52 plots as per your original) ───────────────────────────────
const plotData = [
  { id: 1, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 2, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 3, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 4, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 5, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 6, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 7, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 8, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 9, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 10, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 11, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 12, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 13, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 14, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 15, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 16, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 17, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 18, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 19, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 20, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 21, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 22, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 23, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 24, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 25, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 26, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 27, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 28, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 29, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 30, price: "₹2,500", type: "Corner Lot", status: "sold", size: "35×45 ft", plotArea: "1575 sq.ft", facing: "East" },
  { id: 31, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 32, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 33, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 34, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 35, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 36, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 37, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 38, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 39, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 40, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 41, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 42, price: "₹2,500", type: "Corner Lot", status: "sold", size: "35×45 ft", plotArea: "1575 sq.ft", facing: "East" },
  { id: 43, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 44, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 45, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 46, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 47, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 48, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
  { id: 49, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "North" },
  { id: 50, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "East" },
  { id: 51, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "South" },
  { id: 52, price: "₹2,000", type: "Standard Lot", status: "sold", size: "30×40 ft", plotArea: "1200 sq.ft", facing: "West" },
];

// Add Open Space entry
const completeData = [
  ...plotData,
  { id: "Open Space", price: "N/A", type: "Open Space", status: "open", size: "Park Area", plotArea: "5000 sq.ft", facing: "N/A" }
];

const STATUS_COLORS = {
  sold: "rgba(224,82,82,0.75)",
  reserved: "rgba(212,148,42,0.75)",
  available: "rgba(46,170,114,0.75)",
  open: "rgba(59,125,216,0.7)",
};

const STATUS_ICON = {
  sold: "🔴",
  reserved: "🟡",
  available: "🟢",
  open: "🔵",
};

// Project name constant
const PROJECT_NAME = "Saraswati Nagari — Phase 7";

// ─── Main Component (Styled exactly like Map1 premium design) ─────────────────
const Map7 = () => {
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
  const imageRef = useRef(null);

  // Inject styles on mount
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = STYLES;
    document.head.appendChild(styleElement);
    return () => {
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  const handlePlotClick = (id) => {
    const plotDetails = completeData.find((item) => item.id === id);
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

  // Get plot data by ID for overlay buttons
  const getPlotData = (plotId) => {
    return completeData.find((item) => item.id === plotId);
  };

  // Calculate counts for stats
  const counts = completeData.reduce((acc, d) => {
    if (d.status) {
      acc[d.status] = (acc[d.status] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="pm-root">
      {/* Header with Legend */}
      <div className="pm-header">
        <div className="pm-brand">
          <div className="pm-brand-icon">🏘️</div>
          <div>
            <div className="pm-brand-name">{PROJECT_NAME}</div>
            <div className="pm-brand-sub">Premium Layout | RERA Approved</div>
          </div>
        </div>
        <div className="pm-legend">
          <div className="pm-leg-item"><div className="pm-leg-dot sold"></div><span>Sold/Booked</span></div>
          <div className="pm-leg-item"><div className="pm-leg-dot reserved"></div><span>Reserved</span></div>
          <div className="pm-leg-item"><div className="pm-leg-dot available"></div><span>Available</span></div>
          <div className="pm-leg-item"><div className="pm-leg-dot open"></div><span>Open Space</span></div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="pm-stats">
        <div className="pm-stat">Total <span className="pm-stat-val" style={{ marginLeft: 6 }}>{completeData.length}</span></div>
        <div className="pm-stat">Sold <span className="pm-stat-val" style={{ marginLeft: 6, color: "#e07a7a" }}>{counts.sold || 0}</span></div>
        <div className="pm-stat">Reserved <span className="pm-stat-val" style={{ marginLeft: 6, color: "#d4b472" }}>{counts.reserved || 0}</span></div>
        <div className="pm-stat">Available <span className="pm-stat-val" style={{ marginLeft: 6, color: "#6ecfa6" }}>{counts.available || 0}</span></div>
        <div className="pm-stat">Open Space <span className="pm-stat-val" style={{ marginLeft: 6, color: "#7aa9e0" }}>{counts.open || 0}</span></div>
      </div>

      {/* Body */}
      <div className="pm-body">
        {/* Map Panel with Interactive Overlay Buttons */}
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
                  ref={imageRef}
                  src="https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/8_1%20-%20Photo_21%20-%20Photo%20(1).jpg?alt=media&token=1b6f6b9b-3028-49ff-9e9c-7f2082704fe2"
                  alt="Plot Layout Map"
                  className="pm-map-img"
                />
                {/* Render interactive plot buttons over the image */}
                {plotsPositions.map((plot) => {
                  const plotData = getPlotData(plot.id);
                  const status = plotData?.status || "available";
                  const isSelected = selectedId === plot.id;
                  
                  return (
                    <button
                      key={plot.id}
                      className={`pm-plot-btn ${status} ${isSelected ? "pm-selected" : ""}`}
                      style={{
                        top: plot.top,
                        left: plot.left,
                        width: plot.width,
                        height: plot.height,
                        position: "absolute",
                      }}
                      onClick={() => handlePlotClick(plot.id)}
                      title={`Plot #${plot.id} — ${status.toUpperCase()}`}
                    >
                      {plot.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Status Panel - Plot Overview Cards */}
        <div className="pm-status-panel">
          <div className="pm-panel-header">
            <div className="pm-panel-icon">📋</div>
            Plot Portfolio
          </div>
          <div className="pm-status-grid">
            {completeData.map((plot) => {
              const isSelected = selectedId === plot.id;
              const plotId = plot.id === "Open Space" ? "OS" : plot.id;
              return (
                <div
                  key={plot.id}
                  className={`pm-card ${plot.status}${isSelected ? " pm-card-sel" : ""}`}
                  onClick={() => handlePlotClick(plot.id)}
                >
                  <div className="pm-card-num">{plot.id === "Open Space" ? "🏞️ OS" : `${plotId}`}</div>
                  <div className="pm-card-type">{plot.type}</div>
                  {plot.price !== "N/A" && <div className="pm-card-price">{plot.price}</div>}
                  <span className={`pm-badge ${plot.status}`}>{plot.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal - Detailed Plot View */}
      {showModal && selectedPlotData && (
        <div className="pm-overlay" onClick={closeModal}>
          <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pm-modal-top">
              <button className="pm-modal-close" onClick={closeModal}>✕</button>
              <div className="pm-modal-plot-label">
                {STATUS_ICON[selectedPlotData.status]} Plot Details
              </div>
              <div className="pm-modal-title">
                {selectedPlotData.id === "Open Space"
                  ? "🌳 Open Space Area"
                  : `Plot No. ${selectedPlotData.id}`}
              </div>
              <span className={`pm-badge ${selectedPlotData.status}`} style={{ fontSize: "0.75rem", padding: "0.3rem 0.8rem" }}>
                {selectedPlotData.status.toUpperCase()}
              </span>
            </div>

            <div className="pm-modal-body">
              {selectedPlotData.id !== "Open Space" && (
                <div className="pm-detail-row">
                  <span className="pm-detail-label">Plot Number</span>
                  <span className="pm-detail-val">#{selectedPlotData.id}</span>
                </div>
              )}
              <div className="pm-detail-row">
                <span className="pm-detail-label">Type</span>
                <span className="pm-detail-val">{selectedPlotData.type}</span>
              </div>
              <div className="pm-detail-row">
                <span className="pm-detail-label">Size</span>
                <span className="pm-detail-val">{selectedPlotData.size}</span>
              </div>
              {selectedPlotData.plotArea && selectedPlotData.plotArea !== "N/A" && (
                <div className="pm-detail-row">
                  <span className="pm-detail-label">Area</span>
                  <span className="pm-detail-val">{selectedPlotData.plotArea}</span>
                </div>
              )}
              {selectedPlotData.facing && selectedPlotData.facing !== "N/A" && (
                <div className="pm-detail-row">
                  <span className="pm-detail-label">Facing</span>
                  <span className="pm-detail-val">{selectedPlotData.facing}</span>
                </div>
              )}
              <div className="pm-detail-row">
                <span className="pm-detail-label">Price</span>
                <span className="pm-detail-val price-val">
                  {selectedPlotData.price === "N/A" ? "Not for Sale" : selectedPlotData.price}
                </span>
              </div>

              <div className={`pm-info-box ${selectedPlotData.status}`}>
                {selectedPlotData.status === "sold"
                  ? "✨ This premium plot has been successfully booked. Explore other premium plots in our inventory."
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

export default Map7;