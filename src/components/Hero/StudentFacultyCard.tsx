import React from 'react';
import { useColorModeValue } from '@chakra-ui/system';
import { Box, Button,Text, VStack,Image, Stack, Heading, Center} from '@chakra-ui/react';

const StudentFacultyCard = (props:any) => {
    return(

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