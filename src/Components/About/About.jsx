import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        {/* Left Side - Profile Image */}
        <div className="about-left">
        <img src="/Portfolio/assets/profile_img.jpg" alt="Dulakshi Profile" />
        </div>

        {/* Right Side - Details */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi! I'm an enthusiastic undergraduate pursuing a <b>Higher National Diploma in Information Technology (HNDIT)</b>.
              I have a strong foundation in both technical and creative skills, including web development, database management, 
              and modern JavaScript frameworks.
            </p>
            <p>
              I am passionate about creating interactive and user-friendly applications. 
              I thrive in collaborative environments and enjoy tackling challenging problems 
              that require innovative solutions.
            </p>
            <p>
              My ultimate goal is to contribute to dynamic teams and continuously expand my skill set 
              to become a full-stack developer capable of building scalable and impactful projects.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Skills & Technologies</h2>
            <div className="skill-list">
              <div className="skill-item">HTML & CSS</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">PHP & Laravel</div>
              <div className="skill-item">MySQL</div>
              <div className="skill-item">Tailwind CSS</div>
              <div className="skill-item">Python (Basics)</div>
              <div className="skill-item">C#</div>
              <div className="skill-item">Git & GitHub</div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default About;
