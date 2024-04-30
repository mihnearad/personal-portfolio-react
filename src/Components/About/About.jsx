import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/202404_MihneaProfil.jpg";
import { FaFileExcel, FaProjectDiagram, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="container">
      {" "}
      {/* Apply the container class */}
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>
                {" "}
                I thrive on turning challenging IT projects into triumphs. I'm all about pushing the envelope
                with technology—whether it's integrating SAP systems or leading digital transformations
                to keep businesses ahead of the curve.{" "}
              </p>
              <p>
                {" "}
                I'm a strong believer in teamwork and clear communication, qualities that have helped me
                and my teams smash goals and exceed expectations. Whether we're wrangling data migrations
                or enhancing system security, I'm always keen to roll up my sleeves and get stuck in.
                I love learning new things and eagerly seek out opportunities to grow both personally and professionally.{" "}
              </p>
            </div>
            {/* <div className="about-skills-header">
              <h1>Key Skills</h1>
            </div>

            <div className="about-skills">
              <div className="about-skill">
                <FaUsers />
                <p>Team Leadership</p>
              </div>
              <div className="about-skill">
                <FaProjectDiagram />
                <p>SAP | IT Project Management</p>
              </div>
              <div className="about-skill">
                <FaFileExcel/>
                <p>Business Analysis</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>5+</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>12+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>1000+</h1>
            <p>Project Management Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
