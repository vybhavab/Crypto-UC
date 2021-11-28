import React, { useContext } from "react";
import { LoginContext } from 'contexts/LoginContext';

import {
  Button,
  Center,
  useColorModeValue,
  Flex,
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
import { FiChevronDown } from "react-icons/fi";
import Logout from "components/Logout/logout";
import LoginGoogle from "components/LoginGoogle/LoginGoogle";
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";

const NavModal = () => {
  const { loggedIn, loginObj } = useContext(LoginContext);

  return (
    <div>
      <HStack spacing={{ base: '0', md: '6' }}>

        <ColorModeSwitcher justifySelf="flex-end" />
        {!loggedIn ? <LoginGoogle /> : null}

        <Flex alignItems={'center'} display={loggedIn ? 'flex' : 'none'} >

          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={loginObj.imageUrl}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{loginObj.name.split(' ')[0]}</Text>

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
                      src={loginObj.imageUrl}
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        {loginObj.name}
                      </Heading>
                      <Text color={'gray.500'}>{loginObj.email}</Text>
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
                    <MenuItem color='red'><Logout></Logout></MenuItem>


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
