import React from 'react'
import styled from 'styled-components'
import Number from './Number'
import Marquee from './Marquee'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 6.25%;
  width: 56.25%;
  height: 100%;
  @media ${({ theme }) => theme.medias.portrait} {
    position: absolute;
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

const MarqueeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100vh;
  height: 6.25vw;
  transform-origin: top left;
  transform: rotateZ(90deg);
  background-color: ${({ theme }) => theme.colors.light};
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
        <Number />
      </Container>
    </Wrapper>
  )
}
