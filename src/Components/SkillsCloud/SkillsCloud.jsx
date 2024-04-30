import React from "react";
import "./SkillsCloud.css"; // Custom styling
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



const SkillsCloud = () => {
    const skills = [
      { icon: FaUsers, name: "Team Leadership", description: "Leading and managing teams effectively." },
      { icon: SiSap, name: "SAP", description: "Able to coordinate SAP Projects from start to finish." },
      {icon: FaFileExcel, name: "Business Analysis", description: "Experience in finding and noticing areas of improvement." },
      {icon: SiPowerbi, name: "PowerBI", description: "Able to build complex PowerBi Dashboards from database models to visual report." },
      {icon: FaServer, name: "System Administration", description: "Experience in managing and maintaining systems." },
      {icon: FaPython, name: "Python", description: "Experience in Python programming." },
      {icon: FaProjectDiagram, name: "Project Management", description: "Experience in managing complex IT projects from start to finish." },
      {icon: FcMindMap, name: "Data Analysis", description: "Experience in analyzing data and finding trends." },

      
    ];
  
    return (
      <div id="skills" className="skills-parent">
        <div className="skills-title">
          <h1>My Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="skill-cloud">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag" data-tooltip={skill.description}>
              <skill.icon className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default SkillsCloud;

