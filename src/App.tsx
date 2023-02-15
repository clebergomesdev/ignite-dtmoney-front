import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts'
import { TransactionsPage } from './pages'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <TransactionsPage />
      </TransactionProvider>
    </ThemeProvider>
  )
}
