
const bd = require('../utils/bd');

const getMessages = (amount) => bd('messages').join('users','users.id','messages.user_id').select('users.nombre','users.apellido','messages.message').orderBy('messages.date').limit(amount);
const insertMessage = (obj) => bd('messages').insert(obj);

module.exports = {getMessages,insertMessage};

