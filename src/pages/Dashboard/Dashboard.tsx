import * as React from "react";
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
import styles from "./Dashboard.module.scss";

class Dashboard extends React.Component {
  render() {
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="90vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={4}>
                        <Heading as="h1">
                            Dashboard
                        </Heading>
                        <Text>Coming Soon...</Text>
                    </VStack>
                </Grid>
            </Box>
        </div>
    );
  }
}

export default Dashboard;
