import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Container = styled.div`
  width: 225px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = () => {
  const data = useStaticQuery(graphql`
      query {
        handLogo: file(relativePath: { eq: "logo/handLogo.png" }) {
          childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        textLogo: file(relativePath: { eq: "logo/textLogo.png" }) {
          childImageSharp {
            fixed(width: 225) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `)
    
  return (
    <Container>
      <div
        style={{ position: "absolute", }} 
        data-sal="flip-right"
        data-sal-duration="600"
        data-sal-easing="easeInSine">
          <Img fixed={ data.textLogo.childImageSharp.fixed } />
      </div>
      <Img fixed={ data.handLogo.childImageSharp.fixed } />
    </Container>
  );
}

export default Logo
