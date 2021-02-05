import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import StyledArticle from "./miniArticle"
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

    const miniArticles = []
    for(const value in data) {
        console.log(data[value])
        miniArticles.push(<StyledArticle img={data[value]}></StyledArticle>)
    }

    return (
        <FlexDiv spaceAround>
            { miniArticles }
        </FlexDiv>
    )
}

export default MiniArticleSection