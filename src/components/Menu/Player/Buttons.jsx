import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Sub, Add } from './SVG'
import { setTop } from '../../../store/menu/action'

const SubContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 5.556rem;
  opacity: ${({ top }) => (top === 1 ? 0.15 : 0.5)};
  transition: opacity 0.25s linear;
  &:hover {
    opacity: ${({ top }) => (top > 1 ? 1 : 0.15)};
  }
  @media ${({ theme }) => theme.medias.portrait} {
    top: unset;
    left: 1rem;
    width: unset;
    height: 100%;
    padding: 0.75rem 0;
  }
`
const AddContainer = styled(SubContainer)`
  top: unset;
  bottom: 1rem;
  opacity: ${({ top }) => (top === 3 ? 0.15 : 0.5)};
  &:hover {
    opacity: ${({ top }) => (top < 3 ? 1 : 0.15)};
  }
  @media ${({ theme }) => theme.medias.portrait} {
    bottom: unset;
    left: unset;
    right: 1rem;
  }
`

const Clickable = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`

export const SubPlayer = ({ top }) => {
  const dispatch = useDispatch()
  return (
    <SubContainer top={top}>
      <Sub />
      {top > 1 && (
        <Clickable
          className="menu-item"
          onClick={() => {
            dispatch(setTop(top - 1))
          }}
        />
      )}
    </SubContainer>
  )
}

export const AddPlayer = ({ top }) => {
  const dispatch = useDispatch()
  return (
    <AddContainer top={top}>
      <Add />
      {top < 3 && (
        <Clickable
          className="menu-item"
          onClick={() => {
            dispatch(setTop(top + 1))
          }}
        />
      )}
    </AddContainer>
  )
}
