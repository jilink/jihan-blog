import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Navbar = ({ siteTitle }) => {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
      <div className="sticky-inner">
        <nav className="navbar">
          <span className="logo">
            <Link to="/">{siteTitle}</Link>
          </span>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to={`/about/`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={`/about/`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={`/about/`}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query headerQuery {
        banner: file(relativePath: { eq: "banner.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <header>
          <Navbar siteTitle={siteTitle} />
        </header>
        <div className="banner-area">
          <Img fluid={data.banner.childImageSharp.fluid} />
        </div>
      </>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
