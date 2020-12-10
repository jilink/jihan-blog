import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import { DiscussionEmbed } from "disqus-react"

const Recette = ({ data }) => {
  console.log(process.env.GATSBY_DISQUS_NAME)
  console.log(process.env.GATSBY_TEST)
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <Img
        fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
      />
      <p>{data.markdownRemark.frontmatter.description}</p>
      <DiscussionEmbed
        shortname={process.env.GATSBY_DISQUS_NAME}
        config={{
          identifier: data.markdownRemark.fields.slug,
          title: data.markdownRemark.frontmatter.title,
        }}
      />
    </Layout>
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
