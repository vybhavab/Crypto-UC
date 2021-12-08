import React from 'react';
import { useColorModeValue } from '@chakra-ui/system';
import { Box, Button,Text, VStack } from '@chakra-ui/react';

const StudentFacultyCard = (props:any) => {
    return(
        <Box as={Button} w={{ base: "60%", sm: "60%", md: "50%" ,lg:"40%"}}   h={"400px"}  rounded="2rem" borderWidth="1px" bg={useColorModeValue('white', 'gray.800')}_hover={{ borderWidth:"0px", bg:useColorModeValue('white', 'gray.700'), boxShadow:'dark-lg'}}>
            <VStack alignItems={{base:'center',sm:'center' ,md:'flex-start', lg:'flex-start'}}>
                <Text
                    fontWeight={600}
                    fontSize="md"
                    textAlign={["center", "center", "left", "left"]}
                    lineHeight={'110%'} 
                    color={'#00B2E3'}>
                    {props.position}
                </Text>
           
                <Text
                    fontSize="md"
                    fontWeight="normal"
                    color={'gray.500'}
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                The Next Generation of Payments for the UC System
                </Text>
            </VStack>
        </Box>
        );
}

export default StudentFacultyCard;