import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ArticleSectionWrapper = styled.section`
    height: 800px;
`

const Article = (props) => (
    <ArticleSectionWrapper>
        <Img 
            fluid={ props.img.childImageSharp.fluid } 
            style={{ height: "100%", zIndex: -10 }}
            imgStyle={{ objectFit: "cover" }}
        />
        <article>

        </article>
    </ArticleSectionWrapper>
)

Article.propTypes = {
    img: PropTypes.object
}

export default Article