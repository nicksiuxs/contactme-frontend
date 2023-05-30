import React from 'react';
import Logo from "../../assets/contacme-logo.png";
import useForm from '../../customHooks/useForm';
import Input from './Input';
import Title from './Title';
import Button from './Button';

const CreateForm = ({ title, handleSubmit }) => {
    const { name, lastname, phone, birthdate, email, password, onInputChange } = useForm({ name: "", lastname: "", phone: "", birthdate: "", email: "", password: "" });

    const onSubmit = (e) => {
        e.preventDefault()
        const newUser = { name, lastname, phone, birthdate, email, password };
        handleSubmit(newUser);
    }

    return (
        <div className='flex flex-col justify-center items-center w-full border border-dashed h-fit px-3 py-5 rounded'>
            <img src={Logo} alt="Contact Me" className="w-14 mb-6" />
            <Title title={title} styles={"mb-10"} />
            <form onSubmit={onSubmit} className='w-full mb-7'>
                <Input label={"Nombre"} name="name" value={name} onChange={onInputChange} styles={"mb-3"} />
                <Input label={"Apellido"} name="lastname" value={lastname} onChange={onInputChange} styles={"mb-3"} />
                <Input label={"Celular"} name="phone" value={phone} onChange={onInputChange} styles={"mb-3"} />
                <Input label={"Fecha de nacimiento"} type="date" name="birthdate" value={birthdate} onChange={onInputChange} styles={"mb-3"} />
                <Input label={"Correo electrónico"} type="email" name="email" value={email} onChange={onInputChange} styles={"mb-3"} />
                <Input label={"Contraseña"} type="password" name="password" value={password} onChange={onInputChange} styles={"mb-7"} />
                <Button label={"Crear cuenta nueva"} />
            </form>
        </div>
    )
}

export default CreateForm