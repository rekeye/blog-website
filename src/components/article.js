import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

import arrow from '../images/right-arrow.svg'
import { SectionTitle } from '../styles/styled'

const ArticleElement = styled.article`
    padding: 5rem;
    width: 40%;
    color: white;
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
        fluid={props.img.childImageSharp.fluid} >
        <ArticleElement>
            <SectionTitle
                data-sal="fade"
                data-sal-delay="500"
                data-sal-duration="600"
                data-sal-easing="easeInSine" > 
                    Elit reprehenderit magna laborum esse culpa fugiat ipsum elit labore in. 
            </SectionTitle>
            <ArticleContentContainer
                data-sal="fade"
                data-sal-delay="700"
                data-sal-easing="easeInSine" >
                <p> 
                    Et ipsum pariatur reprehenderit est duis duis incididunt laborum consectetur fugiat.
                </p>
                <hr />
                <FlexDiv>
                    <span  
                        data-sal="slide-down"
                        data-sal-delay="600"
                        data-sal-duration="600"
                        data-sal-easing="easeInSine" > 
                            View the article 
                    </span>
                    <img 
                        src={ arrow } 
                        alt="right arrow" 
                        data-sal="slide-right"
                        data-sal-delay="600"
                        data-sal-duration="600"
                        data-sal-easing="easeInSine" />
                </FlexDiv>
            </ArticleContentContainer>
        </ArticleElement>
    </BackgroundImage>
)

Article.propTypes = {
    img: PropTypes.object
}

const StyledArticle = styled(Article)`
    height: 80vh;
    background-size: cover;
    padding: 7rem 5rem;
`

export default StyledArticle