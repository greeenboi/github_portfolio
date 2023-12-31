//_app page
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import react from 'react';
import '../styles/globals.css'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        fontFamily: ' "Onest", "Raleway", sans-serif',
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

