import React from "react";
import {GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin} from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from "@chakra-ui/react";

// TODO: Refresh token

interface Props {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const LoginBox = (props: Props) => {

  const onLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    props.setIsLoggedIn(true);
    console.log(response);
    //TODO: refresh token
  }

  const onLoginFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    props.setIsLoggedIn(false);
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
      <Center p={8}>
        <Button
          w={'full'}
          maxW={'md'}
          variant={'outline'}
          leftIcon={<FcGoogle />}
          onClick={signIn}
        >
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Center>
  );
}

export default LoginBox;
