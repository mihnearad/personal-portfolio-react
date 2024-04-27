import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Scuba.jpg";
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
                I have a strong background in IT and a proven track record of
                delivering projects on time and within budget. I am a highly
                motivated individual with a passion for technology and a desire
                to succeed.{" "}
              </p>
              <p>
                {" "}
                I have excellent communication skills and the ability to work
                well under pressure. I am a team player and enjoy working with
                others to achieve common goals. I am always looking for new
                challenges and opportunities to learn and grow.{" "}
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
