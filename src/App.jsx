import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import PrivacyPolicy from './PrivacyPolicy';
import Skills from "./Components/Skills/Skills";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SplashScreen />
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;