import React,  { useContext, useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Navbar from "components/Navbar/Navbar";


const App = () => {
    return (
          <Router>
            <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signin" component={SignIn} />
                <Route component={PageNotFound} />
              </Switch>
          </Router>
    )
}

export default App;
