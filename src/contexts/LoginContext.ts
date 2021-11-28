import { createContext } from "react";

interface LoginObj{
        googleId: string ,
        name:string,
        email:string,
        imageUrl:string,
        cardano_acct_addr:string,
        campus_id:string,
        account_type: string
}
const LoginContext = createContext({
    loggedIn: false,
    setLoggedIn: (_val: boolean) => {},
    loginObj:{
        googleId: "" ,
        name:"",
        email:"",
        imageUrl:"",
        cardano_acct_addr:"",
        campus_id:"",
        account_type: ""
    },
    setLoginObj: (_val:LoginObj) => {}
  });

export {LoginContext};
