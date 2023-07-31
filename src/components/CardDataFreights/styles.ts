import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 34px;
    right: 16px;
    background-color: ${theme.color.icon.success.default};
    padding: ${theme.padding.km1};
    border-radius: ${theme.border.radius.small};
  `}
`

export const CardContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    gap: ${theme.padding.km4};
    flex-direction: column;
    padding: ${theme.padding.km6} ${theme.padding.km4} ${theme.padding.km6}
      ${theme.padding.km4};
    border: 1px solid ${theme.color.background.neutral.strong};
    border-radius: ${theme.border.radius.default};
  `}
`

export const RouteFreights = styled.div``

export const ValuesFreights = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.km5};
  `}
`
