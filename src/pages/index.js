import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import ArticleSection from "../components/articleSection/articleSection"
import MiniArticleSection from "../components/miniArticleSection/miniArticleSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { SectionTitle, FlexDiv } from '../styles/styled'

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

const IndexPage = () => (
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

    <ArticleSection></ArticleSection>

    <SectionTitle centered >
        <TextAnimation> Our </TextAnimation> 
        <TextAnimation type="slide-down"> Thoughts </TextAnimation>
    </SectionTitle>

    <MiniArticleSection></MiniArticleSection>
  </Layout>
)

export default IndexPage
