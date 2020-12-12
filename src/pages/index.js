import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageList from "../components/List"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <h1>Jihan Blog</h1>
      <p>Bienvenue sur le blog de Jihan</p>
      <h3 className="list-title title-primary">Nos dernières recettes</h3>
      <PageList list={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

// only the last 3 most recent recipes
export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
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
export default IndexPage
