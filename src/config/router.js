import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Details from '../pages/Details/Details'
function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/details" element={< Details />} />
            </Routes>
        </BrowserRouter>

    )
}

export default router