import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageList from "../components/List"

import { graphql } from "gatsby"

const RecettesPage = ({ data }) => {
  const contentRef = React.useRef(null)
  const executeScroll = () => contentRef.current.scrollIntoView()
  React.useEffect(() => {
    executeScroll()
  }, [])

  return (
    <Layout>
      <SEO title="Accueil" />
      <h2 ref={contentRef}>Recettes</h2>
      <PageList list={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

// All recipes
export const RecettesPageQuery = graphql`
  query RecettesPageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD/MM - YYYY")
            description
            ingredients
            path
            image {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default RecettesPage
