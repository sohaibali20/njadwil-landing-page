import React from "react";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection.jsx";
import PartnersSection from "./Components/PartnersSection.jsx";
import FeaturesSection from "./Components/MobileDestop.jsx";
import DownloadSection from "./Components/DownloadSection.jsx";
import Aboutus from "./Components/Aboutus.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/partners" element={<PartnersSection />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/features" element={<FeaturesSection />} />
      <Route path="/download" element={<DownloadSection />} />
    </Routes>
  );
};

export default AppRoutes;
