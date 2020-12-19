import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

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

  // admin
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
      <div className="sticky-inner">
        <nav className="navbar">
          <span className="logo">
            <Link to="/">{siteTitle}</Link>
          </span>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to={`/recettes/`}>Recettes</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <button className="btn" onClick={() => setDialog(true)}>
                  Bonjour ${name}, deconnecte toi ici!{" "}
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
      <IdentityModal
        aria-labelledby="identityDialog"
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
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
