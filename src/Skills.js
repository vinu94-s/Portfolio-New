import React from 'react'
import Fade from "react-reveal/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";
import Image1 from "./images/skillpic.png"
import "./Skills.css"
const Skills = () => {
  return (
    
          <div className="container-skill">
      <div className="row">
       
        <Fade left cascade>
          <div className="col-lg-6">
            <div className="img-div">
              <img src={Image1} alt="deadlines" />
            </div>
          </div>
        </Fade>
        <Fade right cascade>
        <div className="skillContainer__text">
          <h2>What I've Learned</h2>
        <div className="skillContainer__skillSet">
            <h5>React Js</h5>
            <div className="skillContainer__slider skillContainer__slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>HTML/CSS</h5>
            <div className="skillContainer__slider skillContainer__slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>JavaScript</h5>
            <div className="skillContainer__slider skillContainer__slider1">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>NodeJS</h5>
            <div className="skillContainer__slider skillContainer__slider2">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Express</h5>
            <div className="skillContainer__slider skillContainer__slider3">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>SQL</h5>
            <div className="skillContainer__slider skillContainer__slider4">
              <LinearProgress variant="determinate" value={50} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>MongoDB</h5>
            <div className="skillContainer__slider skillContainer__slider5">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>AWS</h5>
            <div className="skillContainer__slider skillContainer__slider6">
              <LinearProgress variant="determinate" value={65} />
            </div>
          </div>
          </div>
        </Fade>
     </div> 
    </div>
  )
}

export default Skills