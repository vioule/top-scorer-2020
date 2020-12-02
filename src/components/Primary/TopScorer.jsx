import React from 'react'
import styled from 'styled-components'
import { Name, Date } from '../Texts'

const Container = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  padding: 6.25%;
  color: ${({ theme }) => theme.colors.light};
`

const Mask = styled.div`
  overflow: hidden;
`

export default () => (
  <Container>
    <Mask>
      <Name>t</Name>
      <Name>o</Name>
      <Name>p</Name>
    </Mask>
    <Mask>
      <Name>s</Name>
      <Name>c</Name>
      <Name>o</Name>
      <Name>r</Name>
      <Name>e</Name>
      <Name>r</Name>
    </Mask>
    <Mask>
      <Date>2</Date>
      <Date>0</Date>
      <Date>2</Date>
      <Date>0</Date>
    </Mask>
  </Container>
)
