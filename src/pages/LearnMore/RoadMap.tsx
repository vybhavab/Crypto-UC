import  React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Text,
    Image
  } from "@chakra-ui/react";
import roadmapImage from 'assets/img/Timeline.png';

const RoadMap = () => {
    // const image =roadmapImage;
    return (
        <div>
            <Grid minH="90vh" p={3}>
                <VStack spacing={10}>
                    <Heading pt={10} as="h1" size='lg'>
                        Roadmap
                    </Heading>
                    <Box maxW='2xl' size='lg' textAlign="left">
                        <Image src={roadmapImage} />
                    </Box>
                </VStack>
            </Grid>
        </div>
    );
}

export default RoadMap;
