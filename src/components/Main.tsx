import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profile_pic_kochezz.jpg'; // Import the image properly

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Kochez Profile Picture" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kochezz" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/william-phiri-866b8443/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>William C. Phiri</h1>
          <p>Data Scientist | Post-Grad</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kochezz" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/william-phiri-866b8443/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
