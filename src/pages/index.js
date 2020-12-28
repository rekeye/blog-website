import React from "react"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledSection = styled.section`
background: #222;
height: 60%;
width: 100%;
`
const SiteMotto = styled.h2`
width: 60%;
padding: 0 4rem;
font-size: 2.6em;
`

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <SiteMotto>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam facilisis elit pretium, gravida ipsum at, fermentum libero. 
      </SiteMotto>

      <StyledSection></StyledSection>

      <div style={{ height: `70vh` }}></div>
    </Layout>
)

export default IndexPage
