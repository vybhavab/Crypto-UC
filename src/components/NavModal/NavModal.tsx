import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ImageCard/>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant="ghost">Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }
  export default NavModal;
