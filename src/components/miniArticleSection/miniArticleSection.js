import React from 'react'

import MiniArticle from "./miniArticle"
import { FlexDiv } from "../../styles/styled"

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