import styled, { css } from 'styled-components'


export const SectionTitle = styled.h2`
    font-size: 2.4em;
    padding-top: 4rem;

    ${props => props.about && css`
        font-size: 3.2em;
        padding: 9rem 0 4.5rem 0;
    `}

    ${props => props.centered && css`
        font-size: 2.8em;
        text-align: center;
    `}
`
export const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${props => props.fontStyle && css`
        padding: 0.5rem 1rem;
        font-size: 1.2em;
    `}
    ${props => props.spaceAround && css`
        justify-content: space-around;
        align-items: flex-start;
    `}
`
export const SiteMotto = styled.h2`
  padding: 9rem 0;
  font-size: 2.6em;
`