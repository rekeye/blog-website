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
                ...GatsbyImageSharpFluid
              }
            }
          }
          second: file(relativePath: {eq: "mini2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          third: file(relativePath: {eq: "mini3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `)

    const miniArticles = []
    for(const value in data) {
        console.log(data[value])
        miniArticles.push(<MiniArticle key={value} img={data[value]}></MiniArticle>)
    }

    return (
        <FlexDiv spaceAround>
            { miniArticles }
        </FlexDiv>
    )
}

export default MiniArticleSection