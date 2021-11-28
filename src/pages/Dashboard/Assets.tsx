import React from "react";
import Tables from "components/Tables/Tables";
import { Box, Flex,Text } from "@chakra-ui/layout";
const Assets = () =>{
    return (
 
            <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
                <Box overflowX={{ sm: "scroll", xl: "hidden" }}>
                    <Text fontSize="xl"  fontWeight="bold">
                        Authors Table
                    </Text>
                    <Tables/>
                </Box>
            </Flex>
    )
}
export default Assets;