import { React, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
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
        <section className='my-12 overflow-scroll scroll-smooth w-full overflow-x-hidden flex flex-wrap min-h-max mx-2 py-4'>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </section>
    </main>
    <Contact/>
    </>
  )
}

export default Projects