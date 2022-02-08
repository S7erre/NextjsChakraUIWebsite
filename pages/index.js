import NextLink from 'next/link';
import { Button, Container, Box, Heading, Image, useColorModeValue, theme } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return ( 
        <Layout>
            <Container maxWidth="container.lg">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I'm a Software Developer / Designer / Music Producer from Gothenburg, Sweden.
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Stefan Markovic
                        </Heading>
                        <p>Software Developer / Designer / Music Producer</p>
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
                            maxWidth="150px" 
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
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean dui odio, iaculis quis diam sed, tristique semper arcu. 
                        Sed porttitor tempus nisi et imperdiet. Donec ac orci iaculis, 
                        commodo ipsum vel, ornare nisi. Phasellus iaculis ante ac lectus euismod, 
                        eget commodo turpis commodo. 
                        Suspendisse sit amet cursus turpis, in accumsan purus. 
                        Praesent non mauris tortor. Ut at mauris in justo molestie ultricies. 
                        Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. In scelerisque egestas nunc, vel lobortis eros. 
                        Nulla a dolor malesuada, egestas ex vitae, volutpat lorem. 
                    </Paragraph>
                    <Box align="center" mt={4}>
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
                    <BioYear>2019</BioYear>
                    Completed the Electrical Engineering Bachelor's Program at Chalmers University of Technology.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Completed the Information and Communication Engineering Master's Program at Chalmers University of Technology.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    TBD
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I like
                </Heading>
                <Paragraph>
                    Development, Technology, Design, Music, Music Production, Sound Design, Blockchain
                </Paragraph>
            </Section>
            </Container>
        </Layout>
    )
}

export default Page 