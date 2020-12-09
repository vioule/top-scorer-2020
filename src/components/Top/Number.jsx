import gsap from 'gsap/gsap-core'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled, { ThemeContext } from 'styled-components'
import { Transition, TransitionGroup } from 'react-transition-group'
import { Number } from '../Texts'

const StyledTransitionGroup = styled(TransitionGroup)`
  position: relative;
  width: 11.11%;
  height: 15%;
  background-color: ${({ theme }) => theme.colors.light};
  @media ${({ theme }) => theme.medias.portrait} {
    top: unset;
    bottom: 0;
    left: 0;
    width: 15%;
    height: 11.11%;
  }
`

const Mask = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledNumber = styled(Number)`
  display: inline-block;
  position: relative;
  font-size: 8vw;
  /* top: -0.5rem; */
  color: ${({ theme }) => theme.colors.bl};
  @media ${({ theme }) => theme.medias.portrait} {
    font-size: 6.5vh;
  }
`

const Content = ({ top }) => {
  return (
    <Mask>
      <StyledNumber>{top}</StyledNumber>
    </Mask>
  )
}

export default () => {
  const top = useSelector(({ player }) => player.top)
  const league = useSelector(({ menu }) => menu.league)
  const themeContext = useContext(ThemeContext)
  const onEnter = node => {
    gsap.set(node.firstChild, { color: themeContext.colors[league] })
    gsap.fromTo(
      node.firstChild,
      { yPercent: -100 },
      { yPercent: 0, ease: 'power3.in', duration: 0.25 }
    )
  }
  const onExit = node => {
    gsap.to(node.firstChild, {
      yPercent: 100,
      ease: 'power3.out',
      duration: 0.25,
    })
  }
  return (
    <StyledTransitionGroup>
      <Transition key={top} timeout={250} onEnter={onEnter} onExit={onExit}>
        <Content top={top} />
      </Transition>
    </StyledTransitionGroup>
  )
}
