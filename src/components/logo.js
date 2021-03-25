import React from "react"

import styled from 'styled-components'

import Hand from "../svg/logoHand.inline.svg"
import Text from "../svg/logoText.inline.svg"


const Container = styled.div`
  width: 225px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = () => (
  <Container>
    <div style={{ position: "absolute", }} >
        <Text />
    </div>
    <Hand />
  </Container>
)

export default Logo
