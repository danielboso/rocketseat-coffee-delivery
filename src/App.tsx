import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./hooks/useCart"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
