import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          handLogo: file(relativePath: { eq: "handLogo.png" }) {
            childImageSharp {
              fixed(width: 75) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          textLogo: file(relativePath: { eq: "textLogo.png" }) {
            childImageSharp {
              fixed(width: 225) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => 
        <div>
          <Img fixed={ data.textLogo.childImageSharp.fixed } />
          <div style={{ position: `relative`, top: `50%`, left: `50%` }} >
            <Img fixed={ data.handLogo.childImageSharp.fixed } />
          </div>
        </div>
      }
    />
  )
}

export default Logo
