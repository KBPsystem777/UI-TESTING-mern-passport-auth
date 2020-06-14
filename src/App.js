import React from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import Success from "./components/Success";
import Failed from "./components/Failed";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={SignUpForm} />
          <Route path="/success" exact component={Success} />
          <Route path="/failed" exact component={Failed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
