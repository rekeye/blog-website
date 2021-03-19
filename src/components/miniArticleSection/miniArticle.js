import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { DOWNLOAD_FLUID_IMAGE } from '../../graphql/downloadFluidImage'

import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

const MiniArticleDate = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;

    ${props => props.hovered && css`
        margin-top: 1.5rem;
    `}
`
const MiniArticleTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`
const MiniArticleContainer = styled.section`
    width: 25%;
`

const MiniArticle = ({ src, width, content }) => {
    const { loading, error, data } = useQuery(DOWNLOAD_FLUID_IMAGE, {
        variables: { src, width },
    })

    if (loading) return null;
    if (error) return {error};
    
    const imgData = data.img.childImageSharp.fluid;

    return (
        <MiniArticleContainer>
            <Img fluid={ imgData }></Img>
    
            <MiniArticleDate>
                { content.date }
            </MiniArticleDate>
            <MiniArticleTitle>
                { content.title }
            </MiniArticleTitle>
        </MiniArticleContainer>
    )
}

MiniArticle.propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
    content: PropTypes.object,
}

export default MiniArticle