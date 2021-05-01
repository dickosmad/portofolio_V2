import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Switch, Route,  BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

const Rout = (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )

ReactDOM.render( Rout, document.getElementById('root'));

registerServiceWorker();