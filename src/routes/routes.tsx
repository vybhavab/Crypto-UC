// // import
import React from "react";
import Home from "pages/Home/Home";
import Sidebar from "components/Sidebar/Sidebar";

import PageNotFound from "pages/PageNotFound/PageNotFound";
import Dashboard from "pages/Dashboard/Dashboard";
import Navbar from "components/Navbar/Navbar";
import Assets from "pages/Dashboard/Assets";
import Market from "pages/Dashboard/Market";
import Pay from "pages/Dashboard/Pay";
import InviteOthers from "pages/Dashboard/InviteOthers";
import Learn from "pages/Dashboard/Learn";
import Notifications from "pages/Dashboard/Notifications";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const AppRoutes = () => {
  return(
  <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Sidebar>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/assets" component={Assets}/>
          <Route path="/market" component={Market}/>
          <Route path="/pay" component={Pay}/>
          <Route path="/learntoearn" component={Learn}/>
          <Route path="/notifications" component={Notifications}/>
          <Route path="/invite" component={InviteOthers}/>
        </Sidebar>
        <Route component={PageNotFound} />
      </Switch>
  </Router>
  )
}
export default AppRoutes;
