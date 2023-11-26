const bd = require('../utils/bd');
const {v4 : uuid} = require('uuid');

const listByDate = (count) => bd('users').select('*').orderBy('fechaIng','DESC').limit(count);
const nameById = (id) => bd('users').select('usuario','nombre','apellido').where({id}).limit(1);
const byId = (id) => bd('users').select('*').where({id}).limit(1);
const auth = (usuario,password) => bd('users').select('id','usuario','nombre','apellido','enabled').where({usuario,password,enabled:1});
const updateDate = (id) => bd('users').where({id}).update('fechaIng',bd.fn.now());
const register = async (obj) => {
    try{                       
        const [id]= await bd('users').insert(obj);
        return id;
    }catch(err){
        console.log(err);
    }
    
}

const update = (id,obj) => bd('users').where({id}).update(obj);
const verifyEmail = ({id=false,obj,confCorreo=false}) => bd('users').where({id}).orWhere({confCorreo}).update(obj);
const deleteUser = (id) => bd('users').where({id}).update('enabled','0');

module.exports = {listByDate,nameById,byId,auth,updateDate,register,update,verifyEmail,deleteUser};


