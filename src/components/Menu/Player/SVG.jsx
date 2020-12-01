import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  width: 100%;
  padding: 0.5rem;
  fill: none;
  stroke: ${({ theme }) => theme.colors.light};
  @media ${({ theme }) => theme.medias.portrait} {
    width: unset;
    height: 100%;
  }
`
export const Sub = () => (
  <StyledSVG viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M45 95L5 50L45 5"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSVG>
)
export const Add = () => (
  <StyledSVG viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 95L45 50L5 5"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSVG>
)
