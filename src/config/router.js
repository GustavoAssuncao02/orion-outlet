import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Details from '../pages/Details/Details'
import Location from "../pages/LocationPage/LocationPage"
import Login from '../pages/Login/Login'
import Product from '../pages/Product/Product'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/details" element={< Details />} />
                <Route path="/location" element={< Location />} />
                <Route path="/product" element={< Product />} />
                <Route path="/login-admin" element={< Login />} />
            </Routes>
        </BrowserRouter>

    )
}

export default router