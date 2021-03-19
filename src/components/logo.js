import React from "react"
import { useQuery } from '@apollo/client'
import { DOWNLOAD_FIXED_IMAGE } from '../graphql/downloadFixedImage'

import Img from "gatsby-image"
import styled from 'styled-components'

const Container = styled.div`
  width: 225px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = () => {
  const { loading: textQueryLoading, error: textQueryLoading, data: textQueryLoading } = useQuery(DOWNLOAD_FIXED_IMAGE, {
      variables: { src: "/logo/text.png", width },
  })

  if (loading) return null;
  if (error) return null;
  
  const imgData = data.img.childImageSharp.fluid;
    
  return (
    <Container>
      <div
        style={{ position: "absolute", }} 
        data-sal="flip-right"
        data-sal-duration="600"
        data-sal-easing="easeInSine">
          <Img fixed={ data.textLogo.childImageSharp.fixed } />
      </div>
      <Img fixed={ data.handLogo.childImageSharp.fixed } />
    </Container>
  );
}

export default Logo
