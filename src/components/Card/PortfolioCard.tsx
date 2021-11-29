import React from "react";
import { Box, Flex,Text } from "@chakra-ui/layout";
import { Badge, Grid } from "@chakra-ui/react";

const PortfolioCard = (props:any) =>{
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {props.title}
                    </Box>
                </Box>

               

                <Box>
                    formattedPrice 
                    <Box as='span' color='gray.600' fontSize='sm'>
                    / wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    review
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default PortfolioCard;