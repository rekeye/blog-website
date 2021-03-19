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
  const { loading: textQueryLoading, error: textQueryError, data: text } = useQuery(DOWNLOAD_FIXED_IMAGE, {
      variables: { src: "logo/text.png", width: 225 },
  })
  const { loading: handQueryLoading, error: handQueryError, data: hand } = useQuery(DOWNLOAD_FIXED_IMAGE, {
    variables: { src: "logo/hand.png", width: 75 },
  })

  if (textQueryLoading || handQueryLoading) return null;
  if (textQueryError) return console.log("error with logo query (text)");
  if (handQueryError) return console.log("error with logo query (hand)");

  console.log(text, hand)

  const imgDataText = text.img.childImageSharp.fixed;
  const imgDataHand = hand.img.childImageSharp.fixed;
    
  return (
    <Container>
      <div style={{ position: "absolute", }} >
          <Img fixed={ imgDataText } />
      </div>
      <Img fixed={ imgDataHand } />
    </Container>
  );
}

export default Logo
