import React, {useState} from "react";
import {
    Box,
    Heading,
    Text,
    VStack,
    Grid,
    Stack,
    Button
  } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import LoginBox from "components/LoginBox/LoginBox";
import Logout from "components/Logout/logout";

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                    <Heading>
                      {isLoggedIn ? 'LoggedIn' : 'Logged Out'}
                    </Heading>
    
                    {!isLoggedIn ?
                      <LoginBox setIsLoggedIn={setLoggedIn} />:<Logout setIsLoggedIn={setLoggedIn}/>
                    }

                    </VStack>
                </Grid>
            </Box>
        </div>
    );

}

export default Login;
