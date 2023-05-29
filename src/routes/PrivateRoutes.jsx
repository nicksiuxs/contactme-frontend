import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const user = useSelector((state) => state.user)

    return (
        user.email ? children : <Navigate to="/" />
    )
}

export default PrivateRoutes