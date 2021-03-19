import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { DOWNLOAD_FLUID_IMAGE } from '../../graphql/downloadFluidImage'

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { SectionTitle } from '../../styles/styled'
import { TextAnimation } from '../animations'

const ArticleContentContainer = styled.div`
    padding: 2rem 0;
    width: 60%;
`

const Article = ({ src, width, className }) => {
    const { loading, error, data } = useQuery(DOWNLOAD_FLUID_IMAGE, {
        variables: { src, width },
    })

    if (loading) return null;
    if (error) return {error};
    
    const imgData = data.img.childImageSharp.fluid;

    return (
        <BackgroundImage
            Tag="section"
            className={ className }
            fluid={ imgData } >
            <SectionTitle> 
                Elit reprehenderit magna laborum esse culpa fugiat ipsum elit labore in. 
            </SectionTitle>
            <ArticleContentContainer>
                    Et ipsum pariatur reprehenderit est duis duis incididunt laborum consectetur fugiat.
            </ArticleContentContainer>
        </BackgroundImage>
    )
}

Article.propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
    className: PropTypes.string,
}

const StyledArticle = styled(Article)` 
    height: 700px;
    background-size: cover;
    padding: 8rem 60vw 8rem 5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export default StyledArticle