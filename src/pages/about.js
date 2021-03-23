import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from 'styled-components'
import { SectionTitle, SiteMotto, FlexDiv } from "../styles/styled"
import Image from "../components/image"

const HalfOfSite = styled.section`
  margin: 0 0 0 60%;
  ${props => props.left && css`
    margin: 0 60% 0 0;
  `}
  ${props => props.largerLeft && css`
    margin: 0 40% 0 0;
  `}
`
const ImageHeadline = styled.div`
  margin: -2em 0 -4em 0;
`
const FirstImageVer = styled.div`
  margin: -50em 10em 2em 42.5%;
  width: 800px;
`
const FirstImageHor = styled.div`
  margin: 25em 0 2em 20%;
  width: 600px;
  z-index: 10;
`
const SecondImageVer = styled.div`
  margin: -42.5em 0 0 0;
  width: 700px;
`
const SecondImageHor = styled.div`
  margin: 20em 0 0 60%;
  width: 600px;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SectionTitle about> About Us </SectionTitle>

    <HalfOfSite>
      <h3>Who are you and what do you do?</h3>
      <article>
        <p>
          Eu reprehenderit cillum eiusmod enim labore. Consectetur pariatur laborum dolor velit duis ipsum culpa. Commodo sunt amet veniam exercitation.
        </p>
        <p>
          Sit aliqua ullamco magna ad. Amet deserunt sit dolore veniam laboris. Irure ipsum pariatur ut ipsum nostrud. Enim anim veniam consequat excepteur excepteur exercitation non. Dolore duis ut non eu amet.
        </p>
      </article>
    </HalfOfSite>

    <section>
      <ImageHeadline>
        <SiteMotto noPadding>
          <HalfOfSite left>
            Ad consequat deserunt do occaecat id aliquip. In esse commodo dolore tempor excepteur anim dolore.
          </HalfOfSite>
        </SiteMotto>
      </ImageHeadline>

      <FirstImageHor>
        <Image src="about/hor1.jpg" width={ 600 } imgStyle={{ zIndex: 10 }}/>
      </FirstImageHor>
      <FirstImageVer>
        <Image src="about/vert1.jpg" width={ 800 }/>
      </FirstImageVer>
    </section>

    <HalfOfSite>
      <p>
        Anim anim labore voluptate duis. Excepteur officia ea pariatur excepteur enim et ullamco sint. Laboris eiusmod pariatur duis nisi cupidatat quis aute quis sunt et duis in fugiat. Cillum ex dolore voluptate ea culpa labore sunt sint adipisicing. Laboris commodo officia in magna.
      </p>
    </HalfOfSite>

    <section>
      <SecondImageHor>
        <Image src="about/hor2.jpg" width={ 600 } />
      </SecondImageHor>
      <SecondImageVer>
        <Image src="about/vert2.jpg" width={ 700 } />
      </SecondImageVer>
    </section>

    <HalfOfSite>
      <h3>Elaborate on your roles as cultural communicators.</h3>
      <p>
        Eu reprehenderit cillum eiusmod enim labore. Consectetur pariatur laborum dolor velit duis ipsum culpa. Commodo sunt amet veniam exercitation. Sit aliqua ullamco magna ad. Amet deserunt sit dolore veniam laboris. 
      </p>
    </HalfOfSite>

    
    <SiteMotto>
      <HalfOfSite largerLeft>
        Est ipsum aliqua nulla ad reprehenderit. Aute sunt ullamco pariatur ea non eu. Exercitation tempor laborum veniam commodo adipisicing in esse ex. 
      </HalfOfSite>
    </SiteMotto>

    <FlexDiv spaceAround>
      <div>
        <h1>Strategy</h1>
        
      </div>
      <div>
        <h1>Design</h1>
      </div>
      <div>
        <h1>Technology</h1>
      </div>
    </FlexDiv>
  </Layout>
)

export default SecondPage
