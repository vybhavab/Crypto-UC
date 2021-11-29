import React from "react";
import PortfolioCard from "components/Card/PortfolioCard";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import {ImDatabase} from "react-icons/im";
import { BiDollar } from "react-icons/bi";
import ChartTest from "components/Charts/ChartTest";
import AreaRechart from "components/Charts/AreaChart";

const Portfolio = () =>{
    return (
        <Box pt={10}>
            <VStack >
                <HStack>
                    <PortfolioCard title={"Net Deposit"} icon={ImDatabase} arrow={"increase"} amount={"23,021"} percent={"9.05%"}/>
                    <PortfolioCard title={"Net Withdrawal"} icon={BiDollar} arrow={"decrease"} amount={"5,000"} percent={"4.05%"}/>
                    
                </HStack>
                <Box pt={15}>
                <AreaRechart/>
                </Box>
                {/* <HStack justify="center"> */}
                {/* <ChartTest colorFill="#8b0000"/> */}
                {/* </HStack> */}
                
            </VStack>
        </Box>


    )
}
export default Portfolio;