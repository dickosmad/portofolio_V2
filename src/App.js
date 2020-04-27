import React, { Component } from "react";
import Hero from './components/Hero/Hero'
import Menu from './components/NavMenu/Menu'
import "./index.css";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";



class App extends Component {
  render() {
    return (
      <>
          <Menu/>
          <Hero/>
          <About/>
          <Skill/>
          <Project/>
          <Contact/>
          
      </>
    );
  }
}

export default App;
