import React from "react";
import {
    Button,
  } from "@chakra-ui/react"

  import { useDisclosure } from "@chakra-ui/react"
  import ImageCard from "../../components/Card/ImageCard"

const NavModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
      <div>
        {/* <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
          Some other content that'll receive focus on close.
        </Box> */}

        <Button
         onClick={onOpen}
         display={{ base: 'none', md: 'inline-flex' }}
         fontSize={'sm'}
         fontWeight={600}
         color={'white'}
         bg={'#00B2E3'}
         href={'#'}
         _hover={{
           bg: '#03F9E6',
         }}>
          Sign In
        </Button>
        <ImageCard finalRef={finalRef} isOpen={isOpen} onClose={onClose}/>
      </div>
    )
  }
  export default NavModal;
