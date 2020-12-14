import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 37.5%;
  height: 100%;
  padding: 1rem;
  @media ${({ theme }) => theme.medias.portrait} {
    top: 62.5%;
    left: 0;
    width: 100%;
    height: 37.5vh;
  }
`

const Content = styled.div`
  width: 100%;
`

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: -16.667%;
  width: 116.667%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  @media ${({ theme }) => theme.medias.portrait} {
    top: -16.667%;
    left: 0;
    width: 100%;
    height: 116.667%;
  }
`

export default () => {
  return (
    <Container>
      <Content>
        <Nav />
      </Content>
      <Curtain />
    </Container>
  )
}
