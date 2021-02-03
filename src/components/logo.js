import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, margin: `7.5rem 3rem`}}>
      <Img 
        fixed={ data.textLogo.childImageSharp.fixed } 
        style={{ position: "absolute", }}
      />
      <div>
        <Img fixed={ data.handLogo.childImageSharp.fixed } />
      </div>
    </div>
  );
}

export default Logo
