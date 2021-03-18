import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { useStaticQuery, graphql } from "gatsby" //to be changed

import { TextAnimation } from 'animations'
import { FlexDiv } from "../styles/styled"

const MiniArticleDate = styled.div`
    width: 100%;
    margin-top: 6rem;
    text-align: center;

    ${props => props.hovered && css`
        margin-top: 4rem;
    `}
`
const MiniArticleTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`
const MiniArticleContainer = styled.section`
    width: 25%;
`

const MiniArticle = (props) => (
    <MiniArticleContainer>
        <Img fluid={props.img.childImageSharp.fluid}></Img>

        <TextAnimation type="slide-down">
            <MiniArticleDate>
                { props.content.date }
            </MiniArticleDate>
            <MiniArticleTitle>
                { props.content.title }
            </MiniArticleTitle>
        </TextAnimation>
    </MiniArticleContainer>
)

MiniArticle.propTypes = {
    img: PropTypes.object,
    date: PropTypes.string,
    title: PropTypes.string,
}

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