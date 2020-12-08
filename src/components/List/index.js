import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PageList = ({ list }) => {
  return (
    <ul className="list-pages">
      {list.map(({ node }) => {
        return (
          <li className="list-item" key={node.id}>
            <figure>
              <Link to={`/recette${node.fields.slug}`}>
                <Img
                  title={node.frontmatter.title}
                  alt="Image de la recette indisponible"
                  fixed={node.frontmatter.image.childImageSharp.fixed}
                />
              </Link>
              <figcaption>
                <small>{node.frontmatter.date}</small>
              </figcaption>
            </figure>
            <h5 className="title">{node.frontmatter.title}</h5>
            <p>{node.frontmatter.description}</p>
            <Link to={`/recette${node.fields.slug}`}>Découvrir la recette</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PageList
