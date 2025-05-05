import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/kochezz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/william-phiri-866b8443/"target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio for <a href="https://github.com/kochezz/portfolio" target="_blank" rel="noreferrer">William C. Phiri</a> with 💜</p>
    </footer>
  );
}

export default Footer;