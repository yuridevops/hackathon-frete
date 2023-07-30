import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${theme.border.width.thinner} ${theme.border.style.solid}
      ${theme.color.border.neutral.medium};
  `}
`

export const ArrowLeftWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`
