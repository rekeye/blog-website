import React from 'react'
import PropTypes from 'prop-types'
import { gql, useQuery } from '@apollo/client'

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { SectionTitle } from '../styles/styled'
import { TextAnimation } from './animations'

const ArticleElement = styled.article`
    padding: 5rem;
    max-width: 50rem;
    color: white;
`
const ArticleContentContainer = styled.div`
    padding: 2rem 0;
    width: 60%;
`
const DOWNLOAD_IMAGE = gql`
query downloadImage($src: String!, $width: Int!){
    img: file(relativePath: {eq: $src}) {
        childImageSharp {
            fluid(maxWidth: $width) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
}`

const Article = (props, { className }) => {
    const { loading, error, data } = useQuery(DOWNLOAD_IMAGE, {
        variables: { src: "1.jpg", width: 1920 },
    })

    if (loading) return null;
    if (error) {
        console.log(error);
        return null;
    } 
    
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
    img: PropTypes.string
}

const StyledArticle = styled(Article)` 
    height: 700px;
    background-size: cover;
`

const ArticleSection = () => {
    const articles = []
    for( let i=1; i<4; i++ ) {
        articles.push( 
            <StyledArticle key={i} src={`${i}.img`}> </StyledArticle> 
        );
    }

    return (
        <section>
            { articles }
        </section>
    )
}

export default ArticleSection;