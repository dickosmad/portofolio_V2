import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Switch, Route,  BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import App from "./App";

import registerServiceWorker from './registerServiceWorker';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skills/Skill";

const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/skill" component={Skill} />
      </Switch>
    </Router>
  )

ReactDOM.render( routing, document.getElementById('root'));

registerServiceWorker();