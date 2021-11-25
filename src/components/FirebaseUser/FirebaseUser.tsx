import React, { useContext } from 'react';
import firebase from "initFirebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { LoginContext } from 'contexts/LoginContext';
import {
    Box,
    Center,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
function getUserData (dbRef:any, googleId:string) : boolean {
    get(child(dbRef, `users/${googleId}`)).then((snapshot) => {
        if (snapshot.exists()) {
        console.log(snapshot.val());
        return true;
        } else {
        console.log("No data available");
        return false;
        }
    }).catch((error) => {
        console.error(error);
        return false;
    });
    return false;
}
const FirebaseUser = () => {
    const {loginObj} = useContext(LoginContext);
    const db = getDatabase(firebase);
    const dbRef = ref(db);

    console.log(loginObj);
   let userFound  = getUserData(dbRef,loginObj.googleId);
   
    const Push = () => {
        if (!userFound){
            userFound = true;
            set(ref(db, `users/${loginObj.googleId}`), {
                name:loginObj.name,
                email:loginObj.email,
                imageUrl:loginObj.imageUrl,
                cardano_acct_addr:loginObj.cardano_acct_addr,
                campus_id:loginObj.campus_id,
                account_type:loginObj.account_type
            });
            getUserData(dbRef,loginObj.googleId);
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