const nodemailer = require('nodemailer');
require('dotenv').config();

const send = async({to, subject, html}) => {
 
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
            tls : {
                rejectUnathorized: false, 
            }
        });
        const mail = {
            from: '<noreply>SistemaEscolar2021<noreply>', 
            to, 
            subject, 
            html, 
            
        }        
        const emailSrv = await transporter.sendMail(mail);
        return emailSrv.messageId;
        
    } catch (e) {
        console.log(e);
    }
}

module.exports = {send};