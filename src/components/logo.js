import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const data = useStaticQuery(graphql`
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
    `)

  return (
    <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, margin: `7.5rem 3rem`}}>
      <Img fixed={ data.textLogo.childImageSharp.fixed } style={{ position: `absolute` }}/>
      <div>
        <Img fixed={ data.handLogo.childImageSharp.fixed } />
      </div>
    </div>
  )
}

export default Logo
