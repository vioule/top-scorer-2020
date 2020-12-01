import React from 'react'
import styled from 'styled-components'
import TopScorer from './TopScorer'
import Menu from '../Menu'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    ${({ theme }) => theme.colors.dark},
    ${({ theme }) => theme.colors.bl}
  );
`

export default () => (
  <Container>
    <TopScorer />
    <Menu />
  </Container>
)
