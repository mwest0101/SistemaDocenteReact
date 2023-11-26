import React from 'react';
import useCustomForm from "./../../../utils/useCustomForm.js";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from "react";
import axios from "axios"; //npm i axios
import {useContext} from 'react';
import {AppContext} from '../../aplication/Provider';
import {useHistory} from 'react-router-dom';

//const StoreContext = createContext();


const schema = yup.object().shape({
    usuario: yup.string().required("usuario es obligatorio").min(3, "el usuario no puede ser mas corto que 3 caracteres").max(30, "el username no puede ser mas largo que 30 caracteres"),
    password: yup.string().required("password es obligatorio").min(3, "el password no puede ser mas corto que 3 caracteres").max(30, "el password no puede ser mas largo que 30 caracteres"),
})

const Login = () => {
    
    const baseURL = process.env.REACT_APP_API_URL

    const [values, handlerInput] = useCustomForm();
    //const [result, setResult] = useState();
    const [, setError] = useState(false);
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [,setState]=useContext(AppContext);
    const login = async() => {
        
        //useEffect(async () => {
            console.log(baseURL+`/auth`, values);
        try {       
           let user=await axios.post(baseURL+`/auth`, values);
            //console.log("***************");
            console.log(user.data.info);
            setState({user:user.data.info});
            
            
            history.push("/");
        } catch (error) {
            setError(true);
            setState({user:[]});
            console.log("Error de logeo "+error);
        }
    //}, [values]);

    }


    return (
        <>
            <div className="bg-light p-4 rounded">
                <div className="row justify-content-center align-items-center">
                    <form onSubmit={handleSubmit(login)}>
                        <div className="mb-3">
                            <label htmlFor="usuario" >Nombre de Usuario</label>
                            <input {...register("usuario")} type="text" className="form-control" id="usuario" placeholder="Nombre de usuario"  onChange={handlerInput} />
                             {errors.usuario ? <p className="text-danger">{errors.usuario.message}</p> : null}
                            </div>

                        <div className="mb-3">
                            <label htmlFor="password" >Password</label>
                            <input {...register("password")} type="password" className="form-control" id="password" placeholder="Password"  onChange={handlerInput} />
                            {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}
                        </div>

                        <div className="col-auto">
                            <button type="Submit" id="bt_login" className="btn btn-outline-primary">Acceder</button>
                        </div>
                    </form>
                    

                </div>
                <div className="d-flex justify-content-end mt-3">
                    <a href="register">Registrarse</a>
                </div>
            </div>
        </>
    );
}

export default Login;