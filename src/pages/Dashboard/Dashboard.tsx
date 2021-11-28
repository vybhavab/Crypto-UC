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
import LogoCard from "components/Card/LogoCard";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                    <Box textAlign="center" fontSize="xl">
                        <Grid minH="90vh" p={3}>
                            <VStack spacing={4}>
                                <Heading as="h1">
                                    Dashboard
                                </Heading>
                                <Blockfrost/>
                                <LogoCard 
                                    backgroundRepeat="no-repeat"
                                    background="cover"
                                    bgPosition="10%"
                                    p="16px"
                                    h={{ sm: "220px", xl: "100%" }}
                                    gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}>
                                        <Flex flexDirection="row" align="center" justify="center" w="100%">
                                            <Stat me="auto">
                                                <StatLabel
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                                pb=".1rem"
                                                >
                                                Today's Money
                                                </StatLabel>
                                                <Flex>
                                                    <StatNumber fontSize="lg" >
                                                        $53,000
                                                    </StatNumber>
                                                    <StatHelpText
                                                        alignSelf="flex-end"
                                                        justifySelf="flex-end"
                                                        m="0px"
                                                        color="green.400"
                                                        fontWeight="bold"
                                                        ps="3px"
                                                        fontSize="md"
                                                    >
                                                        +55%
                                                    </StatHelpText>
                                                </Flex>
                                            </Stat>
                                            </Flex>
                                    </LogoCard>
                                <FirebaseUser />
                            </VStack>
                        </Grid>
                    </Box>

            </div>
        );
    }
}

export default Dashboard;
