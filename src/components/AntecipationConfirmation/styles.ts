import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    max-width: 100%;
    height: ${open ? '100%' : 0};
    z-index: ${theme.zIndex.modal};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.6);
    align-items: center;
  `}
`

export const Content = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background: ${theme.color.background.neutral.default};
    border-top: ${theme.border.width.thinner} ${theme.border.style.solid}
      ${theme.color.border.neutral.medium};
    display: flex;
    padding: 32px;
    height: ${open ? '300px' : 0};
    flex-direction: column;
    gap: 16px;
    transition: height ease-out 0.3s;
  `}
`

export const Terms = styled.div`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.color.text.neutral.strong};
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
