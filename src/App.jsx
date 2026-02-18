import { Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import Menuitem from "./components/Menuitem"
// import Order from "./components/Order"
import NavigationBar from "./components/Navbar"


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menuitem />} />
        {/* <Route path="/order" element={<Order />} /> */}
      </Routes>
    </>
  )
}

export default App
