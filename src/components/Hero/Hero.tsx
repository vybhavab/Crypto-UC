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
  Spacer,
  VStack,
  WrapItem,
  Wrap
} from "@chakra-ui/react"

import StudentFacultyCard from "./StudentFacultyCard";

import TechnologyCard from "./TechnologyCard";
import reactLogo from "assets/logos/react.png";
import globeImage from "assets/img/globe.jpg";
import cardanoLogo from "assets/logos/cardano-ada.png";
import firebaseLogo from "assets/logos/Firebase/vertical_light.png";
import blockfrostLogo from "assets/logos/blockfrost.png";
import googleLogo from "assets/logos/google.png";
import reactGrayLogo from "assets/logos/react_gray.png";
import cardanoGrayLogo from "assets/logos/cardano-ada_gray.png";
import firebaseGrayLogo from "assets/logos/Firebase/vertical_light_gray.png";
import blockfrostGrayLogo from "assets/logos/blockfrost_gray.png";
import googleGrayLogo from "assets/logos/google_gray.png";
import davisImage1 from "assets/img/davis1.png";
import davisImage4 from "assets/img/davis4.jpg";

const Hero = (props:any) => {
  return (
    <>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
    //   wrap="no-wrap"
      minH="50vh"
      px={8}
      mt={{ base:10, sm:10, md:1}}
      mb={{ base:16, md: 8, sm:10}}
      {...props}
    >

     <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 14,sm:4}}
          py={{ base: 20, sm: 15, md: 20, lg: 36 }}>
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
          <VStack alignItems={{base:'center',sm:'center' ,md:'flex-start', lg:'flex-start'}}>
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
                rounded={'lg'}
                px={6}
                _hover={{
                  bg: '#FFCC33',
                }}>
                <Text>Learn more </Text>
              </Button>
            </Link>
              <Button
                colorScheme={'green'}
                bg={'gray.500'}
                rounded={'lg'}
                px={6}
                _hover={{
                  bg: '#FFCC33',
                }}
                onClick={()=> window.location.href='https://youtu.be/ZEcqHA7dbwM'}>
                <Text>Watch Demo Video </Text>
              </Button>
            </VStack>
      </Stack>
        <Image
              rounded={'lg'}
              h={{ base: "60%", sm: "60%", md: "50%" ,lg:"60%"}}
              w={{ base: "60%", sm: "60%", md: "50%" ,lg:"40%"}}
              objectFit={'cover'}
              src={globeImage}
            />

      
    </Flex>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", lg:"center"}}
      direction={{ base: "column-reverse", md: "row" }}
      spacing={1}

      px={8}
      mb={{ base:"20vh", md:"10vh", sm:"5vh"}}
      {...props}
    >
      <Wrap  spacing="50px">
        <WrapItem>
          <TechnologyCard logo={reactLogo} logoGray={reactGrayLogo} weblink={"https://reactjs.org/"}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={cardanoLogo} logoGray={cardanoGrayLogo} weblink={"https://cardano.org/"}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={blockfrostLogo} logoGray={blockfrostGrayLogo} weblink={"https://blockfrost.io/"}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={firebaseLogo} logoGray={firebaseGrayLogo} weblink={"https://firebase.google.com/products/realtime-database"}/>
        </WrapItem>
        <WrapItem>
          <TechnologyCard logo={googleLogo} logoGray={googleGrayLogo} weblink={"https://developers.google.com/identity/protocols/oauth2"}/>
        </WrapItem>
      </Wrap>
    </Flex>

    <Flex
      align="center"
      justify={{ base: "center"}}
      direction={{ base: "column-reverse", md: "row" }}
      minH="30vh"
      {...props}
    >
      <StudentFacultyCard position={"For Departments"}image={davisImage1}/>
      <Box w="3vw"/>
      <StudentFacultyCard position={"For Students"} image={davisImage4}/>
      
    </Flex>

    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", lg:"center"}}
      direction={{ base: "column", md: "row",xl:"column" }}
    //   wrap="no-wrap"
      minH="20vh"
      px={8}
      mb={{ base:16, md: 8, sm:2}}
      {...props}
    >
     <Box w={500} maxW={1000} >
      <Heading
        fontWeight={600}
        as="h1"
        size="xl"
        textAlign={["center", "center","center","left", "center"]}
        lineHeight={'110%'}
        mb={{ base:16, md: 8, sm:2}}>
            UCrypto operates on a fast and scalable blockchain technology.
      </Heading>
      </Box>
      <Spacer/>
      <Box w={500} maxW={1000}>
      <Heading
        fontWeight={300}
        as="h1"
        size="md"
        textAlign={["center", "center","center","left", "center"]}
        lineHeight={'110%'}>
        Cardano is a proof-of-stake blockchain platform which is the most environmentally sustainable blockchain protocol: the first to be founded on peer-reviewed research and developed through evidence-based methods. It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.
      </Heading>
      </Box>
    </Flex>
    </>
  )
}

export default Hero;
