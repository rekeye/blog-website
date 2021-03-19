import React from 'react';
import PropTypes from 'prop-types';

export const TextAnimation = ({ el, type, delay, children }) => {
  if ( el === "span" ) {
    return (
      <span 
        data-sal={ type }
        data-sal-delay={ delay }
        data-sal-duration="600"
        data-sal-easing="easeInSine" >
          { children }
      </span>
    )
  } else {
    return (
      <div 
        data-sal={ type }
        data-sal-delay={ delay }
        data-sal-duration="600"
        data-sal-easing="easeInSine" >
          { children }
      </div>
    )
  } 
}

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