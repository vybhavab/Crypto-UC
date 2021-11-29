import { Box, Center, Flex, Icon, useColorModeValue, Text, Progress } from "@chakra-ui/react";
import React from "react";

const DashboardUsersCard =(props:any) =>{
    return(
        <Flex direction="column" minW="100px">
                  <Flex alignItems="center">
                    <Box bg={'#00b2e3'}  p={2}  rounded='12px' >
                        <Center>
                            <Icon as={props.icon} color={useColorModeValue('white', 'white')} w={4} h={4}/> 
                        </Center>
                    </Box>
                    <Box w={1} >
                        
                    </Box>
                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                      {props.title}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    {props.amount}
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={20}
                  />
                </Flex>
    )
}

export default DashboardUsersCard