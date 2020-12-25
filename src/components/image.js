import React from "react"
import { graphql } from "gatsby"
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

const Image = ({ data }) => {
  const sources = [
    data.handLogo.childImageSharp.fluid,
    data.textLogo.childImageSharp.fluid
  ]

  if (!sources) {
    return <div>Picture not found</div>
  }

  return <Img fluid={sources} />
}

export const query = graphql`
    query {
      handLogo: file(relativePath: { eq: "handLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      textLogo: file(relativePath: { eq: "textLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

export default Image
