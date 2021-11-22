import React, {useContext} from "react";
import {LoginContext} from 'contexts/LoginContext';

import {
    Button,
    Center,
    useColorModeValue,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    Avatar,
    VStack,
    Box,
    MenuList,
    Stack,
    Heading,
    MenuDivider,
    MenuItem,
    HStack,
    Text,
    Image
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { FiBell, FiChevronDown } from "react-icons/fi";

const NavModal = () => {
  const [currentView, setCurrentView] = React.useState("");   
  const finalRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const isLoggedIn  = useContext(LoginContext);
  console.log("yoooo");
  console.log(isLoggedIn);
    return (
      <div>
        <HStack spacing={{ base: '0', md: '6' }}>
          <Link to={'/signin'}>
            <Button
            // display={{ base: 'none', md: 'inline-flex' }}
            display={ isLoggedIn ? 'none' : 'block'} 
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#00B2E3'}
            href={'#'}
            _hover={{
              bg: '#03F9E6',
            }}>
              Sign In {isLoggedIn.toString()}
            </Button>
          </Link>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">John Doe</Text>
                
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Center>
                  <Box
                    width={"20em"}
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
                        <Text color={'gray.500'}>johndoe@ucdavis.edu</Text>
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
                        bg={useColorModeValue('white', 'gray.900')}
                        color={useColorModeValue('gray.900', 'white')}
                        rounded={'md'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}>
                        Manage your profile
                      </Button>

                      <MenuDivider />
                      <MenuItem>Settings</MenuItem>
                      <MenuDivider />
                      <MenuItem>Tax {'&'} Reports</MenuItem>
                      <MenuDivider />
                      <MenuItem>Help</MenuItem>
                      <MenuDivider />
                      <MenuItem color='red'>Sign out</MenuItem>

                  
                    </Box>
                  </Box>
                </Center>
              </MenuList>
            </Menu>
          </Flex>
      </HStack>
       
          
      </div>
    )
  }
  export default NavModal;
