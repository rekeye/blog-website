import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { TextAnimation } from '../animations'

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
const MiniArticleContainer = styled.div`
    width: 25%;
`

const useHover = () => {
    const [ hover, setHover ] = useState(0);
  
    const onMouseEnter = () => setHover(1);
    const onMouseLeave = () => setHover(0);

    const hoverProps =  hover === 1 ? "hovered" : "";
    
    return { hoverProps, onMouseEnter, onMouseLeave }
}

const MiniArticle = (props) => {
    const { hoverProps, ...hoverHandler } = useHover()

    return (
        <MiniArticleContainer { ...hoverHandler }>
            <Img fluid={props.img.childImageSharp.fluid}></Img>

            <TextAnimation type="slide-down">
                <MiniArticleDate hoverProps> 
                    { props.content.date }
                </MiniArticleDate>
                <MiniArticleTitle>
                    { props.content.title }
                </MiniArticleTitle>
            </TextAnimation>
        </MiniArticleContainer>
    )
}

MiniArticle.propTypes = {
    img: PropTypes.object,
    date: PropTypes.string,
    title: PropTypes.string,
}

export default MiniArticle