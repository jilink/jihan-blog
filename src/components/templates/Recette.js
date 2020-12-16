import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import { IngredientList } from "../List"

import Comments from "../comments"

const Recette = ({ data }) => {
  const contentRef = React.useRef(null)
  const executeScroll = () => contentRef.current.scrollIntoView()
  React.useEffect(() => {
    executeScroll()
  }, [])

  return (
    <>
      <Layout className="recette-layout">
        <SEO title={data.markdownRemark.frontmatter.title} />
        <h1 ref={contentRef}>{data.markdownRemark.frontmatter.title}</h1>
        <div className="recette-image">
          <Img
            fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
          />
        </div>
        <p>{data.markdownRemark.frontmatter.description}</p>
        <IngredientList list={data.markdownRemark.frontmatter.ingredients} />
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </Layout>
      <Comments
        identifier={data.markdownRemark.fields.slug}
        title={data.markdownRemark.frontmatter.title}
      />
    </>
  )
}

export const RecetteTemplateQuery = graphql`
  query RecetteTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        description
        title
        ingredients {
          name
          quantity
        }
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
