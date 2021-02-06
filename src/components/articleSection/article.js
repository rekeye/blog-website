import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

import arrow from '../../images/right-arrow.svg'
import { SectionTitle, FlexDiv } from '../../styles/styled'
import { TextAnimation } from '../animations'

const ArticleElement = styled.article`
    padding: 5rem;
    width: 40%;
    color: white;
`
const ArticleContentContainer = styled.div`
    padding: 2rem 0;
    width: 60%;
`

const Article = (props) => (
    <BackgroundImage
        Tag="section"
        fluid={props.img.childImageSharp.fluid} >
        <ArticleElement>
            <TextAnimation type="fade">
                <SectionTitle> 
                        Elit reprehenderit magna laborum esse culpa fugiat ipsum elit labore in. 
                </SectionTitle>
            </TextAnimation>
            
            <ArticleContentContainer >
                <TextAnimation type="fade" delay="700">
                    <p> 
                        Et ipsum pariatur reprehenderit est duis duis incididunt laborum consectetur fugiat.
                    </p>
                </TextAnimation>
                <TextAnimation type="slide-right">

                    <hr/>
                    <FlexDiv>
                        <span> 
                                View the article 
                        </span>
                        <img src={ arrow } alt="right arrow"/>
                    </FlexDiv>

                </TextAnimation>
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