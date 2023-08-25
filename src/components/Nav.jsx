import React from 'react';
import './../assets/styles/App.css'
import logo from './../assets/images/logo.webp'
import { FaBars } from "react-icons/fa";
const Nav = ({ toggleActive }) => {
  return (
    <nav id='nav'>
      <div className="logo">
        <img className='nav_logo' src={logo} alt="logo" />
      </div>
      <ul className='nav_links'>
        <li><a className='link' href="/">Home</a></li>
        <li><a className='link' href="/about">About</a></li>
        <li><a className='link' href="/services">Events</a></li>
        <li><a className='link' href="/contact">Contact</a></li>
      </ul>
      <div className="nav_right">
        <button onClick={toggleActive} className='menu_btn'>
            <FaBars/>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
