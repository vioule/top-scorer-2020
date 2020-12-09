import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AddPlayer, SubPlayer } from './Player/Buttons'
import Leagues from './Leagues'

const Container = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 6.25%;
  height: 100%;
  @media ${({ theme }) => theme.medias.portrait} {
    width: 100%;
    height: 6.25vh;
  }
`

export default () => {
  const top = useSelector(({ menu }) => menu.top)
  return (
    <Container>
      <Leagues />
      <SubPlayer top={top} />
      <AddPlayer top={top} />
    </Container>
  )
}
