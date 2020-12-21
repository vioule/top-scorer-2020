import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Content from './Content'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 37.5%;
  height: 100%;
  min-height: 35rem;
  background-color: ${({ theme }) => theme.colors.light};
  @media ${({ theme }) => theme.medias.portrait} {
    top: 62.5%;
    left: 0;
    width: 100%;
    height: 37.5vh;
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  padding: 1rem;
  width: 100%;
  transform: translateY(-50%);
  @media ${({ theme }) => theme.medias.portrait} {
    top: 0;
    transform: translateY(0);
    padding: 3rem 1rem;
  }
`

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: -16.667%;
  width: 116.667%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  @media ${({ theme }) => theme.medias.portrait} {
    top: -6.25vh;
    left: 0;
    width: 100%;
    height: 116.667%;
  }
`

export default () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Content />
      </Wrapper>
      <Curtain />
    </Container>
  )
}
