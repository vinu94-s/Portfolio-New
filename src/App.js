import React from "react"

import About from "./About";
import './App.css';
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Skills from "./Skills";

function App() {
  return (
    <>
    
    <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/project" component={Project} />
       <Route path="/contact" component={Contact} />
       <Route path="/skills" component={Skills} />
       
     </Switch>

     
     
     </>

    
    
    );
  
}

export default App;
