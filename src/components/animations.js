import React from 'react';

export const TextAnimation = (props) => {
  if (props.el === "span") return (
    <span 
      data-sal={ props.type || "slide-down" }
      data-sal-delay={ props.delay || "500"}
      data-sal-duration="600"
      data-sal-easing="easeInSine" >
        { props.children }
    </span>
  ) 
  return (
    <div 
      data-sal={ props.type || "slide-up" }
      data-sal-delay={ props.delay || "500"}
      data-sal-duration="600"
      data-sal-easing="easeInSine" >
        { props.children }
    </div>
  )
}