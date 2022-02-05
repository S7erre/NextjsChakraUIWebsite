import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I'm a Developer from Sweden.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Stefan Markovic
                    </Heading>
                    <p>S7erre (Software Developer / Music Producer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page 