import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 100;
    width: 100%;
    height: 80px;
    display: flex;
    padding-left: ${theme.padding.km6};
    padding-right: ${theme.padding.km6};

    justify-content: space-between;
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
