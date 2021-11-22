import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
  } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";

class PageNotFound extends React.Component {
  render() {
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                        <Heading as="h1">
                            PageNotFound
                        </Heading>
                    </VStack>
                </Grid>
            </Box>
        </div>
    );
  }
}

export default PageNotFound;
