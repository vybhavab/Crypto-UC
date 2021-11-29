import React from "react";
import { Box,Text } from "@chakra-ui/layout";
import {  Button,  HStack, Icon } from "@chakra-ui/react";

const PayCard = (props:any) =>{
    return (
        <Box borderRadius="15" width ="120px" height='70px' as={Button} bg={props.color}>
            <HStack>
                <Icon as={props.icon} />
                <Text>{props.title} </Text>
            </HStack>

        </Box>
    )
}
export default PayCard;