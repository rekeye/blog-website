import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1 style={{ width: `55%` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam facilisis elit pretium, gravida ipsum at, fermentum libero. 
      </h1>
    </section>

    <div style={{ height: `70vh` }}></div>
  </Layout>
)

export default IndexPage
