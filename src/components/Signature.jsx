import React from 'react'
import styled from 'styled-components'
import { Roboto } from './Texts'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 37.5%;
  color: ${({ theme }) => theme.colors.dark};
  height: 1rem;
  transition: opacity 0.5s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
  @media ${({ theme }) => theme.medias.portrait} {
    width: 100%;
  }
`

const Link = styled.a`
  background-color: ${({ theme }) => theme.colors.light};
  height: 100%;
  padding: 0 0.5rem;
  font-size: 0.5rem;
  line-height: 1rem;
`

const Signature = () => (
  <Container>
    <Link href="https://github.com/vioule" target="_blank" rel="noopener">
      <Roboto>design & development - Cano Vincent</Roboto>
    </Link>
  </Container>
)

export default Signature
