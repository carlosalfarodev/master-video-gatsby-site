import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/mv-logo-sm.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#721121`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
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
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img style={{ maxWidth: `10rem`, marginBottom: 0 }} src={Logo} alt="" />
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
