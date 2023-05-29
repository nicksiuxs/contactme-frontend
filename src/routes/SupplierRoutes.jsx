import React from 'react'
import { Route, Routes } from 'react-router-dom'

const SupplierRoutes = () => {
    return (
        <Routes>
            <Route path="/supplier" element={<><h1>Home Supplier</h1></>} />
        </Routes>
    )
}

export default SupplierRoutes