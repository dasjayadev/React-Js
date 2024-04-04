import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Contacts from "./components/Contacts"
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Products/>}></Route>  
          <Route path="/contact" element={<Contacts/>}></Route>
          <Route path="/cart" element = {<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App