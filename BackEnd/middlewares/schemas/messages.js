const Joi = require('@hapi/joi');
const lang = require('../../lang/config.js');



const schemas = {
    insertMessage : Joi.object().keys({
        user_id:Joi.number().integer().required().messages(lang.messageId),
        message: Joi.string().min(1).max(400).required().messages(lang.message),        
    })


}

module.exports = schemas;