import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Fellowship from '@/components/Fellowship'
import Internship from '@/components/Internship'
import Internship2 from '@/components/Internship2'
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
  Stat,
  StatLabel,
  
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,

} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Achievements = () => {
  
  return (
    <main className=''>
      <Head><title>Achievements | Suvangs</title></Head>
      <Navbar/>
      <motion.section 
        className='flex flex-row items-center justify-evenly w-full h-48 text-white mt-2 mb-4 bg-black bg-opacity-40'
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
              <p className='font-Raleway text-3xl font-semibold'>Achievements</p>
              <p className='font-Onest text-lg font-extralight'>Some of my Proudest Moments</p>
          </div>
        
        <div>
        <Stat>
          <StatLabel>CGPA</StatLabel>
          <StatNumber>8.2</StatNumber>
          <StatHelpText>
            <StatArrow type='increase' colorScheme='cyan'/>
            82.33%
          </StatHelpText>
        </Stat>
        </div>
      </motion.section>
      
      <section className='flex flex-col items-center min-h-screen m-2 py-2 relative text-white achievementspage'>
      <Chrono
        // items={items}
        mode="VERTICAL_ALTERNATING"
        // hideControls
        slideShow
        slideItemDuration={4000}
        theme={{
          cardBgColor: "transparent",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "red",
          primary: "rgba(15,15,15,0.8)",
          secondary: "rgba(128, 0, 128,0.7)",
        }}
        itemWidth={150}
      >
        <>
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
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
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
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
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
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
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
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
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
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
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/J05GQqHR/Whats-App-Image-2023-11-11-at-18-05-27-714a5603.jpg'
                alt='oodp Hack'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Certificate of Participation</Heading>
                <Text>
                  Certificate of Participation for the event &quot;Object Oriented Design Hack&quot; 
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </>

        <>
          <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
            <CardBody colorScheme='blackAlpha'>
              <Image
                src='https://i.postimg.cc/tC81yYdd/image-2023-11-11-191352336.png'
                alt='Hackerrank'
                borderRadius='lg'
                colorScheme='blackAlpha'
              />
            </CardBody>
          
            
          </Card>
        </>

        <>
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
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
        
        <>
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/L41R9w0P/impactai.png'
              alt='Training'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>1st place in ImpactAI Hackathon</Heading>
              <Text>
                1st place in Impact AI conducted by Aaruush
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <Fellowship />

        <Internship />
        
        <>
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/s2VmLXT3/Microsoft-Learn-AI-Skills-Challenge-Certificate-of-completion-EN-US-1-page-0001.jpg'
              alt='Msoft Learn AI skills'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Completed Microsoft Learn AI Skills Challenges </Heading>
              <Text>
                Completed the Cognitive Services, Ai Builder and Machine Learning Challenges.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          
        </Card>
        </>

        <Internship2 />

        <>
        <Card maxW='sm' bgColor='rgba(0,0,0,0.9)' textColor='white'>
          <CardBody colorScheme='blackAlpha'>
            <Image
              src='https://i.postimg.cc/fW0k0hNK/Suvan-Gowri-Shanker-RA2211003010670-1-page-0001.jpg'
              alt='SIH'
              borderRadius='lg'
              colorScheme='blackAlpha'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>3rd Place in Internal Software Round of Smart india Hackathon </Heading>
              <Text>
                3rd Place in Internal Software Round of Smart india Hackathon conducted across all of the SRMIST campuses.
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