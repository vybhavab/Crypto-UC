import React from "react";
import PortfolioCard from "components/Card/PortfolioCard";
import { Box, HStack } from "@chakra-ui/layout";
const Portfolio = () =>{
    return (
        <Box>
            <HStack>
                <PortfolioCard title={"Net Deposit"} />
                <PortfolioCard title={"Net Withdrawal"}/>
            </HStack>
            
        </Box>


    )
}
export default Portfolio;