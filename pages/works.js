import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

import thumbBRF from '../public/images/works/brf_eyecatch.png';
import thumbJuggeBot from '../public/images/works/juggebot_eyecatch.png';

const Works = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mb={4}>
          Works 
        </Heading>

        <SimpleGrid columns={[1,1,3]} gap={6}>
          <Section>
            <WorkGridItem id="BRF" title="BRF" thumbnail={thumbBRF}>
              A housing community website.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="JuggeBot" title="JuggeBot" thumbnail={thumbJuggeBot}>
              A Discord Music bot with scripts written in Go for Juggerambo.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="JuggeBot" title="JuggeBot" thumbnail={thumbJuggeBot}>
              A Discord Music bot with scripts written in Go for Juggerambo.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works;