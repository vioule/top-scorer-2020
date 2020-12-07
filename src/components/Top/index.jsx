import React from 'react'
import styled from 'styled-components'
import { Number } from '../Texts'
import Marquee from './Marquee'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 6.25%;
  width: 56.25%;
  height: 100%;
  @media ${({ theme }) => theme.medias.portrait} {
    top: 6.25%;
    left: 0;
    width: 100%;
    height: 56.25vh;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.medias.portrait} {
    justify-content: center;
    align-items: flex-end;
  }
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.11%;
  height: 15%;
  background-color: ${({ theme }) => theme.colors.light};
  @media ${({ theme }) => theme.medias.portrait} {
    top: unset;
    bottom: 0;
    left: 0;
    width: 15%;
    height: 11.11%;
  }
`

const StyledNumber = styled(Number)`
  position: relative;
  font-size: 8vw;
  top: -5%;
  color: ${({ theme }) => theme.colors.bl};
  @media ${({ theme }) => theme.medias.portrait} {
    font-size: 6.5vh;
  }
`

const MarqueeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100vh;
  height: 6.25vw;
  transform-origin: top left;
  transform: rotateZ(90deg);
  @media ${({ theme }) => theme.medias.portrait} {
    top: unset;
    bottom: 0;
    width: 100%;
    left: 0;
    height: 6.25vh;
    transform: rotateZ(0);
  }
`

export default () => {
  return (
    <Wrapper>
      <MarqueeContainer>
        <Marquee />
      </MarqueeContainer>
      <Container>
        <Background>
          <StyledNumber>2</StyledNumber>
        </Background>
      </Container>
    </Wrapper>
  )
}
