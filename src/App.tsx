import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Sidebar from './components/Sidebar/Sidebar';

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Navbar from "components/Navbar/Navbar";



class App extends React.Component {
  render() {
    return (
        <>
        <Navbar />
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={Login} />
                <Route component={PageNotFound} />
              </Switch>
          </Router>
    </>
    );
  }
}

export default App;
