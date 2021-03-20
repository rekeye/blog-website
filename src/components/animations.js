import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TextAnimation = ({ el, type, delay, children }) => (
  el === "span" 
    ? <span 
        data-sal={ type }
        data-sal-delay={ delay }
        data-sal-duration="600"
        data-sal-easing="easeInSine" >
          { children }
      </span> 
    : <div 
        data-sal={ type }
        data-sal-delay={ delay }
        data-sal-duration="600"
        data-sal-easing="easeInSine" >
          { children }
      </div>
)

TextAnimation.propTypes = {
  el: PropTypes.string,
  type: PropTypes.string,
  delay: PropTypes.string,
}
TextAnimation.defaultProps = {
  el: "",
  type: "slide-down",
  delay: "500",
}

//hover animation for links using hook
export const useUnderline = () => {
  const [ underline, setUnderline ] = useState(0)

  const onMouseEnter = (e) => {
      const num = parseInt(e.target.id.substring(4));
      setUnderline(num);
  }

  const onMouseLeave = () => setUnderline(0);

  console.log(underline)

  const underlineAnimations = []
  for(let i=1;i<10;i++) {
      underlineAnimations.push(
          underline === i ? {
              width: `100%`
          } : {
              width: `0`
          }
      )
  }

  return { underlineAnimations, onMouseEnter, onMouseLeave }
}
