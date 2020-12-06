import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Recette = ({ data }) => {
  return (
    <div>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <p>{data.markdownRemark.frontmatter.description}</p>
    </div>
  )
}

export const RecetteTemplateQuery = graphql`
  query RecetteTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        image
      }
    }
  }
`

export default Recette
