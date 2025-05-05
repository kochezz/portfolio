import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Excel",
    "CPA",
    "Gantt Charts",
    "Power BI",
    "Monday.com",
    "Minitab",
    "MS Project",
    "Visio",
    "AutoCad"

];

const labelsSecond = [
    "Github",
    "ggplot2",
    "Matplotlib",   
    "Python",
    "SQL",
    "R",
    "Scikit-learn",
    "Tidyverse",
    "Pandas",
    "seaborn",
];

const labelsThird = [
    "OpenAI",
    "Python",
    "R",
    "VSCode",
    "GitHub",   
    "R-Studio",
    "Jupyter",
    "Shinny",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Project Management</h3>
                    <p>Proven ability to manage complex projects in highly regulated environments including the manufacturing of Active Pharmaceutical Ingredients (API's), pharmaceutical diagnostics, and healthcare research.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Programming, Visualisation & Automation</h3>
                    <p>Developing my postgrad skills in R, Python, and SQL for data exploration, advanced predictive modelling,machine learning, AI and data visualization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI, LLM & Project Tools</h3>
                    <p>Enhancing relevant expertise to leverage the latest AI models in my projects. Passionate about leveraging data science to improve outcomes in varying business domains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;