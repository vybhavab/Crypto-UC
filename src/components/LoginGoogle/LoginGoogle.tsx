import React, {useContext}from "react";
import {GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin} from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from "@chakra-ui/react";
import { LoginContext } from "contexts/LoginContext";

// TODO: Refresh token


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const LoginGoogle = () => {
  const { setLoggedIn, setLoginObj,loginObj } = useContext(LoginContext);
  const onLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const res = response as GoogleLoginResponse;
    let email = res.profileObj.email
    email = email.split("@")[1]
    if (email !== "ucdavis.edu")
    {
      alert('Not a UC Davis Email Habibi');
      return false;
    }
    setLoggedIn(true);
    setLoginObj({...loginObj,
      googleId: res.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      imageUrl: res.profileObj.imageUrl,
      cardano_acct_addr: "test123",
      campus_id: "Davis",
      account_type: "Student"
    });
    
    console.log(res.profileObj);
    //TODO: refresh token
  }

  const onLoginFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setLoggedIn(false);
    console.log(response);
    //TODO: push to failure
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
