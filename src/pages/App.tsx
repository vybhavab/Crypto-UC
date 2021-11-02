import * as React from "react";

import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  theme,
  Icon, 
  Button,
  Flex,
  useColorModeValue,
  createIcon
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../utils/ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Heading fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Your Transactions<br />
            <Text as={'span'} color={'blue.400'}>
              Secured by ResilientDB
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            The Next Generation of Payments for the UC System. 
          </Text>
            <Button
            direction={'row'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
              colorScheme={'yellow'}
              bg={'yellow.400'}
              rounded={'full'}
              px={8}
              _hover={{
                bg: 'yellow.100',
              }}>
              Get Started
            </Button>
            <Button variant={'https://www.google.com/'} colorScheme={'blue'} size={'md'}>
              Learn more
            </Button>

        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)


