import React from "react"

import ArticleSection from "../components/articleSection/articleSection"
import MiniArticleSection from "../components/miniArticleSection/miniArticleSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { SectionTitle, SiteMotto } from '../styles/styled'
import { TextAnimation } from '../components/animations'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <SiteMotto>
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

        <ArticleSection />

        <SectionTitle centered id="thoughts">
            <TextAnimation el="span"> Our </TextAnimation>
            <TextAnimation el="span" type="slide-down"> Thoughts </TextAnimation>
        </SectionTitle>

        <MiniArticleSection />
    </Layout>
)

export default IndexPage
