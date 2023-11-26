const express = require('express');
const router = express.Router();
const model= require("./../models/users");
const {validateRegister,validateUpdate}= require("./../middlewares/users");
const sha1 = require('sha1');






//const pool = require('../bd');




router.get('/',(req,res)=>{
    res.send('Respond with resource');
})

const listByDate = (req, res) => {
    model.listByDate(req.params.count).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));
    
}

const nameById = (req, res) => {
    model.nameById(req.params.id).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}

const byId = (req, res) => {
    
    model.byId(req.params.id).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}


  
const updateDate = (req, res) => {    
    model.updateDate(req.params.id).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}
  
const register = (req, res) => {
    req.body.password=sha1(req.body.password);      
    model.register(req.body).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}

const update = (req, res) => {
    if (req.body.password){
        req.body.password = sha1(req.body.password);
    }
    model.update(req.params.id,req.body).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}
  
const deleteUser = (req, res) => {        
    model.deleteUser(req.params.id).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}
  
const verifyEmail = (req, res) => {
    const datos = {
      confCorreo : req.params.uuid,
      obj : {enabled : true}
    }
    console.log(datos.confCorreo);
    model.verifyEmail(datos).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
  }
  
router.get('/verifyEmail/:uuid', verifyEmail);
router.get('/listByDate/:count', listByDate);
router.get('/nameById/:id', nameById);
router.get('/byId/:id', byId);
router.put('/updateDate/:id', updateDate);
router.post('/register',validateRegister, register);
router.put('/update/:id',validateUpdate, update);
router.put('/deleteUser/:id', deleteUser);

module.exports = router;




