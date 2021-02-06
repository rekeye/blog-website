import React from 'react';

export const TextAnimation = (props) => (
    <div 
      style={{ paddingRight: "0.25em" }}
      data-sal={ props.type || "slide-up" }
      data-sal-delay={ props.delay || "500"}
      data-sal-duration="600"
      data-sal-easing="easeInSine" >
        { props.children }
    </div>
)