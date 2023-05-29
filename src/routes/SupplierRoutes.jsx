import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeSupplier from '../pages/Supplier/HomeSupplier'

const SupplierRoutes = () => {
    return (
        <Routes>
            <Route path="/supplier" element={<HomeSupplier />} />
        </Routes>
    )
}

export default SupplierRoutes