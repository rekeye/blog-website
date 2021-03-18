import React from "react"

import ArticleSection from "../components/articleSection/article"
import MiniArticleSection from "../components/miniArticleSection/miniArticle"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { SectionTitle, SiteMotto } from '../styles/styled'
import { TextAnimation } from '../components/animations'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/__graphql',
  cache: new InMemoryCache()
})

const IndexPage = () => (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
)

export default IndexPage
