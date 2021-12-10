import React,  { useState }  from 'react';
import AppRoutes from 'routes/routes';
import {LoginContext} from "contexts/LoginContext";
import { User } from 'types/firebase.types';
import { CardanoContext } from 'contexts/CardanoContext';
import { Transaction } from 'types/cardano.types';

let login_obj: User = {
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
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState("");
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    return (
      <LoginContext.Provider value={{loggedIn: isSignedIn, setLoggedIn: setSignIn,loginObj:loginObj,setLoginObj:setLoginObj}}>
        <CardanoContext.Provider
          value={
            {
              balance: balance,
              address: address,
              transactions: transactions,
              setAddress: setAddress,
              setBalance: setBalance,
              setTransactions: setTransactions
            }
          }>

          <AppRoutes loggedIn={isSignedIn}/>
        </CardanoContext.Provider>
      </LoginContext.Provider>
    )
}

export default App;
