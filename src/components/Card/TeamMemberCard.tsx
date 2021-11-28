import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Avatar,
    Button,
  } from '@chakra-ui/react';
import linkedin from 'assets/icons/linkedin.png';


const TeamMemberCard = (props:any) => {
    return (
        <Center py={6}>
            <Box
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}>
            <Image
                h={'120px'}
                w={'full'}
                src={
                    props.imageSrc
                }
                objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
                <Avatar
                size={'2xl'}
                src={
                    props.image
                }
                alt={'Author'}
                css={{
                    border: '2px solid white',
                }}
                />
            </Flex>
    
            <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                    {props.name}
                </Heading>
                <Text fontSize={'md'} color={'gray.500'}>{props.role}</Text>
                <Text fontSize={'md'} color={'gray.500'}>{props.email}</Text>
                </Stack>
                
                <Button
                w={'full'}
                mt={4}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}>
                 {/* <image src=linkedin></image>davidhaddad7 */}
                 {props.linkedIn}
                </Button>
            </Box>
            </Box>
      </Center>
    );
  }

export default TeamMemberCard;