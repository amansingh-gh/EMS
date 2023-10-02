import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "./../assets/images/bg1.webp";
import bg2 from "./../assets/images/bg2.webp";
import bg3 from "./../assets/images/bg3.webp";
import bg4 from "./../assets/images/bg4.webp";
import {useTypewriter} from 'react-simple-typewriter'

const Slider = () => {
  const [roboWar] = useTypewriter({
    words:[' Robo War!'],
    loop:{},
    typeSpeed:30,
    deleteSpeed:20
  })
  const [codeSolve] = useTypewriter({
    words:[' Solve the Code!'],
    loop:{},
    typeSpeed:30,
    deleteSpeed:20
  })
  const [cyberPotential] = useTypewriter({
    words:[" Cybersecurity's Potential"],
    loop:{},
    typeSpeed:30,
    deleteSpeed:20
  })
  const [virtualArena] = useTypewriter({
    words:[" Virtual Arena"],
    loop:{},
    typeSpeed:30,
    deleteSpeed:20
  })
  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showStatus={false}
    >
      <div>
        <img src={bg1} alt="Slide 1" />
        <div className="content">
          <h1 className="slider_heading">
            Bots Clash, Gears Spin: Glory Awaits in{" "}
            <span className="highlight">{roboWar}</span>
          </h1>
          <p className="slider_para">
            Prepare for mechanized combat like never before! Join us at Robo War
            for fierce battles between custom robot cars. Feel the adrenaline as
            technology and strategy collide in a high-stakes showdown!
          </p>
          <button className="interesting_btn">Interesting</button>
        </div>
      </div>
      <div>
        <img src={bg2} alt="Slide 2" />
        <div className="content">
          <h1 className="slider_heading">
            Crack, Code, Triumph: Embrace the Challenge at{" "}
            <span className="highlight2">{codeSolve}</span>
          </h1>
          <p className="slider_para">
            Unleash your coding prowess at 'Solve the Code'! Decode challenges,
            fuel innovation, and reap rewards. Join fellow programmers for an
            exhilarating day of problem-solving and seize your moment of glory!
          </p>
          <button className="interesting_btn">Interesting</button>
        </div>
      </div>
      <div>
        <img src={bg3} alt="Slide 3" />
        <div className="content">
          <h1 className="slider_heading">
            Empowering Your Digital Defense: Unveiling
            <span className="highlight3">{cyberPotential}</span>
          </h1>
          <p className="slider_para">
            Step into the realm of cybersecurity excellence. Our event is a
            gateway to harnessing the power of protection in the digital age.
            Uncover insights, skills, and networks that fortify your online
            presence.
          </p>
          <button className="interesting_btn">Interesting</button>
        </div>
      </div>
      <div>
        <img src={bg4} alt="Slide 4" />
        <div className="content">
          <h1 className="slider_heading">
            Level Up Reality: Where Esports Transcend the{" "}
            <span className="highlight4">{virtualArena}</span>
          </h1>
          <p className="slider_para">
            Dive into the exhilarating world of esports at our event. Witness
            top-tier competitions, connect with fellow enthusiasts, and explore
            the future of competitive gaming. Ignite your esports journey with
            us!
          </p>
          <button className="interesting_btn">Interesting</button>
        </div>
      </div>
    </Carousel>
  );
};
export default Slider;
