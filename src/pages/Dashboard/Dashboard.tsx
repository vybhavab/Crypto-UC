import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
} from "@chakra-ui/react";
import Sidebar from "components/Sidebar/Sidebar"
import FirebaseUser from "components/FirebaseUser/FirebaseUser";

class Dashboard extends React.Component {
    render() {

        return (
            <div>
                <Sidebar>
                    <Box textAlign="center" fontSize="xl">
                        <Grid minH="90vh" p={3}>
                            <VStack spacing={4}>
                                <Heading as="h1">
                                    Dashboard
                                </Heading>
                                <FirebaseUser />
                            </VStack>
                        </Grid>
                    </Box>
                </Sidebar>

            </div>
        );
    }
}

export default Dashboard;
