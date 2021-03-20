import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styled, { css } from 'styled-components'
import { useUnderline } from "./animations"

const StyledNav = styled.nav`
    height: 6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black;

    ${props => props.footer && css`
        width: 70%;
        color: white;
    `}
`
const StyledUnderline = styled.hr`
    width: 0;
    height: 2px;
    background: black;
    ${props => props.white && css`
        background: white;
    `}
    border: 0;
    transition: 'all .2s ease-in-out';
`
const StyledAnchorLink = styled(AnchorLink)`
    font-size: 1.3em;
    color: inherit;
    text-decoration: none;
    margin: 0 1.2rem;
`
export const StyledLink = styled(Link)`
    font-size: 1.3em;
    color: inherit;
    text-decoration: none;
    margin: 0 1.2rem;
`


const Nav = (props) => {
    const { underlineAnimations, ...underlineHandler } = useUnderline()

    return (
        <StyledNav { ...props }>
            <StyledAnchorLink to="/#thoughts" >
                    <div id={ props.footer ? "foo-4" : "nav-1" } {...underlineHandler} >
                        Thoughts 
                        <StyledUnderline { ...props }
                            style={ props.footer 
                                ? { transition: 'all .2s ease-in-out', ...underlineAnimations[3] } 
                                : { transition: 'all .2s ease-in-out', ...underlineAnimations[0] } }/> 
                    </div>
            </StyledAnchorLink>
            <StyledLink id={ props.footer ? "foo-5" : "nav-2" } to="/about" {...underlineHandler}> 
                About 
                <StyledUnderline { ...props }
                    style={ props.footer 
                        ? { transition: 'all .2s ease-in-out', ...underlineAnimations[4] } 
                        : { transition: 'all .2s ease-in-out', ...underlineAnimations[1] } }/> 
            </StyledLink>
            <StyledAnchorLink to="/#contact" className="link"> 
                <div id={ props.footer ? "foo-6" : "nav-3" } {...underlineHandler} >
                    Contact us 
                    <StyledUnderline { ...props }
                        style={ props.footer 
                            ? { transition: 'all .2s ease-in-out', ...underlineAnimations[5] } 
                            : { transition: 'all .2s ease-in-out', ...underlineAnimations[2] } }/> 
                </div>
            </StyledAnchorLink>
        </StyledNav>
    )
}

export default Nav