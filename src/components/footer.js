import React from "react"

import Nav, { StyledLink } from "./nav"

import styled from 'styled-components'
import { SectionTitle, FlexDiv } from '../styles/styled'
// import { Link } from "gatsby"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useUnderline } from "./animations"

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
`
const StyledForm = styled.form`
    width: 100%;
    padding: 1rem 0 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const StyledButton = styled.input`
    font-family: inherit;
    font-size: 1.3em;
    background: transparent;
    border: 0;
    color: white;
`

const Footer = () => {
    const { underlineAnimations, ...underlineHandler } = useUnderline()

    return (
        <StyledFooter id="contact">
            <section>
                <SectionTitle centered> Sign up for our weekly newsletter </SectionTitle>
                <StyledForm>
                    <div className="group">
                        <input type="text" name="email" id="email" className="email" required />
                        <label htmlFor="email" className="label"> Email address: </label>
                        <div className="bar"></div>
                    </div>
                    <StyledButton type="button" value="Join the club"/>
                </StyledForm>
            </section>

            <FlexDiv>
                <StyledLink to="/">
                        Use all five
                </StyledLink>

                <Nav footer white/>
            </FlexDiv>

            <section>
                <StyledUnderline/>
                <FlexDiv fontStyle>
                    <section>
                        © { new Date().getFullYear() }, Built by Szymon Paluch, Mockup of Use All Five
                    </section>
                    <StyledA href="mailto:Lorem@placeholder.com" id="foo-7" {...underlineHandler}> 
                        Lorem@placeholder.com 
                        <StyledUnderline style={{ transition: 'all .2s ease-in-out', ...underlineAnimations[6] }}/> 
                    </StyledA>
                    <StyledA href="tel:+48111111111" id="foo-8" {...underlineHandler}> 
                        +48 111 111 111
                        <StyledUnderline style={{  transition: 'all .2s ease-in-out', ...underlineAnimations[7] }}/> 
                    </StyledA>
                </FlexDiv>
            </section>
        </StyledFooter>
    );
}

export default Footer;