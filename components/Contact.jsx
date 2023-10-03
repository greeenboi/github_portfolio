import { React, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  StackDivider,
  Divider,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  
} from '@chakra-ui/react'

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>  
    <main className='flex flex-row w-full justify-center items-center my-12 text-white'>
        <section className='w-11/12 rounded-md md:h-24 contact_bg p-6 flex flex-col gap-2 md:flex-row justify-between items-center'>
            <div className='flex flex-col gap-4 md:gap-2 my-2'>
                <p className=' font-Raleway text-3xl font-semibold'>Wanna work together?</p>
                <p className=' font-Onest text-lg font-extralight'>Feel free to react out for collaborations or just a friendly hi!👋</p>
            </div>
            <div className='flex flex-row gap-12 md:mx-6 mx-2'>
              <button onClick={onOpen} className=' bg-gray-700 rounded-md md:px-4 py-1 bg-opacity-60 border border-transparent hover:border-purple-600 transition-all  '>Contact me</button>
              <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
              >
                <ModalOverlay />
                <ModalContent backdropBlur='md' bgColor='blackAlpha.800' >
                  <ModalHeader color='white'>Contact</ModalHeader>
                  <ModalCloseButton />
                      <form action="https://formsubmit.co/suvan.gowrishanker.204@gmail.com" method="POST">
                  <ModalBody >
                    <Stack spacing={5} >
                      <FormControl isRequired >
                        <FormLabel color='white'>Name</FormLabel>
                        <Input type='text' name="name"/>
                        <FormHelperText color='white'>
                          Knowing your name would be nice.
                        </FormHelperText>
                      </FormControl>
                      <FormControl isRequired >
                        <FormLabel color='white'>Email</FormLabel>
                        <Input type='Email' name="email"/>
                        <FormHelperText color='white'>
                          How can I reach you?
                        </FormHelperText>
                      </FormControl>
                      <FormControl >
                        <FormLabel color='white'>Subject</FormLabel>
                        <Input type='text' />
                        <FormHelperText color='white'>
                          What can I help you with?
                        </FormHelperText>
                      </FormControl>
                      <FormControl isRequired >
                        <FormLabel color='white'>Message</FormLabel>
                        <Textarea type="text" name="message" rows={3} placeholder='Type Here....' size='md'/>
                        <FormHelperText color='white'>
                          What&apos;s on your mind?
                        </FormHelperText>
                      </FormControl>
                      
                    </Stack>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='purple' type="submit">
                      Submit
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Close</Button>
                  </ModalFooter>
                  {/* <input type="hidden" name="_captcha" value="false"/> */}
                  <input type="hidden" name="_autoresponse" value="Thank you For your submission, I will get back to you shortly.."/>
                  </form>
                </ModalContent>
              </Modal>
            </div>
        </section>
    </main>
    </>
  )
}

export default Contact