import styled from 'styled-components'

export const BarlowCondensed = styled.span`
  font-family: ${({ theme }) => theme.fonts.BarlowCondensed};
  letter-spacing: 0.15em;
`

export const BarlowCondensedBold = styled(BarlowCondensed)`
  letter-spacing: 0;
  font-weight: 700;
`
export const Raleway = styled.span`
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const Description = styled(Raleway)`
  font-size: 0.9rem;
`
export const Content = styled(BarlowCondensed)`
  font-size: 1rem;
`
export const Name = styled(Raleway)`
  font-size: 4.45rem;
`
export const Number = styled(BarlowCondensedBold)`
  font-size: 8.35rem;
`
export const Date = styled(BarlowCondensedBold)`
  font-size: 4.73rem;
  letter-spacing: 0.1em;
`
