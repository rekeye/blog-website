import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
      query {
        handLogo: file(relativePath: { eq: "handLogo.png" }) {
          childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        textLogo: file(relativePath: { eq: "textLogo.png" }) {
          childImageSharp {
            fixed(width: 225) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

  let scrollAnimation = { position: `absolute`, transform: `rotate(0)`, transition: 'all .8s ease-in-out' }
  const onScroll = () => {
    const scrollLocation = window.scrollY;

    scrollAnimation.transform = 
      `rotate(${scrollLocation*1.8}deg)`;
    if(scrollLocation>180 && scrollAnimation.display !== `none`) {
      scrollAnimation.display = `none`
    } else if(scrollLocation<=180 && scrollAnimation.display !== `block`) {
      scrollAnimation.display = `block`
    }
    console.log(scrollAnimation);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    //cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (
    <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, margin: `7.5rem 3rem`}}>
      <Img fixed={ data.textLogo.childImageSharp.fixed } style={scrollAnimation}/>
      <div>
        <Img fixed={ data.handLogo.childImageSharp.fixed } />
      </div>
    </div>
  );
}

export default Logo
