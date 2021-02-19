import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import StyledArticle from "./article"

const ArticleSection = () => {
    const data = useStaticQuery(graphql`
    {
        first: file(relativePath: {eq: "1.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
            }
            }
        }
        second: file(relativePath: {eq: "2.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
            }
            }
        }
        third: file(relativePath: {eq: "3.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
            }
            }
        }
    }
    `)
    const articles = []
    for(const value in data) {
      articles.push(<StyledArticle key={value} img={data[value]}></StyledArticle>)
    }

    return (
        <section>
            { articles }
        </section>
    )
}

export default ArticleSection