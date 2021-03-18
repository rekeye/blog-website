import React from 'react'

import StyledArticle from "./article"

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

export default ArticleSection