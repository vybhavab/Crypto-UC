import { Box, Button, Center} from '@chakra-ui/react';
import React, {useContext}from 'react';
import { useGoogleLogout } from 'react-google-login';
import { LoginContext } from 'contexts/LoginContext';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const Logout = () => {
  const { setLoggedIn , loginObj, setLoginObj} = useContext(LoginContext);
  const onSuccess = () => {
    setLoggedIn(false);
    setLoginObj({
      ...loginObj,
      googleId: "",
      account_type: "",
      campus_id: "",
      cardano_acct_addr: "",
      name: "",
      email: "",
      imageUrl: ""
    });
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
        <Button as={Box} onClick={signOut} pr={180} color="red">Sign Out</Button>
    </Center>
  );
}

export default Logout;
