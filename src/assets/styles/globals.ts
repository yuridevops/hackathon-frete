import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: ${({ theme }) => theme.spacing.km0};
    padding: ${({ theme }) => theme.spacing.km0};
    font-family: ${({ theme }) => theme.font.family.body};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.base};
    box-sizing: border-box;
   }

   input[type=number]::-webkit-inner-spin-button, 
   input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
     margin: 0; 
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

   body, html, #root  {
    height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 4px;
    opacity: 0.32;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: ${({ theme }) => theme.border.radius.circle};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.border.neutral.medium}; 
    border-radius: ${({ theme }) => theme.border.radius.large};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.border.neutral.medium}; 
  }

  .grid-container.sc-fuel-grid-container-h {
    margin: 0 !important;
  }
`
