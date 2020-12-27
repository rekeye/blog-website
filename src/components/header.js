import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import Nav from "./nav"

const coloredHeaderClass = {
  height: `10rem`,
  background: `linear-gradient(to right, #4654B9, #468EB9)`,
  padding: `2rem 5rem 0 5rem`,
  display: `flex`,
  justifyContent: `space-between`,
}

const titleClass = { 
  margin: 0,
  paddingBottom: `1.2rem`,
  fontWeight: `500`,
  fontSize: `2.6em`,
  alignSelf: `flex-end`
}

const linkClass = {
  color: `black`, 
  textDecoration: `none`
}

const Header = ({ siteTitle }) => (
  <header>
    <section style={coloredHeaderClass}>
      <Logo />
      <h1 style={titleClass}>
        <Link to="/" style={linkClass}>
          { siteTitle }
        </Link>
      </h1>
    </section>
    <section>
      <Nav />
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
