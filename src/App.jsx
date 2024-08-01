import React,{ useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import PrivacyPolicy from './PrivacyPolicy';
import SkillsTab from "./Components/SkillsTab/SkillsTab";
import './index.css';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


const App = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track button visibility

  const handleScroll = () => {
    if (window.scrollY > 200) { // Button appears when scrolled beyond 200px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>

              <Hero />
              <About />
              <Projects />
              <SkillsTab/>
              <Contact />
              <Footer />
              <div className={`back-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
                ↑
              </div>
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
