import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SiteMotto } from "../styles/styled"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SiteMotto>About Us</SiteMotto>

    <div style={{padding: "0 5rem"}}>
      <p>Sadly there's nothing here yet</p>

      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
