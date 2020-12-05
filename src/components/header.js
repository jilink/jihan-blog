import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding-left: ${rhythm(1.5)};
      padding-right: ${rhythm(1.5)};
    `}
  >
    <h3
      css={css`
        margin-bottom: ${rhythm(2)};
        display: flex;
        font-style: normal;
      `}
    >
      <Link to="/">{siteTitle}</Link>
    </h3>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <Link to={`/about/`}>About</Link>
      <Link to={`/admin/`}>Admin</Link>
      <Link to={`/recettes`}>Recettes</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
