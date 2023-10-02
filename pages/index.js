import React from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import { Image } from '@chakra-ui/react'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

const index = () => {
  return (
    <>
    <Navbar />
      
    <main>
      <section className='flex md:flex-wrap h-auto  justify-evenly md:gap-20 my-12'>
        <div className='flex flex-col box1 w-auto justify-center items-stretch min-h-max p-2 mx-4 border rounded-lg border-transparent card_bg hover:border-2 hover:border-violet-700 transition-all'>
          <h1 className=' mx-4 my-4 md:my-10 font-Onest text-4xl text-gray-900'>Hello, I'm <span className=' font-Pixel text_grad'>Suvan</span>, a <span className=' font-Dancing '>FullStack Software Developer</span> and a second year student at SRMIST.</h1>
          <h3 className=' my-4 md:my-12 font-Onest text-xl font-medium mx-4 text-gray-700'>I enjoy creating user-centric, delightful and helpful products of all types.</h3>
          <div className='flex flex-row justify-evenly items-center my-12 md:my-20 mx-6'>
            <button className='shadow-md h-fit rounded-sm p-1' onClick={()=>{window.open('https://pdf.ac/1B5JKO')}}>My Resume</button>
            <span className='flex flex-row gap-12'>
            <a href='https://www.linkedin.com/in/suvan-gowri-shanker-596943261/'  className='w-min h-fit'><span className=' p-1 rounded-sm' ><AiOutlineLinkedin className='shadow-md'/></span></a>
            <a href='https://github.com/greeenboi/github_portfolio'  ><span className='p-1 rounded-sm' ><AiOutlineGithub className='shadow-md'/></span></a>
            <a href='mailto:suvan.gowrishanker.204@gmail.com'  ><span className='p-1 rounded-sm' ><AiOutlineMail className='shadow-md'/></span></a>
            </span>
          </div>
        </div>
        <div className='flex box2 w-auto md:max-w-xl justify-center items-center md:max-h-xl  rounded-lg '><Image boxSize='xl' position='relative' objectFit='cover' border='1px' borderColor='whiteAlpha.400' borderRadius='md' src='https://images.unsplash.com/photo-1693859507588-e69572086bde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' alt='Dan Abramov' /></div>
      </section>
    </main>
    
    <Contact />
    </>
  )
}

export default index