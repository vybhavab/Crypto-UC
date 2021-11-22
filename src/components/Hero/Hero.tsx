import * as React from "react";
// import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  ModalFooter,
} from '@chakra-ui/react';

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
          spacing={{ base: 8, md: 14 }}
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
          <Text color={'gray.500'}>
            The Next Generation of Payments for the UC System
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'#00B2E3'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#FFCC33',
              }}>
            <a href ="https://www.google.com/">  Get Started </a>
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            <a href ="\GetStarted">   Learn more </a>
            </Button>
            </Stack>
            <footer>
            {/* footer file for putting our names */}  
              <Text color = {'gray.400'} 
              spacing={100}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
              fontWeight={300}
              fontSize={{ base: 'xl', sm: '2xl', md: 'xl' }}>
                <p color="cyan" >ECS 265 - Distributed Databases (Fall 2021) @UC Davis</p>
                <p>Vybhav Bhargav, Seongwoo Choi, David Haddad, Sairamvinay Vijayaraghavan</p>
              </Text>
            </footer>
          </Stack>
        
      </Container>
    </>
  );
}
