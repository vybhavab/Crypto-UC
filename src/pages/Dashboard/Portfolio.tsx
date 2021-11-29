import React from "react";
import PortfolioCard from "components/Card/PortfolioCard";
import { Box, HStack,   VStack } from "@chakra-ui/layout";
import {ImDatabase} from "react-icons/im";
import { BiDollar } from "react-icons/bi";
import AreaRechart from "components/Charts/AreaChart";

const Portfolio = () =>{
    return (
            <VStack spacing={10}>
                <Box height='30px'></Box>
                <HStack>
                    <PortfolioCard title={"Net Deposit"} icon={ImDatabase} arrow={"increase"} amount={"23,021"} percent={"9.05%"}/>
                    <PortfolioCard title={"Net Withdrawal"} icon={BiDollar} arrow={"decrease"} amount={"5,000"} percent={"4.05%"}/>
                    
                </HStack>
                {/* <Box height='10px'></Box> */}
                <Box width={['100%' , '100%', '100%']}>
                    <AreaRechart/>
                </Box>
            </VStack>

    )
}
export default Portfolio;