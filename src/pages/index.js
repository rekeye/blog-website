import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleTitle from "../components/articleTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <ArticleTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam facilisis elit pretium, gravida ipsum at, fermentum libero. 
      </ArticleTitle>
    </section>

    <div style={{ height: `70vh` }}></div>
  </Layout>
)

export default IndexPage
