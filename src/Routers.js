import React from 'react'
import { Routes, Route } from 'react-router-dom'
//adding pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Contact from './pages/ContactUs/Contact'
import Product from './pages/Product/Product'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/product/:id' element={<Product />} />
            </Routes>
        </div>
    )
}

export default Routers