import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from "../../assets/contacme-logo.png"

import useForm from '../../customHooks/useForm';
import Input from './Input';

const LoginForm = ({ title, route, handleSubmit }) => {
    const { email, password, onInputChange } = useForm({ email: "", password: "" });
    const navigate = useNavigate();

    const handleButton = () => {
        navigate(route);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(email, password);
    }

    return (
        <div>
            <img src={Logo} alt="Contact Me" />
            <h1>{title}</h1>
            <form onSubmit={onSubmit}>
                <Input placeholder={"Correo electrónico"} type="email" name="email" value={email} onChange={onInputChange} styles={"border"} />
                <Input placeholder={"Contraseña"} type="password" name="password" value={password} onChange={onInputChange} styles={"border"} />
                <button type="submit">Iniciar sesión</button>
            </form>
            <hr />
            <button onClick={handleButton}>Crea cuenta nueva</button>
        </div>
    )
}

export default LoginForm