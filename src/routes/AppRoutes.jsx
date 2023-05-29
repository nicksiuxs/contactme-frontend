import React from 'react'
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import UserRouter from "./UserRoutes"
import LoginClient from '../pages/Client/LoginClient';
import LoginSupplier from '../pages/Supplier/LoginSupplier';
import CreateClient from '../pages/Client/CreateClient';
import CreateSupplier from '../pages/Supplier/CreateSupplier';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login/client" element={<LoginClient />} />
            <Route path="login/supplier" element={<LoginSupplier />} />
            <Route path="create/client" element={<CreateClient />} />
            <Route path="create/supplier" element={<CreateSupplier />} />
            <Route path='/*' element={<PrivateRoutes>
                <UserRouter />
            </PrivateRoutes>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes