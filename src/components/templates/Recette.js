import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Recette = ({ data }) => {
  return (
    <div>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <Img
        fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
      />
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
`

export default Recette
