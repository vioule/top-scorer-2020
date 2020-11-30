import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from '../styled-components/Theme'
import ResetStyle from '../styled-components/Reset'
import CreateStore from '../store'

const store = CreateStore()

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
