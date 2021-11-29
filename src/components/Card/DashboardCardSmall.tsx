import { Box, Center, Flex, Icon, Stat, StatHelpText, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";

const DashboardCardSmall = (props:any) => {
    return(
        <Card minH="83px" bg={useColorModeValue('white', 'gray.800')} borderWidth="1px" borderRadius="15px">
                <CardBody  p={5} >
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                    <Stat me="auto">
                        <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb=".1rem"
                        >
                        {props.title}
                        </StatLabel>
                        <Flex>
                        <StatNumber fontSize="lg" color={useColorModeValue( 'gray.800','white')}>
                            {props.amount}
                        </StatNumber>
                        <StatHelpText
                            alignSelf="flex-end"
                            justifySelf="flex-end"
                            m="0px"
                            color={props.colorVal}
                            fontWeight="bold"
                            ps="3px"
                            fontSize="md"
                        >
                            {props.percentage}
                        </StatHelpText>
                        </Flex>
                    </Stat>
                    <Box bg={'#00b2e3'}  p={3}  rounded='15px' >
                        <Center>
                            <Icon as={props.icon} color={useColorModeValue('white', 'white')} w={6} h={6}/> 
                        </Center>
                    </Box>
                    </Flex>
                </CardBody>
                </Card>
    )

}
export default DashboardCardSmall;