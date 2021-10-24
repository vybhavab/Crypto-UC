import * as React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../utils/ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Heading as="h1">
            UC-Coin
          </Heading>
          <Text>
            The next generation of payments for the UC system. Coming soon...
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
