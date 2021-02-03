import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

import arrow from "../images/right-arrow.svg"

const ArticleElement = styled.article`
    padding: 5rem;
    width: 40%;
    color: white;
`
const ArticleTitle = styled.h2`
    font-size: 2.4em;
`
const ArticleContentContainer = styled.div`
    padding: 2rem 0;
    width: 60%;
`
const FlexDiv = styled.a`
    padding: 0.5rem 1rem 0.5rem 0;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Article = (props) => (
    <BackgroundImage
        Tag="section"
        fluid={props.img.childImageSharp.fluid}
    >
        <ArticleElement>
            <ArticleTitle> Elit reprehenderit magna laborum esse culpa fugiat ipsum elit labore in. </ArticleTitle>
            <ArticleContentContainer>
                <p> Et ipsum pariatur reprehenderit est duis duis incididunt laborum consectetur fugiat. </p>
                <hr/>
                <FlexDiv>
                    <span> View the article </span>
                    <img src={ arrow } alt="right arrow"/>
                </FlexDiv>
            </ArticleContentContainer>
        </ArticleElement>
    </BackgroundImage>
)

Article.propTypes = {
    img: PropTypes.object
}

const StyledArticle = styled(Article)`
    height: 75vh;
    background-size: cover;
    padding: 7rem 5rem;
`

export default StyledArticle