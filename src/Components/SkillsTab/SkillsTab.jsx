import React, { useState } from "react";
import "./SkillsTab.css"; // Custom styling

const skillData = {
  Technical: [
    { name: "Python", description: "Experience in Python programming." },
    { name: "System Administration", description: "Proficient in managing and maintaining Linux and Windows systems." },
    { name: "PowerBI", description: "Able to build complex PowerBi Dashboards from database models to visual report." },
    { name: "SQL", description: "Proficient in writing complex SQL queries, optimizing database performance, and managing relational databases." },
    { name: "Web Development", description: "Learning to build websites using HTML, CSS, and JavaScript." },
    { name: "Networking", description: "Experience in managing and maintaining traditional and network infrastructure." },
    { name: "Cloud Computing", description: "Experience in managing and maintaining cloud infrastructure." },


  ],
  Management: [
    { name: "Team Leadership", description: "Leading, inspiring and managing teams effectively." },
    { name: "Project Management", description: "Experience in managing complex IT projects from start to finish." },
    { name: "SAP Project Manager", description: "Able to coordinate SAP Projects from blueprinting to GoLive." },
    { name: "Scum Master (PSM I)", description: "Able to efficiently manage projects using Agile methodology." },
    { name: "Budget Management", description: "I can create and implement strcutured IT Budgets for small and medium environments." },
    { name: "Risk Management", description: "Experience in identifying and managing risks in IT projects." },
  ],
  Analysis: [
    { name: "Business Analysis", description: "Experience in finding and noticing areas of improvement." },
    { name: "Data Analysis", description: "Experience in analyzing data and finding trends for operational effectivness." },
    { name: "Machine Learning Models", description: "Analysed data using Regression and Linear machine models" },
    { name: "Data Visualization", description: "Experience in creating visualizations to help stakeholders understand data." },
    { name: "Data Management", description: "Experience in managing and maintaining data." },
    { name: "PowerBi", description: "Experience in creating complex PowerBi Dashboards." },


  ],
};

const SkillsTab = () => {
  const [activeTab, setActiveTab] = useState("Technical");

  return (
    <div id="skills" className="skills-parent">
      <div className="skills-title">
        <h1>My Skills</h1>
      </div>
      <div className="tabs">
        {Object.keys(skillData).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="skill-table-container">
        <table className="skill-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {skillData[activeTab].map((skill, index) => (
              <tr key={index}>
                <td>{skill.name}</td>
                <td>{skill.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillsTab;
