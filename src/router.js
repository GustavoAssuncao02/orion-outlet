import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/datails" element={< Details />} />
            </Routes>
        </BrowserRouter>

    )
}

export default router