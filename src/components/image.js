import React from "react"
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { DOWNLOAD_FLUID_IMAGE } from '../graphql/downloadFluidImage'

import Img from "gatsby-image"

const Image = ({ src, width }) => {
    const { loading, error, data } = useQuery(DOWNLOAD_FLUID_IMAGE, {
        variables: { src, width },
    })

    if (loading) return null;
    if (error) return null;
    
    const imgData = data.img.childImageSharp.fluid;

    return (
        <Img fluid={ imgData } />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
}

export default Image;