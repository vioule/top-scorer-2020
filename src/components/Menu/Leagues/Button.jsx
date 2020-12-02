import gsap from 'gsap/gsap-core'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LeagueLogo } from '../../Logos'
import { setLeague } from '../../../store/menu/action'

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity 0.25s linear;
  &:hover {
    opacity: 1;
  }
  @media ${({ theme }) => theme.medias.portrait} {
    width: 6.25vh;
    height: 100%;
    padding-bottom: 0;
  }
`

const SVGContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1.875rem;
  max-height: 1.875rem;
  @media ${({ theme }) => theme.medias.portrait} {
    max-width: 1.5rem;
    max-height: 1.5rem;
  }
`

const CircleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 170%;
  height: 170%;
`
const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
`

const Clickable = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  }
`

export default ({ league, target }) => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (league === target) {
      gsap.to(ref.current, { scale: 1, duration: 0.5, ease: 'back.out' })
      setActive(true)
    } else {
      gsap.to(ref.current, { scale: 0, duration: 1, ease: 'back.out' })
      setActive(false)
    }
  }, [league])
  return (
    <Container active={active}>
      <SVGContainer>
        <CircleContainer>
          <Circle ref={ref} />
        </CircleContainer>
        <LeagueLogo league={target} />
      </SVGContainer>
      <Clickable
        onClick={() => {
          dispatch(setLeague(target))
        }}
        className="menu-item"
      />
    </Container>
  )
}
