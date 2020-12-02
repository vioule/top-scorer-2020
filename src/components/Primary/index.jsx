import React from 'react'
import styled from 'styled-components'
import TopScorer from './TopScorer'
import League from './League'

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
  @media ${({ theme }) => theme.medias.portrait} {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.dark},
      ${({ theme }) => theme.colors.bl}
    );
  }
`

export default () => (
  <Container>
    <TopScorer />
    <League />
  </Container>
)
