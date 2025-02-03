import React from "react";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import PartnersSection from "./Components/PartnersSection.jsx";
import ImageWithText from "./Components/ImageWithText.jsx";
import Footer from "./Components/footer.jsx";
import FeaturesSection from "./Components/MobileDestop.jsx";
import DownloadSection from "./Components/DownloadSection.jsx";
import Aboutus from "./Components/Aboutus.jsx";

function App() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="partners">
        <PartnersSection />
      </div>
      <div id="about">
        <Aboutus />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="download">
        <DownloadSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
