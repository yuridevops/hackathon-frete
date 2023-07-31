import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    gap: ${theme.padding.km2};
    flex-direction: column;
    margin: ${theme.padding.km4} 0px ${theme.padding.km6} 0px;
    justify-content: space-between;
    align-items: center;
  `}
`
export const FullAdvance = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.padding.km2};
    height: 40px;
    background: ${({ theme }) => theme.color.background.neutral.weak};
    padding: ${theme.padding.km4} ${theme.padding.km2} ${theme.padding.km4}
      ${theme.padding.km2};
    border-radius: ${({ theme }) => theme.border.radius.default};
  `}
`
export const BalanceReceivable = styled.div`
  display: flex;
  gap: 8px;
`
