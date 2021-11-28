import React,  { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Navbar from "components/Navbar/Navbar";
import {LoginContext} from "contexts/LoginContext"

let login_obj={
  googleId: "" ,
  name:"",
  email:"",
  imageUrl:"",
  cardano_acct_addr:"",
  campus_id:"",
  account_type: "",
}

const App = () => {
    const [isSignedIn, setSignIn] = useState(false);
    const [loginObj, setLoginObj] = useState(login_obj);

    return (
      <LoginContext.Provider value={{loggedIn: isSignedIn, setLoggedIn: setSignIn,loginObj:loginObj,setLoginObj:setLoginObj}}>
          <Router>
            <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signin" component={SignIn} />
                <Route component={PageNotFound} />
              </Switch>
          </Router>
      </LoginContext.Provider>
    )
}

export default App;
