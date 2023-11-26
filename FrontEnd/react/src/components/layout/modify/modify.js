import React from 'react';
import useCustomForm from "../../../utils/useCustomForm.js";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from "react";
import axios from "axios"; //npm i axios
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../aplication/Provider';

const schema = yup.object().shape({
    usuario: yup.string().min(3, "el usuario no puede ser mas corto que 3 caracteres").max(30, "el usuario no puede ser mas largo que 30 caracteres"),
    nombre: yup.string().min(3, "el nombre no puede ser mas corto que 3 caracteres").max(30, "el nombre no puede ser mas largo que 30 caracteres"),
    apellido: yup.string().min(3, "el apellido no puede ser mas corto que 3 caracteres").max(30, "el apellido no puede ser mas largo que 30 caracteres"),
    dni: yup.string().min(3, "el dni no puede ser mas corto que 3 caracteres").max(30, "el dni no puede ser mas largo que 30 caracteres"),
    condicion: yup.string().min(1, "el condicion no puede ser mas corto que 3 caracteres").max(30, "el condicion no puede ser mas largo que 30 caracteres"),
    email: yup.string().email("no corresponde con formato del e-mail"),
    password: yup.string().min(3, "el password no puede ser mas corto que 3 caracteres").max(30, "el password no puede ser mas largo que 30 caracteres"),
    rPassword: yup.string().min(3, "la confiramción de password  no puede ser mas corto que 3 caracteres").max(30, "el password no puede ser mas largo que 30 caracteres")
})

const Modify = () => {
	const baseURL=process.env.REACT_APP_API_URL;
    const [, handlerInput] = useCustomForm();
    const [, setResult] = useState();
    //const [user, setUser] = useState();
    const [, setError] = useState(false);
    const history = useHistory();
    const [state,] = useContext(AppContext);

    const {
        usuario,
        nombre,
        apellido,
        dni,
        condicion,
        email
        } = state.user;

    const usuarioMostrar = {
        usuario,
        nombre,
        apellido,
        dni,
        condicion,
        email       
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: usuarioMostrar
    });
   

    const userModify = async (data) => {
        //console.log(values);
        const {
            usuario,
            nombre,
            apellido,
            dni,
            condicion,
            email,
            password } = data;

        const usuarioAgregar = {
            usuario,
            nombre,
            apellido,
            dni,
            condicion,
            email,
            password
        }
        console.log("DAta ->");
        console.log(data);

        //useEffect(() => {
            console.log("------------------------------------------------------");
            console.log(usuarioAgregar);
        try {
            

            console.log(baseURL+`/users/update/`+state.user.id, usuarioAgregar);
                         
            await axios.put(baseURL+`/users/update/`+state.user.id, usuarioAgregar)
            .then(response => {
                console.log("Usuario cargado desde la base");
                console.log(response);
                setResult(response.data);
                history.push("/");
            }).catch (error=>{
                console.log(error);
                console.log("Error de registracion " + error);
            });

                
            //console.log("--->");
            //console.log(result.data);
            
        } catch (error) {
            setError(true);
            

        }
        //}, [usuarioAgregar]);
    }
    //value={usuario}
    //register=state.user;
    //console.log(register);
    return (
        <>
            <section className="content_register">
                <div className="bg-light p-4 rounded" id="idDivForm_register">
                    <header className="shadow-sm p-3 mb-3 bg-white rounded" id="mainMenu_register">
                        <h2>Modificación</h2>
                    </header>
                    <section className="mainContent">
                        <form onSubmit={handleSubmit(userModify)} className="row g-3">
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Ususario</span>
                                <input {...register("usuario")} type ="text" className="form-control" placeholder="usuario" aria-label="usuario" name="usuario" id="usuario" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.usuario ? <p className="text-danger">{errors.usuario.message}</p> : null}
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Nombre</span>
                                <input {...register("nombre")} type="text" className="form-control" placeholder="nombre" aria-label="nombre" name="nombre" id="nombre" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.nombre ? <p className="text-danger">{errors.nombre.message}</p> : null}
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Apellido</span>
                                <input {...register("apellido")} type="text" className="form-control" placeholder="apellido" aria-label="apellido" name="apellido" id="apellido" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.apellido ? <p className="text-danger">{errors.apellido.message}</p> : null}
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Dni</span>
                                <input {...register("dni")} type="text" className="form-control" placeholder="dni" aria-label="dni" name="dni" id="dni" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.dni ? <p className="text-danger">{errors.dni.message}</p> : null}
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Condición</span>
                                <input {...register("condicion")} type="text" className="form-control" placeholder="condicion" aria-label="condicion" name="condicion" id="condicion" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.condicion ? <p className="text-danger">{errors.condicion.message}</p> : null}
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">E-mail</span>
                                <input {...register("email")} type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" name="email" id="email" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Password</span>
                                <input {...register("password")} type="password" className="form-control" placeholder="Password" aria-label="Password" name="password" id="password" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}
                            </div>

                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Reingrese Password</span>
                                <input {...register("rPassword")} type="password" className="form-control" placeholder="Reingrese Password" aria-label="rPassword" name="rPassword" id="rPassword" aria-describedby="basic-addon1" onChange={handlerInput} />
                                {errors.rPassword ? <p className="text-danger">{errors.rPassword.message}</p> : null}
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-success">Modificar</button>
                                <button type="button" className="btn btn-outline-primary"><Link to="/">Cancelar</Link></button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>);

}


export default Modify;