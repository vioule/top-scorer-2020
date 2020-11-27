import { createGlobalStyle } from 'styled-components'
import '../fonts/index.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
  }

  html {
    font-size: 1vw;
    @media ${({ theme }) => theme.medias.desktopL} {
      font-size: 18px;
    };
    @media ${({ theme }) => theme.medias.desktop} {
      font-size: 16px;
    };
    @media ${({ theme }) => theme.medias.tablet} {
      font-size: 14px;
    };
    @media ${({ theme }) => theme.medias.mobileM} {
      font-size: 12px;
    };
  }
  button {
    background: none;
  }
  button:hover, a:hover {
    cursor: pointer;
  }
`
