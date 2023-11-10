import React from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import { Image } from '@chakra-ui/react'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import Head from 'next/head'
import { motion } from 'framer-motion'



const index = () => {
  return (
    <>
    <Head>
      <title>Home | Suvangs</title>
      
    </Head>
    
    <Navbar />
      
    <main>
      <section className='flex flex-wrap h-auto  justify-evenly gap-4 md:gap-20 my-12'>
        <motion.div 
          className='flex flex-col box1 w-auto justify-center items-stretch min-h-max p-2 mx-4 border rounded-lg border-transparent card_bg hover:border-2 hover:border-violet-700 transition-all' 
          variants={{
            hidden: {opacity: 0, y:75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
        >
          <h1 className=' mx-4 my-4 md:my-10 font-Onest text-4xl text-gray-200'>Hello, I&apos;m <span className=' font-Pixel text_grad'>Suvan</span>, a <span className=' font-Dancing '>FullStack Software Developer</span> and a second year student at SRMIST.</h1>
          <h3 className=' my-4 md:my-12 font-Onest text-xl font-medium mx-4 text-gray-600'>I enjoy creating user-centric, delightful and helpful products of all types. I also love Ice Cream.</h3>
          <div className='flex flex-row justify-evenly items-center my-12 md:my-20 mx-6'>
            <button className='shadow-md h-fit rounded-sm p-1' onClick={()=>{window.open('https://pdf.ac/1B5JKO')}}>My Resume</button>
            <span className='flex flex-row gap-12'>
            <a href='https://www.linkedin.com/in/suvan-gowri-shanker-596943261/'  className='w-min h-fit'><span className=' p-1 rounded-sm' ><AiOutlineLinkedin className='shadow-md '/></span></a>
            <a href='https://github.com/greeenboi/github_portfolio'  ><span className='p-1 rounded-sm' ><AiOutlineGithub  className='shadow-md'/></span></a>
            <a href='mailto:suvan.gowrishanker.204@gmail.com'  ><span className='p-1 rounded-sm' ><AiOutlineMail className='shadow-md'/></span></a>
            </span>
          </div>
        </motion.div>
        <motion.div 
          variants={{
            hidden: {opacity: 0, y:-75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          className='flex box2 w-auto md:max-w-xl justify-center items-center md:max-h-xl  rounded-lg '
        ><Image minW='sm'  position='relative' objectFit='cover' border='1px' borderColor='whiteAlpha.400' borderRadius='md' src='https://i.postimg.cc/Z5gvZpT7/Whats-App-Image-2023-10-01-at-21-30-57-ab8ad9d0.jpg' alt='Suvangs' /></motion.div>
      </section>
    </main>
    
    <Contact />
    </>
  )
}

export default index