import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const coloredHeaderClass = {
  height: `8rem`,
  background: `linear-gradient(to right, #4654B9, #468EB9)`,
  marginBottom: `1.45rem`,
  padding: `2rem 5rem`,
  display: `flex`,
  justifyContent: `space-between`,
};

const Header = ({ siteTitle }) => (
  <header>
  <section style={coloredHeaderClass}>
      <Logo />
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
    </section>
    <section>

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
