import React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
} from "@chakra-ui/react";
import FirebaseUser from "components/FirebaseUser/FirebaseUser";
import Blockfrost from "middleware/blockfrost";

const Dashboard = () => {
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="90vh" p={3}>
                    <VStack spacing={4}>
                        <Heading as="h1">
                            Dashboard
                        </Heading>
                        <Blockfrost/>
                       
                        <FirebaseUser />
                    </VStack>
                </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;
