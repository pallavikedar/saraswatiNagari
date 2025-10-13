// import { useState } from 'react'
// import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layouts from './pages/Layouts/Layouts';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/Scrollontop';
import Map from './components/Map/Map';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-layouts" element={<Layouts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="map" element={<Map />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
