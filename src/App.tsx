import {ThemeProvider} from 'styled-components'
import { TransactionsPage } from './pages'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsPage />
    </ThemeProvider>
  )
}

