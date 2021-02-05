import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const MiniArticleDate = styled.div`
    width: 100%;
    margin-top: 6rem;
    text-align: center;
`
const MiniArticleTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`

const MiniArticle = (props) => (
    <div>
        <Img fluid={props.img.childImageSharp.fluid}></Img>
        <MiniArticleDate> General - Feb 4, 2021 </MiniArticleDate>
        <MiniArticleTitle>Deserunt est dolor magna aliquip.</MiniArticleTitle>
    </div>
)

MiniArticle.propTypes = {
    img: PropTypes.object
}

export default MiniArticle