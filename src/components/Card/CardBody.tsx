import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

const CardBody = () => {
  // const [username , setUsername] = useState('');
  // const [email , setEmail] = useState('');

  // const Push = () => {
  //   set(ref(firebase, 'users/test'), {
  //     username: username,
  //     email: email
  //   });
  // }
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
          {/* <Text>awd</Text> */}
            {/* <input placeholder="Enter your username" value={username}
            onChange={(e) => setUsername(e.target.value)}/>
            <br/><br/>
            <input placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <br/><br/>  */}
            {/* <button onClick={Push}>PUSH</button> */}

      </Box>
    </Center>
  );
}
export default CardBody;
