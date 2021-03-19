import { gql } from '@apollo/client'

export const DOWNLOAD_FIXED_IMAGE = gql`
query downloadImage($src: String!, $width: Int!){
    img: file(relativePath: {eq: $src}) {
        childImageSharp {
            fixed(width: $width) {
                width
                height
                src
                srcSet
            }
        }
    }
}`
