import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import About from "./Components/About";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import FormAdd from "./Components/Form";
import Edit from "./Components/Edit";

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <section className="wrapper">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/price" component={Pricing} />
            <Route exact path="/create" component={FormAdd} />
            <Route exact path="/edit/:id" component={Edit} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  );
};

export default App;
