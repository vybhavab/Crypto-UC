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
} from "@chakra-ui/react"

  
const Hero = (props:any) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
    //   wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...props}
    >

     <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 14}}
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
          <VStack alignItems={{base:'flex-start'}}>
          <Heading
                as="h3"
                size="md"
                fontWeight="normal"
                color={'gray.500'}
                lineHeight={1.5}
            >
                {props.subtitle}
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
  )
}

export default Hero;
