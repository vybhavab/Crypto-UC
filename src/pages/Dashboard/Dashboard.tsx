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
    HStack,
    useColorModeValue,
    Table,
    Tbody,
    Thead,
    Th,
    Tr,
    Text,
    SimpleGrid,
    Icon,
    Progress,
    Center
} from "@chakra-ui/react";
import Blockfrost from "middleware/blockfrost";
import ChartTest from "components/Charts/ChartTest";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import {BiCube, BiWallet} from "react-icons/bi";
import DashboardCardSmall from "components/Card/DashboardCardSmall";
import {BsGlobe} from "react-icons/bs";
import DashboardUsersCard from "components/Card/DashboardUsersCard";
import DashboardTransactions from "components/Card/DashboardTransactions";
import { FaUsers } from "react-icons/fa";
import { GiClick, GiMoneyStack } from "react-icons/gi";

const Dashboard = () => {
    return (
           
        <Flex flexDirection="column" pt={{ base: "60px", md: "75px" }}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="20px" >
                <DashboardCardSmall title={"Today's Money"} amount={"$53,000"} percentage={"+55%"} icon={BiWallet} colorVal={"green.400"}/>
                <DashboardCardSmall title={"Today's Users"} amount={'2,300'} percentage={"+5%"} icon={BsGlobe} colorVal={"green.400"}/>
                <DashboardCardSmall title={"Today's Clients"} amount={'+3,020'} percentage={"-14%"} icon={FaUsers} colorVal={"red.600"}/>
                <DashboardCardSmall title={"Total Sales"} amount={'$173,000'} percentage={"+8%"} icon={GiMoneyStack} colorVal={"green.400"}/>
            </SimpleGrid>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }}  pt={{ base: "60px", md: "75px" }}>
                <Card minHeight="300px">
                    <CardBody borderWidth="1px" borderRadius="15px" bg={useColorModeValue('white','gray.700')} width="100%">
                        <Box  p="10px">
                        <ChartTest colorFill={"#ADD8E6"} />
                        </Box>
                        
                        <Flex
                            direction="column"
                            mt="24px"
                            mb="36px"
                            alignSelf="flex-start"
                            p={3}
                        >
                        <Text
                            fontSize="lg"
                            color={useColorModeValue('gray.700', 'white')}
                            fontWeight="bold"
                            mb="6px"
                            >
                            Active Users
                            </Text>
                            <Text fontSize="md" fontWeight="medium" color="gray.400">
                            <Text as="span" color="green.400" fontWeight="bold">
                                (+23%)
                            </Text>{" "}
                            than last week
                            </Text>
                        </Flex>
                        <SimpleGrid columns={{ sm: 1, md: 4, xl: 4 } } spacing="10px" pl={3}  pr={3}  pb={3}>
                         <DashboardUsersCard title={"Users"} amount={"32,984"} icon={BsGlobe}/>
                         <DashboardUsersCard title={"Clicks"} amount={"2.42m"} icon={GiClick}/>
                         <DashboardUsersCard title={"Sales"} amount={"$24,00"} icon={GiMoneyStack}/>
                         <DashboardUsersCard title={"Items"} amount={"320"}  icon={BiCube}/>
                        </SimpleGrid>

                        
                 
                    </CardBody>
                </Card>
                <Card maxHeight="290.5px" pl="1.2rem">
                    <CardBody  borderWidth="1px" borderRadius="15px" bg={useColorModeValue('white','gray.700')} width="100%">
                     <DashboardTransactions/>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Flex>
    );
}

export default Dashboard;
