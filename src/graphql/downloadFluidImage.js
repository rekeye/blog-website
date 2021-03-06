import { gql } from '@apollo/client'

export const DOWNLOAD_FLUID_IMAGE = gql`
query downloadImage($src: String!, $width: Int!){
    img: file(relativePath: {eq: $src}) {
        childImageSharp {
            fluid(maxWidth: $width) {
                aspectRatio
                src
                srcSet
                sizes
            }
        }
    }
}`
