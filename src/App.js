import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Representatives from "./components/representatives/Representatives";
import Search from "./components/representatives/Search";
import About from "./components/pages/About";

import RepState from "./context/rep/RepState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <RepState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search />
                      <Representatives />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </RepState>
  );
};

export default App;
