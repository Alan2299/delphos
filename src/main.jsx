import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#18174e',
    },
    secondary: {
      main: '#0086b7',
    },
    error: {
      main: '#94170e',
    },
  },
})

 import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline/>
          <App />
        </BrowserRouter>
    </ThemeProvider>
    
  </React.StrictMode>,
)
