import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  WrapItem,
  Wrap,
} from "@chakra-ui/react"

import TechnologyCard from "./TechnologyCard";
import reactLogo from "assets/logos/react.png";
import cardanoLogo from "assets/logos/cardano-ada.png";
import firebaseLogo from "assets/logos/Firebase/vertical_light.png";
import blockfrostLogo from "assets/logos/blockfrost.png";
import googleLogo from "assets/logos/google.png"

const Hero = (props:any) => {
  return (
    <>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
    //   wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={{ base:16, md: 8, sm:2}}
      {...props}
    >

     <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 14,sm:4}}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            as="h1"
            size="xl"
            textAlign={["center", "center", "left", "left"]}
            lineHeight={'110%'}>
            Your Transactions <br />
            <Text as={'span'} color={'#00B2E3'}>
            Secured By Cardano
            </Text>
          </Heading>
          <VStack alignItems={{base:'center',sm:'center' ,md:'center', lg:'flex-start'}}>
          <Heading
                as="h3"
                size="md"
                fontWeight="normal"
                color={'gray.500'}
                lineHeight={1.5}
                textAlign={["center", "center", "left", "left"]}
            >
               The Next Generation of Payments for the UC System
            </Heading>
    
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
      <Box w={{ base: "60%", sm: "60%", md: "50%" ,lg:"40%"}} mb={{ base: 12, md: 0 }} >
        <Image src={props.image}   size={"100%"} pt={7} pb={7} pl={12} pr={12} rounded="1rem" shadow="2xl" bg={useColorModeValue('gray.900', 'gray.900')} />
      </Box>
      
    </Flex>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
      spacing={1}
    //   wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={{ base:16, md: 8, sm:2}}
      {...props}
    >
      <Wrap  spacing="50px">
        <WrapItem>
          <TechnologyCard logo={reactLogo}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={cardanoLogo}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={blockfrostLogo}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={firebaseLogo}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={googleLogo}/>
        </WrapItem>
      </Wrap>
    </Flex>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
    //   wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={{ base:16, md: 8, sm:2}}
      {...props}
    >

      <Box as={Button} w={{ base: "60%", sm: "60%", md: "50%" ,lg:"40%"}} mb={{ base: 12, md: 0 }}  h={"400px"} boxShadow='dark-lg' rounded="2rem">
        Invest
        <Image src={props.image}   size={"100%"} pt={7} pb={7} pl={12} pr={12} rounded="1rem" shadow="2xl" bg={useColorModeValue('gray.900', 'gray.900')} />
      </Box>
      <Box as={Button} w={{ base: "60%", sm: "60%", md: "50%" ,lg:"40%"}} mb={{ base: 12, md: 0 }}  h={"400px"} boxShadow='dark-lg'>
        Learn
        <Image src={props.image}   size={"100%"} pt={7} pb={7} pl={12} pr={12} rounded="1rem" shadow="2xl" bg={useColorModeValue('gray.900', 'gray.900')} />
      </Box>
      
    </Flex>
    </>
  )
}

export default Hero;
