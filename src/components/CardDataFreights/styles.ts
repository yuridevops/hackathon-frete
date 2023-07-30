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
    gap: 16px;
    flex-direction: column;
    padding: 24px 16px 24px 16px;
    border: 1px solid ${theme.color.background.neutral.strong};
    border-radius: ${theme.border.radius.default};
  `}
`

export const RouteFreights = styled.div``

export const ValuesFreights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
