import { Grid, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const Market = () => {
    return (
        <Grid minH="90vh" p={3}>
            <VStack spacing={10}>
                 <Heading pt={10} as="h1" size='lg'>
                    Coming Soon...
                 </Heading>
            </VStack>
        </Grid>
    )
}
export default Market;