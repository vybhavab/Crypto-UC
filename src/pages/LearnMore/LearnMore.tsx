import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
  } from "@chakra-ui/react";

const LearnMore = () => {
    return (
        <div>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="90vh" p={3}>
                        <VStack spacing={4}>
                            <Heading as="h1">
                                Learn More
                            </Heading>
      
                        </VStack>
                    </Grid>
                </Box>
            
        </div>
    );
}

export default LearnMore;
