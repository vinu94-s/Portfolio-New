import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Image from "./images/aboutpic.png"
import ResumePDF from "./images/Vinu.pdf"
const About = () => {
  return (
    <div className="container about">
  
      <div className="row">
        <Fade left cascade>
          <div className="col-lg-6">
            <div className="img-div">
              <img src={Image} alt="deadlines" />
            </div>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="col-lg-6 about__content">
            <p >
              I'm a <strong style={{fontWeight:"bold"}}>MERN Stack Developer</strong> based in Tamil Nadu,
              India.
            </p>
            <p>
              I describe myself as a passionate developer who loves coding.
              I like to create and contribute to open source.
              That helps me to learn a ton of new stuff, grow as a developer and
              support other open source projects.
            </p>
            <p>
              In my free time you can find me learning new things, cooking,
              practice coding and spending time with my family in
              Tirunelveli.
            </p>
            <p>
              I am a fresher to the world of coding however I have worked on
              several projects on my own to gain the coding knowledge and
              experience.
            </p>
            <div className="about__buttons">
              <a
              href="ResumePDF"
              className="btn"
              onClick={() => window.open(ResumePDF)}
              target="_blank"
              rel="noreferrer"
              >
                Download CV
              </a>
              
            </div>
            
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;