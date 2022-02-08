import Link from 'next/link'
import Image from 'next/image'
import { Text ,useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const iconImg = `/images/stefan.jpg`

  return(
    <Link href="/">
      <a>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Montserrat'
          fontWeight="bold" 
          ml={3}
        />
        Stefan Markovic
      </a>
    </Link>
  )
}

export default Logo