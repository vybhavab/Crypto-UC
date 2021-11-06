import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    VStack,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from "@chakra-ui/react"

  interface Props {
    finalRef: React.MutableRefObject<HTMLInputElement>,
    isOpen: boolean,
    onClose: () => void
  }

  export default function SocialProfileWithImage({finalRef, isOpen, onClose}: Props) {
    return (
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody >
            <Center py={6}>
              <Box
                // maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                  h={'120px'}
                  w={'full'}
                  src={
                    'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  }
                  objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                  <Avatar
                    size={'xl'}
                    src={
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
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
                      John Doe
                    </Heading>
                    <Text color={'gray.500'}>Graduate Student</Text>
                  </Stack>

                  <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                      <Text fontWeight={600}>40.762</Text>
                      <Text fontSize={'sm'} color={'gray.500'}>
                        Balance
                      </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                      <Text fontWeight={600}>13.441</Text>
                      <Text fontSize={'sm'} color={'gray.500'}>
                        Total Spent
                      </Text>
                    </Stack>
                  </Stack>

                  <Button
                    w={'full'}
                    mt={8}
                    bg={useColorModeValue('#151f21', 'gray.900')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}>
                    Manage your profile
                  </Button>
                  <Divider paddingTop="3"/>

                  <VStack
                    divider={<Divider />}
                    align="left"
                  >
                    <Box h="30px" paddingTop="1">
                      Settings
                    </Box>
                    <Box h="30px" >
                      Appearance
                    </Box>
                    <Box h="30px" >
                      Tax {"&"} Reports
                    </Box>
                    <Box h="30px" >
                      Help
                    </Box>
                    <Box h="30px" color="red" >
                      Logout
                    </Box>
                  </VStack>

                </Box>
              </Box>
            </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
    );
  }
