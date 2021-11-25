import { Button, Center, Text } from '@chakra-ui/react';
import React, {useContext}from 'react';
import { useGoogleLogout } from 'react-google-login';
import { LoginContext } from 'contexts/LoginContext';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const Logout = () => {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);
  const onSuccess = () => {
    setLoggedIn(false);
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
        <Text>Sign Out</Text>
      </Button>
    </Center>
  );
}

export default Logout;
