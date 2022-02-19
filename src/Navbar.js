import React from 'react'
import { NavLink } from 'react-router-dom'
import Resume from "./images/Vinu.pdf";


const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='rest'>
                     <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink 
                                className="navbar-brand" to="/">Developer</NavLink>
                                <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                 aria-expanded="false" 
                                 aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div 
                                className="collapse navbar-collapse"
                                 id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink 
                                            activeClassName='menu_active'
                                            exact 
                                            className="nav-link active" 
                                            aria-current="page" 
                                            to="/">
                                            Home
                                            </NavLink>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/about">
                                                About
                                                </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/project">
                                                Project
                                                </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active'  className="nav-link" to="/skills">
                                                Skills
                                                </NavLink>
                                        </li>
                                      
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/contact">
                                                Contact
                                                </NavLink>
                                        </li>
                           
                                        <div className='Resume-button'>
     
                                        <a
                href="Resume"
                className="btn"
                onClick={() => window.open(Resume)}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
  
  
  
   
  
      </div>
                
                                    </ul>
      

                                </div>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
