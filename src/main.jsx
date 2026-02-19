import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MenuProvider } from './components/context/MenuContext'
import { AuthProvider } from './components/context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </AuthProvider>
  </BrowserRouter>
)
