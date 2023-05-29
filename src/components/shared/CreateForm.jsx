import React from 'react';
import Logo from "../../assets/contacme-logo.png";
import useForm from '../../customHooks/useForm';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const CreateForm = ({ title, handleSubmit }) => {
    const { name, lastname, phone, birthdate, email, password, onInputChange } = useForm({ name: "", lastname: "", phone: "", birthdate: "", email: "", password: "" });
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        const newUser = { name, lastname, phone, birthdate, email, password };
        handleSubmit(newUser);
    }

    return (
        <div>
            <img src={Logo} alt="Contact Me" />
            <h1>{title}</h1>
            <form onSubmit={onSubmit}>
                <Input label={"Nombre"} name="name" value={name} onChange={onInputChange} styles={"border"} />
                <Input label={"Apellido"} name="lastname" value={lastname} onChange={onInputChange} styles={"border"} />
                <Input label={"Celular"} name="phone" value={phone} onChange={onInputChange} styles={"border"} />
                <Input label={"Fecha de nacimiento"} type="date" name="birthdate" value={birthdate} onChange={onInputChange} styles={"border"} />
                <Input label={"Correo electrónico"} type="email" name="email" value={email} onChange={onInputChange} styles={"border"} />
                <Input label={"Contraseña"} type="password" name="password" value={password} onChange={onInputChange} styles={"border"} />
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    )
}

export default CreateForm