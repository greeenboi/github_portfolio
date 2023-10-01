import React from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/contact'
import { Image } from '@chakra-ui/react'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

const index = () => {
  return (
    <>
    <Navbar />
    <main>
      <section className='flex md:flex-wrap h-auto  justify-evenly md:gap-20 my-12'>
        <div className='flex flex-col box1 w-auto justify-center items-stretch min-h-max p-2 mx-4 border rounded-lg border-transparent card_bg'>
          <h2>Hello, I'm <span className=''>Suvan</span>, a product Designer With 7 years of experience.</h2>
          <h3>I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</h3>
          <div className='flex flex-row justify-evenly items-center my-12 md:my-20 mx-6'>
            <button className='shadow-md h-fit rounded-sm p-1'>My Resume</button>
            <span className='flex flex-row gap-12'>
            <a href=''  className='w-min h-fit'><span className=' p-1 rounded-sm' ><AiOutlineLinkedin className='shadow-md'/></span></a>
            <a href=''  ><span className='p-1 rounded-sm' ><AiOutlineGithub className='shadow-md'/></span></a>
            <a href=''  ><span className='p-1 rounded-sm' ><AiOutlineMail className='shadow-md'/></span></a>
            </span>
          </div>
        </div>
        <div className='flex box2 w-auto md:max-w-xl justify-center items-center md:max-h-sm border rounded-lg border-white '><Image boxSize='lg' objectFit='cover' borderRadius='md' src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></div>
      </section>
    </main>
    <Contact />
    </>
  )
}

export default index