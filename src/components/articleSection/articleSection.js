import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import StyledArticle from "./article"

const ArticleSection = () => {
    const data = useStaticQuery(graphql`
    {
        first: file(relativePath: {eq: "1.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        second: file(relativePath: {eq: "2.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        third: file(relativePath: {eq: "3.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
            }
            }
        }
    }
    `)
    console.log(data)
    const articles = []
    for(const value in data) {
      console.log(data[value])
      articles.push(<StyledArticle key={value} img={data[value]}></StyledArticle>)
    }

    return (
        <section>
            { articles }
        </section>
    )
}

export default ArticleSection