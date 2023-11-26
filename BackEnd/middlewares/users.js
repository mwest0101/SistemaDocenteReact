const schemas = require('./schemas/users.js');

const validateRegister=(req,res,next)=>{    
    const {error,value} = schemas.register.validate(req.body);
    console.log(error,value);
    error ? res.status(422).json({message : error.details[0].message}) : next();
}

const validateUpdate=(req,res,next)=>{    
    const obj = req.body;
    obj.id = req.params.id;    
    const {error,value} = schemas.update.validate(req.body);
    console.log(error,value);
    error ? res.status(422).json({message : error.details[0].message}) : next();
}
module.exports ={validateRegister,validateUpdate};