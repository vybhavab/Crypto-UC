import React, { useContext } from 'react';
import { firebase } from "initFirebase";
import { getDatabase, ref, set } from "firebase/database";
import { LoginContext } from 'contexts/LoginContext';
import { getUserData, setData } from 'utils/firebase';
import {
    Box,
    Center,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

const FirebaseUser = () => {
    const {loginObj} = useContext(LoginContext);
    const db = getDatabase(firebase);

    console.log(loginObj);
   let userFound  = getUserData(loginObj.googleId);

    const Push = () => {
        if (!userFound){
            userFound = true;
            const userObj = {
                name:loginObj.name,
                email:loginObj.email,
                imageUrl:loginObj.imageUrl,
                cardano_acct_addr:loginObj.cardano_acct_addr,
                campus_id:loginObj.campus_id,
                account_type:loginObj.account_type
            }
            console.log("!!!!!!!!!!!!",userObj)
            setData(`users/${loginObj.googleId}`,userObj);
            getUserData(loginObj.googleId);
        }
    };

    return (
        <Center py={6}>
          <Box
            w={'full'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
              <Text>Firebase User</Text>
              <button onClick={Push}>PUSH</button>
          </Box>
        </Center>
      );
}

export default FirebaseUser;
