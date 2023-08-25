import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg1 from './../assets/images/bg1.webp';
import bg2 from './../assets/images/bg2.webp';
import bg3 from './../assets/images/bg3.webp';
import bg4 from './../assets/images/bg4.webp';

const Slider = ()=>{
    return(
        <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showStatus={false}>
        <div>
          <img src={bg1} alt="Slide 1" />
          <div className="content">
            <h1 className="slider_heading">Bots Clash, Gears Spin: Glory Awaits in <span className="highlight"> Robo War!</span></h1>
            <p className="slider_para">Prepare for mechanized combat like never before! Join us at Robo War for fierce battles between custom robot cars. Feel the adrenaline as technology and strategy collide in a high-stakes showdown!</p>
            <button className="interesting_btn">Interesting</button>
          </div>
        </div>
        <div>
          <img src={bg2} alt="Slide 2" />
        </div>
        <div>
          <img src={bg3} alt="Slide 3" />
        </div>
        <div>
          <img src={bg4} alt="Slide 4" />
        </div>
      </Carousel>
    )
}
export default Slider;