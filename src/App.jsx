import React from 'react'

import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Menuitem from "./components/Menuitem"
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Profile from './components/user/Profile'
// import Order from "./components/Order"
import NavigationBar from "./components/navbar/Navbar"
import AlertBar from "./components/navbar/AlertBar"
import ProtectedRoute from "./components/routes/ProtectedRoute"
import RedirectIfAuth from "./components/routes/RedirectIfAuth"


function App() {

  return (
    <>
      <NavigationBar />
      <AlertBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menuitem />} />
        <Route path="/login" 
          element={
            <RedirectIfAuth>
              <Login />
            </RedirectIfAuth>
          } 
        />
        <Route path="/signup" 
          element={
            <RedirectIfAuth>
              <Signup />
            </RedirectIfAuth>
          } 
        />
        <Route
          path="/profile" 
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
