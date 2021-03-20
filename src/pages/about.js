import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { SectionTitle } from "../styles/styled"

const InfoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const HalfOfSite = styled.div`
  margin: 0 0 0 50%;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SectionTitle about> About Us </SectionTitle>

    <InfoSection>
      <HalfOfSite>
        <h3>Who are you and what do you do?</h3>
        <p>
          <p>
            Eu reprehenderit cillum eiusmod enim labore. Consectetur pariatur laborum dolor velit duis ipsum culpa. Commodo sunt amet veniam exercitation.
          </p>
          <p>
            Sit aliqua ullamco magna ad. Amet deserunt sit dolore veniam laboris. Irure ipsum pariatur ut ipsum nostrud. Enim anim veniam consequat excepteur excepteur exercitation non. Dolore duis ut non eu amet.
          </p>
        </p>
      </HalfOfSite>
    </InfoSection>

  </Layout>
)

export default SecondPage
