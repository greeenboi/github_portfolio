import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Contact from '@/components/Contact'

const About = () => {
  return (
    <>
      <Head>
        <title>About | Suvangs</title>
      </Head>
      <Navbar/>
      <main className='flex flex-col items-center min-h-screen py-2 relative text-white'>

      </main>
      <Contact/>
    </>
  )
}

export default About