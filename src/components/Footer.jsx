import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.webp";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div id="ft-section">
        <div className="ft-headline">Get News Letter</div>
        <div className="email-cont">
          <input type="text" name="email" placeholder="Your Email" />
        </div>
        <div className="btn-sec">
          <button className="btn">Subscribe</button>
        </div>

        <div id="all">
          <div className="company-details">
            <img className="nav_logo" src={logo} alt="logo" />
            <div className="company-name">Pegasus Team</div>
          </div>
          <div className="nav-icons">
            <li><NavLink to="/">Home</NavLink>{" "}</li>
            <li><NavLink to="/about">About</NavLink>{" "}</li>
            <li><NavLink to="/events">Events</NavLink>{" "}</li>
            <li><NavLink to="/contact">Contact</NavLink>{" "}</li>
          </div>
          <div className="social-icons">
            <div className="fb-ico"><FaFacebook a href="https://google.com"/></div>
            <div className="yt"><AiFillYoutube/></div>
            <div className="github"><FaGithub/></div>
            <div className="discord"><BsDiscord/></div>
          </div>
        </div>
        <div className="copyright-content">
          <p>Copyright © 2023 developed and maintained by #PegasusTeam</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
