import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Menuitem from "./components/Menuitem"
import Login from './components/auth/Login'
import Profile from './components/user/Profile'
// import Order from "./components/Order"
import NavigationBar from "./components/navbar/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menuitem />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route
          path="/secret" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>

          }
        />

      

      </Routes>
    </>
  )
}

export default App
