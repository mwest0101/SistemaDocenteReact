const schemas = require('./schemas/messages.js');

const validateInsertMessage=(req,res,next)=>{    
    const {error,value} = schemas.insertMessage.validate(req.body);
    console.log(error,value);
    error ? res.status(422).json({message : error.details[0].message}) : next();
}

module.exports ={validateInsertMessage};