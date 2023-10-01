import React from 'react'
import { Avatar } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <nav className=' max-w-screen-lg flex flex-row items-center justify-between my-6 mx-12 backdrop-blur-sm bg-white bg-opacity-10 px-1 rounded-2xl'>
        <div className='block'>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </div>
        <div className='flex flex-row gap-12 md:gap-24 p-4'> button</div>

    </nav>
  )
}

export default Navbar