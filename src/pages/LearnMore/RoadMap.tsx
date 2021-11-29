import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
  } from "@chakra-ui/react";

const RoadMap = () => {
    return (
        <div>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="90vh" p={3}>
                        <VStack spacing={4}>
                            <Heading as="h1">
                                Roadmap
                            </Heading>
      
                        </VStack>
                    </Grid>
                </Box>
            
        </div>
    );
}

export default RoadMap;
