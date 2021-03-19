import React from "react"

import styled from 'styled-components'
import { SectionTitle, FlexDiv } from '../styles/styled'
// import { Link } from "gatsby"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
import { underlineClass, useUnderline } from "./animations"

const StyledFooter = styled.footer`
    background: linear-gradient(to right, rgb(212, 115, 43), rgb(213, 158, 42));
    color: white;
    padding: 4rem 2rem 2rem 2rem;
    margin-top: 6rem;
`
const StyledA = styled.a`
    color: white;
    text-decoration: none;
`
const StyledUnderline = styled.hr`
    height: 2px;
    background: white;
    border: 0;
    transition: 'all .2s ease-in-out';
`

const Footer = () => {
    const { underlineAnimations, ...underlineHandler } = useUnderline()

    return (
        <StyledFooter>
            <section>
                <SectionTitle centered> Sign up for our weekly newsletter </SectionTitle>

            </section>

            <section>
                <StyledUnderline/>
                <FlexDiv>
                    <section>
                        © { new Date().getFullYear() }, Built by Szymon Paluch, Mockup of Use All Five
                    </section>
                    <StyledA href="mailto:Lorem@placeholder.com" id="foo-1" {...underlineHandler}> 
                        Lorem@placeholder.com 
                        <StyledUnderline style={{ ...underlineClass, ...underlineAnimations[0] }}/> 
                    </StyledA>
                    <StyledA href="tel:+48111111111" id="foo-2" {...underlineHandler}> 
                        +48 111 111 111
                        <StyledUnderline style={{ ...underlineClass, ...underlineAnimations[1] }}/> 
                    </StyledA>
                </FlexDiv>
            </section>
            
            <section>
            </section>
        </StyledFooter>
    );
}

export default Footer;