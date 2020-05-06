import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Youtube from "./components/Youtube";
import Github from "./components/Github";
import Twitch from "./components/Twitch";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/youtube">
            <Youtube />
          </Route>
          <Route exact path="/twitch">
            <Twitch />
          </Route>
          <Route exact path="/github">
            <Github />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
