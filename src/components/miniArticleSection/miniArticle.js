import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const MiniArticle = (props) => (
    <div>
        <Img fluid={props.img.childImageSharp.fluid}></Img>
        <span> General - Feb 4, 2021 </span>
        <h2>Deserunt est dolor magna aliquip.</h2>
    </div>
)

MiniArticle.propTypes = {
    img: PropTypes.object
}

const StyledMiniArticle = styled(MiniArticle)`
    text-align: center;
`

export default StyledMiniArticle