import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: `8rem`,
      background: `linear-gradient(to right, #4654B9, #468EB9)`,
      marginBottom: `1.45rem`,
      padding: `2rem 5rem`,
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
    <h1 style={{ 
      margin: 0,
      fontFamily: `'Niramit', sans-serif`,
      fontWeight: `500`,
      alignSelf: `flex-end`
    }}>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
