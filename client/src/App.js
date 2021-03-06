import React, { Component } from "react";
import "./App.css";
import { List, NavBar, Search, Title } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Title />
          <Switch>
            <Route exact path="/saved" render={null} />
            <Route path="*" render={props => <Search {...props} />} />
          </Switch>
          <List />
        </div>
      </Router>
    );
  }
}

export default App;
