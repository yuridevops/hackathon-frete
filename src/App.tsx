import { ThemeProvider } from 'styled-components'
import { AntecipationCredit } from './pages/AntecipationCredit'
import fuelTokens from '@frete.com/fuel-foundation/fretebras/theme.json'
import GlobalStyle from './assets/styles/globals'
import { Header } from './components/Header'
import isMobile from 'is-mobile'
import AcessDesktop from './components/AcessDesktop'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  if (!isMobile()) {
    return (
      <ThemeProvider theme={fuelTokens}>
        <GlobalStyle />
        <AcessDesktop />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={fuelTokens}>
      <GlobalStyle />
      <Header />
      <AntecipationCredit />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
