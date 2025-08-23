import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="/Portfolio/assets/profile_img.jpg" alt="Dulakshi Profile" />
      <h1>
        <span>I'm Dulakshi,</span> an aspiring Software Engineer from Sri Lanka.
      </h1>
      <p>
        Passionate about building modern web applications and constantly learning new technologies to grow as a developer.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
  <a href="/dulakshi_resume.pdf" className="anchor-link" download>
    My Resume
  </a>
</div>

      </div>
    </div>
  );
};

export default Hero;
