import React from "react";
import { Box, Flex,Text } from "@chakra-ui/layout";
import { Badge, Grid, HStack, Icon, Stat, StatArrow, StatHelpText, StatNumber, useColorModeValue } from "@chakra-ui/react";

const PortfolioCard = (props:any) =>{
    return (
        <Box  borderWidth='1px' borderRadius='lg' overflow='hidden'  bg={useColorModeValue('white', 'gray.800')}>
            <Box p={3}>
                <HStack >
                    <Box><Icon as={props.icon} />
                    </Box>
                    <Box>
                        {props.title}  
                    </Box>
                </HStack>
                <Stat>
                    <StatNumber>{props.amount}</StatNumber>
                    <StatHelpText>
                    <StatArrow type={props.arrow}/>
                    {props.percent}
                    </StatHelpText>
                </Stat>

            </Box>
        </Box>
    )
}
export default PortfolioCard;