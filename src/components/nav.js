import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styled from 'styled-components'
import { underlineClass, useUnderline } from "./animations"

const navClass = {
    height: `6rem`, 
    width: `100%`, 
    padding: `0 4rem`,
    display: `flex`, 
    alignItems: `center`,
    justifyContent: `flex-end`
}
const StyledUnderline = styled.hr`
    width: 0;
    height: 2px;
    background: black;
    border: 0;
    transition: 'all .2s ease-in-out';
`


const Nav = () => {
    const { underlineAnimations, ...underlineHandler } = useUnderline()

    return (
        <nav style={navClass}>
            <AnchorLink 
                to="/#thoughts" 
                className="link">
                    <div id="nav-1" {...underlineHandler} >
                        Thoughts 
                        <hr style={{ ...underlineClass, ...underlineAnimations[0] }}/> 
                    </div>
            </AnchorLink>
            <Link id="nav-2" to="/about" className="link" {...underlineHandler}> 
                About 
                <StyledUnderline style={{...underlineAnimations[1] }}/> 
            </Link>
            <AnchorLink to="/#contact" className="link"> 
                <div id="nav-3" {...underlineHandler} >
                    Contact us 
                    <hr style={{ ...underlineClass, ...underlineAnimations[2] }}/> 
                </div>
            </AnchorLink>
        </nav>
    )
}

export default Nav