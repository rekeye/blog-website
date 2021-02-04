import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import StyledArticle from "../components/article"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { SectionTitle } from '../styles/styled'

const SiteMotto = styled.h2`
  padding: 4rem;
  font-size: 2.6em;
`
const TextAnimation = (props) => (
  <div 
    style={{ paddingRight: "0.25em" }}
    data-sal={ props.type || "slide-up" }
    data-sal-delay={ props.delay || "500"}
    data-sal-duration="600"
    data-sal-easing="easeInSine" >
      { props.children }
  </div>
)

const IndexPage = () => {
  //query images for articles
  const images = useStaticQuery(graphql`
    query {
        firstArticle: file(relativePath: { eq: "1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        secondArticle: file(relativePath: { eq: "2.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
              }
          }
        }
        thirdArticle: file(relativePath: { eq: "3.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
              }
          }
        }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SiteMotto >
          <TextAnimation delay="400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </TextAnimation>
          <TextAnimation>
              Nullam facilisis elit pretium, gravida ipsum at,
          </TextAnimation>
          <TextAnimation delay="600">
              fermentum libero. 
          </TextAnimation>
      </SiteMotto>
      
      <StyledArticle img={images.firstArticle}></StyledArticle>
      <StyledArticle img={images.secondArticle}></StyledArticle>
      <StyledArticle img={images.thirdArticle}></StyledArticle>

      <SectionTitle centered >
          <TextAnimation> Our </TextAnimation> 
          <TextAnimation type="slide-down"> Thoughts </TextAnimation>
      </SectionTitle>

    </Layout>
  )
}

export default IndexPage
