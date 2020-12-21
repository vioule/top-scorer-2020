import gsap from 'gsap/gsap-core'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LeagueLogo } from '../../Logos'
import { setLeague } from '../../../store/menu/action'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2.778rem;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity 0.25s linear;
  &:hover {
    opacity: 1;
  }
  & + div {
    margin-top: 1rem;
  }
  @media ${({ theme }) => theme.medias.portrait} {
    width: 2.778rem;
    height: 100%;
    & + div {
      margin-top: 0;
      margin-left: 0.25rem;
    }
  }
`

const SVGContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.667rem;
  height: 1.667rem;
  /* max-width: 1.875rem;
  max-height: 1.875rem; */
  @media ${({ theme }) => theme.medias.portrait} {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const CircleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.778rem;
  height: 2.778rem;
  @media ${({ theme }) => theme.medias.portrait} {
    width: 2.084rem;
    height: 2.084rem;
  }
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
