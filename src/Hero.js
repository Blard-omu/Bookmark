import React from 'react'
import hero_img from './images/illustration-hero.svg'

const Hero = () => {
  return (
    <div className="container d-flex">
      <div className="hero-content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="get-started">
          <a href="#" className="btn p-2 btn-outline-primary">
            Get it on Chrome
          </a>
          <a href="#" className="btn ms-2 p-2 btn-outline-primary">
            Get it on Firefox
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src={hero_img} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Hero