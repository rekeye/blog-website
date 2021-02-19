import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import MiniArticle from "./miniArticle"
import { FlexDiv } from "../../styles/styled"

const MiniArticleSection = () => {
    const data = useStaticQuery(graphql`
        {
          first: file(relativePath: {eq: "mini1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          second: file(relativePath: {eq: "mini2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          third: file(relativePath: {eq: "mini3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `)
    const miniArticlesContents ={
      first: {
        date: "01 January 2021",
        title: "Est voluptate sint exercitation."
      },
      second: {
        date: "23 January 2021",
        title: "Eu labore nulla in amet."
      },
      third: {
        date: "13 February 2021",
        title: "Elit incididunt do ad ad irure."
      }
    }

    const miniArticles = []

    for(const [key, value] of Object.entries(data)) {
        miniArticles.push(
          <MiniArticle 
            key={key} 
            img={value} 
            content={miniArticlesContents[key]} >
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