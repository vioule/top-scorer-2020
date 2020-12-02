import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { LeagueTypo, LeagueLogo } from '../Logos'

const Container = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  padding: 6.25%;
  color: ${({ theme }) => theme.colors.light};
`
const LeagueLogoContainer = styled.div`
  position: relative;
  opacity: 0;
  width: 4rem;
  height: 4rem;
`
const LeagueContainer = styled.div`
  position: relative;
  opacity: 0;
  margin-top: 1rem;
  height: 2rem;
  width: 100vw;
`

export default () => {
  const league = useSelector(({ menu }) => menu.league)
  return (
    <Container>
      <LeagueLogoContainer>
        <LeagueLogo league={league} />
      </LeagueLogoContainer>
      <LeagueContainer>
        <LeagueTypo league={league} />
      </LeagueContainer>
    </Container>
  )
}
