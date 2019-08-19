import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/mv-logo-sm.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      textAlign: `center`,
      borderTop: `.5rem solid red`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.5rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `#333333`,
          textDecoration: `none`,
        }}
      >
        <img style={{ maxWidth: `20rem`, marginBottom: 0 }} src={Logo} alt="" />
      </Link>
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
