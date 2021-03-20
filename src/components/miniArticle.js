import React from 'react'
import PropTypes from 'prop-types'

import Image from "./image"
import styled, { css } from 'styled-components'
import { FlexDiv } from "../styles/styled"

const MiniArticleDate = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;

    ${props => props.hovered && css`
        margin-top: 1.5rem;
    `}
`
const MiniArticleTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`
const MiniArticleContainer = styled.section`
    width: 25%;
`

const MiniArticle = ({ src, width, content }) => (
    <MiniArticleContainer>
        <Image src={ src } width={ width } />

        <MiniArticleDate>
            { content.date }
        </MiniArticleDate>
        <MiniArticleTitle>
            { content.title }
        </MiniArticleTitle>
    </MiniArticleContainer>
)

MiniArticle.propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
    content: PropTypes.object,
}

const MiniArticleSection = () => {
    const miniArticlesContents = [
      {
        date: "01 January 2021",
        title: "Est voluptate sint exercitation."
      },
      {
        date: "23 January 2021",
        title: "Eu labore nulla in amet."
      },
      {
        date: "13 February 2021",
        title: "Elit incididunt do ad ad irure."
      }
    ]

    const miniArticles = []

    for( let i=1; i<4; i++ ) {
        miniArticles.push(
          <MiniArticle 
            key={ `mini-${i}` } 
            src={ `mini${i}.jpg` } 
            width={ 600 }
            content={ miniArticlesContents[i-1] } >
          </MiniArticle>
        )
    }

    return (
        <FlexDiv spaceAround>
            { miniArticles }
        </FlexDiv>
    )
}

export default MiniArticleSection