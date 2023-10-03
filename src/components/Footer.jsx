import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.webp";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <>

      <div id="footer-section">

        <div className="company-details">
            <img className="nav_logo" src={logo} alt="logo" />
            <div className="company-name">Pegasus Team</div>
          </div>

        <div className="newsLetter">
        <div className="ft-headline">Get News Letter</div>
        <div className="email-cont">
          <input type="text" name="email" placeholder="Your Email" />
        </div>
        <div className="btn-sec">
          <button className="btn">Subscribe</button>
        </div>
        <div className="copyright-content">
          <p>Copyright © 2023 developed and maintained by #PegasusTeam</p>
        </div>
        </div>
        
        <div className="social-handle">
        <div className="social-icons">
            <li><NavLink to="https://fb.com" target="_blank" ><FaFacebook/></NavLink> </li>
            <li><NavLink to="https://www.linkedin.com/" target="_blank" ><BsDiscord/></NavLink> </li>
            <li><NavLink to="https://github.com" target="_blank" ><FaGithub/></NavLink> </li>
            <li><NavLink to="https://youtube.com" target="_blank" ><AiFillYoutube/></NavLink> </li>
            <li><NavLink to="https://twitter.com" target="_blank" ><FaTwitter/></NavLink> </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
