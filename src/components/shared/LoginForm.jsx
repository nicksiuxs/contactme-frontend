import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from "../../assets/contacme-logo.png"

import useForm from '../../customHooks/useForm';
import Input from './Input';
import Title from './Title';
import Button from './Button';

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
        <div className='flex flex-col justify-center items-center w-full border border-dashed h-fit px-3 py-5 rounded'>
            <img src={Logo} alt="Contact Me" className="w-14 mb-6" />
            <Title title={title} styles={"mb-10"} />
            <form onSubmit={onSubmit} className='w-full mb-7'>
                <Input placeholder={"Correo electrónico"} type="email" name="email" value={email} onChange={onInputChange} styles={"border mb-3"} />
                <Input placeholder={"Contraseña"} type="password" name="password" value={password} onChange={onInputChange} styles={"border"} />
                <p className='text-center mt-7 mb-7 text-indigo-600'>¿Olvidaste tu contraseña?</p>
                <Button label={"Iniciar sesión"} />
            </form>
            <hr className='w-full mb-7' />
            <Button label={"Crear cuenta nueva"} onClick={handleButton} />
        </div>
    )
}

export default LoginForm