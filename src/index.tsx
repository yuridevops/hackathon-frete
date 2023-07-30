import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './assets/styles/globals'

import { ThemeProvider } from 'styled-components'
import fuelTokens from '@frete.com/fuel-foundation/fretebras/theme.json'
import { Header } from './components/Header'

import '@frete.com/fuel-fonts/satoshi/fontface.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={fuelTokens}>
      <GlobalStyle />
      <Header />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
