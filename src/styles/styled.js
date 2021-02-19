import styled, { css } from 'styled-components'


export const SectionTitle = styled.h2`
    font-size: 2.4em;

    ${props => props.centered && css`
        font-size: 2.8em;
        text-align: center;
  `}
`
export const FlexDiv = styled.div`
    padding: 0.5rem 1rem;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${props => props.spaceAround && css`
        justify-content: space-around;
        align-items: flex-start;
  `}
`

export const SiteMotto = styled.h2`
  padding: 4rem;
  font-size: 2.6em;
`