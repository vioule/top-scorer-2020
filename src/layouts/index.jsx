import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from '../styled-components/Theme'
import ResetStyle from '../styled-components/Reset'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
