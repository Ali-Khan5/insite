import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./MainPage/Home";
 import SignUp from './MainPage/Signup';
import Header from "./Navbar/navbar"
import CompanyCreate from "./MainPage/CompanyCreate";
import CompanyHome from './MainPage/CompanyHome';
import createBrowserHistory from "history/createBrowserHistory";
import ViewCompanies from "./MainPage/BrosweCompanies";
const history = require("history").createBrowserHistory;

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/view-companies" component={ViewCompanies}/>
            <Route exact path="/company-onboard" component={CompanyCreate}/>
            <Route exact path="/company/:name" component={CompanyHome}/>
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routers;
