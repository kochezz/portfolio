import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Post Grad Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Athlone, IE</h4>
            <p>
            Multidisciplinary professional currently upskilling through an NFQ Level 9 Post-grad in Data Science. Program covers a wide range of topics including Data Analytics, Machine Learning, Data Visualization, and Data Engineering.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Athlone, IE</h4>
            <p>
            Supervised the development and implementation of production capacity while ensuring compliance with regulatory standards through process innovation for API manufacturing. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Chingola, ZM</h4>
            <p>
            Developed and managed a strategic execution plan to ensure effective project execution with a cross-functional team. Ensured adherence to project scope, budget, and timelines.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2004 - 2012"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Process Support Technical Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Longford, IE</h4>
            <p>
            Provided subject matter expertise for technical operations deliverables including product transfer and product launches from Abbott Lake County in Chicago USA to Abbott Longford in Ireland ensuring execution of necessary feasibility and pre-production activities.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;