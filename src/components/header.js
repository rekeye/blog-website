import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import Logo from "./logo"
import Nav from "./nav"

const ColoredSection = styled.section`
  height: 10rem;
  background: linear-gradient(to right, #D4732B, #D59E2A);
  padding: 2rem 5rem 0 5rem;
  display: flex;
  justify-content: space-between;
`
const PaddingDiv =styled.div`
padding: 0 4rem;
`
const StyledTitle = styled.h1` 
  margin: 0;
  padding-bottom: 1.2rem;
  font-size: 2.6em;
  align-self: flex-end;
`
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
    <header>
      <ColoredSection>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <StyledTitle>
          <StyledLink to="/">
            { siteTitle }
          </StyledLink>
        </StyledTitle>
      </ColoredSection>
      <PaddingDiv>
        <Nav />
      </PaddingDiv>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
