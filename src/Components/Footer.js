import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className="footerLinks">
        <a href="https://github.com/asadqazi" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/asadqazi/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:asad560@gmail.com" target="_blank">
          <GrMail />
        </a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank">
          <SiLeetcode />
        </a> */}
      </div>
    </footer>
  );
}

export default Footer