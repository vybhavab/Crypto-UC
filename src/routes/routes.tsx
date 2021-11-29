// // import
import React, {useContext}from "react";
import Home from "pages/Home/Home";
import Sidebar from "components/Sidebar/Sidebar";
import LearnMore from "pages/LearnMore/LearnMore";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import Dashboard from "pages/Dashboard/Dashboard";
import Navbar from "components/Navbar/Navbar";
import Portfolio from "pages/Dashboard/Portfolio";
import Market from "pages/Dashboard/Market";
import Pay from "pages/Dashboard/Pay";
import InviteOthers from "pages/Dashboard/InviteOthers";
import OurTeam from "pages/LearnMore/OurTeam";
import NewNoteWorthy from "pages/LearnMore/NewNoteWorthy";
import RoadMap from "pages/LearnMore/RoadMap";
import Design from "pages/LearnMore/Design";

import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";


const AppRoutes = (props:any) => {
 
  return(
  <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/learnmore" component={LearnMore}/>
        <Route path="/ourteam" component={OurTeam}/>
        <Route path="/updates" component={NewNoteWorthy}/>
        <Route path="/roadmap" component={RoadMap}/>
        <Route path="/design" component={Design}/>
        <Sidebar>
          <PrivateRoute path="/dashboard" component={Dashboard} isAuth={props.loggedIn}/>
          <PrivateRoute path="/portfolio" component={Portfolio}  isAuth={props.loggedIn}/>
          <PrivateRoute path="/market" component={Market} isAuth={props.loggedIn}/>
          <PrivateRoute path="/pay" component={Pay}  isAuth={props.loggedIn}/>
          <PrivateRoute path="/invite" component={InviteOthers}  isAuth={props.loggedIn}/>
        </Sidebar>
        <Route component={PageNotFound} />
      </Switch>
  </Router>
  )
}
export default AppRoutes;
