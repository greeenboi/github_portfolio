import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Contact from '@/components/Contact'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

const About = () => {
  return (
    <>
      <Head>
        <title>About | PratyushAgarwal</title>
      </Head>
      <Navbar/>
      <motion.section 
          className='flex flex-row items-center justify-center w-full h-96 text-white  bg-black bg-opacity-40'
          variants={{
            hidden: {opacity: 0, y:75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          viewport={{once:true,amount: 0.8}}
        >
            <div className='flex flex-col items-center justify-center'>
                <p className='font-Raleway text-3xl font-semibold'>About ME</p>
                <p className='font-Onest text-lg font-extralight'>Get to know my Story</p>
            </div>
        </motion.section>
      <main className='flex flex-wrap items-center mx-4 min-h-screen py-2 relative text-white'>
        
        <motion.div 
          variants={{
            hidden: {opacity: 0, y:-75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          viewport={{once:true,amount: 0.8}}
          className='flex box3 md:max-w-xl justify-center items-center md:max-h-xl  rounded-lg '
        ><Image minW='sm'  position='relative' objectFit='cover' border='1px' borderColor='whiteAlpha.400' borderRadius='md' src='https://images.unsplash.com/photo-1691209993814-023de1f6aa4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='banner' /></motion.div>
        <motion.div 
          className='flex flex-col box3 justify-center items-stretch min-h-max p-2 md:min-h-max mx-4 border rounded-lg border-transparent card_bg hover:border-2 hover:border-yellow-400 transition-all' 
          variants={{
            hidden: {opacity: 0, y:75,},
            visible: {opacity: 1, y:0, },
          }}

          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.3, ease: "easeOut"}}
          viewport={{once:true,amount: 0.8}}
        >
          <h1 className=' mx-4 my-4 md:my-10 font-Onest text-4xl text-gray-200'>Hello, I&apos;m <span className=' font-Pixel text_grad'>Pratyush</span>, a <span className=' font-Dancing '>Frontend Web Developer</span> and a second year student at SRMIST.</h1>
          <h3 className=' my-4 md:my-12 font-Onest text-xl font-medium mx-4 text-gray-500 max-h-96 over'>
            My Passion for Programming began with my first C program I made almost 8 years ago.<br/><br/>
            Now I am an accomplished Software Developer with a passion for creating and developing web applications.<br/><br/>
            I am skilled in Python, C, C++, Java,  HTML, CSS, SQL,Git, GitHub, Linux, Windows, and many more.<br/><br/>
            

          </h3>
          
          
        </motion.div>
        
      </main>

      <Contact/>
    </>
  )
}

export default About