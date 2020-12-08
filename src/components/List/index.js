import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const List = ({ list }) => {
  return (
    <ul className="list">
      {list.map(({ node }) => {
        return (
          <li className="list-item" key={node.id}>
            <Link to={`/recette${node.fields.slug}`}>
              <p className="title">{node.frontmatter.title}</p>
            </Link>
            <Link to={`/recette${node.fields.slug}`}>
              <Img
                alt="Image de la recette indisponible"
                fixed={node.frontmatter.image.childImageSharp.fixed}
              />
            </Link>
            <p>{node.frontmatter.description}</p>
            <p>{node.frontmatter.date}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default List
