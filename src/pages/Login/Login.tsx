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
                      {isLoggedIn ? 'LoggedIn' : 'Nah fam'}
                    </Heading>
                    <Text>
                        Coming soon...
                    </Text>
                    {!isLoggedIn ?
                      <LoginBox setIsLoggedIn={setLoggedIn} />:<Logout setIsLoggedIn={setLoggedIn}/>
                    }
                    <Stack direction="row" spacing={4} align="center">
                            <Button colorScheme="teal" variant="solid">
                                <a href="/">Home Page</a>
                            </Button>
                            <Button colorScheme="red" variant="solid">
                                <a href="/dashboard">Dashboard</a>
                            </Button>
                            <Button colorScheme="green" variant="solid">
                                <a href="/login">Login</a>
                            </Button>
                        </Stack>
                    </VStack>
                </Grid>
            </Box>
        </div>
    );

}

export default Login;
