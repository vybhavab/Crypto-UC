import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

const CardBody = () => {
  return (
    <Center py={6}>
      <Box
        // maxW={'2000px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
          <Text>awd</Text>

      </Box>
    </Center>
  );
}
export default CardBody;