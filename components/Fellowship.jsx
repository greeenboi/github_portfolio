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


const Fellowship = () => {
    
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
            <ModalBody>
            <Image
              src='https://i.postimg.cc/fbqtNpqF/acceptance-emaiil-1-page-0001.jpg'
              alt='Fellowship'
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
          <Heading size='md'>Fellowship Acceptance letter to <b>The Machine Learning Company</b> </Heading>
          <Text>
            Research fellow in TMLC
          </Text>
          <Button onClick={onOpen}>View Letter</Button>
        </Stack>
      </CardBody>
      <Divider />
      
    </Card>
    </>
  )
}

export default Fellowship