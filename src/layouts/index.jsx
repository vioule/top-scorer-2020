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
      allDataJson {
        nodes {
          bl {
            name
          }
          pl {
            name
          }
          l1 {
            name
          }
          ll {
            name
          }
          sa {
            name
          }
        }
      }
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
      value={{
        images: data.allFile.nodes.map(x => x.childImageSharp.fluid),
        stats: data.allDataJson.nodes[0],
      }}
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
