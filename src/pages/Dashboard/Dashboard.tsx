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
                                UCrypton Dashboard
                            </Heading>
                            <CardBody/>
                            <Table variant="simple">
                                <TableCaption>Transactions for U with UCrypton</TableCaption>
                                <Thead>
                                    <Tr>
                                    <Th>Transaction #</Th>
                                    <Th>INFO</Th>
                                    <Th isNumeric>Amount</Th>
                                    <Th isNumeric>Date</Th>
                                    <Th isNumeric>Balance</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                    </Tr>
                                    <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                    </Tr>
                                    <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                    <Th>End of Transaction #</Th>
                                    <Th>End of Info</Th>
                                    <Th>End of Amount Info</Th>
                                    <Th>End of Date Info</Th>
                                    <Th>Amount Left in Balance</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </VStack>
                    </Grid>
                </Box>
            </Sidebar>
            
        </div>
    );
  }
}

export default Dashboard;
