import React from "react";
import profile_img from "../../assets/mrprofile_square.png";
import "./Hero.css";
const Hero = () => {
  const heroName = "Hi, I'm Mihnea, "; // The name to scale each letter

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" className="profile-image" />
      <h1 className="hero-title">
        <span className="hero-name">
          {heroName.split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span> /* Wrap each character in a span, replace spaces with non-breaking spaces */
          ))}
        </span>
        {" "}IT Manager based in Belgium
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
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1UVuvg9R_BqXsRw_ySab1KRDlpw5xkCYO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >Get CV</a></div>
      </div>
    </div>
  );
};

export default Hero;
