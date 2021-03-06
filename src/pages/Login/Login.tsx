import React, {useState} from "react";
import {
    Flex,
    Stack,
    Heading,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";

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
                      to enjoy all of our cool features <span role="img" aria-label="peace sign">✌️</span>
                    </Text>

                    <Text  color={useColorModeValue('#00B2E3', '#00B2E3')}>
                        {isLoggedIn ? 'LoggedIn' : 'Logged Out'}
                    </Text>

                    {!isLoggedIn ?
                        <LoginGoogle />:<Logout />
                    }

                </Stack>
              </Flex>
        </div>
    );

}

export default Login;
