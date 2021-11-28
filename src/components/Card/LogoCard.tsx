import React from 'react';
import {
  Box
} from '@chakra-ui/react';


const LogoCard = (props:any) => {
  const { variant, children, ...rest } = props;
  // const styles = useStyleConfig("Card", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box >
      {children}
    </Box>
  );

}
export default LogoCard;
