import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.light};
`

const SVG = (viewBox, href) => (
  <StyledSVG viewBox={viewBox}>
    <use href={href} />
  </StyledSVG>
)

const PremierLeagueTypo = () => SVG('0 0 69 10', '/logos.svg#pl')
const LaLigaTypo = () => SVG('0 0 31 10', '/logos.svg#ll')
const BundesligaTypo = () => SVG('0 0 90 10', '/logos.svg#bl')
const Ligue1Typo = () => SVG('0 0 60 10', '/logos.svg#l1')
const SerieATypo = () => SVG('0 0 50 10', '/logos.svg#sa')

export const LeagueTypo = ({ league }) => {
  switch (league) {
    case 'l1':
      return <Ligue1Typo />
    case 'pl':
      return <PremierLeagueTypo />
    case 'sa':
      return <SerieATypo />
    case 'bl':
      return <BundesligaTypo />
    case 'll':
      return <LaLigaTypo />
    default:
      return false
  }
}

const PremierLeagueLogo = () => SVG('0 0 8 10', '/logos.svg#pl-logo')
const LaLigaLogo = () => SVG('0 0 10 10', '/logos.svg#ll-logo')
const BundesligaLogo = () => SVG('0 0 12 10', '/logos.svg#bl-logo')
const Ligue1Logo = () => SVG('0 0 10.7 10', '/logos.svg#l1-logo')
const SerieALogo = () => SVG('0 0 8 10', '/logos.svg#sa-logo')

export const LeagueLogo = ({ league }) => {
  switch (league) {
    case 'l1':
      return <Ligue1Logo />
    case 'pl':
      return <PremierLeagueLogo />
    case 'sa':
      return <SerieALogo />
    case 'bl':
      return <BundesligaLogo />
    case 'll':
      return <LaLigaLogo />
    default:
      return false
  }
}
