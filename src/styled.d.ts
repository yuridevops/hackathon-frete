import 'styled-components'
import theme from '@frete.com/fuel-foundation/fretebras/theme.json'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
