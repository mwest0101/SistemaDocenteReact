import React from 'react';
import useCustomForm from "../../../utils/useCustomForm.js";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"; //npm i axios
import { useContext } from 'react';
import { AppContext } from '../../aplication/Provider';


const schema = yup.object().shape({
    message: yup.string().min(1, "el mensaje debe contener al menos un caracteres").max(200, "el mensaje no puede ser mas largo que 200 caracteres")
})

const Chat = () => {

    const baseURL = process.env.REACT_APP_API_URL
    const [, handlerInput] = useCustomForm();    
    const [resultMessage, setResultMessage] = useState([]);
    const [state,] = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    if(errors) console.log(errors);
    


    const getMessages = () => {
        console.log(baseURL+`/messages/getMessages/100`);
        axios.get(baseURL+`/messages/getMessages/100`)
            .then(response => {
                console.log("Mensaje leido");
                setResultMessage(response.data);
                
            }).catch(error => {
                
                console.log("Error de envio de mensaje+ " + error);
            });

    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            getMessages();
                
        }, 5000);
        return () => clearInterval(interval);
    });

    console.log("resultMessage");
    console.log(resultMessage);

    const listMessages = (resultMessage) => {
        
        return (
            <ul>
                {resultMessage.map((message) => (

                    <li className="nav-item">{message.nombre} {message.apellido} :{message.message}</li>
                ))}
            </ul>
        )
    }

    const sendMessage = async (data) => {
        const { message } = data;

        const messageWhitUserId = {
            message,
            user_id: state.user.id
        }
        await axios.post(baseURL+`/messages/insertMessage/`, messageWhitUserId)
            .then(response => {
                console.log("Mensaje enviado");

            }).catch(error => {
                
                console.log("Error de envio de mensaje+ " + error);
            });
            getMessages();

        
    }

    return (
        <>
            <div className="chatContent">
                <div className="chatDivIzq">
                    <div className="chatDivUpper bd-content ps-lg-4 border-end" id="comments" >Comments
                        {resultMessage ? listMessages(resultMessage) : 'Ningun mensaje'}
                    </div>
                    <div className="chatDivDown border" id="chatBox" >'

                        <form id="formMessage" name="formMessage" class="mb-10 row" method="POST" onSubmit={handleSubmit(sendMessage)} >
                            <div class="col">
                                <input {...register("message")} type="text" className="form-control" id="message" name="message" placeholder="Mensaje" onChange={handlerInput} />
                            </div>
                            <div class="col-auto">
                                <button type="submit" id="btSubmit" className="btn btn-primary mb-3">Enviar</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="chatDivDer border-bottom">
                    nombre
                </div>
            </div>
        </>
    );
}
export default Chat;