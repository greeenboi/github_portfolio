import React from 'react'
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Image,
    Box,
    Stack,
    StackDivider,
    Divider,
    Text,
    ButtonGroup,
    Button,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react'

const Internship = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Acceptance Letter</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                <Image
                  src='https://i.postimg.cc/1XSfcqW0/1690830475486-1-pages-to-jpg-0002.jpg'
                  alt='internship'
                  borderRadius='lg'
                  h='xl'
                  w='xl'
                  colorScheme='blackAlpha'
                  marginEnd='2'
                />
                <Image
                  src='https://i.postimg.cc/1XSfcqW0/1690830475486-1-pages-to-jpg-0002.jpg'
                  alt='internship'
                  borderRadius='lg'
                  h='xl'
                  w='xl'
                  colorScheme='blackAlpha'
                />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='purple' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Stack mt='6' spacing='3'>
              <Heading size='md'>Internship Acceptance letter to <b>CodeClause</b> </Heading>
              <Text>
                Web Development Intern at <b>CodeClause</b> for 1 month
              </Text>
              <Button onClick={onOpen}>View Letter</Button>
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>
  )
}

export default Internship