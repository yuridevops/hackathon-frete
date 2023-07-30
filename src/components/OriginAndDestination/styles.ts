import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.padding.km2};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.padding.km3};
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
  `}
`
export const TravelIcon = styled.div`
  ${({ theme }) => css`
    width: 7px;
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.km1};
    align-items: center;
  `}
`

export const Circle = styled.div`
  ${({ theme }) => css`
    height: 7px;
    width: 7px;
    border: 1px solid ${theme.color.icon.neutral.weak};
    border-radius: ${theme.border.radius.circle};
  `}
`

export const Square = styled.div`
  ${({ theme }) => css`
    height: 7px;
    width: 7px;
    border: 1px solid ${theme.color.icon.neutral.weak};
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 22px;
    background-color: ${theme.color.icon.neutral.weak};
  `}
`
