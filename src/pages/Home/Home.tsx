import * as React from "react";
import {
    Box,
    Heading,
    Text,
    VStack,
    Stack,
    Grid,
    Button, 
    ButtonGroup
  } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import styles from "./Home.module.scss";

class Home extends React.Component {
  render() {
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                    <Heading as="h1">
                        UC-Coin
                    </Heading>
                    <Text>
                        The next generation of payments for the UC system. Coming soon...
                    </Text>

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
}

export default Home;