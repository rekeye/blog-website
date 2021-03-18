import { gql } from '@apollo/client'

export const DOWNLOAD_IMAGE = gql`
query downloadImage($src: String!, $width: Int!){
    img: file(relativePath: {eq: $src}) {
        childImageSharp {
            fluid(maxWidth: $width) {
                base64
                aspectRatio
                src
                srcSet
                sizes
            }
        }
    }
}`
