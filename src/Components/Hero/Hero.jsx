import React from "react";
import profile_img from "../../assets/mrprofile_square.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" className="profile-image" />
      <h1 className="hero-title">
        <span className="hero-name">Hi, I'm Mihnea,</span> IT Manager based in Belgium
      </h1>
      <p className="hero-description">
        Innovating IT Solutions, Leading Teams, and Securing Success - Dive into
        My World of Tech
      </p>
      <div className="hero-action">
        <button className="hero-connect">
          <a
            href="https://www.linkedin.com/in/mihnearadulescu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </button>
        <div className="hero-resume">Get CV</div>
      </div>
    </div>
  );
};

export default Hero;
