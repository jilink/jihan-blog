import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <h1>Jihan Blog</h1>
      <p>Bienvenue sur le blog de Jihan</p>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Link key={node.id} to={`/recette${node.fields.slug}`}>
              {" "}
              <li>{node.frontmatter.title}</li>
            </Link>
          )
        })}
      </ul>
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            description
            ingredients
            path
          }
        }
      }
    }
  }
`
export default IndexPage
