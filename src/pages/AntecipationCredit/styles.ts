import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    margin-top: 120px;
    padding: ${theme.spacing.km0} ${theme.spacing.km6} ${theme.spacing.km0}
      ${theme.spacing.km6};
  `}
`

export const CardsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacing.km4} 0;
    gap: ${theme.padding.km4};
  `}
`
