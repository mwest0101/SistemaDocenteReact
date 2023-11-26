const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const sha1 = require('sha1');
const privateKey = fs.readFileSync('./keys/private.pem');
const signOptions = {algorithm: 'RS256',expiresIn:"1h"} // expira en una hora
const model = require('./../models/auth');
const createToken = (payload) => jwt.sign(payload,privateKey,signOptions);



const auth = async (req, res) => {
    try{
        let {usuario, password} = req.body;
        password=sha1(password);
        //console.log("Usuario:"+usuario+"Password:"+password)
        const [user] =  await model.auth(usuario,password);    
        console.log(user);
        if (!user) res.sendStatus(401);
        else if(!user.enabled) res.send("verifique su mail!!");
        else if(user.enabled) {
            const token = createToken({id: user.id});
            console.log(token);
            res.status(200).json({JWT : token, info: user});
        }
        
    }catch(e){
        console.log(e);
        res.status(500).json(e);
    }    
    
}

router.post('/', auth);

module.exports = router;
