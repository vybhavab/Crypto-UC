import React from "react";
import { Box, Flex,Text } from "@chakra-ui/layout";
import { Badge, Button, Grid, HStack, Icon, Stat, StatArrow, StatHelpText, StatNumber } from "@chakra-ui/react";

const PayCard = (props:any) =>{
    return (
        <Box borderRadius="15" width ="120px" height='70px' as={Button} bg={props.color}>
            <HStack>
                <Icon as={props.icon} />
                <Text>{props.title} </Text>
            </HStack>
        {/* <Button leftIcon={<Icon as={props.icon} />} size='lg' colorScheme={props.color}>
            {props.title}  
        </Button> */}
        </Box>
    )
}
export default PayCard;