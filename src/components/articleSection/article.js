import React from 'react'
import PropTypes from 'prop-types'
import { gql, useQuery } from '@apollo/client'
import { DOWNLOAD_IMAGE } from '../../graphql/downloadImage'

import styled from 'styled-components'
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

const Article = ({ src, width, className }) => {
    const { loading, error, data } = useQuery(DOWNLOAD_IMAGE, {
        variables: { src, width },
    })

    if (loading) return null;
    if (error) {
        return {error};
    } 
    
    console.log(loading, data)
    const imgData = data.img.childImageSharp.fluid;

    return (
        <BackgroundImage
            Tag="section"
            className={ className }
            fluid={ imgData } >
            <ArticleElement>
                <TextAnimation type="fade">
                    <SectionTitle> 
                        Elit reprehenderit magna laborum esse culpa fugiat ipsum elit labore in. 
                    </SectionTitle>
                </TextAnimation>
                <ArticleContentContainer>
                    <TextAnimation type="fade" delay="600">
                        Et ipsum pariatur reprehenderit est duis duis incididunt laborum consectetur fugiat.
                    </TextAnimation>
                </ArticleContentContainer>
            </ArticleElement>
        </BackgroundImage>
    )
}

Article.propTypes = {
    img: PropTypes.string,
    width: PropTypes.number
}

const StyledArticle = styled(Article)` 
    height: 700px;
    background-size: cover;
`

export default StyledArticle