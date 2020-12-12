import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PageItem = ({ id, title, fixedImg, slug, date, description }) => {
  return (
    <li className="list-item" key={id}>
      <Link to={`/recette${slug}`}>
        <div className="container">
          <Img
            title={title}
            alt="Image de la recette indisponible"
            fixed={fixedImg}
          />
          <span className="title">{title}</span>
        </div>
      </Link>
      <figcaption>
        <small>{date}</small>
      </figcaption>
      <p>{description}</p>
      <Link to={`/recette${slug}`}>Découvrir la recette</Link>
    </li>
  )
}

const PageList = ({ list }) => {
  return (
    <ul className="list-pages">
      {list.map(({ node }) => {
        return (
          <PageItem
            key={node.id}
            id={node.id}
            title={node.frontmatter.title}
            fixedImg={node.frontmatter.image.childImageSharp.fixed}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
          />
        )
      })}
    </ul>
  )
}

export default PageList
