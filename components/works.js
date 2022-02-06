import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from './section';
import { WorkGridItem } from './grid-item';

import thumbBRF from '../public/images/works/brf_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works 
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="BRF" title="BRF" thumbnail={thumbBRF}>
            A housing community website.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works;