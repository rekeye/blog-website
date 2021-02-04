import styled, { css } from 'styled-components'


export const SectionTitle = styled.h2`
    font-size: 2.4em;

    ${props => props.centered && css`
        font-size: 2.8em;
        display: flex;
        justify-content: center;
  `}
`