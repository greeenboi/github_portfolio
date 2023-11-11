import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import { Chrono } from 'react-chrono';
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

} from '@chakra-ui/react'



const items = [
  {
    title: "October 2022",
    cardTitle: "Ecell Ambassador Program",
    cardSubtitle: "Conducted by Aries IIT Roorkee",
    cardDetailedText: "Certificate of Excellence for being a part of the Ecell Ambassador Program conducted by Aries IIT Roorkee.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];

const Achievements = () => {
  
  return (
    <main className=''>
      <Head><title>Achievements | Suvangs</title></Head>
      <Navbar/>
      
      <section className='flex flex-col items-center min-h-screen py-2 relative text-white achievementspage'>

      <Chrono
        // items={items}
        mode="VERTICAL_ALTERNATING"
        hideControls
        // slideShow
        // slideItemDuration={4000}
        theme={{
          cardBgColor: "transparent",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "red",
        }}
        itemWidth={150}
      >
        <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/Kz4bVzzy/certification-of-appreciation-by-iites-roorkee-page-0001.jpg'
              alt='Aries IIT Roorkee'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Certificate of Excellence</Heading>
              <Text>
                Certificate of Excellence in my services as an Ecell Ambassador
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/m2r9jx7f/Suvan-Nov-2022-training-ML-page-0001.jpg'
              alt='Training'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Certificate of Internship</Heading>
              <Text>
                Internship Training with FOX on Artificial Intelligences
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/GhyjShfN/Suvan-Nov-2022-training-AI-page-0001-1.jpg'
              alt='Training'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Certificate of Internship</Heading>
              <Text>
                Internship Training with Languify on Machine Learning
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/vZtgTcTp/image-2023-11-11-143928108.png'
              alt='Training'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Certified Azure Ai Fundamentals</Heading>
              <Text>
                Microsoft Certified Azure Ai Fundamentals
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/3xx1K5JC/figma-event.png'
              alt='Training'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Workshop on Figma</Heading>
              <Text>
                Figma Design Worksop conducted by GCSRM
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <>
        <Card maxW='sm' colorScheme='blackAlpha'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/VNjdp5Q7/robocon.png'
              alt='Training'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>2nd Place in Solidworks Design Workshop</Heading>
              <Text>
                Designed a CAD animation of a complex gear assembly
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>
        

      </Chrono>

      </section>
      
      <Contact/>
    </main>
  )
}

export default Achievements