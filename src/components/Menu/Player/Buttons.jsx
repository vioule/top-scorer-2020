import React from 'react'
import styled from 'styled-components'
import { Sub, Add } from './SVG'

const SubContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.5;
  transition: opacity 0.25s linear;
  &:hover {
    cursor: ${({ top }) => (top > 1 ? 'pointer' : 'default')};
    opacity: ${({ top }) => (top > 1 ? 1 : 0.5)};
  }
  @media ${({ theme }) => theme.medias.portrait} {
    width: unset;
    height: 100%;
  }
`
const AddContainer = styled(SubContainer)`
  top: unset;
  bottom: 0;
  &:hover {
    cursor: ${({ top }) => (top < 3 ? 'pointer' : 'default')};
    opacity: ${({ top }) => (top < 3 ? 1 : 0.5)};
  }
  @media ${({ theme }) => theme.medias.portrait} {
    left: unset;
    right: 0;
  }
`

export const SubPlayer = ({ top }) => {
  return (
    <SubContainer top={top}>
      <Sub />
    </SubContainer>
  )
}

export const AddPlayer = ({ top }) => {
  return (
    <AddContainer top={top}>
      <Add />
    </AddContainer>
  )
}
