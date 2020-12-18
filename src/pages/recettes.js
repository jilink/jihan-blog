import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageList from "../components/List"
import SearchBar from "../components/searchbar"

import { graphql } from "gatsby"

const RecettesPage = ({ data }) => {
  const contentRef = React.useRef(null)
  const executeScroll = () => {
    contentRef.current.scrollIntoView()
    window.scrollBy(0, -100)
  }
  React.useEffect(() => {
    executeScroll()
  }, [])

  const [list, setList] = React.useState(data.allMarkdownRemark.edges)

  const filterField = item => {
    return item.node.frontmatter.title
  }

  return (
    <Layout>
      <SEO title="Accueil" />
      <h2 ref={contentRef}>Recettes</h2>
      <SearchBar
        filterField={filterField}
        placeholder="Gâteau..."
        list={data.allMarkdownRemark.edges}
        setList={setList}
      />
      <PageList list={list} />
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
