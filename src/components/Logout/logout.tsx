import { Button, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { GoogleLoginResponse, useGoogleLogin, useGoogleLogout } from 'react-google-login';

interface Props {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const Logout = (props: Props) => {

  const onSuccess = () => {
    props.setIsLoggedIn(false);
    console.log('logged out');
  }

  const onFailure = () => {
    console.log('Ooopsie doopsie');
  }

  const { signOut } = useGoogleLogout({
      clientId,
      onLogoutSuccess: onSuccess,
      onFailure,
  });

  return (
    <Center>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        onClick={signOut}
      >
        <Text>Log Out</Text>
      </Button>
    </Center>
  );
}

export default Logout;
