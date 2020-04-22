import React, { Component } from "react";
import Hero from './components/Hero/Hero'
import Menu from './components/NavMenu/Menu'
import "./index.css";
import About from "./components/About/About";


class App extends Component {
  render() {
    return (
      <>
          <Menu/>
          <Hero/>
          <About/>
          
      </>
    );
  }
}

export default App;
