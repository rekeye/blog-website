import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from 'styled-components'
import { SectionTitle, SiteMotto } from "../styles/styled"
import Image from "../components/image"

const InfoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const HalfOfSite = styled.div`
  margin: 0 0 0 60%;
  ${props => props.left && css`
    margin: 0 60% 0 0;
  `}
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

    <section>
      <SiteMotto noPadding>
        <HalfOfSite left>
          Ad consequat deserunt do occaecat id aliquip. In esse commodo dolore tempor excepteur anim dolore.
        </HalfOfSite>
      </SiteMotto>

      <Image src="about/vert1.jpg" width={ 800 }/>

    </section>

    <p>
      <HalfOfSite>
        Anim anim labore voluptate duis. Excepteur officia ea pariatur excepteur enim et ullamco sint. Laboris eiusmod pariatur duis nisi cupidatat quis aute quis sunt et duis in fugiat. Cillum ex dolore voluptate ea culpa labore sunt sint adipisicing. Laboris commodo officia in magna.
      </HalfOfSite>
    </p>

  </Layout>
)

export default SecondPage
