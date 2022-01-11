import React from 'react'
import "./Home.css"
import { init } from "ityped"
import { useEffect, useRef } from 'react'
import web from "./images/front.png";
import Footer from './Footer';
const Home = () => {
  
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings:["MERN Stack","Web application"]
    });
  },[]);
  return (
    <div className='intro' id="intro">
      <div className='left'>
      <div className='imgcontainer'>
            <img src={web} className="img-fluid animated" alt='homeimg'/>
          </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
        <h2>
          Hi There!! <span role="img" aria-label="wave" className="blog-title-emoji">👋🏻</span> 
        </h2>
        <h1 className="mainTitle">
          I'M
          <strong className="mainName" style={{color:"#7900FF"}}> Vinu</strong>
        </h1>
        <h3><span ref={textRef} ></span></h3>
        <Footer/>
        </div>
      </div>
      
    </div>
  
  )
}

export default Home
