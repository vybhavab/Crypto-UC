import * as React from "react";
// import * from "react-router-dom";
// import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14}}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Your Transactions <br />
            <Text as={'span'} color={'#00B2E3'}>
              Secured By Blockchain Technology
            </Text>
          </Heading>
          <VStack>
            <Text color={'gray.500'}>
              The Next Generation of Payments for the UC System
            </Text>
            <Link to="/learnmore">
              <Button
                colorScheme={'green'}
                bg={'#00B2E3'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: '#FFCC33',
                }}>
                <Text>Learn more </Text>
              </Button>
            </Link>
            </VStack>
          </Stack>
      </Container>
    </>
  );
}
