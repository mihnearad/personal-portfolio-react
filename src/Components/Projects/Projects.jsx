import React from 'react';
import './Projects.css'; 
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import Projects_Data from './projects_data';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>My Projects</h1> 
            </div>
            <div className="projects-container">
                {Projects_Data.map((project, index) => { // Renamed service to project for clarity
                    return (
                        <div key={index} className='projects-format'>
                            <a href={project.s_link} target="_blank" rel="noopener noreferrer">
                                <h3>{project.s_no}</h3>
                                <h2>{project.s_name}</h2>
                                <p>{project.s_desc}</p>
                                <div className="projects-readmore">
                                    <p>Read More</p>
                                    <img src={arrow_icon} alt='' />
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
