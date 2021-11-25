import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";
import Sidebar from "components/Sidebar/Sidebar"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import CardBody from "components/Card/CardBody";
import FirebaseUser from "components/FirebaseUser/FirebaseUser";

class Dashboard extends React.Component {
    render() {

        return (
            <div>
                <Sidebar>
                    <Box textAlign="center" fontSize="xl">
                        <Grid minH="90vh" p={3}>
                            <ColorModeSwitcher justifySelf="flex-end" />
                            <VStack spacing={4}>
                                <Heading as="h1">
                                    Dashboard
                                </Heading >
                                {/* <CardBody/> */}
                                < FirebaseUser />
                            </VStack >
                        </Grid >
                    </Box >
                </Sidebar >

            </div >
        );
    }
}

export default Dashboard;
