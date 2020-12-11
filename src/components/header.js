import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import banner from "../assets/media_banner.jpeg"

const Header = ({ siteTitle }) => (
  <>
    <header>
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
    </header>
    <div className="banner-area">
      <img src={banner} alt="banner" />
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
