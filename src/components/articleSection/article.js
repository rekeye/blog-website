import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

import { SectionTitle } from '../../styles/styled'
import { TextAnimation } from '../animations'

const ArticleElement = styled.article`
    padding: 5rem;
    max-width: 50rem;
    color: white;
`
const ArticleContentContainer = styled.div`
    padding: 2rem 0;
    width: 60%;
`

const Article = (props, { className }) => (
    <BackgroundImage
        Tag="section"
        className={ className }
        fluid={props.img.childImageSharp.fluid} >
        <ArticleElement>
            <TextAnimation type="fade">
                <SectionTitle> 
                        Elit reprehenderit magna laborum esse culpa fugiat ipsum elit labore in. 
                </SectionTitle>
            </TextAnimation>
            <ArticleContentContainer >
                <TextAnimation type="fade" delay="600">
                    <p> 
                        Et ipsum pariatur reprehenderit est duis duis incididunt laborum consectetur fugiat.
                    </p>
                </TextAnimation>
            </ArticleContentContainer>
        </ArticleElement>
    </BackgroundImage>
)

Article.propTypes = {
    img: PropTypes.object
}

const StyledArticle = styled(Article)` 
    height: 70vh;
    background-size: cover;
`

export default StyledArticle