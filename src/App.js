import React, { Component } from "react";
import Hero from './components/Hero/Hero'
import Menu from './components/NavMenu/Menu'
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import "./index.css";



class App extends Component {
  render() {
    return (
      <section id="app">
          <Menu/>
          <Hero/>
          <About/>
          <Skill/>
          <Project/>
          <Contact/>
      </section>
    );
  }
}

export default App;
