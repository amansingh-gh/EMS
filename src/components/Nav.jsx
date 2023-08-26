import React from 'react';
import './../assets/styles/App.css'
import logo from './../assets/images/logo.webp'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Nav = ({ toggleActive }) => {
  return (
    <nav id='nav'>
      <div className="logo">
        <img className='nav_logo' src={logo} alt="logo" />
      </div>
      <ul className='nav_links'>
            <li><NavLink to="/">Home</NavLink> </li>
            <li><NavLink to="/about">About</NavLink> </li>
            <li><NavLink to="/events">Events</NavLink> </li>
            <li><NavLink to="/contact">Contact</NavLink> </li>
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
