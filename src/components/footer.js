import React from "react"

const Footer = (props) => (
    <footer style={{ padding: `2rem 4rem` }}>
        
        © { new Date().getFullYear() }, Built by Szymon Paluch, Mockup of Use All Five
    </footer>
);

const StyledFooter = styled(Footer)

export default StyledFooter;