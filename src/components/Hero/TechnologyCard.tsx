import React from 'react';
import { Box,Button,Image, useColorModeValue} from '@chakra-ui/react';

const TechnologyCard = (props:any) =>{
    return(
    <Box as={Button} width={"80px"} height={"60px"} p={2}  opacity='25%' colorScheme='gray' bg={useColorModeValue('transparent', 'transparent')}  _hover={{background: useColorModeValue('transparent', 'transparent') , opacity:'100%'}}>
        <Image src={props.logo}   size={"100%"}  />
    </Box>
    );
}

export default TechnologyCard;
