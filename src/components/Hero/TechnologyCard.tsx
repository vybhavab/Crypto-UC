import React from 'react';
import { Box,Button,Image, useColorModeValue} from '@chakra-ui/react';

const TechnologyCard = (props:any) =>{
    return(
    <Box as={Button} width={"80px"} height={"60px"} p={2} color="gray" bg={useColorModeValue('transparent', 'transparent')}  _hover={{background: useColorModeValue('transparent', 'transparent')}}>
        <Image src={props.logoGray}   size={"100%"} onMouseOver={e => (e.currentTarget.src = props.logo)}  onMouseOut={e => (e.currentTarget.src = props.logoGray)}  />
    </Box>
    );
}

export default TechnologyCard;
