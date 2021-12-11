import React, { ReactNode , useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  BoxProps,
  FlexProps
} from '@chakra-ui/react';
import {
  FiTrendingUp,
  FiMenu
} from 'react-icons/fi';
import { GiTwoCoins } from 'react-icons/gi';
import { BiWallet } from 'react-icons/bi';
import { FaUserFriends} from 'react-icons/fa'
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useDisclosure } from "@chakra-ui/react";
import { getUserData, setData } from "utils/firebase";
import { LoginContext } from 'contexts/LoginContext';

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Portfolio', icon: BiWallet, path:'/portfolio' },
  { name: 'Send or Receive', icon: GiTwoCoins ,path:'/pay'},
  { name: 'Market', icon: FiTrendingUp, path:'/market' },
  { name: 'Invite Friends', icon: FaUserFriends,path:'/invite' }
];

const Sidebar = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {loggedIn,loginObj } = useContext(LoginContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pushFirebase = () => {
      if (!getUserData(loginObj.googleId) && loginObj.name){
          let userObj = {
              name:loginObj.name,
              email:loginObj.email,
              imageUrl:loginObj.imageUrl,
              cardano_acct_addr:loginObj.cardano_acct_addr,
              campus_id:loginObj.campus_id,
              account_type:loginObj.account_type
          }
          setData(loginObj.googleId,userObj);
          getUserData(loginObj.googleId);
      }
  };
  useEffect(()=>{
    if (loggedIn){
      pushFirebase();
    }
  })
  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
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
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
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
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      // borderWidth="20px"
      // borderColor={useColorModeValue('white', 'gray.900')}
      overflow="hidden"
      {...rest}>
      <Flex h="10" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((itemlink) => (
        <NavItem key={itemlink.name} icon={itemlink.icon} path={itemlink.path}>
          {itemlink.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactText;
}
const NavItem = ({ icon,path, children, ...rest }: NavItemProps) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
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
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

    </Flex>
  );
};

export default Sidebar;
