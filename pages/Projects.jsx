import { React, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import { PiGithubLogo } from 'react-icons/pi'
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Spinner,

} from '@chakra-ui/react'

const Projects = () => {
  const [jsonData, setJsonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      import('../data/projects.json')
        .then((data) => {
          setJsonData(data.default);
          setIsLoading(false); 
        })
        .catch((error) => {
          console.error('Error importing JSON data: ', error);
          setIsLoading(false); 
        });
    }, 2000); 
  }, []);

  return (
    <>
    <Navbar/>
    <main className='flex flex-col items-center min-h-screen py-2 relative'>
        <section className='flex flex-row items-center justify-center w-full h-96 bg-white bg-opacity-30'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-Raleway text-3xl font-semibold'>Projects</p>
                <p className='font-Onest text-lg font-extralight'>Here are some of my projects</p>
            </div>
        </section>
        <section className='my-12 w-full flex flex-wrap bg-white bg-opacity-60 mx-2 px-2 py-4 md:gap-24 justify-center '>
        {
          isLoading ? (
              <Stack className='mx-6'>
                <Spinner size='xl' />
              </Stack>
          ) : (
            jsonData.map((data, index)=>(
              <Card key={index} w={index === 0 ? 'xl' : 'sm'} className={index === 0 ? ' md:mx-64 my-4' : 'mx-2 my-4'}>
                <CardBody  bgColor='transparent'>
                  <h1 className={index === 0 ? 'block my-2 font-Onest text-4xl' : 'hidden'}>Featured:</h1>
                  <Image src={data.ImageUrl} alt='Project image' className='block w-full rounded-lg'/>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{data.Name}</Heading>
                    <Text>
                      {data.Description}
                    </Text>
                    
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter backdropBlur='md' bgColor='transparent'>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='twitter' onClick={()=>{window.open(data.Link)}}>
                      <PiGithubLogo />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))
          )
        }
        </section>
    </main>
    <Contact/>
    </>
  )
}

export default Projects