import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import StyledArticle from "../components/article"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SiteMotto = styled.h2`
  width: 60%;
  padding: 4rem;
  font-size: 2.6em;
`

const IndexPage = () => {
  //query images for articles
  const images = useStaticQuery(graphql`
    query {
        firstArticle: file(relativePath: { eq: "1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        secondArticle: file(relativePath: { eq: "2.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
              }
          }
        }
        thirdArticle: file(relativePath: { eq: "3.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
              }
          }
        }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SiteMotto>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam facilisis elit pretium, gravida ipsum at, fermentum libero. 
      </SiteMotto>
      
      <StyledArticle img={images.firstArticle}></StyledArticle>
      <StyledArticle img={images.secondArticle}></StyledArticle>
      <StyledArticle img={images.thirdArticle}></StyledArticle>
    </Layout>
  )
}

export default IndexPage
