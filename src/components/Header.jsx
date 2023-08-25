import React, {useState} from 'react';
import Nav from './Nav'
import Slider from './Slider'
import './../assets/styles/App.css'


const Header = () => {

  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <header id='hero-section'>
        <Nav toggleActive={toggleActive} />
        <div className={`header_sides left_side ${isActive ? '' : 'active'}`}></div>
        <div className={`right_side header_sides ${isActive ? '' :'active'}`}></div>
        <Slider/>
    </header>
  );
};

export default Header;
