import React from 'react';
import { Box,Button,Image, useColorModeValue} from '@chakra-ui/react';

const TechnologyCard = (props:any) =>{
    return(
    <Box as={Button} onClick={()=> window.location.href=props.weblink} width={"70px"} height={"60px"} p={2} color="gray" bg={useColorModeValue('transparent', 'transparent')} opacity="70%" _hover={{background: useColorModeValue('transparent', 'transparent') ,opacity:"100%"}}>
        <Image src={props.logoGray}   size={"100%"} onMouseOver={e => (e.currentTarget.src = props.logo)}  onMouseOut={e => (e.currentTarget.src = props.logoGray)}  />
        
    </Box>
    );
}

export default TechnologyCard;
