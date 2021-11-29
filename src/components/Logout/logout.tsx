import { Box, Center} from '@chakra-ui/react';
import React, {useContext}from 'react';
import { useGoogleLogout } from 'react-google-login';
import { LoginContext } from 'contexts/LoginContext';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const Logout = () => {
  const { setLoggedIn } = useContext(LoginContext);
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
        <Box onClick={signOut} pr={180} color="red">Sign Out</Box>
    </Center>
  );
}

export default Logout;
