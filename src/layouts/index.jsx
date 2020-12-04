import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { useStaticQuery, graphql } from 'gatsby'
import theme from '../styled-components/Theme'
import ResetStyle from '../styled-components/Reset'
import CreateStore from '../store'

const store = CreateStore()
export const DataContext = React.createContext(null)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            fluid(traceSVG: { color: "#001166" }) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  `)
  return (
    <DataContext.Provider
      value={data.allFile.nodes.map(x => x.childImageSharp.fluid)}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ResetStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </DataContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
