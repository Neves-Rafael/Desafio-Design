import React from 'react'
import { App } from './pages/Home/index.jsx'

import Theme from "./styles/theme"
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
