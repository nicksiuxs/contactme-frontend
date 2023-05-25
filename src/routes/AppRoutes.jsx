import React from 'react'
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import UserRouter from "./UserRoutes"
import LoginClient from '../pages/Client/LoginClient';
import LoginSupplier from '../pages/Supplier/LoginSupplier';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login/client" element={<LoginClient />} />
            <Route path="login/supplier" element={<LoginSupplier />} />
            <Route path="create/client" element={<><h1>Create client</h1></>} />
            <Route path="create/supplier" element={<><h1>Create supplier</h1></>} />
            <Route path='/*' element={<UserRouter />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes