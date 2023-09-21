import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart/Cart'
import ProductCard from '../Components/Products/ProductCard'
import Store from '../Pages/Store/Store'
import Checkout from '../Pages/Cart/Checkout'
import SignUp from '../Pages/SignUp'



function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='store' element={<Store />}/>
      <Route path='products/:id' element={<ProductCard />}/>
      <Route path='cart' element={<Cart />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='checkout' element={<Checkout />}/>
    </Routes>
  )
}

export default Routers
