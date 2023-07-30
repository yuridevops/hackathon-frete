import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    gap: ${theme.padding.km2};
    flex-direction: column;
    margin: 16px 0px 24px 0px;

    justify-content: space-between;
    align-items: center;
  `}
`
export const FullAdvance = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 40px;
    background: ${({ theme }) => theme.color.background.neutral.weak};
    padding: 16px 8px 16px 8px;
    border-radius: ${({ theme }) => theme.border.radius.default};
  `}
`
export const BalanceReceivable = styled.div`
  display: flex;
  gap: 8px;
`
