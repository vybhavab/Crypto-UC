import React,  { useState }  from 'react';
import AppRoutes from 'routes/routes';
import {LoginContext} from "contexts/LoginContext";

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
        
        <AppRoutes loggedIn={isSignedIn}/>
          
      </LoginContext.Provider>
    )
}

export default App;
