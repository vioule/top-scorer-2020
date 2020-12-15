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
            stats {
              infos {
                from
                born
                height
                weight
                preference
                matchs
                titularisation
              }
              goals {
                total
                head
                right
                left
                other
                min
                mingoal
              }
              shots {
                total
                ontarget
                offtarget
                onpost
                blocked
                pontarget
                conversion
              }
            }
            percent {
              infos
              goals
              shots
            }
          }
          pl {
            name
            stats {
              infos {
                from
                born
                height
                weight
                preference
                matchs
                titularisation
              }
              goals {
                total
                head
                right
                left
                other
                min
                mingoal
              }
              shots {
                total
                ontarget
                offtarget
                onpost
                blocked
                pontarget
                conversion
              }
            }
            percent {
              infos
              goals
              shots
            }
          }
          l1 {
            name
            stats {
              infos {
                from
                born
                height
                weight
                preference
                matchs
                titularisation
              }
              goals {
                total
                head
                right
                left
                other
                min
                mingoal
              }
              shots {
                total
                ontarget
                offtarget
                onpost
                blocked
                pontarget
                conversion
              }
            }
            percent {
              infos
              goals
              shots
            }
          }
          ll {
            name
            stats {
              infos {
                from
                born
                height
                weight
                preference
                matchs
                titularisation
              }
              goals {
                total
                head
                right
                left
                other
                min
                mingoal
              }
              shots {
                total
                ontarget
                offtarget
                onpost
                blocked
                pontarget
                conversion
              }
            }
            percent {
              infos
              goals
              shots
            }
          }
          sa {
            name
            stats {
              infos {
                from
                born
                height
                weight
                preference
                matchs
                titularisation
              }
              goals {
                total
                head
                right
                left
                other
                min
                mingoal
              }
              shots {
                total
                ontarget
                offtarget
                onpost
                blocked
                pontarget
                conversion
              }
            }
            percent {
              infos
              goals
              shots
            }
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
