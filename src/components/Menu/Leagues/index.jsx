import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Button from './Button'

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 20rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.medias.portrait} {
    flex-direction: row;
    column-gap: 0;
  }
`

export default () => {
  const league = useSelector(({ menu }) => menu.league)
  return (
    <Container>
      <Button league={league} target="bl" />
      <Button league={league} target="pl" />
      <Button league={league} target="l1" />
      <Button league={league} target="ll" />
      <Button league={league} target="sa" />
    </Container>
  )
}
