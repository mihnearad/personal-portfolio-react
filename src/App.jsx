import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */


const App = () => {
  return (
    <div>
      <SplashScreen />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
