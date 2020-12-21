import React from 'react'
import styled from 'styled-components'
import Image from './Image'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 6.25%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.bl},
    ${({ theme }) => theme.colors.dark}
  );
  @media ${({ theme }) => theme.medias.portrait} {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bl},
      ${({ theme }) => theme.colors.dark}
    );
    top: 6.25%;
    left: 0;
    width: 100%;
    height: 50vh;
  }
`

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
`

export default () => {
  return (
    <Container>
      <Image />
      <Curtain />
    </Container>
  )
}
