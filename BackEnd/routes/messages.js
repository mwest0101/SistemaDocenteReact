const express = require('express');
const router = express.Router();
const model= require("./../models/messages");
const {validateInsertMessage}= require("./../middlewares/messages");

const getMessages = (req, res) => {
    model.getMessages(req.params.amount).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));
    
}

const insertMessage = (req, res) => {        
    model.insertMessage(req.body).then((response)=>res.json(response)).catch((err)=>res.status(500).json(err));    
}

router.get('/getMessages/:amount', getMessages);
router.post('/insertMessage', validateInsertMessage,insertMessage);



module.exports = router;
