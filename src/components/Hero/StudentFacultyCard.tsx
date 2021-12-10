import React from 'react';
import { useColorModeValue } from '@chakra-ui/system';
import { Box, Button,Text, VStack,Image, Flex, Avatar, Stack, Heading, Center} from '@chakra-ui/react';

const StudentFacultyCard = (props:any) => {
    return(
        // <Box as={Button} w={{ base: "60%", sm: "60%", md: "50%" ,lg:"40%"}}  backgroundImage="url('/assets/')"  h={"400px"}  rounded="2rem" borderWidth="1px" bg={useColorModeValue('white', 'gray.800')}_hover={{ borderWidth:"0px", bg:useColorModeValue('white', 'gray.700'), boxShadow:'dark-lg'}}>
        //     {/* <VStack alignItems={{base:'center',sm:'center' ,md:'flex-start', lg:'flex-start'}}>
        //         <Text
        //             fontWeight={600}
        //             fontSize="md"
        //             textAlign={["center", "center", "left", "left"]}
        //             lineHeight={'110%'} 
        //             color={'#00B2E3'}>
        //             {props.position}
        //         </Text>
           
        //         <Text
        //             fontSize="md"
        //             fontWeight="normal"
        //             color={'gray.500'}
        //             lineHeight={1.5}
        //             textAlign={["center", "center", "left", "left"]}
        //         >
        //         The Next Generation of Payments for the UC System
        //         </Text>
        //     </VStack> */}
        //      <Center >
        // <VStack>
        // <Image
        //   h={'120px'}
        //   w={'full'}
        //   src={
        //     'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        //   }
        //   objectFit={'cover'}
        // />
        <Center py={12}>
        
        <Box as={Button}
          role={'group'}
          p={6}
          maxW={775}
          maxH={750}
          w={350}
          h={325}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          _hover={{ borderWidth:"0px", bg:useColorModeValue('transparent', 'transparent'),boxShadow:'dark-lg'}}>
              
        <VStack>
          <Box 
            rounded={'lg'}
            mt={-100}
            pos={'relative'}
            height={200}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 3,
              left: 0,
              backgroundImage: `url(${props.image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.image}
            />
          </Box>
          <Stack pt={10} align={'center'}>

            <Heading
            fontWeight={600}
            as="h1"
            size="md"
            textAlign={["center", "center", "left", "left"]}
            lineHeight={'110%'}>
            <Text as={'span'} color={'#00B2E3'}>
            {props.position}
            </Text>
          </Heading>
          </Stack>
          </VStack>
        </Box>
        
      </Center>
      
        );
}

export default StudentFacultyCard;