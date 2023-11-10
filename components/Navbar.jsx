
import { React, useEffect, useState, useRef } from 'react'

import Link from 'next/link'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Avatar, 
    Button,
    Stack,
    StackDivider,
    Divider,
    useDisclosure
  } from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'




const Navbar = () => {
    
    const [ screenWidth, checkScreenWidth ] =   useState(0);
    
    useEffect(() => {
        const handleResize = () => checkScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        // console.log(screenWidth);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);
    

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()


  return (
    <>
        {screenWidth <= 760 ?    (
           <nav className='min-w-screen flex flex-row items-center justify-between mb-1 backdrop-blur-sm bg-black bg-opacity-30 p-1'>
                <Link href='/'>
                    <Avatar scale={2.2} name='Suvangs' src='https://i.postimg.cc/Z5gvZpT7/Whats-App-Image-2023-10-01-at-21-30-57-ab8ad9d0.jpg'  />
                </Link>
                <button ref={btnRef} className='backdrop-blur-sm bg-white bg-opacity-10 py-1 mr-6 px-3 rounded-md' onClick={onOpen}>
                    <RxHamburgerMenu size={20} color='white'/>
                </button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    
                >
                    <DrawerOverlay backdropBlur='md' />
                    <DrawerContent backdropBlur='sm' bgColor='blackAlpha.400' opacity={10} >
                    <DrawerCloseButton />
                    <DrawerHeader color='white'>Menu</DrawerHeader>

                    <DrawerBody>
                        
                        <Stack>
                            <Divider />
                                <Link href='/' className='shadow-sm hover:bg-opacity-20 text-white hover:bg-slate-50 hover:text-gray-400 transition-all rounded-lg p-2 '>Home</Link>
                            <StackDivider />
                                <Link href='About' className='shadow-sm hover:bg-opacity-20 text-white hover:bg-slate-50 hover:text-gray-400 transition-all rounded-lg p-2 '>About</Link>
                            <StackDivider />
                                <Link href='Projects' className='shadow-sm hover:bg-opacity-20 text-white hover:bg-slate-50 hover:text-gray-400 transition-all rounded-lg p-2 '>Projects</Link>
                            <StackDivider />
                                <Link href='Achievements' className='shadow-sm hover:bg-opacity-20 text-white hover:bg-slate-50 hover:text-gray-400 transition-all rounded-lg p-2 '>Achievements</Link>
                            <Divider />
                        </Stack>
                        
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose} color='white'>
                        close
                        </Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </nav>
            ) : (
            <nav className=' w-11/12 flex flex-row items-center justify-between my-6 mx-12 backdrop-blur-sm bg-black bg-opacity-10 px-1 rounded-2xl'>
                <div className='block'>
                
                </div>
                <div className='flex flex-row gap-12 md:gap-24 p-4 mx-6'>
                    <Link href='/' className='shadow-sm hover:bg-opacity-20 hover:bg-slate-50 hover:text-gray-500 transition-all rounded-lg p-2 '>Home</Link>
                    <Link href='Projects' className='shadow-sm hover:bg-opacity-20 hover:bg-slate-50 hover:text-gray-500 transition-all rounded-lg p-2 '>Projects</Link>
                </div>
            </nav>
        )}
    </>
  )
}

export default Navbar