import React from "react";
import { Box, Flex,Text } from "@chakra-ui/layout";
import { Badge, Button, Grid, HStack, Icon, Stat, StatArrow, StatHelpText, StatNumber } from "@chakra-ui/react";

const PayCard = (props:any) =>{
    return (
        <Button leftIcon={<Icon as={props.icon} />} size='lg' colorScheme={props.color}>
            {props.title}  
        </Button>
    )
}
export default PayCard;