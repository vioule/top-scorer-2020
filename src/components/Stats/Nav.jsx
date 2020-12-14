import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import gsap from 'gsap/gsap-core'
import { Description } from '../Texts'
import { setStats } from '../../store/stats/action'

const StyledDescription = styled(Description)`
  text-align: center;
  display: inline-block;
  width: 33%;
  color: ${({ theme, active, league }) =>
    active ? theme.colors[league] : theme.colors.dark};
  &:hover {
    color: ${({ theme, league }) => theme.colors[league]};
    cursor: pointer;
  }
`

const El = ({ name, stats, league }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const onClick = () => {
    dispatch(setStats(name))
  }
  useEffect(() => {
    setActive(name === stats)
  }, [stats])
  return (
    <StyledDescription onClick={onClick} league={league} active={active}>
      {name}
    </StyledDescription>
  )
}

const Container = styled.div`
  position: relative;
  padding: 0.5rem 0;
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.dark};
`

const StyledBorder = styled.div`
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  height: 100%;
  width: 33.333%;
  border-bottom: 0.25rem solid ${({ theme, league }) => theme.colors[league]};
`

const Border = ({ stats, league }) => {
  const ref = useRef(null)
  useEffect(() => {
    const left = {
      infos: '0',
      goals: '33.333%',
      shots: '66.666%',
    }
    gsap.to(ref.current, {
      left: left[stats],
      duration: 0.25,
      ease: 'power3.out',
    })
  }, [stats])
  return <StyledBorder ref={ref} league={league} />
}

export default () => {
  const stats = useSelector(store => store.stats)
  const league = useSelector(({ menu }) => menu.league)
  return (
    <Container>
      <El name="infos" stats={stats} league={league} />
      <El name="goals" stats={stats} league={league} />
      <El name="shots" stats={stats} league={league} />
      <Border stats={stats} league={league} />
    </Container>
  )
}
