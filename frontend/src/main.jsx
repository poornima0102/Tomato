import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './components/context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>,
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> b361037 (Created project)
)
