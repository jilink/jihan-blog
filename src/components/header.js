import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import banner from "../assets/media_banner.jpeg"

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
  <>
    <header>
      <Navbar siteTitle={siteTitle} />
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
