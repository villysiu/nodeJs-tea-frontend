import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MenuProvider } from './components/context/MenuContext'
import { AuthProvider } from './components/context/AuthContext'
import { AlertProvider } from './components/context/AlertContext'
import { CartProvider } from './components/context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AlertProvider>
      <AuthProvider>
        <CartProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </CartProvider>``
      </AuthProvider>
    </AlertProvider>
  </BrowserRouter>
)
