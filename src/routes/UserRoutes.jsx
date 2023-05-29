import React from 'react'
import { useSelector } from 'react-redux'
import ClientRoutes from './ClientRoutes'
import SupplierRoutes from './SupplierRoutes'

const UserRoutes = () => {

    const user = useSelector((state) => state.user)
    return (
        <>
            {
                user.type === 1 ? <ClientRoutes /> : <SupplierRoutes />
            }
        </>
    )
}

export default UserRoutes