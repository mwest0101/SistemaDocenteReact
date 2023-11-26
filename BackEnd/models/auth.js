const bd = require('../utils/bd');

const auth = (usuario,password) => bd('users').select('*').where({usuario,password,enabled:1});

module.exports = {auth};


