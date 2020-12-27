import React, { useState } from "react"
import { Link } from "gatsby"

const navClass = {
    height: `6rem`, 
    width: `100%`, 
    padding: `0 4rem`,
    display: `flex`, 
    alignItems: `center`,
    justifyContent: `flex-end`
}
const linkClass = {
    fontSize: `1.3em`,
    color: `black`, 
    textDecoration: `none`,
    margin: `0 1.2rem`
}
const underlineClass = {
    height: `2px`,
    background: `#000`,
    border: 0,
    transition: 'all .2s ease-in-out',
}

//hover animation for links using hook
const useUnderline = () => {
    const [ underline, setUnderline ] = useState(0)
  
    const onMouseEnter = (e) => {
        const num = parseInt(e.target.id.substring(4));
        setUnderline(num);
    }
  
    const onMouseLeave = () => {
        setUnderline(0);
    }
  
    const underlineAnimations = []
    for(let i=1;i<4;i++) {
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

const Nav = () => {
    const { underlineAnimations, ...underlineProps} = useUnderline()

    return (
        <nav style={navClass}>
            <Link id="nav-1" to="/thoughts" style={ linkClass } {...underlineProps}>
                Thoughts 
                <hr style={{ ...underlineClass, ...underlineAnimations[0] }}/> 
            </Link>
            <Link id="nav-2" to="/about" style={ linkClass } {...underlineProps}> 
                About 
                <hr style={{ ...underlineClass, ...underlineAnimations[1] }}/> 
            </Link>
            <Link id="nav-3" to="/contact" style={ linkClass } {...underlineProps}> 
                Contact us 
                <hr style={{ ...underlineClass, ...underlineAnimations[2] }}/> 
            </Link>
        </nav>
    )
}

export default Nav