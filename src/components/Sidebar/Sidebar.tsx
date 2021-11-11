import React, { ReactNode } from 'react';
import {
  Heading,
  Image,
  Stack,
  Button,
  Divider,
  Center,
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {GiTwoCoins} from 'react-icons/gi';
import {BiBook} from 'react-icons/bi';
import {FaUserFriends} from 'react-icons/fa'
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useDisclosure } from "@chakra-ui/react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Assets', icon: GiTwoCoins },
  { name: 'Trade', icon: FiTrendingUp },
  { name: 'Pay', icon: FiCompass },
  { name: 'Learn and Earn ', icon: BiBook },
  { name: 'Notifications', icon: FiSettings },
  { name: 'Invite Friends', icon: FaUserFriends },
];

const Sidebar = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
 
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '0', md: '6' }}>
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
                      bg={useColorModeValue('#151f21', 'gray.900')}
                      color={'white'}
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
    </Flex>
  );
};

export default Sidebar;