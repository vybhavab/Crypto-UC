import React, {useContext}from "react";
import {GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin} from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from "@chakra-ui/react";
import { LoginContext } from "contexts/LoginContext";
import { getUserData, hasUserData, setData } from "utils/firebase";

// TODO: Refresh token


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const LoginGoogle = () => {
  const { loggedIn, setLoggedIn, setLoginObj,loginObj } = useContext(LoginContext);

  const onLoginSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const res = response as GoogleLoginResponse;
    let email = res.profileObj.email
    email = email.split("@")[1]
    if (email !== "ucdavis.edu")
    {
      alert('Not a UC Davis Email Habibi');
      return false;
    }
    if(!loggedIn){
      console.log("loggedIn")
      const hasData = await hasUserData(res.googleId);
      if(hasData){
        console.log("hasUserData")
        const data = await getUserData(res.googleId);
        console.log(data);
        setLoginObj({...loginObj,
          googleId: res.googleId,
          name: res.profileObj.name,
          email: res.profileObj.email,
          imageUrl: res.profileObj.imageUrl,
          cardano_acct_addr: data!.cardano_acct_addr,
          campus_id: data!.campus_id,
          account_type: data!.account_type
        });
      }else{
        console.log("no hablo userdata")
        const obj = {
          googleId: res.googleId,
          name: res.profileObj.name,
          email: res.profileObj.email,
          imageUrl: res.profileObj.imageUrl,
          cardano_acct_addr: "",
          campus_id: "Davis",
          account_type: "Student"
        }
        setLoginObj({
          ...loginObj,
          ...obj,
        });
        console.log(loginObj, obj);
        setData(res.googleId, obj);
      }
      setLoggedIn(true);
    }
  }

  const onLoginFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setLoginObj({...loginObj,
        googleId: "",
        name: "",
        email: "",
        imageUrl: "",
        cardano_acct_addr: "",
        campus_id: "",
        account_type: ""
    });
    setLoggedIn(false);
  }

  const { signIn } = useGoogleLogin(
    {
      clientId,
      onSuccess: onLoginSuccess,
      onFailure: onLoginFailure,
      isSignedIn: true,
    }
  )

  return (
      <Center p={2}>
        <Button
          variant={'outline'}
          leftIcon={<FcGoogle />}
          _hover={{
            bg: '#03F9E6',
          }}
          onClick={signIn}
        >
         <Text>Sign in with Google</Text>
        </Button>
      </Center>
  );
}

export default LoginGoogle;
