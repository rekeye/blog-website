import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { SectionTitle } from "../styles/styled"

const InfoSection = styled.section`
  width: 100%;
  text-align: right;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SectionTitle about> About Us </SectionTitle>

    <InfoSection>
      asas
    </InfoSection>

  </Layout>
)

export default SecondPage
