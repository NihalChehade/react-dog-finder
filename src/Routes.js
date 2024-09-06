import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/dogs" element={<Soda />} />
                    <Route path="/dogs/:name" element={<Chips />} />
                    <Route path="*" Navigate={'/dogs'} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routes