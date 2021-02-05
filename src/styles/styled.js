import styled, { css } from 'styled-components'


export const SectionTitle = styled.h2`
    font-size: 2.4em;

    ${props => props.centered && css`
        font-size: 2.8em;
        display: flex;
        justify-content: center;
  `}
`
export const FlexDiv = styled.a`
    padding: 0.5rem 1rem;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${props => props.spaceAround && css`
        justify-content: space-around;
  `}
`