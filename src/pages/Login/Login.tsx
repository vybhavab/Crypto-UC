import React, {useState} from "react";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    VStack,
    Grid
  } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import LoginGoogle from "components/LoginGoogle/LoginGoogle";
import Logout from "components/Logout/logout";

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <div>
          <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('.50', 'gray.800')}>
                <Stack align={'center'} spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>

                    <Heading fontSize={'4xl'}>Sign in using UC Account</Heading>
                    <Text fontSize={'lg'} color={'gray.500'}>
                      to enjoy all of our cool features ✌️
                    </Text>
                    
                    <Text  color={useColorModeValue('#00B2E3', '#00B2E3')}>
                        {isLoggedIn ? 'LoggedIn' : 'Logged Out'}
                    </Text>
            
                    {!isLoggedIn ?
                        <LoginGoogle setIsLoggedIn={setLoggedIn} />:<Logout setIsLoggedIn={setLoggedIn}/>
                    }
                  
                </Stack>
              </Flex>
        </div>
    );

}

export default Login;
