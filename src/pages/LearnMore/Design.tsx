import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Text
  } from "@chakra-ui/react";

const Design = () => {
    return (
        <div>
  <Grid minH="90vh" p={3}>
            <VStack spacing={4}>
                <Heading pt={10} as="h1" size='lg'>
                    Explore Design Work
                </Heading>
                
                <Box maxW='2xl' size='2xl' p={3} textAlign="left">
                    <Text size='xl'> Written Nov 26, 2021 by The UCrypton Team</Text>
                </Box>
            </VStack>
        </Grid>
            
        </div>
    );
}

export default Design;
