import NextLink from 'next/link';
import { Button, Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I'm a Developer from Sweden.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Stefan Markovic
                    </Heading>
                    <p>S7erre (Software Developer / Music Producer)</p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md: 6}} align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/stefan.jpg" 
                        alt="Profile Image" 
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>@TO-DO: Text about me...</Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
            </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" >
                Bio
            </Heading>
            <BioSection>
                <BioYear>1995</BioYear>
            Born in Jönköping, Sweden.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed the Information and Communication Engineering Master's Program at Chalmers University of Technology.
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I like
            </Heading>
            <Paragraph>
                Development, Music, Music Production, Sound Design, Blockchain
            </Paragraph>
        </Section>

        </Container>
    )
}

export default Page 