const Joi = require('@hapi/joi');
const lang = require('../../lang/config.js');



const schemas = {
    register : Joi.object().keys({
        usuario: Joi.string().min(3).max(40).required().messages(lang.message),
        nombre: Joi.string().min(3).max(40).required().messages(lang.message),
        apellido: Joi.string().min(3).max(40).required().messages(lang.message),
        dni: Joi.string().min(3).max(30).required().messages(lang.message),
        condicion: Joi.string().min(3).max(40).required().messages(lang.message),
        password: Joi.string().min(3).max(40).required().messages(lang.message),
        email: Joi.string().email({tlds:{allow:false}}).required().messages(lang.message)
    }),
    update : Joi.object().keys({
        id:Joi.number().integer().messages(lang.messageId),
        usuario: Joi.string().min(3).max(40).messages(lang.message),
        nombre: Joi.string().min(3).max(40).messages(lang.message),
        apellido: Joi.string().min(3).max(40).messages(lang.message),        
        dni: Joi.string().min(3).max(40).messages(lang.message),
        condicion: Joi.string().min(3).max(40).messages(lang.message),
        password: Joi.string().min(3).max(40).messages(lang.message),
        email: Joi.string().email({tlds:{allow:false}}).messages(lang.message)
    })

}
//console.log(lang.message);
module.exports = schemas;
