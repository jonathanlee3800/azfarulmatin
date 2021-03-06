import "./App.css";
import React, { useState } from "react";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavComponent from "../src/components/nav";
import Footer from "../src/components/footer";
import Home from "../src/pages/home";

function App() {
  return (
    <Router>
      <NavComponent></NavComponent>
      <div>
        {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
