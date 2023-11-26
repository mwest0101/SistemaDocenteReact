const fs = require('fs');
const publicKey = fs.readFileSync('./keys/public.pem', 'utf8');
const jwt = require('jsonwebtoken');


const logeado = (req, res,next) => {
    try {
       const {authorization} = req.headers;
       console.log(authorization);
       const obj = jwt.verify(authorization, publicKey);
       req.id = obj.id;
       next();

    }catch (e) {
        console.log(e);
        res.sendStatus(401);
    }
    
}

module.exports ={logeado};
