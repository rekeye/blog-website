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

    
  let scrollAnimation = { transform: `rotate(0)`, transition: 'all .8s ease-in-out' }
  const onScroll = () => {
    const scrollLocation = window.scrollY;

    scrollAnimation.transform = 
      `rotate(${scrollLocation*3.6}deg)`;
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
      <Img fixed={ data.textLogo.childImageSharp.fixed } style={{ position: `absolute`, ...scrollAnimation }}/>
      <div>
        <Img fixed={ data.handLogo.childImageSharp.fixed } />
      </div>
    </div>
  );
}

export default Logo
