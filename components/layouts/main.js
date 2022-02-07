import Head from 'next/head';
import Navbar from '../navbar.js';
import NoSsr from '../no-ssr.js';
import { Box, Container } from '@chakra-ui/react';
import Voxel3D from '../voxel-3d.js';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Stefan Markovic - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={0}>
        <NoSsr>
          <Voxel3D />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main 
