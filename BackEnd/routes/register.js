const express = require('express');
const router = express.Router();
const model= require("../models/users");
const {validateRegister}= require("../middlewares/users");
const sha1 = require('sha1');
const {v4 : uuid} = require('uuid');
const { send } = require('../services/mail');
require('dotenv').config();


const register = async (req, res ) => {
    try{
        const {usuario,nombre,apellido,dni,condicion,password,email} = req.body;
        const newUser = {
            usuario,
            nombre,
            apellido,
            dni,
            condicion,        
            password:sha1(password),      
            confCorreo:uuid(),
            email
        }
        //console.log('<a href="http://'+process.env.SERVER+':'+process.env.PORT+'/users/verify/'+newUser.confCorreo+'" >Hace click aquí para completa la registración</a>');

        const modelNewUser=model.register(newUser);
        const mailinfo = {
            to: req.body.email,
            subject: 'Gracias por registrarte en Sistema Docente 2021',
            html: '<a href="http://'+process.env.SERVER+':'+process.env.PORT+'/users/verifyEmail/'+newUser.confCorreo+'" >Hace click aquí para completa la registración</a>'

        }
        const mensaje = await send(mailinfo);        
        res.json(newUser);
        
    }catch(err){
        console.error(err);
        res.status(500);
        
    }
}

router.post('/',validateRegister, register);
module.exports = router;
