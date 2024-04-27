import React from "react";
import "./Skills.css"; // Custom styling
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaUsers,
  FaProjectDiagram,
  FaFileExcel,
  FaPython,
  FaServer,
} from "react-icons/fa";
import { SiPowerbi, SiSap } from "react-icons/si";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FcMindMap } from "react-icons/fc";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Skills = () => {
  return (
    <div id="skills" className="skills-parent">
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-carousel">
        <Slider {...sliderSettings}>
          <div className="skill">
            <FaUsers className="skill-icon skill-leadership" />{" "}
            <p className="skill-text">Team Leadership</p>{" "}
          </div>
          <div className="skill">
            <SiSap className="skill-icon skill-sap" />
            <p className="skill-text">SAP Project Management</p>
          </div>
          <div className="skill">
            <FaFileExcel className="skill-icon skill-excel" />
            <p className="skill-text">Business Analysis</p>
          </div>
          <div className="skill">
            <SiPowerbi className="skill-icon skill-powerbi" />{" "}
            <p className="skill-text">PowerBI</p>
          </div>
          <div className="skill">
            <FaServer className="skill-icon skill-python" />
            <p className="skill-text">System Administration</p>
          </div>
          <div class="skill">
            <FcMindMap className="skill-icon" />
            <p className="skill-text">IT Process Workflows</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
