import { createContext } from "react";
import { User } from "types/firebase.types";

const LoginContext = createContext({
    loggedIn: false,
    setLoggedIn: (_val: boolean) => {},
    loginObj:{
        googleId: "" ,
        name:"",
        email:"",
        imageUrl:"",
        cardano_wallet_id: "",
        cardano_acct_addr:"",
        campus_id:"",
        account_type: ""
    },
    setLoginObj: (_val:User) => {}
  });

export {LoginContext};
