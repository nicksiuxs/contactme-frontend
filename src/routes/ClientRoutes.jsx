import React from 'react'
import { Route, Routes } from 'react-router-dom'

const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/client" element={<><h1>Home Client</h1></>} />
        </Routes>
    )
}

export default ClientRoutes