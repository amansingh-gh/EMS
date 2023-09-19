import React, { useState } from "react";
import Nav from "./Nav";
import Slider from "./Slider";
import "./../assets/styles/Global.css";
import Whoweare from "./HomeContent/Whoweare";
import Upcoming from "./HomeContent/Upcoming";
import Footer from "./Footer";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <header id="hero-section">
      <Nav toggleActive={toggleActive} />
      <div
        className={`header_sides left_side ${isActive ? "" : "active"}`}
      ></div>
      <div
        className={`right_side header_sides ${isActive ? "" : "active"}`}
      ></div>
      <Slider />
    </header>
    <Whoweare/>
    <Upcoming/>
    <Footer/>
    </>
  );
};

export default Header;
