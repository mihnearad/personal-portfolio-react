import React, { useState, useEffect } from "react";
import "./SplashScreen.css"; // Ensure this file is loaded correctly

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // Change visible to false after 5 seconds
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const [shouldUnmount, setShouldUnmount] = useState(false);

  // Delay unmounting to allow transition to complete
  useEffect(() => {
    if (!visible) {
      const unmountTimer = setTimeout(() => {
        setShouldUnmount(true);
      }, 2000); // Delay unmounting to allow fade-out

      return () => clearTimeout(unmountTimer);
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      const dotTimer = setInterval(() => {
        setDotCount((prevCount) => (prevCount % 3) + 1);
      }, 500); // Change dot count every 0.5 seconds

      return () => clearInterval(dotTimer);
    }
  }, [visible]);

  if (shouldUnmount) {
    return null;
  }

  // Apply fade-out class when visible is false
  return (
    <div className={`splash-screen ${!visible ? "fade-out" : ""}`}>
      <h1 className="splash-content">
        Welcome to Mihnea's Portfolio
        <br /><br /> Loading{Array(dotCount).fill(".").join("")}
      </h1>
    </div>
  );
};

export default SplashScreen;
